'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo/Brand animation */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          AM Marketing
        </motion.div>

        {/* Loading bars */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-8 rounded-full bg-gradient-to-t from-primary to-accent"
              animate={{ height: [20, 40, 20] }}
              transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-muted-foreground"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}
