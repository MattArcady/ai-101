import { useEffect, useState } from 'react'
import type { Stop } from '../data/stops'

type Props = {
  stop: Stop
  quantity: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
  isFavoriet: boolean
  onToggleFavoriet: () => void
}

export function StopRow({
  stop,
  quantity,
  onQuantityChange,
  onRemove,
  isFavoriet,
  onToggleFavoriet,
}: Props) {
  const [draft, setDraft] = useState(String(quantity))

  useEffect(() => {
    setDraft(String(quantity))
  }, [quantity])

  return (
    <li className="stop-row">
      <div className="stop-name">
        <strong>{stop.name}</strong>
        <span className="stop-country">{stop.country}</span>
      </div>
      <span className="stop-price">€ {stop.price}</span>
      <input
        className="stop-quantity"
        type="number"
        min={0}
        aria-label={`Aantal nachten in ${stop.name}`}
        value={draft}
        onFocus={(event) => event.target.select()}
        onWheel={(event) => event.currentTarget.blur()}
        onChange={(event) => {
          const next = event.target.value
          setDraft(next)
          if (next !== '') {
            const parsed = Number(next)
            if (Number.isFinite(parsed) && parsed >= 0) {
              onQuantityChange(parsed)
            }
          }
        }}
        onBlur={() => setDraft(String(quantity))}
      />
      <button
        className="stop-remove"
        type="button"
        aria-label={`Favoriet ${stop.name}`}
        onClick={onToggleFavoriet}
      >
        {isFavoriet ? '★' : '☆'}
      </button>
      <button
        className="stop-remove"
        type="button"
        aria-label={`Verwijder ${stop.name}`}
        onClick={onRemove}
      >
        🗑
      </button>
    </li>
  )
}
