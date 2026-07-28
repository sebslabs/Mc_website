'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { films } from '@/lib/cinema-data'

// Map of landscape images for the hero slider
const heroImages: Record<string, string> = {
  'film-1': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2072&auto=format&fit=crop',
  'film-2': 'https://images.unsplash.com/photo-1627465688839-509f6e6bd1f4?q=80&w=2000&auto=format&fit=crop',
  'film-3': 'https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=2000&auto=format&fit=crop',
  'film-4': 'https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=2000&auto=format&fit=crop',
  'film-5': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2000&auto=format&fit=crop',
  'film-6': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop'
}

export const CinemaHeroSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const displayFilms = films.slice(0, 5) // Display top 5 for the tabs

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayFilms.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [displayFilms.length])

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden group">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />
          <Image
            src={heroImages[displayFilms[activeIndex].id]}
            alt={displayFilms[activeIndex].title}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-28 md:pb-32 flex justify-end">
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-end text-right max-w-lg pointer-events-auto"
          >
            {/* Title */}
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-2 drop-shadow-lg">
              {displayFilms[activeIndex].title}
            </h2>
            
            {/* Now Showing Label */}
            <div className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md">
              Now Showing
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-4 w-full">
              <button className="px-6 py-3 border-2 border-white/70 bg-black/40 hover:bg-white/10 text-white font-bold uppercase text-xs tracking-widest transition-all backdrop-blur-sm">
                Watch Trailer
              </button>
              <Link
                href="#schedule"
                className="px-6 py-3 bg-white text-black hover:bg-brand-red hover:text-white border-2 border-white hover:border-brand-red font-bold uppercase text-xs tracking-widest transition-all"
              >
                Buy Tickets
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default CinemaHeroSlider
