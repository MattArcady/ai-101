# Tourplanner

Een kleine React-app om een reisroute samen te stellen: een lijst stops, een
zoekfilter, het aantal nachten per stop en een totaalprijs. Dit is de
oefen-codebase voor de workshops.

## Draaien

```sh
npm install
npm run dev       # open de URL die hij toont
npm test
npm run build
```

## Structuur

```
src/
├── App.tsx                 # zoekveld, lijst en totaal
├── components/StopList.tsx # de lijst met stops
├── components/StopRow.tsx  # één regel
├── data/stops.json         # de stops die de app toont
├── data/stops.ts           # types eromheen
└── hooks/useTotal.ts       # aantallen en totaalprijs

tickets/                    # de ticketbacklog van dit project
public/tourdata.json        # bezetting per maand, prijshistorie, routes
tools/tour-mcp/server.mjs   # MCP-server over public/tourdata.json
.mcp.json.voorbeeld         # voorbeeldconfiguratie voor die server
.claude/skills/             # skeletten voor de skills uit de workshops
```

`public/tourdata.json` wordt door de app niet gebruikt — het is de "backoffice"
data waar de MCP-server over gaat.
