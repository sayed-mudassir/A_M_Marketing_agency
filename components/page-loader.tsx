'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#f8fafc]"
      >
        {/* Soft Background Grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Gradient Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          {/* Tech Loader */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              className="absolute h-40 w-40 rounded-full border border-primary/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Second Ring */}
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-accent/20 border-dashed"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Orbit Dot */}
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
              </div>
            </motion.div>

            {/* Core */}
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-primary/10"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Logo */}
              <motion.div
                className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-black tracking-widest text-transparent"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                AM
              </motion.div>
            </motion.div>
          </div>

          {/* Branding */}
          <motion.div
            className="mt-12 text-center"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <h1 className="bg-gradient-to-r from-slate-900 via-primary to-accent bg-clip-text text-4xl font-black tracking-[0.2em] text-transparent md:text-5xl">
              AM MARKETING
            </h1>

            <motion.p
              className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Launching Digital Experience
            </motion.p>
          </motion.div>

          {/* Progress Line */}
          <div className="mt-10 w-[260px] overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-[5px] rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              initial={{
                x: '-100%',
              }}
              animate={{
                x: '100%',
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Tech Status */}
          <motion.div
            className="mt-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-emerald-500"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />

            <span className="text-xs font-medium tracking-[0.2em] text-slate-600">
              SYSTEM INITIALIZING
            </span>
          </motion.div>
        </div>

        {/* Floating Tech Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-primary/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.6, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}