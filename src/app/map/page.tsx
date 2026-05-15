import React from 'react'
import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import FloorPlan from '@/components/map/FloorPlan'

export const metadata: Metadata = {
  title: 'Mall Map & Floor Plans',
  description: 'Find your way around Majestic City Colombo! Explore interactive vector floor plans for all 6 levels, from the Basement Parking to the Cineplex on Level 5.'
}

export default function MapPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="Never Get Lost"
            title="INTERACTIVE MALL MAP"
            subtitle="Explore the layout of Majestic City. Toggle levels, click on individual shops to find opening hours, or search for brands to map out your shopping path instantly."
            align="center"
          />
        </div>

        {/* Interactive Vector SVG Floor Map */}
        <div>
          <FloorPlan />
        </div>
      </div>
    </div>
  )
}
