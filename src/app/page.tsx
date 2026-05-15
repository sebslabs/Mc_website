import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AnnouncementTicker from '@/components/home/AnnouncementTicker'
import FeaturedGrid from '@/components/home/FeaturedGrid'
import NowShowingStrip from '@/components/home/NowShowingStrip'
// import KissFmFeature from '@/components/home/KissFmFeature'
import EventsPreview from '@/components/home/EventsPreview'
import NewTenantsShowcase from '@/components/home/NewTenantsShowcase'
import VisitorInfoBar from '@/components/home/VisitorInfoBar'
import InstagramStrip from '@/components/home/InstagramStrip'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full -mt-24 md:-mt-28 overflow-hidden">
      {/* 1. Hero Landing */}
      <HeroSection />

      {/* 2. Infinite Marquee Announcement Ticker */}
      <AnnouncementTicker />

      {/* 3. Featured 4-Column Service Grid */}
      <RevealOnScroll>
        <FeaturedGrid />
      </RevealOnScroll>

      {/* 4. Cineplex Horizontal Scroll Snap Strip */}
      <RevealOnScroll>
        <NowShowingStrip />
      </RevealOnScroll>

      {/* 5. Visitor Information Quick Bar */}
      <RevealOnScroll>
        <VisitorInfoBar />
      </RevealOnScroll>

      {/* 6. KISS FM Live glass studio integration */}
      

      {/* 7. Brands & Tenants Collection */}
      <RevealOnScroll>
        <NewTenantsShowcase />
      </RevealOnScroll>

      {/* 8. Upcoming Relative Events Preview */}
      <RevealOnScroll>
        <EventsPreview />
      </RevealOnScroll>

      {/* 9. Social Instagram Visual Strip */}
      <RevealOnScroll>
        <InstagramStrip />
      </RevealOnScroll>

      {/* 10. Interactive Newsletter Subscription */}
      <RevealOnScroll>
        <NewsletterSignup />
      </RevealOnScroll>
    </div>
  )
}
