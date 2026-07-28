'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Film } from '@/lib/types'
import ImagePlaceholder, { FILM_GRADIENT } from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'

interface FilmCardProps {
  film: Film
  selectedDate: string
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, selectedDate }) => {
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
    <Link 
      href={`/cinema/${film.id}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-none aspect-[2/3] shadow-lg cursor-pointer border border-white/5 bg-brand-black block"
    >
      {/* Poster / Background */}
      <div className="absolute inset-0">
        <ImagePlaceholder 
          gradient={FILM_GRADIENT} 
          imageUrl={film.poster} 
          aspectRatio="h-full" 
          rounded="rounded-none" 
          label={film.language}
        />
      </div>

      {/* Rating Badge (top-left) */}
      <div className="absolute top-3 left-3 z-20">
        <Badge variant={getRatingVariant(film.rating)} className="rounded-none px-2.5 py-0.5 text-xs font-bold shadow-sm">
          {film.rating}
        </Badge>
      </div>

      {/* Gradient Shadow overlay at the bottom for readability (visible on hover) */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content Overlay (visible on hover) */}
      <div className="relative z-20 p-4 rounded-none text-left flex flex-col gap-1 text-white w-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        <span className="text-[10px] md:text-xs font-bold uppercase text-brand-red tracking-widest">
          {film.genre}
        </span>
        <h3 className="font-display font-black text-lg md:text-xl tracking-tight leading-snug line-clamp-2 transition-colors">
          {film.title}
        </h3>
        <p className="text-white/70 text-xs font-light tracking-wide flex items-center gap-2">
          <span>{film.runtime} Mins</span>
          <span>•</span>
          <span className="uppercase">{film.language}</span>
        </p>

        {/* Book Now Button: Glass background by default, expands and turns red on hover */}
        <div className="mt-3 flex items-center gap-2 h-9 px-3 rounded-none bg-white/15 backdrop-blur-md text-white border border-white/20 group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-300 self-start">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
            {film.status === 'upcoming' ? 'Coming Soon' : 'Book Now'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
export default FilmCard
