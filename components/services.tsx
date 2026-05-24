'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  TrendingUp,
  Share2,
  Users,
  Target,
  Search,
  Sparkles,
  PenTool,
  FileText,
  ArrowRight,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { ScrollAnimation } from './scroll-animation'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Custom software solutions built with cutting-edge technologies for scalable business growth.',
    category: 'Development',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Stunning, responsive websites that captivate users and drive conversions.',
    category: 'Development',
  },
  {
    icon: Smartphone,
    title: 'App Design (UI/UX)',
    description:
      'Intuitive mobile experiences designed for maximum user engagement and retention.',
    category: 'Design',
  },
  {
    icon: Palette,
    title: 'WordPress & Shopify',
    description:
      'Professional e-commerce and CMS solutions for seamless online presence.',
    category: 'Development',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description:
      'Data-driven campaigns that maximize ROI and accelerate business growth.',
    category: 'Marketing',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Strategic social presence that builds brand awareness and community.',
    category: 'Marketing',
  },
  {
    icon: Users,
    title: 'Social Media Handling',
    description:
      'Full-service social media management to keep your brand active and engaging.',
    category: 'Marketing',
  },
  {
    icon: Target,
    title: 'Paid Ads (Meta + Google)',
    description:
      'Precision-targeted advertising campaigns that reach your ideal customers.',
    category: 'Marketing',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Organic search optimization that drives sustainable traffic and visibility.',
    category: 'Marketing',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description:
      'Distinctive brand identities that resonate with your target audience.',
    category: 'Design',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Visual assets that communicate your brand story with impact.',
    category: 'Design',
  },
  {
    icon: FileText,
    title: 'Content Writing',
    description:
      'Compelling content that engages audiences and drives action.',
    category: 'Marketing',
  },
]

const categories = ['All', 'Development', 'Marketing', 'Design']

export function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        )

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation
          variant="fadeInUp"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">
              Everything You Need to
            </span>

            <br />

            <span className="gradient-text">
              Dominate Digital
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            From concept to execution, we deliver end-to-end digital
            solutions that transform your business and outpace the
            competition.
          </p>
        </ScrollAnimation>

        {/* Category Filters */}
        <ScrollAnimation
          variant="scaleIn"
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </ScrollAnimation>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredServices.map((service, idx) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === idx

            return (
              <motion.div
                key={`${activeCategory}-${service.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="glass-card will-change-transform group relative overflow-hidden rounded-2xl border border-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Learn More */}
                  <div
                    className={cn(
                      'mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-all duration-500',
                      isHovered
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-2 opacity-0'
                    )}
                  >
                    <span>Learn more</span>

                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <ScrollAnimation
          variant="fadeInUp"
          delay={0.3}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
          >
            <span>Start Your Project</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}