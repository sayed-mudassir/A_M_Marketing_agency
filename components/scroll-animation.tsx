'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn'
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  variant = 'fadeInUp'
}: ScrollAnimationProps) {
  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    fadeInDown: {
      initial: { opacity: 0, y: -40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -40 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 40 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -15 },
      whileInView: { opacity: 1, rotate: 0 },
      transition: { duration: 0.6, delay }
    }
  }

  return (
    <motion.div
      initial={variants[variant].initial}
      whileInView={variants[variant].whileInView}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={variants[variant].transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
