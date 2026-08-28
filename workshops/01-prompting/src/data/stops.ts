export type Stop = {
  id: string
  name: string
  country: string
  price: number
}

import data from './stops.json'

export const STOPS: Stop[] = data
