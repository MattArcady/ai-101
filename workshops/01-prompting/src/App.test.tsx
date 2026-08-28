import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { STOPS } from './data/stops'

describe('Tourplanner', () => {
  it('toont alle stops', () => {
    render(<App />)
    expect(screen.getAllByRole('listitem')).toHaveLength(STOPS.length)
  })

  it('filtert de lijst op de zoekterm', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Zoek stops'), 'porto')

    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.getByText('Porto')).toBeInTheDocument()
  })

  it('verwijdert een stop uit de lijst', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Verwijder Amsterdam'))

    expect(screen.queryByText('Amsterdam')).not.toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(STOPS.length - 1)
  })

  it('start met een totaal van € 0', () => {
    render(<App />)
    expect(screen.getByText('€ 0')).toBeInTheDocument()
  })
})
