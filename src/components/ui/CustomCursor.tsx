'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Raw precise tracking
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Advanced smooth-lag elastic ring physics
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    
    const handleMouseEnterWindow = () => setIsVisible(true)
    const handleMouseLeaveWindow = () => setIsVisible(false)
    
    // Global delegation for hover state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer')
      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.body.addEventListener('mouseenter', handleMouseEnterWindow)
    document.body.addEventListener('mouseleave', handleMouseLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.removeEventListener('mouseenter', handleMouseEnterWindow)
      document.body.removeEventListener('mouseleave', handleMouseLeaveWindow)
    }
  }, [cursorX, cursorY, isVisible])

  // Prevent render on pure mobile environments
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Fixed Global Style to suppress the system cursor if desired (Optional, commented out in favor of keeping system cursor for accessibility unless explicitly hidden) */}
      <style jsx global>{`
        @media (pointer: fine) {
          a, button, input, select, textarea, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Layer 1: Core High-Velocity Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-red rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: '-50%', 
          translateY: '-50%',
          opacity: isVisible && isHovered ? 1 : 0
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />

      {/* Layer 2: Elastic Magnetic Inertial Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-brand-red transition-opacity duration-500"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: '-50%', 
          translateY: '-50%',
          opacity: isVisible && isHovered ? 1 : 0,
          width: '36px',
          height: '36px'
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(226, 35, 26, 0.15)' : 'rgba(226, 35, 26, 0)',
          borderColor: isHovered ? 'rgba(226, 35, 26, 1)' : 'rgba(226, 35, 26, 0.5)',
          borderWidth: isHovered ? '1.5px' : '1px',
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 25
        }}
      />
    </>
  )
}

export default CustomCursor
