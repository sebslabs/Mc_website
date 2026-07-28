'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Ticket } from 'lucide-react'
import Button from '../ui/Button'

export const HeroSection: React.FC = () => {
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
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-end pb-16 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pointer-events-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
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
            <Button 
              variant="danger" 
              size="lg" 
              href="/cinema" 
              className="w-full sm:w-auto shadow-lg shadow-brand-red/25 rounded-none"
              icon={<Ticket className="w-5 h-5" />}
            >
              Book Cinema Tickets
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
