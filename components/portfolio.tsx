'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollAnimation } from './scroll-animation'
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
    image: '/ecom.jpeg',
    tags: ['Next.js', 'Shopify', 'Node.js', 'PostgreSQL'],
    category: 'Development',
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    description: 'Patient management app with telemedicine features and secure health record access.',
    fullDescription: 'Created a HIPAA-compliant healthcare application enabling remote consultations, appointment scheduling, and secure access to medical records, serving over 50,000 patients.',
    image: '/healthcareapp2.jpeg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    category: 'App Development',
  },
  {
    id: 4,
    title: 'SaaS Marketing Suite',
    description: 'All-in-one marketing automation platform with email campaigns and analytics.',
    fullDescription: 'Built an enterprise marketing automation platform featuring email campaign management, A/B testing, customer journey mapping, and comprehensive analytics dashboard.',
    image: '/saas.png',
    tags: ['React', 'Python', 'Django', 'Redis'],
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Property listing platform with virtual tours and AI-powered recommendations.',
    fullDescription: 'Developed a next-generation real estate platform with 3D virtual property tours, machine learning-based recommendations, and integrated mortgage calculators.',
    image: '/realestate2.jpeg',
    tags: ['Next.js', 'Three.js', 'Spring Boot', 'PostgreSQL'],
    category: 'Development',
  },
  {
    id: 6,
    title: 'Brand Identity - TechStartup',
    description: 'Complete brand redesign including logo, visual identity, and brand guidelines.',
    fullDescription: 'Executed a comprehensive brand transformation including logo design, color palette, typography system, and 50-page brand guidelines document.',
    image: '/brand.jpeg',
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
        <ScrollAnimation variant="fadeInUp" className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Work
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Projects That Speak</span>
            <br />
            <span className="gradient-text">Volumes</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our recent work showcasing innovation and excellence.
          </p>
        </ScrollAnimation>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const isHovered = hoveredId === project.id
            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/20"
              >
                {/* Image placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                   <Image
                    src={project.image}
                    alt="AM Marketing Co Logo"
                    fill
                    className="object-contain scale-130 "
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/*<div className="text-5xl opacity-10">{project.id}</div>*/}
                  </div>
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                  >
                    <button className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </motion.div>
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
                      <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl bg-card"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute z-10 right-4 top-4 rounded-lg bg-secondary p-2 transition-colors hover:bg-foreground/20"
            >
              <X className="h-6 w-6" />
            </button>



            {/*<div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-7xl opacity-10">{selectedProject.id}</div>
            </div>
*/}
            {/* Image placeholder */}
            <div className="z-1 relative aspect-video overflow-hidden rounded-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-10 group-hover:brightness-110"
                    priority
                  />
                <span className="text-7xl font-bold text-foreground/10">{selectedProject.id}</span>


              </div>
            </div>

            <div className="p-8">
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                {selectedProject.category}
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {selectedProject.fullDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
