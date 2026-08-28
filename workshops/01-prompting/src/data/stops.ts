export type Stop = {
  id: string
  name: string
  country: string
  price: number
}

export const STOPS: Stop[] = [
  { id: 'ams', name: 'Amsterdam', country: 'Nederland', price: 120 },
  { id: 'bru', name: 'Brussel', country: 'België', price: 95 },
  { id: 'osl', name: 'Oslo', country: 'Noorwegen', price: 240 },
  { id: 'rom', name: 'Rome', country: 'Italië', price: 180 },
  { id: 'por', name: 'Porto', country: 'Portugal', price: 160 },
  { id: 'bud', name: 'Boedapest', country: 'Hongarije', price: 140 },
  { id: 'cph', name: 'Kopenhagen', country: 'Denemarken', price: 210 },
  { id: 'vie', name: 'Wenen', country: 'Oostenrijk', price: 175 },
]
