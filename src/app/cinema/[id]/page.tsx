'use client'

import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe } from 'lucide-react'
import { films } from '@/lib/cinema-data'
import DateSelector from '@/components/cinema/DateSelector'
import FilmDetail from '@/components/cinema/FilmDetail'
import Badge from '@/components/ui/Badge'

export default function MovieViewPage({ params }: { params: { id: string } }) {
  const film = films.find(f => f.id === params.id)

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0]
  })

  if (!film) {
    notFound()
  }

  const getRatingVariant = (rating: string) => {
    switch (rating) {
      case 'U': return 'green'
      case 'PG': return 'gold'
      case '15': return 'purple'
      case '18': return 'red'
      default: return 'surface'
    }
  }

  return (
    <div className="bg-white min-h-screen text-brand-black pb-20">
      {/* Premium Hero Backdrop */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-brand-black overflow-hidden flex items-end">
        {/* Background Video or Fallback Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {film.trailerVideoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${film.trailerVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${film.trailerVideoId}&modestbranding=1&showinfo=0&rel=0`}
              allow="autoplay; encrypted-media"
              className="w-[300vw] h-[300vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[150vw] md:h-[150vh] opacity-100 pointer-events-none"
            />
          ) : film.poster ? (
            <Image
              src={film.poster}
              alt={film.title}
              fill
              className="object-cover object-center blur-xl opacity-60 scale-110"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/30 to-transparent" />
        </div>

        {/* Content over Backdrop */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-16 flex flex-col gap-6">
          {/* Title & Meta Info */}
          <div className="text-left flex flex-col justify-end text-white max-w-4xl">
            <span className="text-xs md:text-sm text-brand-red font-bold tracking-widest uppercase mb-3 drop-shadow-lg">
              {film.genre}
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter mb-5 drop-shadow-2xl leading-[1.1] md:leading-[1.1]">
              {film.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider mb-6 drop-shadow-md">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-red" /> {film.runtime} Mins
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-red" /> {film.language}
              </span>
              <Badge variant={getRatingVariant(film.rating)} className="rounded-none px-2.5 py-0.5 text-xs font-bold shadow-sm">
                {film.rating}
              </Badge>
              {film.status === 'upcoming' && (
                <span className="bg-brand-red text-white px-2 py-0.5 font-bold shadow-sm">
                  COMING SOON
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Detail Area */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {/* Showtimes & Date Selector */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-xs text-brand-muted font-bold uppercase tracking-widest">
                  Select Show Date
                </span>
                <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
              </div>
              
              <div className="bg-white border border-brand-border shadow-sm">
                <FilmDetail film={film} selectedDate={selectedDate} />
              </div>
            </div>
          </div>

          {/* Sidebar / Extra Info */}
          <div className="lg:col-span-1 flex flex-col gap-8 border-l-0 lg:border-l border-brand-border pl-0 lg:pl-8">
            {film.poster && (
              <div className="w-full aspect-[2/3] shrink-0 rounded-none shadow-2xl border border-brand-border overflow-hidden bg-brand-soft relative">
                <Image
                  src={film.poster}
                  alt={film.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
                Experience
              </h4>
              <p className="text-brand-black text-sm font-semibold mb-1">{film.cinema}</p>
              <p className="text-brand-muted text-xs leading-relaxed">
                Enjoy world-class projection and superior sound in our premium auditoriums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
