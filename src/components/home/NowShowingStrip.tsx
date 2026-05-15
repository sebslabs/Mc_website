'use client'

import React, { useRef } from 'react'
import { ArrowRight, Ticket, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { films } from '@/lib/cinema-data'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder, { FILM_GRADIENT } from '../ui/ImagePlaceholder'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export const NowShowingStrip: React.FC = () => {
  // Display raw film list once without marquee wrapping
  const displayedFilms = films.slice(0, 8)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8)
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
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

  const filmImages: Record<string, string> = {
    'film-1': 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    'film-2': 'https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80',
    'film-3': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    'film-4': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    'film-5': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
  }

  return (
    <section className="py-24 bg-white overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center w-full mb-10">
          <SectionHeading
            label="Majestic Cineplex"
            title="NOW SHOWING"
            subtitle="Catch the latest blockbusters in Dolby Atmos surround sound."
            align="center"
          />
        </div>

        {/* Symmetrical Control Strip */}
        <div className="flex flex-row items-center justify-between w-full mb-8">
          {/* Universal Action Link (Left Anchored) */}
          <Link
            href="/cinema"
            className="flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] sm:text-xs tracking-widest uppercase transition-all shadow-sm"
          >
            See All <span className="hidden sm:inline">Showings</span> <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </Link>

          {/* Universal Navigation Arrows (Right Anchored) */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-brand-border text-brand-black hover:bg-brand-black hover:text-white flex items-center justify-center rounded-none transition-all active:scale-95 shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-brand-border text-brand-black hover:bg-brand-black hover:text-white flex items-center justify-center rounded-none transition-all active:scale-95 shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Manual Smooth-Scrolling Flex Viewport */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar"
        >
          {displayedFilms.map((film) => (
            <div
              key={film.id}
              className="w-[calc(100vw-2.5rem)] sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)] shrink-0 snap-center bg-brand-soft rounded-none flex flex-col group border border-brand-border hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/10 cursor-pointer transition-all duration-300"
            >
              {/* Full-Bleed Poster (Edge to Edge) */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-none">
                <ImagePlaceholder gradient={FILM_GRADIENT} imageUrl={filmImages[film.id]} aspectRatio="h-full" label={film.language} rounded="rounded-none" />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <Badge variant={getRatingVariant(film.rating)} className="rounded-none px-3 py-1 text-xs font-black shadow-md">{film.rating}</Badge>
                </div>
              </div>

              {/* Padded Content Area */}
              <div className="p-4 md:p-5 flex flex-col justify-between flex-grow gap-5">
                {/* Title Block */}
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="font-display font-black text-brand-black text-base tracking-wide line-clamp-1 group-hover:text-brand-red transition-colors">
                    {film.title}
                  </h3>
                  <span className="text-[10px] text-brand-muted tracking-wider font-semibold uppercase">{film.genre}</span>
                </div>

                {/* Inflated Call-To-Action */}
                <Button
                  variant="danger"
                  size="md"
                  href="/cinema"
                  className="w-full text-[11px] font-black uppercase tracking-[0.15em] py-3.5 rounded-none shadow-lg shadow-brand-red/10 hover:shadow-brand-red/25 transition-all active:scale-95"
                  icon={<Ticket className="w-4 h-4" />}
                >
                  Book Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default NowShowingStrip
