import { useState } from 'react'
import { STOPS } from './data/stops'
import { StopList } from './components/StopList'
import { useTotal } from './hooks/useTotal'

export function App() {
  const [stops, setStops] = useState(STOPS)
  const [query, setQuery] = useState('')
  const { quantities, total, setQuantity } = useTotal(stops)

  const visibleStops = stops.filter((stop) =>
    `${stop.name} ${stop.country}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  function removeStop(index: number) {
    setStops(stops.filter((_, i) => i !== index))
  }

  return (
    <main className="app">
      <header>
        <h1>Tourplanner</h1>
        <p className="subtitle">Stel je route samen en zie wat het kost.</p>
      </header>

      <input
        className="search"
        type="search"
        placeholder="Zoek een stad of land…"
        aria-label="Zoek stops"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <StopList
        stops={visibleStops}
        quantities={quantities}
        onQuantityChange={setQuantity}
        onRemove={removeStop}
      />

      <footer className="totals">
        <span>Totaal</span>
        <strong>€ {total}</strong>
      </footer>
    </main>
  )
}
