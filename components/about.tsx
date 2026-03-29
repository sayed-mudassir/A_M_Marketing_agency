'use client'

import { Target, Zap, Shield, Users, Award, Clock } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Result-Driven',
    description: 'Every strategy we implement is focused on delivering measurable outcomes and real business impact.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We respect your time. Our agile processes ensure rapid delivery without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Transparent Communication',
    description: 'No hidden agendas. Regular updates, honest feedback, and clear expectations at every step.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support from our team of experts who truly care about your success.',
  },
]

const stats = [
  { icon: Award, value: '150+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Clock, value: '5+', label: 'Years Experience' },
  { icon: Target, value: '98%', label: 'Success Rate' },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-foreground">We&apos;re Not Just an Agency.</span>
              <br />
              <span className="gradient-text">We&apos;re Your Growth Partner.</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                AM Marketing Co. is a premium digital agency specializing in software development, 
                web design, and performance marketing. We combine technical excellence with creative 
                innovation to deliver solutions that drive real business results.
              </p>
              <p>
                Our mission is simple: to help businesses of all sizes harness the power of digital 
                to achieve unprecedented growth. We don&apos;t just build websites or run ads – we create 
                comprehensive digital ecosystems that convert visitors into loyal customers.
              </p>
              <p>
                With a team of seasoned developers, designers, and marketers, we bring together 
                diverse expertise under one roof. This integrated approach ensures seamless execution 
                and consistent results across all your digital touchpoints.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column - Values */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Why Choose Us?</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:glow-blue"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 group-hover:from-primary group-hover:to-accent">
                      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Additional trust elements */}
            <div className="glass-card mt-8 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-foreground">Our Commitment</h4>
              <ul className="mt-4 space-y-3">
                {[
                  'No long-term contracts – flexibility first',
                  'Dedicated project manager for every client',
                  'Weekly progress reports and calls',
                  'Post-project support included',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
