'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    const themeOrder: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']
    const currentIndex = themeOrder.indexOf(theme)
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length]
    setTheme(nextTheme)
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <Sun className="h-5 w-5" />
      ) : theme === 'dark' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Monitor className="h-5 w-5" />
      )}
    </button>
  )
} 