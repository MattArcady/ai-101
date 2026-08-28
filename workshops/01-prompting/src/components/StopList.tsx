import type { Stop } from '../data/stops'
import type { Quantities } from '../hooks/useTotal'
import { StopRow } from './StopRow'

type Props = {
  stops: Stop[]
  quantities: Quantities
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (index: number) => void
}

export function StopList({ stops, quantities, onQuantityChange, onRemove }: Props) {
  if (stops.length === 0) {
    return <p className="empty">Geen stops gevonden.</p>
  }

  return (
    <ul className="stop-list">
      {stops.map((stop, index) => (
        <StopRow
          key={index}
          stop={stop}
          quantity={quantities[stop.id] ?? 0}
          onQuantityChange={(quantity) => onQuantityChange(stop.id, quantity)}
          onRemove={() => onRemove(index)}
        />
      ))}
    </ul>
  )
}
