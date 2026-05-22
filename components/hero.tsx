'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePosition({ x, y })
    }

    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    return () => container?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow"
          style={{
            left: `${mousePosition.x * 60 + 10}%`,
            top: `${mousePosition.y * 40 + 10}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.8s ease-out, top 0.8s ease-out',
          }}
        />
        <div
          className="absolute h-[500px] w-[500px] rounded-full bg-accent/15 blur-[100px] animate-pulse-glow"
          style={{
            left: `${100 - mousePosition.x * 60}%`,
            top: `${100 - mousePosition.y * 40}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 1s ease-out, top 1s ease-out',
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orb 1 */}
        <div
          className="absolute h-20 w-20 rounded-full animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(167, 139, 250, 0.3))',
            boxShadow: '0 0 60px rgba(96, 165, 250, 0.2), inset 0 0 30px rgba(255,255,255,0.1)',
            left: '10%',
            top: '20%',
            transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        
        {/* Floating orb 2 */}
        <div
          className="absolute h-32 w-32 rounded-full animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(244, 114, 182, 0.2))',
            boxShadow: '0 0 80px rgba(167, 139, 250, 0.15), inset 0 0 40px rgba(255,255,255,0.05)',
            right: '15%',
            top: '30%',
            animationDelay: '2s',
            transform: `translate(${(mousePosition.x - 0.5) * -40}px, ${(mousePosition.y - 0.5) * -40}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Floating ring */}
        <div
          className="absolute h-40 w-40 rounded-full border border-primary/20 animate-float"
          style={{
            left: '75%',
            top: '60%',
            animationDelay: '1s',
            transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px) rotateX(${(mousePosition.y - 0.5) * 20}deg) rotateY(${(mousePosition.x - 0.5) * 20}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Geometric shape */}
        <div
          className="absolute h-24 w-24 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), transparent)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            left: '5%',
            bottom: '25%',
            animationDelay: '3s',
            transform: `translate(${(mousePosition.x - 0.5) * 25}px, ${(mousePosition.y - 0.5) * 25}px) rotate(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-32 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Now accepting new projects for 2026
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground">We Build Digital</span>
          <br />
          <span className="gradient-text">Experiences That Drive</span>
          <br />
          <span className="text-foreground">Real Growth</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-balance text-center text-lg text-muted-foreground sm:text-xl">
          A premium digital agency specializing in software development, stunning web experiences, 
          and high-converting marketing strategies that transform businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          
          <Link
            href="#portfolio"
            className="glass-card group inline-flex items-center gap-3 rounded-lg px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:bg-secondary/50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10">
              <Play className="h-4 w-4 fill-current" />
            </div>
            <span>View Our Work</span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col items-center gap-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['TechCorp', 'StartupX', 'FinanceHub', 'MediaPro', 'RetailMax'].map((company) => (
              <div key={company} className="text-xl font-bold tracking-tight text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="gradient-text text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-6 rounded-full border border-border p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
