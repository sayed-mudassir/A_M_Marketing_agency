import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'App Development', href: '#services' },
    { label: 'Performance Marketing', href: '#services' },
    { label: 'Social Media Marketing', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'Branding', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary/50 pt-20 pb-8">
      {/* Top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <div className="relative h-10 w-12 overflow-hidden rounded-lg">
                  <Image
                    src="/logo.jpeg"
                    alt="AM Marketing Co Logo"
                    fill

                    className="object-contain rounded-lg border-border scale-100"

                    priority
                  />
              </div>              
      </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Marketing Co.
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium digital agency delivering exceptional software, design, and marketing 
              solutions that drive real business growth.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Services
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Newsletter */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Newsletter
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get the latest updates and tips.
                </p>
                <form className="mt-3 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AM Marketing Co. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion in India
          </p>
        </div>
      </div>
    </footer>
  )
}
