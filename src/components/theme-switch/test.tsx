import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeSwitch } from './theme-switch'

// Mock the useTheme hook
const toggleThemeMock = vi.fn()
vi.mock('@/hooks/use-theme/use-theme', () => ({
  useTheme: () => ({
    theme: 'light', // default theme for testing
    toggleTheme: toggleThemeMock
  })
}))

describe('ThemeSwitch Component', () => {
  it('renders correctly', () => {
    const { container } = render(<ThemeSwitch />)
    expect(container).toMatchSnapshot()
  })

  it('toggles theme on click', () => {
    const { getByLabelText } = render(<ThemeSwitch />)
    const switchButton = getByLabelText('Switch to dark mode')
    fireEvent.click(switchButton)
    expect(toggleThemeMock).toHaveBeenCalled()
  })
})
