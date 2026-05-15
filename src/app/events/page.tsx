import React from 'react'
import type { Metadata } from 'next'
import { events } from '@/lib/events-data'
import SectionHeading from '@/components/ui/SectionHeading'
import FeaturedEvent from '@/components/events/FeaturedEvent'
import EventFilters from '@/components/events/EventFilters'

export const metadata: Metadata = {
  title: 'Events & Happenings',
  description: 'Never miss a beat! Keep up with Colombo\'s most exciting live concerts, seasonal festivals, kids workshops, DJ nights, and radio broadcasts at Majestic City Colombo.'
}

export default function EventsPage() {
  // Find featured event
  const featured = events.find((ev) => ev.isFeatured) || events[0]

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="What’s On This Week"
            title="EVENTS & HAPPENINGS"
            subtitle="Explore the high-energy entertainment calendar of Majestic City, hosting Colombo's favorite weekend live sessions, seasonal holiday carnivals, and live radio broadcasting."
            align="center"
          />
        </div>

        {/* Featured Event Banner */}
        {featured && (
          <div className="flex flex-col gap-4 text-left">
            <span className="text-[10px] text-brand-red font-black uppercase tracking-[0.2em] pl-1">
              HIGHLIGHTED EVENT
            </span>
            <FeaturedEvent event={featured} />
          </div>
        )}

        {/* Regular Schedule and Filters */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-brand-border pb-4 text-left">
            <h4 className="font-display font-black text-xl text-brand-black uppercase tracking-widest">
              ALL EVENTS SCHEDULE
            </h4>
          </div>

          <EventFilters allEvents={events} />
        </div>
      </div>
    </div>
  )
}
