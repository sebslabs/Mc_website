import React from 'react'
import type { Metadata } from 'next'
import { news } from '@/lib/news-data'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Badge from '@/components/ui/Badge'
import { Calendar, ArrowRight, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Stay updated on what’s happening at Majestic City Colombo! Read about grand openings, celebrity visits, renovation milestones, and holiday events.'
}

export default function NewsPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Page Header */}
      <div>
        <SectionHeading
          label="The Latest From MC"
          title="NEWS & STORIES"
          subtitle="Stay tuned into our latest structural updates, retail openings, celebrity sightings, and major seasonal announcements."
          align="center"
        />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => {
          const pubDate = new Date(item.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })

          const shareText = `Hey! Look at this news story from Majestic City: "${item.title}" published on ${pubDate}! Let's check it out.`
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

          return (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/40 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImagePlaceholder gradient={item.imageGradient} aspectRatio="h-full" />
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="navy">{item.category}</Badge>
                </div>
              </div>

              {/* Content Card details */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-5 text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-brand-gold font-bold flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-brand-gold" /> {pubDate}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-navy leading-snug group-hover:text-brand-gold transition-colors mt-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed font-light">
                    {item.excerpt}
                  </p>
                </div>

                {/* Footer and Share link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-semibold">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </a>
                  <span className="text-brand-navy flex items-center gap-1 cursor-pointer group-hover:text-brand-gold transition-colors">
                    Read Story <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
