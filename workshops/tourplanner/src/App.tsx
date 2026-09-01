import { useState } from 'react'
import { STOPS } from './data/stops'
import { StopList } from './components/StopList'
import { PriceFilter } from './components/PriceFilter'
import { useFavorieten } from './hooks/useFavorieten'
import { useTotal } from './hooks/useTotal'

export function App() {
  const [stops, setStops] = useState(STOPS)
  const [query, setQuery] = useState('')
  const [maxPrijs, setMaxPrijs] = useState('')
  const { favorieten, toggleFavoriet } = useFavorieten()
  const { quantities, total, setQuantity } = useTotal(stops)

  const gefilterd = stops.filter((stop) =>
    `${stop.name} ${stop.country}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  const visibleStops = gefilterd.filter((stop) => stop.price <= (Number(maxPrijs) || Infinity))

  const favorieteStops = stops.filter(
    (stop) =>
      favorieten.includes(stop.id) &&
      `${stop.name} ${stop.country}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  localStorage.setItem('favorieten', JSON.stringify(favorieten))

  function removeStop(id: string) {
    setStops(stops.filter((stop) => stop.id !== id))
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

      <PriceFilter maxPrijs={maxPrijs} onChange={setMaxPrijs} />

      <p className="count">
        {favorieteStops.length} favoriet ·{' '}
      </p>

      <p className="count">
        {gefilterd.length} van {stops.length} stops
      </p>

      <StopList
        stops={visibleStops}
        quantities={quantities}
        onQuantityChange={setQuantity}
        onRemove={removeStop}
        favorieten={favorieten}
        onToggleFavoriet={toggleFavoriet}
      />

      <footer className="totals">
        <span>Totaal</span>
        <strong>€ {total}</strong>
      </footer>
    </main>
  )
}
