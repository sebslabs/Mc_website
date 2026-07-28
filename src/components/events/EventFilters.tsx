'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Event } from '@/lib/types'
import EventCard from './EventCard'

interface EventFiltersProps {
  allEvents: Event[]
}

export const EventFilters: React.FC<EventFiltersProps> = ({ allEvents }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'This Week', value: 'this-week' },
    { label: 'This Month', value: 'this-month' },
    { label: 'Free Entry', value: 'free' },
    { label: 'Family & Kids', value: 'family' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Food Festivals', value: 'food' }
  ]

  const filteredEvents = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const oneWeekLater = new Date()
    oneWeekLater.setDate(today.getDate() + 7)
    oneWeekLater.setHours(23, 59, 59, 999)

    const oneMonthLater = new Date()
    oneMonthLater.setMonth(today.getMonth() + 1)
    oneMonthLater.setHours(23, 59, 59, 999)

    return allEvents.filter((ev) => {
      const evDate = new Date(ev.date)
      
      switch (activeFilter) {
        case 'all':
          return true
        case 'this-week':
          return evDate >= today && evDate <= oneWeekLater
        case 'this-month':
          return evDate >= today && evDate <= oneMonthLater
        case 'free':
          return ev.isFree || ev.category === 'free'
        case 'family':
          return ev.category === 'family'
        case 'entertainment':
          return ev.category === 'entertainment'
        case 'food':
          return ev.category === 'food'
        default:
          return true
      }
    })
  }, [allEvents, activeFilter])

  return (
    <div className="flex flex-col gap-12">
      {/* Filters List */}
      <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar justify-start md:justify-center">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-6 py-3 rounded-none text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap border transition-all cursor-pointer active:scale-95 ${
              activeFilter === f.value
                ? 'bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/10'
                : 'bg-white border-brand-border text-brand-muted hover:border-brand-red hover:text-brand-red'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredEvents.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredEvents.map((ev) => (
                <motion.div
                  key={ev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <EventCard event={ev} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center py-24 border border-dashed border-brand-border bg-brand-surface rounded-none text-center gap-6"
            >
              <div className="w-16 h-16 bg-white border border-brand-border rounded-none flex items-center justify-center text-brand-red shadow-sm">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-display font-extrabold text-xl text-brand-black uppercase tracking-widest">
                  No Events Found
                </h4>
                <p className="text-brand-muted text-sm mt-1 max-w-sm font-normal leading-relaxed">
                  We could not find events under this category right now. Check back later or view our current featured event!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default EventFilters
