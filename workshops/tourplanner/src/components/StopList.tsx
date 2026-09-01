import type { Stop } from '../data/stops'
import type { Quantities } from '../hooks/useTotal'
import { StopRow } from './StopRow'

type Props = {
  stops: Stop[]
  quantities: Quantities
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  favorieten: string[]
  onToggleFavoriet: (id: string) => void
}

export function StopList({
  stops,
  quantities,
  onQuantityChange,
  onRemove,
  favorieten,
  onToggleFavoriet,
}: Props) {
  if (stops.length === 0) {
    return <p className="empty">Geen stops gevonden.</p>
  }

  return (
    <ul className="stop-list">
      {stops.map((stop) => (
        <StopRow
          key={stop.id}
          stop={stop}
          quantity={quantities[stop.id] ?? 0}
          onQuantityChange={(quantity) => onQuantityChange(stop.id, quantity)}
          onRemove={() => onRemove(stop.id)}
          isFavoriet={favorieten.includes(stop.id)}
          onToggleFavoriet={() => onToggleFavoriet(stop.id)}
        />
      ))}
    </ul>
  )
}
