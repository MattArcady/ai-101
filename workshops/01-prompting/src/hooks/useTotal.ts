import { useState } from 'react'
import type { Stop } from '../data/stops'

export type Quantities = Record<string, number>

export function useTotal(stops: Stop[]) {
  const [quantities, setQuantities] = useState<Quantities>({})
  const [total, setTotal] = useState(0)

  function computeTotal(qs: Quantities) {
    return stops.reduce((sum, stop) => sum + stop.price * (qs[stop.id] ?? 0), 0)
  }

  function setQuantity(id: string, quantity: number) {
    const next = Math.max(0, quantity)
    setQuantities({ ...quantities, [id]: next })
    setTotal(computeTotal(quantities))
  }

  return { quantities, total, setQuantity }
}
