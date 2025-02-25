import { useEffect, useMemo, useState } from 'react'

import { useThemeStore } from '@/stores/theme-store/theme-store'

export const ThemeProps = {
  key: 'theme',
  light: 'light',
  dark: 'dark'
} as const

export type Theme = typeof ThemeProps.light | typeof ThemeProps.dark

export const useTheme = (defaultTheme?: Theme) => {
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null

    return storedTheme ?? defaultTheme ?? ThemeProps.dark
  })

  const isDark = useMemo(() => {
    return theme === ThemeProps.dark
  }, [theme])

  const isLight = useMemo(() => {
    return theme === ThemeProps.light
  }, [theme])

  const _setTheme = (nextTheme: Theme) => {
    localStorage.setItem(ThemeProps.key, nextTheme)
    document.documentElement.classList.remove(ThemeProps.light, ThemeProps.dark)
    document.documentElement.classList.add(nextTheme)
    setTheme(nextTheme)
  }

  const setLightTheme = () => _setTheme(ThemeProps.light)

  const setDarkTheme = () => _setTheme(ThemeProps.dark)

  const toggleTheme = () => {
    if (theme === ThemeProps.dark) {
      setLightTheme()
      updateTheme(ThemeProps.light)
    } else {
      setDarkTheme()
      updateTheme(ThemeProps.dark)
    }
  }

  useEffect(() => {
    _setTheme(theme)
    if (!isMounted) updateTheme(theme)
    setIsMounted(true)
  }, [theme, isMounted, updateTheme])

  return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme }
}

export default useTheme
