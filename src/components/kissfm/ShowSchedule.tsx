'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Radio, Calendar, Sparkles } from 'lucide-react'
import { schedule } from '@/lib/kissfm-data'
import { useKissFmStore } from '@/store/useKissFmStore'

export const ShowSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>('mon')
  const { currentShow } = useKissFmStore()

  const days: Array<{ label: string; value: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' }> = [
    { label: 'Mon', value: 'mon' },
    { label: 'Tue', value: 'tue' },
    { label: 'Wed', value: 'wed' },
    { label: 'Thu', value: 'thu' },
    { label: 'Fri', value: 'fri' },
    { label: 'Sat', value: 'sat' },
    { label: 'Sun', value: 'sun' }
  ]

  // Auto select today on mount
  useEffect(() => {
    const daysMap: Array<'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'> = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const todayIndex = new Date().getDay()
    setActiveDay(daysMap[todayIndex])
  }, [])

  // Filter shows for selected day and sort them by start time
  const dayShows = schedule.filter((show) => show.day === activeDay).sort((a, b) => a.startTime.localeCompare(b.startTime))

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
      {/* 7-Day Tab bar */}
      <div className="border-b border-brand-border w-full">
        <div className="flex gap-6 overflow-x-auto no-scrollbar justify-start sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {days.map((day) => {
            const isActive = activeDay === day.value
            return (
              <button
                key={day.value}
                onClick={() => setActiveDay(day.value)}
                className={`pb-4 text-sm font-semibold uppercase tracking-wider relative whitespace-nowrap focus:outline-none cursor-pointer ${
                  isActive ? 'text-brand-red' : 'text-brand-muted hover:text-brand-black'
                }`}
              >
                {day.label}
                {isActive && (
                  <motion.div
                    layoutId="schedule-day-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Show Rows Grid */}
      <div className="flex flex-col gap-4 text-left">
        {dayShows.map((show) => {
          // Check if show matches current broadcast state
          const isLiveNow = currentShow.toLowerCase().includes(show.name.toLowerCase())

          return (
            <div
              key={show.id}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 rounded-none border transition-all ${
                isLiveNow
                  ? 'bg-brand-red/5 border-brand-red/30'
                  : 'bg-brand-soft border-brand-border hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                {isLiveNow ? (
                  <div className="relative shrink-0 w-3 h-3 mt-1.5">
                    <span className="absolute inset-0 rounded-full bg-brand-red animate-ping" />
                    <span className="absolute inset-0 rounded-full bg-brand-red" />
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-none bg-brand-border mt-2 shrink-0" />
                )}

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className={`font-display font-black text-base sm:text-lg ${isLiveNow ? 'text-brand-red' : 'text-brand-black'}`}>
                      {show.name}
                    </h4>
                    {isLiveNow && (
                      <span className="bg-brand-red/20 border border-brand-red/30 text-brand-red font-bold text-[9px] px-2 py-0.5 rounded-none uppercase tracking-wider">
                        LIVE NOW
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-brand-muted font-semibold">with {show.host}</span>
                  <p className="text-brand-muted text-xs sm:text-sm font-light leading-relaxed mt-2 max-w-2xl">
                    {show.description}
                  </p>
                </div>
              </div>

              {/* Time Indicator */}
              <div className="mt-4 sm:mt-0 font-mono font-bold text-xs sm:text-sm text-brand-red bg-white border border-brand-border px-4 py-2 rounded-none shrink-0 self-start sm:self-auto uppercase tracking-wider">
                {show.startTime} - {show.endTime}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ShowSchedule
