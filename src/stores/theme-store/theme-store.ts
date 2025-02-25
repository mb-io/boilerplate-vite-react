import { create } from 'zustand'

import { Theme } from '@/hooks/use-theme/use-theme'

interface ThemeState {
  theme: Theme
  updateTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark', // default theme
  updateTheme: (theme) => set({ theme })
}))

export default useThemeStore
