type Props = {
  maxPrijs: string
  onChange: (waarde: string) => void
}

export function PriceFilter({ maxPrijs, onChange }: Props) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ color: '#9a9a9a', fontSize: '0.85rem' }} htmlFor="maxprijs">
        Max. prijs per nacht
      </label>
      <input
        id="maxprijs"
        type="text"
        value={maxPrijs}
        onChange={(event) => onChange(event.target.value)}
        style={{
          width: '5rem',
          padding: '0.4rem 0.5rem',
          border: '1px solid #333',
          borderRadius: '4px',
          background: '#1f1f1f',
          color: '#fff',
        }}
      />
    </div>
  )
}
