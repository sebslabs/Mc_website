'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ticket, Calendar, Phone, Info, Bell } from 'lucide-react'
import { Film } from '@/lib/types'
import Button from '../ui/Button'

interface FilmDetailProps {
  film: Film
  selectedDate: string
}

export const FilmDetail: React.FC<FilmDetailProps> = ({ film, selectedDate }) => {
  const [showToast, setShowToast] = useState(false)

  const activeSessionObj = film.sessions.find((s) => s.date === selectedDate)
  const times = activeSessionObj ? activeSessionObj.times : []

  const handleBook = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  return (
    <div className="bg-white border-t border-brand-border p-6 md:p-8 flex flex-col gap-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left col: Synopsis */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> Synopsis
          </h4>
          <p className="text-brand-muted text-sm leading-relaxed font-body font-light">
            {film.synopsis}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-xs font-semibold text-brand-muted uppercase tracking-wider">
            <div>
              Screen: <span className="text-brand-red font-bold">{film.cinema}</span>
            </div>
            <div>
              Runtime: <span className="text-brand-black">{film.runtime} Minutes</span>
            </div>
          </div>
        </div>

        {/* Right col: Sessions Grid */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Session Times
          </h4>
          {times.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {times.map((time, idx) => (
                <button
                  key={idx}
                  onClick={handleBook}
                  className="bg-brand-soft border border-brand-border hover:border-brand-red hover:bg-brand-red/5 text-brand-black font-medium py-2 px-3 rounded-none text-xs text-center transition-all cursor-pointer"
                >
                  {time.split(' ')[0]}
                  <span className="text-[9px] block text-brand-muted font-bold uppercase mt-0.5">{time.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-brand-muted text-xs">No showtimes available for this date.</p>
          )}

          <Button
            variant="danger"
            size="md"
            onClick={handleBook}
            className="w-full font-bold shadow-lg shadow-brand-red/10 mt-2 rounded-none"
            icon={<Ticket className="w-4 h-4" />}
          >
            Book Tickets Now
          </Button>
        </div>
      </div>

      {/* Floating custom slide-in toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white border border-brand-red text-brand-black rounded-none p-4 shadow-2xl flex gap-3 text-left"
          >
            <div className="w-10 h-10 shrink-0 bg-brand-red/10 border border-brand-red/20 rounded-none flex items-center justify-center text-brand-red">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-display font-bold text-sm text-brand-red uppercase tracking-wider">
                Booking Integration Launching Soon!
              </h5>
              <p className="text-brand-muted text-xs leading-relaxed font-body font-light">
                Our online seat picker is coming soon. Please call Majestic Cineplex at <a href="tel:+94112501444" className="underline font-bold text-brand-red">+94 11 250 1444</a> to reserve your tickets immediately.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default FilmDetail
