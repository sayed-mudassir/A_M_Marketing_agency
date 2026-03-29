'use client'

import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.',
    fullDescription: 'Built a complete financial dashboard for a leading fintech startup, featuring real-time market data integration, predictive analytics, and an intuitive user interface that increased user engagement by 40%.',
    image: '/fintech.png',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce solution with advanced inventory management and seamless checkout experience.',
    fullDescription: 'Developed a high-performance e-commerce platform handling 10,000+ daily transactions with advanced inventory management, real-time analytics, and a 99.9% uptime guarantee.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Shopify', 'Node.js', 'PostgreSQL'],
    category: 'Development',
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    description: 'Patient management app with telemedicine features and secure health record access.',
    fullDescription: 'Created a HIPAA-compliant healthcare application enabling remote consultations, appointment scheduling, and secure access to medical records, serving over 50,000 patients.',
    image: '/projects/healthcare.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    category: 'App Development',
  },
  {
    id: 4,
    title: 'SaaS Marketing Suite',
    description: 'All-in-one marketing automation platform with email campaigns and analytics.',
    fullDescription: 'Built an enterprise marketing automation platform featuring email campaign management, A/B testing, customer journey mapping, and comprehensive analytics dashboard.',
    image: '/projects/saas.jpg',
    tags: ['React', 'Python', 'Django', 'Redis'],
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Property listing platform with virtual tours and AI-powered recommendations.',
    fullDescription: 'Developed a next-generation real estate platform with 3D virtual property tours, machine learning-based recommendations, and integrated mortgage calculators.',
    image: '/projects/realestate.jpg',
    tags: ['Next.js', 'Three.js', 'Spring Boot', 'PostgreSQL'],
    category: 'Development',
  },
  {
    id: 6,
    title: 'Brand Identity - TechStartup',
    description: 'Complete brand redesign including logo, visual identity, and brand guidelines.',
    fullDescription: 'Executed a comprehensive brand transformation including logo design, color palette, typography system, and 50-page brand guidelines document.',
    image: '/projects/branding.jpg',
    tags: ['Branding', 'UI/UX', 'Figma', 'Illustrator'],
    category: 'Branding',
  },
]

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Work
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Projects That Speak</span>
            <br />
            <span className="gradient-text">For Themselves</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A showcase of our finest work across development, design, and digital marketing.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className={cn(
                  'glass-card group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500',
                  isHovered && 'glow-purple scale-[1.02]'
                )}
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 transition-all duration-500',
                      isHovered && 'scale-110'
                    )}
                  />
                  <Image
                    src={project.image}
                    alt="AM Marketing Co Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-foreground/10">{project.id}</span>
                  </div>
                  
                  {/* Overlay */}
                  <div
                    className={cn(
                      'absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300',
                      isHovered ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <div className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image placeholder */}
            <div className="relative aspect-video overflow-hidden rounded-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-110"
                    priority
                  />
                <span className="text-7xl font-bold text-foreground/10">{selectedProject.id}</span>


              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">
                {selectedProject.category}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {selectedProject.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {selectedProject.fullDescription}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-center font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Start Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
