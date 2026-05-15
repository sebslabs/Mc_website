import React from 'react'
import type { Metadata } from 'next'
import { stores } from '@/lib/stores-data'
import StoreSearch from '@/components/stores/StoreSearch'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Stores Directory',
  description: 'Explore over 45 retail stores, brand outlets, dining eateries, and entertainment zones across all 6 levels of Majestic City Colombo.'
}

export default function StoresPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="Shop, Eat & Explore"
            title="STORES DIRECTORY"
            subtitle="Discover your favorite local and international brands, popular fashion outlets, tech hubs, and sizzling eateries."
            align="center"
          />
        </div>

        {/* Interactive Search Panel */}
        <StoreSearch allStores={stores} />
      </div>
    </div>
  )
}
