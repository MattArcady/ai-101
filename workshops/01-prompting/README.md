# Tourplanner

Een klein React-appje om een reisroute samen te stellen: een lijst stops, een
zoekfilter, het aantal nachten per stop en een totaalprijs.

## Draaien

```sh
npm install
npm run dev       # open de URL die hij toont
```

## Tests

```sh
npm test
```

## Bouwen

```sh
npm run build     # output in dist/
npm run preview
```

## Structuur

```
src/
├── App.tsx                 # zoekveld, lijst en totaal
├── components/StopList.tsx # de lijst met stops
├── components/StopRow.tsx  # één regel
├── data/stops.json         # de stops
├── data/stops.ts           # types eromheen
└── hooks/useTotal.ts       # aantallen en totaalprijs
```
