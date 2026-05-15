'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, MoveHorizontal } from 'lucide-react'
import Image from 'next/image'
import Button from '../ui/Button'
import heroNew from '@/hero1.png'
import heroOld from '@/hero2.png'

export const HeroSection: React.FC = () => {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent | React.TouchEvent | TouchEvent | MouseEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    let clientX = 0
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = (e as MouseEvent).clientX
    }
    
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleMove)
      window.addEventListener('touchend', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* LAYER 1: The New Look (Base Layer) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={heroNew}
          alt="New Majestic City"
          fill
          priority
          className="object-cover select-none pointer-events-none"
        />

        {/* Label */}
        <div className="absolute top-28 right-6 bg-brand-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase border border-white/10 z-20">
          New Mall
        </div>
      </div>

      {/* LAYER 2: The Old Look (Clipped Layer) */}
      <div 
        className="absolute inset-0 w-full h-full z-10 overflow-hidden border-r border-brand-border shadow-[2px_0_20px_rgba(0,0,0,0.15)]"
        style={{ width: `${position}%` }}
      >
        <div className="absolute inset-0 w-screen h-full">
          <Image
            src={heroOld}
            alt="Original Majestic City"
            fill
            priority
            className="object-cover select-none pointer-events-none"
          />
        </div>

        {/* Label */}
        <div className="absolute top-28 left-6 bg-brand-red text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase z-20 shadow-md">
          Original Mall
        </div>
      </div>

      {/* LAYER 3: Slider Control Handle (ONLY THIS DRAGS NOW) */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div 
          className="w-12 h-12 bg-white border-2 border-white shadow-xl rounded-none flex items-center justify-center text-brand-black hover:scale-110 transition-transform select-none active:bg-brand-soft cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => { e.preventDefault(); handleMouseDown(); handleMove(e); }}
          onTouchStart={(e) => { handleMouseDown(); handleMove(e); }}
        >
          <MoveHorizontal className="w-6 h-6" />
        </div>
      </div>

      {/* LAYER 4: Text Content Overlay (Restored to EXACT Previous Styling with Premium Black Glass Wrapper) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-end pb-16 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pointer-events-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            MC IS BACK.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white text-base sm:text-lg md:text-xl font-body max-w-2xl mb-10 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            Completely reimagined. Boldly renovated. Unmistakably Majestic. Experience Colombo’s everyday vibe.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
            <Button variant="danger" size="lg" href="/stores" className="w-full sm:w-auto shadow-lg shadow-brand-red/25 rounded-none">
              Explore What&apos;s New
            </Button>
            <Button variant="ghost" size="lg" href="/about" className="w-full sm:w-auto !text-white border-white/40 bg-black/20 hover:bg-white hover:!text-brand-black rounded-none backdrop-blur-sm shadow-lg" icon={<PlayCircle className="w-5 h-5" />}>
              Watch the Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
