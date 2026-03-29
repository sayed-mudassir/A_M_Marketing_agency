'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO',
    company: 'TechVentures',
    content: 'AM Marketing Co. transformed our entire digital presence. Their strategic approach to our marketing campaigns resulted in a 3x increase in qualified leads within just 3 months. Exceptional team!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Founder',
    company: 'StyleHub',
    content: 'The website they built for us is absolutely stunning. Our customers constantly compliment the design, and our conversion rate has doubled since launch. Worth every penny.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arun Kumar',
    role: 'Marketing Director',
    company: 'FinanceFirst',
    content: 'Their performance marketing expertise is unmatched. They reduced our cost per acquisition by 40% while scaling our campaigns. Truly data-driven results.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Meera Reddy',
    role: 'COO',
    company: 'HealthPlus',
    content: 'From branding to web development to SEO, AM Marketing delivered on every front. Our organic traffic is up 200% and we\'re ranking #1 for our target keywords.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Founder',
    company: 'EduTech Solutions',
    content: 'Professional, responsive, and results-oriented. They built our app from scratch and it\'s now used by over 50,000 students. Couldn\'t have done it without them.',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">What Our Clients</span>
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mt-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass mx-auto max-w-3xl rounded-3xl p-8 lg:p-12">
                    {/* Quote icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <Quote className="h-7 w-7 text-primary" />
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl leading-relaxed text-foreground lg:text-2xl">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="mt-6 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-chart-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <span className="text-lg font-bold text-primary-foreground">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-3 text-foreground transition-all duration-300 hover:bg-secondary/80 lg:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-3 text-foreground transition-all duration-300 hover:bg-secondary/80 lg:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-primary to-accent'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
