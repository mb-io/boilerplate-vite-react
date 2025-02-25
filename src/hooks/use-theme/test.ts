import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme, ThemeProps } from './use-theme'
import { act, renderHook } from '@testing-library/react'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
  })

  it('should initialize with default dark theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe(ThemeProps.dark)
    expect(document.documentElement.classList.contains(ThemeProps.dark)).toBe(true)
    expect(result).toMatchSnapshot()
  })

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe(ThemeProps.light)
    expect(document.documentElement.classList.contains(ThemeProps.light)).toBe(true)
    expect(result).toMatchSnapshot()
  })

  it('should set light theme', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.setLightTheme()
    })
    expect(result.current.theme).toBe(ThemeProps.light)
    expect(document.documentElement.classList.contains(ThemeProps.light)).toBe(true)
    expect(result).toMatchSnapshot()
  })

  it('should set dark theme', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.setDarkTheme()
    })
    expect(result.current.theme).toBe(ThemeProps.dark)
    expect(document.documentElement.classList.contains(ThemeProps.dark)).toBe(true)
    expect(result).toMatchSnapshot()
  })
})
