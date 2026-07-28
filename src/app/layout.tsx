import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import KissFmPlayer from '@/components/layout/KissFmPlayer'
import './globals.css'



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Majestic City Colombo — Colombo\'s Everyday Destination',
    template: '%s | Majestic City Colombo'
  },
  description: 'Colombo’s most exciting everyday destination — where you shop, eat, catch a movie, and vibe to KISS FM, all without breaking the bank.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%231A1A2E%22/><text y=%2270%22 x=%2210%22 font-family=%22sans-serif%22 font-weight=%22900%22 font-size=%2260%22 fill=%22%23E8B84B%22>MC</text></svg>'
  },
  openGraph: {
    title: 'Majestic City Colombo — Colombo\'s Everyday Destination',
    description: 'Colombo’s most exciting everyday destination — where you shop, eat, catch a movie, and vibe to KISS FM, all without breaking the bank.',
    type: 'website',
    locale: 'en_LK',
    siteName: 'Majestic City Colombo'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

import CustomCursor from '@/components/ui/CustomCursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-white font-body text-brand-black antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <KissFmPlayer />
      </body>
    </html>
  )
}
