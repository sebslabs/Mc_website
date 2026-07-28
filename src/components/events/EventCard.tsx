'use client'

import React from 'react'
import { Share2, Clock, MapPin } from 'lucide-react'
import { Event } from '@/lib/types'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'

interface EventCardProps {
  event: Event
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date)
  const dayNum = eventDate.getDate()
  const monthStr = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()

  const shareText = `Hey! Check out this awesome event at Majestic City: "${event.title}" on ${event.date} at ${event.time} located in ${event.location}. Let's go together!`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <div className="group bg-white rounded-none overflow-hidden border border-brand-border flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      {/* Visual Placeholder Header */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-black">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ImagePlaceholder gradient={event.imageGradient} aspectRatio="h-full" rounded="rounded-none" />
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-0 left-0 bg-brand-red text-white flex flex-col items-center justify-center rounded-none w-14 h-14 shadow-md select-none z-10">
          <span className="font-display font-black text-xl leading-none">{dayNum}</span>
          <span className="font-body font-bold text-[9px] tracking-wider uppercase mt-0.5">{monthStr}</span>
        </div>

        {/* Hover Overlay with Content */}
        <div className="absolute inset-0 bg-brand-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-white">
          <h3 className="font-display font-extrabold text-lg sm:text-xl leading-snug line-clamp-1 mb-2 text-white">
            {event.title}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
            {event.description}
          </p>
          
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-red" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventCard
