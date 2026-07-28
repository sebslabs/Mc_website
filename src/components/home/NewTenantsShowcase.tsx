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
              className="group relative w-[calc(100vw-2.5rem)] sm:w-96 shrink-0 snap-center bg-brand-black rounded-none border border-brand-border flex flex-col overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,59,48,0.15)] hover:border-brand-red/50 transition-all duration-500 cursor-pointer min-h-[400px]"
            >
              {/* Full Card Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={`https://images.unsplash.com/photo-${store.id === 'cargills-foodhall' ? '1542838132-92c53300491e' : store.id === 'kottu-bar' ? '1555939594-58d7cb561ad1' : store.id === 'waffle-house' ? '1504754524776-8f4f37790ca0' : store.id === 'dsi-showroom' ? '1549298916-b41d501d3772' : store.id === 'hemas-pharmacy' ? '1585435557343-3b092031a831' : store.id === 'cool-planet' ? '1441984904996-e0b6ba687e04' : store.id === 'moose-clothing' ? '1523381210434-271e8be1f52b' : '1542272604-787c3835535d'}?auto=format&fit=crop&w=600&q=80`} 
                  alt={store.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />
              </div>

              {/* Content Overlay */}
              <div className="flex flex-col gap-4 text-left p-6 relative z-10 flex-grow justify-end">
                {/* Store Logo */}
                <div className="w-14 h-14 bg-white border border-brand-border rounded-none flex items-center justify-center select-none shadow-md overflow-hidden mb-2">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(store.name)}&background=FF3B30&color=fff&rounded=false&bold=true&font-size=0.4`} 
                    alt={`${store.name} Logo`} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide uppercase leading-none">
                      {store.name}
                    </h3>
                    {store.isNew && (
                      <span className="bg-brand-red/90 text-white font-extrabold text-[9px] tracking-wider px-2.5 py-1 rounded-none uppercase leading-none shadow-sm">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed font-normal line-clamp-2">
                    {store.description}
                  </p>
                </div>
              </div>

              {/* Badges Row */}
              <div className="flex items-center justify-between p-6 pt-4 relative z-10 border-t border-white/20 text-xs font-semibold">
                <Badge variant="danger" className="rounded-none bg-brand-red text-white border-brand-red shadow-sm">{formatFloor(store.floor)}</Badge>
                <span className="text-[10px] text-white/90 uppercase font-bold tracking-widest">{store.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewTenantsShowcase
