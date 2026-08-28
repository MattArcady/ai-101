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

  it('werkt het totaal direct bij na een wijziging', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    await user.clear(screen.getByLabelText('Aantal nachten in Amsterdam'))
    await user.type(screen.getByLabelText('Aantal nachten in Amsterdam'), '2')

    expect(container.querySelector('.totals strong')).toHaveTextContent('€ 240')
  })

  it('verwijdert de juiste stop terwijl er gefilterd wordt', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Zoek stops'), 'porto')
    await user.click(screen.getByLabelText('Verwijder Porto'))
    await user.clear(screen.getByLabelText('Zoek stops'))

    expect(screen.queryByText('Porto')).not.toBeInTheDocument()
    expect(screen.getByText('Amsterdam')).toBeInTheDocument()
  })

  it('start met een totaal van € 0', () => {
    render(<App />)
    expect(screen.getByText('€ 0', { selector: 'strong' })).toBeInTheDocument()
  })

  it('telt het totaal op voor het aantal nachten', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nights = screen.getByLabelText('Aantal nachten in Amsterdam')
    await user.clear(nights)
    await user.type(nights, '2')

    expect(screen.getByText('€ 240', { selector: 'strong' })).toBeInTheDocument()
  })
})
