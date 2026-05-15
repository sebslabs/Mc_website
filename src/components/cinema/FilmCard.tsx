'use client'

import React, { useState } from 'react'
import { Clock, Globe, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { Film } from '@/lib/types'
import ImagePlaceholder, { FILM_GRADIENT } from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import FilmDetail from './FilmDetail'

interface FilmCardProps {
  film: Film
  selectedDate: string
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, selectedDate }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const activeSessionObj = film.sessions.find((s) => s.date === selectedDate)
  const times = activeSessionObj ? activeSessionObj.times : []

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
    <div className="bg-brand-soft border border-brand-border rounded-none overflow-hidden flex flex-col hover:bg-white hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:p-6 gap-6 items-center">
        {/* Poster */}
        <div className="aspect-[2/3] md:col-span-1 rounded-none overflow-hidden relative shadow-lg">
          <ImagePlaceholder gradient={FILM_GRADIENT} aspectRatio="h-full" label={film.language} rounded="rounded-none" />
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            <Badge variant={getRatingVariant(film.rating)} className="rounded-none">{film.rating}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] text-brand-red font-bold tracking-widest uppercase">{film.genre}</span>
            <h3 className="font-display font-black text-brand-black text-2xl md:text-3xl tracking-tight leading-snug">
              {film.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-muted uppercase tracking-wider mt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-red" /> {film.runtime} Mins
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-red" /> {film.language}
              </span>
            </div>
          </div>

          {/* Quick Sessions Preview */}
          <div className="flex flex-col gap-2 mt-1">
            <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">Today&apos;s Sessions</span>
            {times.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {times.map((time, idx) => (
                  <span
                    key={idx}
                    className="border border-brand-red/30 text-brand-red px-3 py-1.5 rounded-none text-xs font-semibold bg-brand-red/5"
                  >
                    {time}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-xs text-brand-muted">No schedules for today. Click details.</span>
            )}
          </div>

          <Button
            variant="ghost"
            size="md"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full md:w-48 text-xs font-bold mt-2 rounded-none"
            icon={isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          >
            {isExpanded ? 'Hide Details' : 'View Full Details'}
          </Button>
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="animate-fade-up">
          <FilmDetail film={film} selectedDate={selectedDate} />
        </div>
      )}
    </div>
  )
}
export default FilmCard
