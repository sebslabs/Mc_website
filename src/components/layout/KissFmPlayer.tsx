'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, Minimize2, Maximize2, Radio } from 'lucide-react'
import { useKissFmStore } from '@/store/useKissFmStore'

export const KissFmPlayer: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const {
    isPlaying,
    volume,
    currentShow,
    isMinimised,
    toggle,
    setVolume,
    minimise,
    expand,
    setIsPlaying
  } = useKissFmStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle play/pause via state
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.error("Audio playback failed", e)
          setIsPlaying(false) // Revert state if autoplay is blocked
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, setIsPlaying])

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  if (!mounted) {
    return null // Avoid SSR hydration mismatch
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:bottom-6 md:right-6 md:left-auto md:w-80 select-none">
      <motion.div
        layout
        className="bg-brand-navy border border-white/10 shadow-2xl overflow-hidden rounded-none text-white"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <audio ref={audioRef} src="https://srv02.onlineradio.voaplus.com/kissfm" preload="none" />
        <AnimatePresence mode="wait">
          {isMinimised ? (
            /* MINIMISED STATE */
            <motion.div
              key="minimised"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-between px-4 py-3 gap-3"
            >
              <div className="flex items-center gap-2 cursor-pointer" onClick={expand}>
                <Radio className={`w-5 h-5 text-brand-red ${isPlaying ? 'animate-pulse' : ''}`} />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-display font-extrabold text-brand-red tracking-wider">KISS FM LIVE</span>
                  <span className="text-[10px] text-white/70 max-w-[120px] md:max-w-[150px] truncate leading-tight">{currentShow}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="p-1.5 bg-brand-red text-white rounded-none hover:scale-105 transition-transform"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button onClick={expand} className="p-1 text-white/50 hover:text-white" aria-label="Expand player">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* EXPANDED STATE */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 flex flex-col gap-4 text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold tracking-widest text-brand-red text-lg">KISS FM</span>
                  <div className="flex items-center gap-1.5 bg-brand-red/10 border border-brand-red/30 px-2 py-0.5 rounded-none">
                    <span className="w-1.5 h-1.5 rounded-none bg-brand-red animate-pulse-dot" />
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">LIVE</span>
                  </div>
                </div>
                <button onClick={minimise} className="p-1 text-white/50 hover:text-white transition-colors" aria-label="Minimise player">
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Show Details */}
              <div className="flex flex-col gap-1 min-h-[44px]">
                <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">ON AIR NOW</span>
                <span className="font-display font-bold text-sm text-white truncate leading-snug">{currentShow}</span>
                <span className="text-xs text-brand-red/80 font-medium">Broadcasting from MC Atrium</span>
              </div>

              {/* Waveform and Controls */}
              <div className="flex items-center justify-between gap-4 mt-1 bg-white/5 p-3 rounded-none border border-white/5">
                {/* Visualizer bars */}
                <div className="flex gap-[3px] items-end h-8 w-20">
                  <div className={`w-1 bg-brand-red rounded-none h-3 ${isPlaying ? 'animate-wave-bar wave-bar-1' : 'h-1.5 opacity-50'}`} />
                  <div className={`w-1 bg-brand-red rounded-none h-6 ${isPlaying ? 'animate-wave-bar wave-bar-2' : 'h-1.5 opacity-50'}`} />
                  <div className={`w-1 bg-brand-red rounded-none h-8 ${isPlaying ? 'animate-wave-bar wave-bar-3' : 'h-1.5 opacity-50'}`} />
                  <div className={`w-1 bg-brand-red rounded-none h-5 ${isPlaying ? 'animate-wave-bar wave-bar-4' : 'h-1.5 opacity-50'}`} />
                  <div className={`w-1 bg-brand-red rounded-none h-3 ${isPlaying ? 'animate-wave-bar wave-bar-5' : 'h-1.5 opacity-50'}`} />
                </div>

                {/* Play Button */}
                <button
                  onClick={toggle}
                  className="w-12 h-12 flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white rounded-none hover:scale-105 active:scale-95 transition-all shadow-md"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white translate-x-0.5" />}
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-white/60" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-brand-red"
                  aria-label="Volume"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
export default KissFmPlayer
