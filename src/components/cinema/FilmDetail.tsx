'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ticket, Calendar, Phone, Info, Bell } from 'lucide-react'
import { Film } from '@/lib/types'
import Button from '../ui/Button'
import SeatPicker from './SeatPicker'

interface FilmDetailProps {
  film: Film
  selectedDate: string
}

export const FilmDetail: React.FC<FilmDetailProps> = ({ film, selectedDate }) => {
  const [showToast, setShowToast] = useState(false)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showTicketModal, setShowTicketModal] = useState(false)
  const [showSeatPicker, setShowSeatPicker] = useState(false)
  const [ticketCount, setTicketCount] = useState(1)

  const activeSessionObj = film.sessions.find((s) => s.date === selectedDate)
  const times = activeSessionObj ? activeSessionObj.times : []

  const handleConfirmTickets = () => {
    setShowTicketModal(false)
    setShowSeatPicker(true)
  }

  const handleProceedBooking = () => {
    setShowSeatPicker(false)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  return (
    <div className="bg-white p-6 md:p-8 flex flex-col gap-6 text-left relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left col: Synopsis */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> Synopsis
          </h4>
          <p className="text-brand-muted text-sm leading-relaxed font-body font-light">
            {film.synopsis}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2 text-xs font-semibold text-brand-muted uppercase tracking-wider border-b border-brand-border/30 pb-4">
            <div>
              Screen: <span className="text-brand-red font-bold">{film.cinema}</span>
            </div>
            <div>
              Runtime: <span className="text-brand-black">{film.runtime} Minutes</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-2">
            {film.director && (
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Director: <span className="text-brand-black">{film.director}</span>
              </div>
            )}
            {film.cast && film.cast.length > 0 && (
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider leading-relaxed">
                Cast: <span className="text-brand-black normal-case font-bold">{film.cast.join(', ')}</span>
              </div>
            )}
            {film.releaseDate && (
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Release Date: <span className="text-brand-black normal-case font-bold">{film.releaseDate}</span>
              </div>
            )}
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
                  onClick={() => setSelectedTime(time)}
                  className={`border font-medium py-2 px-3 rounded-none text-xs text-center transition-all cursor-pointer ${
                    selectedTime === time
                      ? 'border-brand-red bg-brand-red text-white shadow-md'
                      : 'bg-brand-soft border-brand-border hover:border-brand-red hover:bg-brand-red/5 text-brand-black'
                  }`}
                >
                  {time.split(' ')[0]}
                  <span className={`text-[9px] block font-bold uppercase mt-0.5 ${selectedTime === time ? 'text-white/80' : 'text-brand-muted'}`}>
                    {time.split(' ')[1]}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-brand-muted text-xs">
              {film.status === 'upcoming' 
                ? 'Showtimes will be announced closer to release date.' 
                : 'No showtimes available for this date.'}
            </p>
          )}

          {film.status !== 'upcoming' && (
            <Button
              variant="danger"
              size="md"
              onClick={() => setShowTicketModal(true)}
              disabled={!selectedTime}
              className="w-full font-bold shadow-lg shadow-brand-red/10 mt-2 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              icon={<Ticket className="w-4 h-4" />}
            >
              {selectedTime ? `Book ${selectedTime}` : 'Select a Time'}
            </Button>
          )}
        </div>
      </div>

      {/* Ticket Selection Modal */}
      <AnimatePresence>
        {showTicketModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white text-brand-black p-8 rounded-none max-w-sm w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowTicketModal(false)}
                className="absolute top-4 right-4 text-brand-muted hover:text-brand-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <h3 className="font-display font-bold text-2xl mb-2 text-brand-black">
                Select Tickets
              </h3>
              <p className="text-sm text-brand-muted mb-6">
                Booking for <span className="font-bold text-brand-red">{selectedDate}</span> at <span className="font-bold text-brand-red">{selectedTime}</span>
              </p>
              
              <div className="flex items-center justify-between mb-8 bg-brand-soft p-4 border border-brand-border">
                <span className="font-bold uppercase tracking-widest text-xs">Number of Tickets</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-white border border-brand-border hover:border-brand-red text-lg font-bold transition-colors"
                  >-</button>
                  <span className="font-bold text-xl w-6 text-center">{ticketCount}</span>
                  <button 
                    onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                    className="w-8 h-8 flex items-center justify-center bg-white border border-brand-border hover:border-brand-red text-lg font-bold transition-colors"
                  >+</button>
                </div>
              </div>
              
              <Button
                variant="danger"
                className="w-full rounded-none font-bold"
                onClick={handleConfirmTickets}
                icon={<Ticket className="w-4 h-4" />}
              >
                Confirm {ticketCount} Ticket{ticketCount > 1 ? 's' : ''}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSeatPicker && selectedTime && (
          <SeatPicker
            film={film}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            ticketCount={ticketCount}
            onClose={() => setShowSeatPicker(false)}
            onProceed={handleProceedBooking}
          />
        )}
      </AnimatePresence>

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
                Our online seat picker is coming soon. Please call Majestic Cineplex at <a href="tel:+94112501444" className="underline font-bold text-brand-red">+94 11 250 1444</a> to reserve your {ticketCount} ticket{ticketCount > 1 ? 's' : ''} for {selectedTime}.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default FilmDetail
