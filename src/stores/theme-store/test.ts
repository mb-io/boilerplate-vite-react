import { describe, it, expect } from 'vitest'
import { useThemeStore } from './theme-store'

describe('useThemeStore', () => {
  it('should have a default theme of "dark"', () => {
    const { theme } = useThemeStore.getState()
    expect(theme).toBe('dark')
    expect({ theme }).toMatchSnapshot()
  })

  it('should update the theme', () => {
    const { updateTheme } = useThemeStore.getState()
    updateTheme('light')
    const { theme } = useThemeStore.getState()
    expect(theme).toBe('light')
    expect({ theme }).toMatchSnapshot()
  })
})
