'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Briefcase, FolderOpen, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Briefcase, label: 'Services', href: '#services' },
  { icon: FolderOpen, label: 'Portfolio', href: '#portfolio' },
  { icon: Phone, label: 'Contact', href: '#contact' },
]

export function MobileNav() {
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 20)

      // Determine active section
      const sections = ['Home',  'services', 'portfolio', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      {/* Gradient border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="glass border-t border-border px-4 py-2 pb-safe">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.href === '#' 
              ? activeSection === '' 
              : item.href === `#${activeSection}`

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300',
                  isActive && 'bg-primary/10'
                )}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-primary to-accent'
                      : 'bg-transparent'
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5 transition-colors duration-300',
                      isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                    )}
                  />
                </div>
                <span
                  className={cn(
                    'text-xs font-medium transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
