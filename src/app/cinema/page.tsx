'use client'

import React, { useState } from 'react'
import { Ticket, Film as FilmIcon } from 'lucide-react'
import { films } from '@/lib/cinema-data'
import DateSelector from '@/components/cinema/DateSelector'
import FilmCard from '@/components/cinema/FilmCard'
import CinemaInfo from '@/components/cinema/CinemaInfo'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CinemaPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0]
  })

  return (
    <div className="bg-white min-h-screen text-brand-black -mt-24 md:-mt-28 py-20 pt-32 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <SectionHeading
            label="Majestic Cineplex"
            title="NOW SHOWING SCHEDULE"
            subtitle="Catch the latest blockbusters across our 4 revamped screens featuring Dolby Atmos sound systems."
            align="center"
          />
        </div>

        {/* Date Selector Controls */}
        <div className="flex flex-col gap-4">
          <span className="text-xs text-brand-muted font-bold uppercase tracking-widest text-left pl-1">
            Select Show Date
          </span>
          <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>

        {/* Film Listings List */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 border-b border-brand-border pb-4">
            <FilmIcon className="w-5 h-5 text-brand-red" />
            <span className="font-display font-black text-sm uppercase tracking-wider text-brand-black">
              Playing on {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {films.map((film) => (
              <FilmCard key={film.id} film={film} selectedDate={selectedDate} />
            ))}
          </div>
        </div>

        {/* Cinema Amenities and Screens */}
        <div className="mt-10">
          <CinemaInfo />
        </div>
      </div>
    </div>
  )
}
