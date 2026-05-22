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
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollAnimation } from './scroll-animation'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions built with cutting-edge technologies for scalable business growth.',
    category: 'Development',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Stunning, responsive websites that captivate users and drive conversions.',
    category: 'Development',
  },
  {
    icon: Smartphone,
    title: 'App Design (UI/UX)',
    description: 'Intuitive mobile experiences designed for maximum user engagement and retention.',
    category: 'Design',
  },
  {
    icon: Palette,
    title: 'WordPress & Shopify',
    description: 'Professional e-commerce and CMS solutions for seamless online presence.',
    category: 'Development',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize ROI and accelerate business growth.',
    category: 'Marketing',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic social presence that builds brand awareness and community.',
    category: 'Marketing',
  },
  {
    icon: Users,
    title: 'Social Media Handling',
    description: 'Full-service social media management to keep your brand active and engaging.',
    category: 'Marketing',
  },
  {
    icon: Target,
    title: 'Paid Ads (Meta + Google)',
    description: 'Precision-targeted advertising campaigns that reach your ideal customers.',
    category: 'Marketing',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Organic search optimization that drives sustainable traffic and visibility.',
    category: 'Marketing',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description: 'Distinctive brand identities that resonate with your target audience.',
    category: 'Design',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Visual assets that communicate your brand story with impact.',
    category: 'Design',
  },
  {
    icon: FileText,
    title: 'Content Writing',
    description: 'Compelling content that engages audiences and drives action.',
    category: 'Marketing',
  },
]

const categories = ['All', 'Development', 'Marketing', 'Design']

export function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory)

  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimation variant="fadeInUp" className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Everything You Need to</span>
            <br />
            <span className="gradient-text">Dominate Digital</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From concept to execution, we deliver end-to-end digital solutions 
            that transform your business and outpace the competition.
          </p>
        </ScrollAnimation>

        {/* Category filters */}
        <ScrollAnimation variant="scaleIn" className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </ScrollAnimation>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {filteredServices.map((service, idx) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === idx
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="glass-card group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div
                    className={cn(
                      'mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300',
                      isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    )}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <ScrollAnimation variant="fadeInUp" delay={0.4} className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}
