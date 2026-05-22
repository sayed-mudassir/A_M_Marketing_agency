'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  console.log('1');
  try {
    setIsSubmitting(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    console.log(data)

    if (data.success) {
      setIsSubmitted(true)

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  } catch (error) {
    console.error(error)
    alert('Something went wrong')
  } finally {
    setIsSubmitting(false)
  }
}

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 75250 06923',
      href: 'tel:+917525006923',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ammarketingco27@gmail.com',
      href: 'mailto:ammarketingco27@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'India',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="relative bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-1/3 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get In Touch
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Let&apos;s Start Your</span>
            <br />
            <span className="gradient-text">Digital Journey</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ready to transform your business? Get in touch with us today and let&apos;s discuss 
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-foreground">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="performance-marketing">Performance Marketing</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'group flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold transition-all duration-300',
                  isSubmitting
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="rounded-lg bg-primary/10 p-4 text-center text-sm text-primary">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            {/* Info cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass-card group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:glow-blue"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 group-hover:from-primary group-hover:to-accent">
                      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-lg font-semibold text-foreground">{info.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/917525006923"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-2xl p-6 transition-all duration-300 hover:glow-purple"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366]">
                    <MessageCircle className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">Chat on WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Get instant response</div>
                  </div>
                </div>
                <div className="rounded-full bg-[#25D366] p-3">
                  <Send className="h-5 w-5 text-primary-foreground" />
                </div>
              </a>
            </div>

            {/* Working hours */}
            <div className="glass-card mt-8 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-foreground">Working Hours</h4>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
