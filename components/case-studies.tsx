'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const caseStudies = [
  {
    id: 1,
    client: 'TechStartup Inc.',
    industry: 'SaaS',
    problem: 'Struggling with low conversion rates and high customer acquisition costs in a competitive market.',
    strategy: 'Implemented a full-funnel marketing strategy with optimized landing pages, targeted paid campaigns, and automated email sequences.',
    execution: 'Redesigned the entire user journey, created A/B tested ad creatives, and deployed personalized retargeting campaigns.',
    results: [
      { icon: TrendingUp, value: '340%', label: 'ROI Increase' },
      { icon: Users, value: '2.5x', label: 'Lead Generation' },
      { icon: DollarSign, value: '-45%', label: 'CAC Reduction' },
      { icon: BarChart3, value: '+89%', label: 'Conversion Rate' },
    ],
    duration: '3 months',
  },
  {
    id: 2,
    client: 'RetailMax',
    industry: 'E-Commerce',
    problem: 'Outdated website with poor mobile experience leading to high bounce rates and cart abandonment.',
    strategy: 'Complete website redesign with focus on mobile-first UX, streamlined checkout, and performance optimization.',
    execution: 'Built a headless e-commerce platform with Next.js, implemented one-click checkout, and optimized for Core Web Vitals.',
    results: [
      { icon: TrendingUp, value: '185%', label: 'Revenue Growth' },
      { icon: Users, value: '-62%', label: 'Bounce Rate' },
      { icon: DollarSign, value: '+78%', label: 'AOV Increase' },
      { icon: BarChart3, value: '3.2s', label: 'Load Time' },
    ],
    duration: '4 months',
  },
  {
    id: 3,
    client: 'HealthCare Plus',
    industry: 'Healthcare',
    problem: 'Minimal online presence with no digital patient acquisition strategy in place.',
    strategy: 'Comprehensive digital transformation including website, SEO, and targeted local advertising campaigns.',
    execution: 'Developed HIPAA-compliant booking system, local SEO optimization, and Google Ads campaigns targeting specific demographics.',
    results: [
      { icon: TrendingUp, value: '420%', label: 'Organic Traffic' },
      { icon: Users, value: '+156', label: 'Monthly Leads' },
      { icon: DollarSign, value: '12x', label: 'ROAS' },
      { icon: BarChart3, value: '#1', label: 'Local Rankings' },
    ],
    duration: '6 months',
  },
]

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0)

  return (
    <section id="case-studies" className="relative bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Case Studies
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Real Results for</span>
            <br />
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            See how we&apos;ve helped companies transform their digital presence and achieve measurable growth.
          </p>
        </div>

        {/* Case study tabs */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(index)}
              className={cn(
                'rounded-full px-6 py-3 text-sm font-medium transition-all duration-300',
                activeStudy === index
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              )}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Active case study */}
        <div className="mt-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={cn(
                'transition-all duration-500',
                activeStudy === index
                  ? 'opacity-100 translate-y-0'
                  : 'hidden opacity-0 translate-y-4'
              )}
            >
              <div className="glass rounded-3xl p-8 lg:p-12">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{study.client}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{study.industry} • {study.duration}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Success Story
                  </div>
                </div>

                {/* Process */}
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  {/* Problem */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive">
                      <span className="h-2 w-2 rounded-full bg-destructive" />
                      Problem
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{study.problem}</p>
                  </div>

                  {/* Strategy */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-chart-3/10 px-3 py-1.5 text-sm font-medium text-chart-3">
                      <span className="h-2 w-2 rounded-full bg-chart-3" />
                      Strategy
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{study.strategy}</p>
                  </div>

                  {/* Execution */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Execution
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{study.execution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-12">
                  <h4 className="mb-6 text-center text-lg font-semibold text-foreground">
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {study.results.map((result, idx) => {
                      const Icon = result.icon
                      return (
                        <div
                          key={idx}
                          className="glass-card group rounded-2xl p-6 text-center transition-all duration-300 hover:glow-blue"
                        >
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="gradient-text text-3xl font-bold">{result.value}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span>Become Our Next Success Story</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
