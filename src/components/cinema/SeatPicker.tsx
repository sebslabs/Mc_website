'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, Edit } from 'lucide-react'
import Image from 'next/image'
import { Film } from '@/lib/types'

interface SeatPickerProps {
  film: Film
  selectedDate: string
  selectedTime: string
  ticketCount: number
  onClose: () => void
  onProceed: () => void
}

const ROWS = ['I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
const LEFT_COLS = [1, 2, 3, 4, 5, 6, 7]
const RIGHT_COLS = [8, 9, 10, 11, 12, 13, 14, 15]

// Deterministic random for mock occupied seats
const isOccupied = (r: string, c: number) => {
  const hash = r.charCodeAt(0) * c * 17
  return hash % 100 > 85 // roughly 15% occupied
}

export const SeatPicker: React.FC<SeatPickerProps> = ({
  film,
  selectedDate,
  selectedTime,
  ticketCount,
  onClose,
  onProceed
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(prev => prev.filter(s => s !== seatId))
    } else {
      if (selectedSeats.length < ticketCount) {
        setSelectedSeats(prev => [...prev, seatId])
      } else {
        // If they click another when full, maybe replace the last one or do nothing
        // Simple behavior: just do nothing, force them to deselect first
      }
    }
  }

  const renderSeat = (row: string, col: number) => {
    const seatId = `${row}${col}`
    const occupied = isOccupied(row, col)
    const selected = selectedSeats.includes(seatId)

    // A few seats might be 'missing' to create staggered shapes, we'll keep it simple block here
    // but maybe omit I8-I15 for styling
    if (row === 'I' && col > 9) return <div key={seatId} className="w-6 h-6 md:w-8 md:h-8" />

    return (
      <button
        key={seatId}
        disabled={occupied}
        onClick={() => handleSeatClick(seatId)}
        className={`w-6 h-6 md:w-8 md:h-8 rounded-sm text-[8px] md:text-[10px] font-bold flex items-center justify-center transition-all
          ${occupied ? 'bg-[#E53935] text-white border border-[#E53935] cursor-not-allowed opacity-90' : 
            selected ? 'bg-[#00E676] text-[#0B0D21] border border-[#00E676] scale-110 shadow-[0_0_10px_rgba(0,230,118,0.5)]' : 
            'bg-transparent border border-white/30 text-white/70 hover:border-white hover:text-white'
          }
        `}
      >
        {seatId}
      </button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[200] bg-[#0B0D21] flex flex-col font-display selection:bg-brand-red selection:text-white"
    >
      {/* Top Header */}
      <div className="bg-[#EAEAEA] text-brand-black px-4 py-2 flex justify-between items-center h-20 shrink-0">
        <div className="flex items-center gap-4">
          {film.poster && (
            <div className="w-12 h-16 relative shadow-md">
              <Image src={film.poster} alt={film.title} fill className="object-cover" />
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="font-black text-xl tracking-tight uppercase leading-none mb-1">
              {film.title}
            </h2>
            <div className="text-[10px] md:text-xs font-semibold text-brand-black/70 tracking-wider">
              {film.genre.toUpperCase()} | {film.runtime} MINS | {film.cinema.toUpperCase()} | {selectedDate} | {selectedTime}
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Sub Header (Showtimes bar) */}
      <div className="bg-[#1A1C36] text-white border-b border-white/10 px-4 md:px-12 py-3 flex items-center justify-between shadow-lg z-10 shrink-0">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <button onClick={onClose} className="flex items-center gap-1 text-brand-gold font-bold text-sm mr-4 tracking-wider uppercase shrink-0">
            <ChevronLeft className="w-5 h-5" /> Available Showtimes
          </button>
          <div className="flex gap-2">
            {film.sessions.find(s => s.date === selectedDate)?.times.map((time, idx) => (
              <div 
                key={idx}
                className={`px-4 py-2 text-xs font-bold border transition-colors shrink-0 ${
                  time === selectedTime 
                    ? 'bg-white text-[#1A1C36] border-white' 
                    : 'border-white/20 text-white/50'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-white/90 shrink-0 ml-4">
          <Edit className="w-4 h-4" />
          <span className="font-bold tracking-wider text-sm">{ticketCount} TICKET{ticketCount > 1 ? 'S' : ''}</span>
        </div>
      </div>

      {/* Main Seat Map Area */}
      <div className="flex-1 overflow-auto bg-[#0B0D21] relative flex flex-col items-center py-12 px-4 min-h-0">
        <div className="text-white/50 text-[10px] tracking-widest font-bold uppercase mb-12 border-b border-white/10 pb-4 text-center w-full max-w-4xl">
          Adult: LKR 1,500.00 | Child: LKR 1,400.00
        </div>

        {/* Seat Grid */}
        <div className="flex flex-col gap-3 md:gap-4 mb-24">
          {ROWS.map(row => (
            <div key={row} className="flex items-center justify-center gap-4 md:gap-8">
              <div className="text-white/40 font-bold w-4 text-center text-xs">{row}</div>
              
              <div className="flex gap-1.5 md:gap-2">
                {LEFT_COLS.map(col => renderSeat(row, col))}
              </div>
              
              <div className="w-6 md:w-12" /> {/* Aisle */}
              
              <div className="flex gap-1.5 md:gap-2">
                {RIGHT_COLS.map(col => renderSeat(row, col))}
              </div>

              <div className="text-white/40 font-bold w-4 text-center text-xs">{row}</div>
            </div>
          ))}
        </div>

        {/* Screen Curve */}
        <div className="w-full max-w-3xl mt-auto relative pt-20">
          <div className="absolute bottom-0 left-0 w-full h-24 border-b-4 border-brand-red rounded-[50%] opacity-20 pointer-events-none" style={{ borderBottomColor: '#E8B84B' }} />
          <div className="text-center text-white/30 text-[10px] font-bold tracking-[0.5em] pb-4 uppercase">Screen</div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1A1C36] border-t border-white/10 p-4 shrink-0">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Legend */}
          <div className="flex items-center gap-6 text-xs text-white/80 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#00E676] rounded-sm" /> Selected
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-white/30 rounded-sm" /> Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#E53935] rounded-sm" /> Occupied
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={onClose}
              className="flex-1 md:flex-none border border-white/20 hover:bg-white/5 text-white px-10 py-3 font-bold text-sm tracking-wider uppercase transition-colors"
            >
              Back
            </button>
            <button 
              onClick={onProceed}
              disabled={selectedSeats.length !== ticketCount}
              className="flex-1 md:flex-none bg-[#EAEAEA] text-[#1A1C36] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white px-10 py-3 font-bold text-sm tracking-wider uppercase transition-colors"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default SeatPicker
