#!/usr/bin/env node
// Tourdata MCP-server — stdio, geen dependencies.
// Ontsluit public/tourdata.json (bezetting, prijshistorie, routes) als tools.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(readFileSync(resolve(here, '../../public/tourdata.json'), 'utf8'))

const MAANDEN = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']

const vindStop = (naam) =>
  data.stops.find(
    (s) => s.id === naam.toLowerCase() || s.name.toLowerCase() === naam.toLowerCase(),
  ) ?? data.stops.find((s) => s.name.toLowerCase().includes(naam.toLowerCase()))

const TOOLS = [
  {
    name: 'zoek_stop',
    description:
      'Zoek een tourstop op naam of id. Geeft land, prijs per nacht, bezetting per maand en prijshistorie.',
    inputSchema: {
      type: 'object',
      properties: { naam: { type: 'string', description: 'Stadsnaam of id, bijv. "Oslo" of "osl"' } },
      required: ['naam'],
    },
    handler: ({ naam }) => {
      const stop = vindStop(String(naam))
      return stop ?? { fout: `Geen stop gevonden voor "${naam}"` }
    },
  },
  {
    name: 'bezetting',
    description:
      'Bezettingsgraad per maand. Zonder stad: alle stops in die maand boven de drempel, aflopend gesorteerd.',
    inputSchema: {
      type: 'object',
      properties: {
        maand: { type: 'string', description: `Een van: ${MAANDEN.join(', ')}` },
        stad: { type: 'string', description: 'Optioneel: één stad' },
        drempel: { type: 'number', description: 'Optioneel: minimale bezetting in procenten (standaard 0)' },
      },
      required: ['maand'],
    },
    handler: ({ maand, stad, drempel = 0 }) => {
      const m = String(maand).toLowerCase().slice(0, 3)
      if (!MAANDEN.includes(m)) return { fout: `Onbekende maand "${maand}". Gebruik: ${MAANDEN.join(', ')}` }
      if (stad) {
        const stop = vindStop(String(stad))
        if (!stop) return { fout: `Geen stop gevonden voor "${stad}"` }
        return { stop: stop.name, maand: m, bezetting: stop.bezetting[m] }
      }
      return {
        maand: m,
        drempel,
        resultaten: data.stops
          .map((s) => ({ stop: s.name, land: s.country, bezetting: s.bezetting[m], prijs: s.price }))
          .filter((r) => r.bezetting >= drempel)
          .sort((a, b) => b.bezetting - a.bezetting),
      }
    },
  },
  {
    name: 'prijshistorie',
    description: 'Prijs per nacht over de jaren heen voor één stop.',
    inputSchema: {
      type: 'object',
      properties: { stad: { type: 'string' } },
      required: ['stad'],
    },
    handler: ({ stad }) => {
      const stop = vindStop(String(stad))
      if (!stop) return { fout: `Geen stop gevonden voor "${stad}"` }
      return { stop: stop.name, historie: stop.prijshistorie }
    },
  },
  {
    name: 'routes',
    description: 'De vaste routes. Met "stop" erbij: alleen de routes waar die stop in zit.',
    inputSchema: {
      type: 'object',
      properties: { stop: { type: 'string', description: 'Optioneel: filter op stad of id' } },
    },
    handler: ({ stop }) => {
      if (!stop) return { routes: data.routes }
      const gevonden = vindStop(String(stop))
      if (!gevonden) return { fout: `Geen stop gevonden voor "${stop}"` }
      return {
        stop: gevonden.name,
        routes: data.routes.filter((r) => r.stops.includes(gevonden.id)),
      }
    },
  },
]

function afhandelen(request) {
  const { id, method, params } = request

  if (method === 'initialize') {
    return {
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: { name: 'tourdata', version: '1.0.0' },
    }
  }

  if (method === 'tools/list') {
    return { tools: TOOLS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) }
  }

  if (method === 'tools/call') {
    const tool = TOOLS.find((t) => t.name === params?.name)
    if (!tool) throw new Error(`Onbekende tool: ${params?.name}`)
    const resultaat = tool.handler(params.arguments ?? {})
    return { content: [{ type: 'text', text: JSON.stringify(resultaat, null, 2) }] }
  }

  if (method === 'ping') return {}

  throw new Error(`Onbekende methode: ${method}`)
}

let buffer = ''
process.stdin.setEncoding('utf8')
process.stdin.on('data', (chunk) => {
  buffer += chunk
  let grens
  while ((grens = buffer.indexOf('\n')) !== -1) {
    const regel = buffer.slice(0, grens).trim()
    buffer = buffer.slice(grens + 1)
    if (!regel) continue

    let request
    try {
      request = JSON.parse(regel)
    } catch {
      continue
    }
    if (request.id === undefined) continue // notificatie: geen antwoord

    try {
      const result = afhandelen(request)
      process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: request.id, result }) + '\n')
    } catch (error) {
      process.stdout.write(
        JSON.stringify({ jsonrpc: '2.0', id: request.id, error: { code: -32603, message: error.message } }) + '\n',
      )
    }
  }
})
