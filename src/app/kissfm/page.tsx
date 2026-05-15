import React from 'react'
import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import LivePlayer from '@/components/kissfm/LivePlayer'
import ShowSchedule from '@/components/kissfm/ShowSchedule'
import AtriumEvents from '@/components/kissfm/AtriumEvents'
import { Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KISS FM Atrium Studio',
  description: 'Colombo’s #1 Hit Music Station, live from the center atrium of Majestic City Colombo! Request songs, meet DJs, and tune into the live audio broadcast online.'
}

export default function KissFmPage() {
  return (
    <div className="bg-white min-h-screen text-brand-black -mt-24 md:-mt-28 py-20 pt-32 md:pt-36 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 relative z-10">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="Live Glass Studio"
            title="KISS FM ON-AIR"
            subtitle="Colombo’s most exciting mall meets Sri Lanka's #1 Hit Music Station. Watch our DJs live in action or tune in instantly right here."
            align="center"
          />
        </div>

        {/* Live Audio Player */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-brand-muted font-bold uppercase tracking-widest text-center">
            Interactive Live Player
          </span>
          <LivePlayer />
        </div>

        {/* Broadcasting Schedule */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-brand-border pb-4 justify-start sm:justify-center">
            <Radio className="w-5 h-5 text-brand-red animate-pulse" />
            <h4 className="font-display font-black text-lg text-brand-black uppercase tracking-wider">
              WEEKLY BROADCAST SCHEDULE
            </h4>
          </div>

          <ShowSchedule />
        </div>

        {/* Atrium Experiences */}
        <div className="mt-8">
          <AtriumEvents />
        </div>
      </div>
    </div>
  )
}
