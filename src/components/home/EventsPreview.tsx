'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { events } from '@/lib/events-data'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'

export const EventsPreview: React.FC = () => {
  // Take first 8 events for scrolling
  const previewEvents = events.slice(0, 8)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8)
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center w-full mb-10">
          <SectionHeading
            label="What’s On At MC"
            title="UPCOMING EVENTS"
            subtitle="Don’t miss out! From live concerts to food festivals and holiday fun."
            align="center"
          />
        </div>

        {/* Symmetric Navigation Bar */}
        <div className="flex flex-row items-center justify-between w-full mb-8">
          <Link
            href="/events"
            className="flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-5 py-2.5 rounded-none font-bold text-xs tracking-widest uppercase transition-all shadow-sm"
          >
            View All Events <ArrowRight className="w-4 h-4" />
          </Link>
          
          {/* Universal Navigation Arrows (Right Anchored) */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-brand-border text-brand-black hover:bg-brand-black hover:text-white flex items-center justify-center rounded-none transition-all active:scale-95 shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-brand-border text-brand-black hover:bg-brand-black hover:text-white flex items-center justify-center rounded-none transition-all active:scale-95 shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar"
        >
          {previewEvents.map((ev, idx) => {
            const eventDate = new Date(ev.date)
            const dayNum = eventDate.getDate()
            const monthStr = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()
            const eventImages: Record<string, string> = {
              'event-1': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
              'event-2': 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=600&q=80',
              'event-3': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
              'event-4': 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
              'event-5': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
              'event-6': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
              'event-7': 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80',
              'event-8': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
            }
            
            // Fallback image if not in dict
            const imgUrl = eventImages[ev.id] || eventImages[`event-${(idx % 8) + 1}`]

            return (
              <div
                key={ev.id}
                className="group relative bg-white rounded-none overflow-hidden shadow-md border border-brand-border flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(255,59,48,0.1)] hover:-translate-y-2 transition-all duration-300 w-[calc(100vw-2.5rem)] sm:w-[280px] lg:w-[300px] shrink-0 snap-center"
              >
                {/* Image Placeholder with Gradient */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-none">
                  <ImagePlaceholder gradient={ev.imageGradient} imageUrl={imgUrl} aspectRatio="h-full" rounded="rounded-none" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-brand-red text-white flex flex-col items-center justify-center rounded-none w-14 h-14 shadow-lg select-none">
                    <span className="font-display font-black text-xl leading-none">{dayNum}</span>
                    <span className="font-body font-bold text-[10px] tracking-wider uppercase mt-0.5">{monthStr}</span>
                  </div>

                  {/* Hover Overlay with Content */}
                  <div className="absolute inset-0 bg-brand-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-white">
                    <h3 className="font-display font-extrabold text-lg md:text-xl leading-snug line-clamp-1 mb-2 text-white">
                      {ev.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-4">
                      {ev.description}
                    </p>
                    
                    <div className="flex flex-col gap-2 pt-4 border-t border-white/20 text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-brand-red" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-red" />
                        <span className="truncate">{ev.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default EventsPreview
