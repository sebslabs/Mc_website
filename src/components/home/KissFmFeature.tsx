'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, Pause, Radio, Calendar, ArrowRight } from 'lucide-react'
import { useKissFmStore } from '@/store/useKissFmStore'
import Button from '../ui/Button'

export const KissFmFeature: React.FC = () => {
  const { isPlaying, toggle, currentShow } = useKissFmStore()

  const todayShows = [
    { time: '06:00 AM - 09:00 AM', name: 'The Morning Rush', host: 'Shehani & Kavindu', isCurrent: currentShow.includes('Morning Rush') },
    { time: '12:00 PM - 02:00 PM', name: 'Lunch Beats', host: 'DJ Roshan', isCurrent: currentShow.includes('Lunch Beats') },
    { time: '05:00 PM - 07:00 PM', name: 'Evening Vibes', host: 'DJ Tharuka', isCurrent: currentShow.includes('Evening Vibes') },
    { time: '09:00 PM - Midnight', name: 'Late Night with MC', host: 'DJ Kasun', isCurrent: currentShow.includes('Late Night') }
  ]

  return (
    <section className="relative bg-white py-24 overflow-hidden text-left">
      {/* Subtle repeating radial gradient circles background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000000 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col">
              <span className="font-display font-black text-6xl md:text-8xl text-brand-red tracking-tight leading-none">
                KISS FM
              </span>
              <span className="font-display font-black text-brand-black text-xl sm:text-2xl tracking-[0.25em] mt-2">
                LIVE FROM THE MC ATRIUM
              </span>
            </div>

            <div className="flex items-center gap-3 bg-brand-soft border border-brand-border p-3 rounded-none w-full max-w-md mt-2">
              <div className="relative flex-shrink-0 w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-brand-red animate-ping" />
                <span className="absolute inset-0 rounded-full bg-brand-red" />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-brand-muted text-[10px] font-bold tracking-wider uppercase">ON AIR NOW</p>
                <p className="text-brand-black font-semibold text-sm truncate">{currentShow}</p>
              </div>
            </div>

            <p className="text-brand-muted max-w-lg text-sm md:text-base leading-relaxed">
              We brought Colombo&apos;s #1 Hit Music Station right into the heart of Majestic City! Drop by our live glass studio in the ground floor atrium, request your favorite songs, win prizes on-air, or vibe with our DJs.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
              <button
                onClick={toggle}
                className="w-16 h-16 rounded-none flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/20 transition-all"
                aria-label={isPlaying ? 'Pause Radio' : 'Play Radio'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
              </button>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-brand-muted font-bold uppercase tracking-wider">
                  {isPlaying ? 'TUNED IN LIVE' : 'LISTEN ONLINE'}
                </span>
                <span className="text-sm font-semibold text-brand-black">
                  {isPlaying ? 'Mute Broadcast' : 'Listen Live Now'}
                </span>
              </div>
              <div className="w-full sm:w-auto sm:ml-4">
                <Button variant="ghost" size="md" href="/kissfm" className="rounded-none" icon={<Calendar className="w-4 h-4" />}>
                  Full Broadcast Schedule
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-brand-soft border border-brand-border rounded-none p-6 md:p-8 flex flex-col gap-6 w-full shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <h3 className="font-display font-extrabold text-brand-black text-xl tracking-wide uppercase">
                Today on KISS FM
              </h3>
              <Radio className="w-5 h-5 text-brand-red animate-pulse" />
            </div>

            <div className="flex flex-col gap-4">
              {todayShows.map((show, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 rounded-none border transition-all ${
                    show.isCurrent
                      ? 'bg-brand-red/5 border-brand-red/30'
                      : 'bg-white/50 border-transparent hover:bg-white hover:border-brand-border hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    {show.isCurrent ? (
                      <div className="relative flex-shrink-0 w-2.5 h-2.5">
                        <span className="absolute inset-0 rounded-full bg-brand-red animate-ping" />
                        <span className="absolute inset-0 rounded-full bg-brand-red" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-none bg-brand-border" />
                    )}
                    <div className="flex flex-col">
                      <span className={`font-display font-bold text-sm ${show.isCurrent ? 'text-brand-red' : 'text-brand-black'}`}>
                        {show.name}
                      </span>
                      <span className="text-xs text-brand-muted">with {show.host}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-red font-semibold shrink-0">
                    {show.time.split(' - ')[0]}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/kissfm"
              className="flex items-center justify-center gap-2 text-brand-red text-xs font-bold tracking-widest uppercase hover:underline hover:translate-x-1 transition-transform self-center mt-2"
            >
              See Weekly Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default KissFmFeature
