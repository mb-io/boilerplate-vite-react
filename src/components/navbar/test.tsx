import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from './navbar'

describe('Navbar Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('opens and closes the menu', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    const menuToggle = getByLabelText('Open menu')
    fireEvent.click(menuToggle)
    expect(getByLabelText('Close menu')).toBeTruthy()
    fireEvent.click(menuToggle)
    expect(getByLabelText('Open menu')).toBeTruthy()
  })

  it('navigates to the correct route on link click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    const homeLink = getByText('Home')
    fireEvent.click(homeLink)
    expect(window.location.pathname).toBe('/')
  })
})
