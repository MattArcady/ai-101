import type { Stop } from '../data/stops'

type Props = {
  stop: Stop
  quantity: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

export function StopRow({ stop, quantity, onQuantityChange, onRemove }: Props) {
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
        value={quantity}
        onChange={(event) => onQuantityChange(Number(event.target.value))}
      />
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
