import { useState } from 'react'

export function useFavorieten() {
  const [favorieten, setFavorieten] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('favorieten') || '[]')
    } catch (e) {}
    return []
  })

  function toggleFavoriet(id: string) {
    const next = favorieten.includes(id)
      ? favorieten.filter((f) => f !== id)
      : [...favorieten, id]
    setFavorieten(next)
  }

  return { favorieten, toggleFavoriet, setFavorieten }
}
