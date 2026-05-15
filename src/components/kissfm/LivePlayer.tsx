'use client'

import React, { useState, useEffect } from 'react'
import { Play, Pause, Volume2, Radio, Sparkles } from 'lucide-react'
import { useKissFmStore } from '@/store/useKissFmStore'

export const LivePlayer: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { isPlaying, volume, currentShow, toggle, setVolume } = useKissFmStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Guard SSR hydration mismatch
  }

  const getHostName = (show: string) => {
    if (show.includes('Morning Rush')) return 'Shehani & Kavindu'
    if (show.includes('Lunch Beats')) return 'DJ Roshan'
    if (show.includes('Evening Vibes')) return 'DJ Tharuka'
    if (show.includes('Late Night')) return 'DJ Kasun'
    return 'KISS FM Crew'
  }

  return (
    <div className="bg-brand-soft rounded-none p-8 border border-brand-border flex flex-col gap-8 text-left shadow-xl relative overflow-hidden max-w-2xl mx-auto">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-none blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/5 rounded-none blur-2xl" />

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
        <div className="flex flex-col">
          <h2 className="font-display font-black text-brand-red text-5xl md:text-6xl tracking-tight">
            KISS FM
          </h2>
          <span className="text-brand-muted text-xs font-semibold tracking-wider uppercase mt-1">
            Live from the MC Atrium, Colombo 04
          </span>
        </div>

        {/* Pulsing ON AIR Badge */}
        <div className="flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-1.5 rounded-none select-none">
          <span className="w-2 h-2 rounded-none bg-brand-red animate-pulse-dot" />
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">ON AIR</span>
        </div>
      </div>

      {/* Show Details and Equalizer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-brand-border p-6 rounded-none z-10">
        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">NOW BROADCASTING</span>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-black">
            {currentShow}
          </h3>
          <span className="text-xs text-brand-red font-semibold uppercase tracking-wider">
            With {getHostName(currentShow)}
          </span>
        </div>

        {/* Audio Equalizer Bars */}
        <div className="flex gap-[4px] items-end h-10 w-24 flex-shrink-0">
          <div className={`w-1.5 bg-brand-red rounded-none h-3 ${isPlaying ? 'animate-wave-bar wave-bar-1' : 'h-1.5 opacity-40'}`} />
          <div className={`w-1.5 bg-brand-red rounded-none h-7 ${isPlaying ? 'animate-wave-bar wave-bar-2' : 'h-1.5 opacity-40'}`} />
          <div className={`w-1.5 bg-brand-red rounded-none h-10 ${isPlaying ? 'animate-wave-bar wave-bar-3' : 'h-1.5 opacity-40'}`} />
          <div className={`w-1.5 bg-brand-red rounded-none h-6 ${isPlaying ? 'animate-wave-bar wave-bar-4' : 'h-1.5 opacity-40'}`} />
          <div className={`w-1.5 bg-brand-red rounded-none h-4 ${isPlaying ? 'animate-wave-bar wave-bar-5' : 'h-1.5 opacity-40'}`} />
        </div>
      </div>

      {/* Large Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-6 z-10">
        {/* Play button */}
        <button
          onClick={toggle}
          className="w-20 h-20 shrink-0 bg-brand-red hover:bg-brand-red/90 text-white rounded-none flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-red/20"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white translate-x-0.5" />}
        </button>

        {/* Volume slider */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between text-xs font-bold text-brand-muted tracking-wider">
            <span className="flex items-center gap-1"><Volume2 className="w-4 h-4 text-brand-red" /> VOLUME CONTROLS</span>
            <span>{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-brand-border rounded-none appearance-none cursor-pointer accent-brand-red focus:outline-none"
            aria-label="Volume slider"
          />
        </div>
      </div>
    </div>
  )
}
export default LivePlayer
