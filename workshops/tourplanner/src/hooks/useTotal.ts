import { useState } from 'react'
import type { Stop } from '../data/stops'

export type Quantities = Record<string, number>

export function useTotal(stops: Stop[]) {
  const [quantities, setQuantities] = useState<Quantities>({})

  const total = stops.reduce((sum, stop) => sum + stop.price * (quantities[stop.id] ?? 0), 0)

  function setQuantity(id: string, quantity: number) {
    const next = Math.max(0, quantity)
    setQuantities((current) => ({ ...current, [id]: next }))
  }

  return { quantities, total, setQuantity }
}
