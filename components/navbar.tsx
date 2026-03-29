'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
          <Image
            src="/logo.jpeg"
            alt="AM Marketing Co Logo"
            fill
            className="object-contain rounded-lg"

            priority
          />
        </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Marketing Co.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Book a Call
          </Link>
          <Link
            href="#contact"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'glass absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 lg:hidden',
          isMobileMenuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
