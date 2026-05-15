'use client'

import React, { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { stores } from '@/lib/stores-data'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

export const NewTenantsShowcase: React.FC = () => {
  // Get 6-8 prime stores for a good scroll sequence
  const highlights = stores.filter(s => s.isAnchor || s.isNew).slice(0, 8)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8)
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const formatFloor = (floor: string) => {
    switch (floor) {
      case 'basement': return 'Basement'
      case 'l1': return 'Level 1'
      case 'l2': return 'Level 2'
      case 'l3': return 'Level 3'
      case 'l4': return 'Level 4'
      case 'l5': return 'Level 5'
      default: return 'Level 1'
    }
  }

  return (
    <section className="py-24 bg-brand-surface overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center w-full mb-10">
          <SectionHeading
            label="Renovated & Redefined"
            title="THE BRANDS YOU LOVE"
            subtitle="Explore our curated collection of mid-market fashion, electronics, shoes, and everyday essentials."
            align="center"
          />
        </div>

        {/* Symmetrical Control Strip */}
        <div className="flex flex-row items-center justify-between w-full mb-8">
          {/* Universal Action Link (Left Anchored) */}
          <Link
            href="/stores"
            className="flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-4 sm:px-5 py-2.5 rounded-none font-bold text-[10px] sm:text-xs tracking-widest uppercase transition-all shadow-sm"
          >
            Explore <span className="hidden sm:inline">All Stores</span> <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
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

        {/* Manual Interactive Scroll Viewport */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar"
        >
          {highlights.map((store) => (
            <div
              key={store.id}
              className="w-[calc(100vw-2.5rem)] sm:w-96 shrink-0 snap-center bg-white rounded-none p-8 border border-brand-border flex flex-col justify-between gap-8 shadow-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,59,48,0.15)] hover:border-brand-red/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex flex-col gap-5 text-left">
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-brand-red/5 border border-brand-red/10 rounded-none flex items-center justify-center select-none shadow-sm">
                  <span className="font-display font-black text-3xl text-brand-red">{store.name.charAt(0)}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-brand-black tracking-wide uppercase leading-none">
                      {store.name}
                    </h3>
                    {store.isNew && (
                      <span className="bg-brand-red/10 text-brand-red font-extrabold text-[9px] tracking-wider px-2.5 py-1 rounded-none uppercase leading-none border border-brand-red/10">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-brand-muted text-xs leading-relaxed font-normal line-clamp-2">
                    {store.description}
                  </p>
                </div>
              </div>

              {/* Badges Row */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs font-semibold">
                <Badge variant="surface" className="rounded-none">{formatFloor(store.floor)}</Badge>
                <span className="text-[10px] text-brand-muted uppercase font-bold tracking-widest">{store.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewTenantsShowcase
