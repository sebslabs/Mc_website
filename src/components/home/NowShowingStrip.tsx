'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { films } from '@/lib/cinema-data'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder, { FILM_GRADIENT } from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'

export const NowShowingStrip: React.FC = () => {
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
    'film-1': 'https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg',
    'film-2': 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg',
    'film-3': 'https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg',
    'film-4': 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
    'film-5': 'https://upload.wikimedia.org/wikipedia/en/e/e4/Spider-Man_Across_the_Spider-Verse_poster.jpg',
    'film-6': 'https://upload.wikimedia.org/wikipedia/en/6/68/Furiosa_A_Mad_Max_Saga_poster.jpg'
  }

  return (
    <section className="py-16 md:py-24 bg-brand-black overflow-hidden w-full relative">
      <div className="w-full">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center w-full mb-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Majestic Cineplex"
            title="NOW SHOWING"
            subtitle="Catch the latest blockbusters in Dolby Atmos surround sound."
            align="center"
            dark={true}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative group w-full">
          {/* Absolute Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent z-20 flex items-center justify-start pl-4 sm:pl-8 opacity-100 transition-opacity duration-300 pointer-events-none">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black hover:scale-105 flex items-center justify-center rounded-full transition-all shadow-xl pointer-events-auto"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6 ml-[-2px]" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-brand-black/90 via-brand-black/40 to-transparent z-20 flex items-center justify-end pr-4 sm:pr-8 opacity-100 transition-opacity duration-300 pointer-events-none">
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black hover:scale-105 flex items-center justify-center rounded-full transition-all shadow-xl pointer-events-auto"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6 mr-[-2px]" />
            </button>
          </div>

          {/* Manual Smooth-Scrolling Flex Viewport */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar w-full"
          >
            {displayedFilms.map((film) => (
              <Link
                key={film.id}
                href="/cinema"
                className="w-[80vw] sm:w-[45vw] md:w-[33.333vw] lg:w-[25vw] shrink-0 snap-center relative aspect-[2/3] block group/poster"
              >
                <ImagePlaceholder 
                  gradient={FILM_GRADIENT} 
                  imageUrl={filmImages[film.id]} 
                  aspectRatio="h-full" 
                  rounded="rounded-none" 
                />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <Badge variant={getRatingVariant(film.rating)} className="rounded-none px-3 py-1 text-xs font-black shadow-md">{film.rating}</Badge>
                </div>

                {/* Bottom Overlay Gradient & Text */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/60 to-transparent z-10 flex flex-col justify-end p-5 sm:p-6 transition-all duration-300">
                  <h3 className="font-display font-bold text-white text-xl sm:text-2xl tracking-wide uppercase leading-none mb-1.5 group-hover/poster:text-brand-red transition-colors">
                    {film.title}
                  </h3>
                  <span className="text-[10px] text-white/80 tracking-[0.1em] font-semibold uppercase mb-4">
                    IN THEATERS NOW
                  </span>
                  <div className="mt-1">
                    <span className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-colors border border-transparent hover:border-brand-red">
                      Book Tickets
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default NowShowingStrip
