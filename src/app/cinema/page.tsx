'use client'

import React, { useState } from 'react'
import { Ticket, Film as FilmIcon } from 'lucide-react'
import { films } from '@/lib/cinema-data'
import DateSelector from '@/components/cinema/DateSelector'
import FilmCard from '@/components/cinema/FilmCard'
import SectionHeading from '@/components/ui/SectionHeading'
import CinemaHeroSlider from '@/components/cinema/CinemaHeroSlider'
import QuickBookBar from '@/components/cinema/QuickBookBar'

export default function CinemaPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0]
  })
  const [filterType, setFilterType] = useState<'now-showing' | 'upcoming'>('now-showing')

  return (
    <div className="bg-white min-h-screen text-brand-black -mt-24 md:-mt-28">
      {/* Movies Slider at the top */}
      <div className="pt-16 md:pt-20 bg-black">
        <CinemaHeroSlider />
      </div>

      {/* Quick Booking Bar */}
      <QuickBookBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 py-12 md:py-16">
        {/* Schedule Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <SectionHeading
            label="Schedule & Booking"
            title="MOVIE SHOWTIMES"
            subtitle="Select a date and reserve your seats for the perfect movie experience."
            align="center"
          />
        </div>

        {/* Movie Filter Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b border-gray-200">
            <button
              onClick={() => setFilterType('now-showing')}
              className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                filterType === 'now-showing' 
                  ? 'border-b-2 border-brand-red text-brand-red' 
                  : 'text-brand-muted hover:text-brand-black'
              }`}
            >
              Now Showing
            </button>
            <button
              onClick={() => setFilterType('upcoming')}
              className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                filterType === 'upcoming' 
                  ? 'border-b-2 border-brand-red text-brand-red' 
                  : 'text-brand-muted hover:text-brand-black'
              }`}
            >
              Upcoming Movies
            </button>
          </div>
        </div>

        {/* Film Listings List */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
            <FilmIcon className="w-5 h-5 text-brand-red" />
            <span className="font-display font-black text-sm uppercase tracking-wider text-brand-black">
              {filterType === 'now-showing' ? 'Currently Playing' : 'Coming Soon'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {films
              .filter(film => filterType === 'upcoming' ? film.status === 'upcoming' : film.status !== 'upcoming')
              .map((film) => (
              <FilmCard key={film.id} film={film} selectedDate={selectedDate} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
