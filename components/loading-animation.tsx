'use client'

import { motion } from 'framer-motion'

interface LoadingAnimationProps {
  type?: 'pulse' | 'shimmer' | 'dots' | 'bars' | 'spin'
  size?: 'small' | 'medium' | 'large'
}

export function LoadingAnimation({ type = 'dots', size = 'medium' } : LoadingAnimationProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  if (type === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-2 ${sizeClasses[size]}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'bars') {
    return (
      <div className={`flex items-center justify-center gap-1 ${sizeClasses[size]}`}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex-1 bg-primary rounded-sm"
            animate={{ height: ['20%', '100%', '20%'] }}
            transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'spin') {
    return (
      <motion.div
        className={`rounded-full border-4 border-primary border-t-accent ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    )
  }

  if (type === 'pulse') {
    return (
      <motion.div
        className={`rounded-full bg-primary ${sizeClasses[size]}`}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  return (
    <motion.div
      className={`rounded-full bg-gradient-to-r from-primary to-accent ${sizeClasses[size]}`}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  )
}
