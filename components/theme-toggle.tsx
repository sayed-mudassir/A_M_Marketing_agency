'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-all"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300',
        'bg-secondary/50 hover:bg-secondary',
        'text-muted-foreground hover:text-foreground'
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun className={cn(
        'h-4 w-4 transition-all duration-300',
        theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      )} />
      <Moon className={cn(
        'absolute h-4 w-4 transition-all duration-300',
        theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
      )} />
    </button>
  )
}
