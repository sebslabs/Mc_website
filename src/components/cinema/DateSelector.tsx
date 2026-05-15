'use client'

import React, { useMemo } from 'react'

interface DateSelectorProps {
  selectedDate: string
  onDateChange: (date: string) => void
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  onDateChange
}) => {
  const dates = useMemo(() => {
    const list = []
    const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    for (let i = 0; i < 7; i++) {
      const d = new Date()
      d.setDate(d.getDate() + i)
      
      const isoString = d.toISOString().split('T')[0]
      const dayName = daysName[d.getDay()]
      const dateNum = d.getDate().toString().padStart(2, '0')
      
      list.push({
        iso: isoString,
        dayName,
        dateNum,
        isToday: i === 0
      })
    }
    return list
  }, [])

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
      {dates.map((date) => {
        const isActive = selectedDate === date.iso
        return (
          <button
            key={date.iso}
            onClick={() => onDateChange(date.iso)}
            className={`flex flex-col items-center justify-center p-3 w-16 h-20 shrink-0 transition-all cursor-pointer ${
              isActive
                ? 'bg-brand-red text-white font-bold rounded-none scale-105 shadow-lg shadow-brand-red/10'
                : 'bg-brand-soft text-brand-black/70 hover:bg-brand-border border border-brand-border rounded-none'
            }`}
          >
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white/80' : 'text-brand-muted'}`}>
              {date.isToday ? 'Today' : date.dayName}
            </span>
            <span className="text-xl font-display font-black tracking-tight mt-1">
              {date.dateNum}
            </span>
          </button>
        )
      })}
    </div>
  )
}
export default DateSelector
