import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
import { events } from '@/lib/events-data'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'

export const EventsPreview: React.FC = () => {
  // Take first 3 events
  const previewEvents = events.slice(0, 3)

  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border w-full">
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
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewEvents.map((ev) => {
            const eventDate = new Date(ev.date)
            const dayNum = eventDate.getDate()
            const monthStr = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()
            const eventImages: Record<string, string> = {
              'event-1': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
              'event-2': 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=600&q=80',
              'event-3': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80'
            }

            return (
              <div
                key={ev.id}
                className="group relative bg-white rounded-none overflow-hidden shadow-md border border-brand-border flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(255,59,48,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Placeholder with Gradient */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-none">
                  <ImagePlaceholder gradient={ev.imageGradient} imageUrl={eventImages[ev.id]} aspectRatio="h-full" rounded="rounded-none" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-brand-red text-white flex flex-col items-center justify-center rounded-none w-14 h-14 shadow-lg select-none">
                    <span className="font-display font-black text-xl leading-none">{dayNum}</span>
                    <span className="font-body font-bold text-[10px] tracking-wider uppercase mt-0.5">{monthStr}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="surface" className="rounded-none">{ev.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4 text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-brand-black leading-snug line-clamp-1 group-hover:text-brand-red transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
                      {ev.description}
                    </p>
                  </div>

                  {/* Details Row */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-brand-border text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default EventsPreview
