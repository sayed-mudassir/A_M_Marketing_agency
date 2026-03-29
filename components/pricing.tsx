'use client'

import { useState } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const individualServices = [
  { name: 'Social Media Handling', price: '₹7,999', period: '/month' },
  { name: 'Performance Marketing', price: '₹17,999', period: '/month' },
  { name: 'Basic Website', price: '₹4,999 – ₹7,999', period: 'one-time' },
  { name: 'Standard Website', price: '₹8,999 – ₹14,999', period: 'one-time' },
  { name: 'E-commerce Website', price: '₹15,000 – ₹35,000', period: 'one-time' },
  { name: 'Graphic Design', price: '₹1,500', period: '/project' },
]

const packages = [
  {
    name: 'Basic',
    price: '₹23,000',
    period: '/month',
    description: 'Perfect for startups looking to establish their digital presence.',
    features: [
      'Social Media Handling (3 platforms)',
      'Basic SEO Optimization',
      '8 Posts per month',
      'Monthly Analytics Report',
      'Email Support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '₹30,000',
    period: '/month',
    description: 'Ideal for growing businesses ready to scale their marketing efforts.',
    features: [
      'Everything in Basic',
      'Performance Marketing',
      'Google Ads Management',
      '12 Posts per month',
      'Weekly Strategy Calls',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹38,000',
    period: '/month',
    description: 'For enterprises demanding comprehensive digital solutions.',
    features: [
      'Everything in Growth',
      'Full-service Marketing Suite',
      'Content Writing',
      'Video Content (2/month)',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Reporting Dashboard',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [showPackages, setShowPackages] = useState(true)

  return (
    <section id="pricing" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Pricing
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Transparent Pricing.</span>
            <br />
            <span className="gradient-text">No Hidden Fees.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose a package that fits your needs or pick individual services. 
            All prices are flexible based on your specific requirements.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="glass-card inline-flex rounded-full p-1">
            <button
              onClick={() => setShowPackages(true)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                showPackages
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Packages
            </button>
            <button
              onClick={() => setShowPackages(false)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300',
                !showPackages
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Individual Services
            </button>
          </div>
        </div>

        {/* Packages */}
        {showPackages && (
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  'relative rounded-3xl p-8 transition-all duration-500',
                  pkg.highlighted
                    ? 'glass glow-purple scale-105 lg:scale-110'
                    : 'glass-card hover:glow-blue'
                )}
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={cn(
                    'mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300',
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  )}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Individual Services */}
        {!showPackages && (
          <div className="mt-12 mx-auto max-w-3xl">
            <div className="glass rounded-3xl p-8">
              <div className="grid gap-4">
                {individualServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between rounded-xl bg-secondary/50 p-4 transition-all duration-300 hover:bg-secondary"
                  >
                    <span className="font-medium text-foreground">{service.name}</span>
                    <div className="text-right">
                      <span className="font-semibold text-foreground">{service.price}</span>
                      <span className="ml-1 text-sm text-muted-foreground">{service.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Need a custom solution? We&apos;ll create a tailored package just for you.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            All packages include a 7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
