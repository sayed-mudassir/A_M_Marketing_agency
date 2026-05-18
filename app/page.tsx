import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { CaseStudies } from '@/components/case-studies'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <About />
      {/*<Pricing />*/}
      <Contact />
      <Footer />
      <MobileNav />
      <Analytics/>
    </main>
  )
}
