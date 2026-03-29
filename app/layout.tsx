import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AM Marketing Co. | Premium Digital Marketing & Software Development Agency',
  description: 'We build digital experiences that drive real growth. Premium software development, web design, performance marketing, and branding solutions for businesses worldwide.',
  keywords: ['digital marketing', 'software development', 'web design', 'app development', 'SEO', 'branding', 'performance marketing'],
  authors: [{ name: 'AM Marketing Co.' }],
  openGraph: {
    title: 'AM Marketing Co. | Premium Digital Marketing & Software Development Agency',
    description: 'We build digital experiences that drive real growth.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
