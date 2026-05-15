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
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-black">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ImagePlaceholder gradient={event.imageGradient} aspectRatio="h-full" rounded="rounded-none" />
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-0 left-0 bg-brand-red text-white flex flex-col items-center justify-center rounded-none w-14 h-14 shadow-md select-none z-10">
          <span className="font-display font-black text-xl leading-none">{dayNum}</span>
          <span className="font-body font-bold text-[9px] tracking-wider uppercase mt-0.5">{monthStr}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <Badge variant="surface" className="rounded-none bg-white/90 backdrop-blur-sm">{event.category}</Badge>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-5 text-left">
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-black leading-snug line-clamp-1 group-hover:text-brand-red transition-colors">
            {event.title}
          </h3>
          <p className="text-brand-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* Footer info and Share */}
        <div className="flex flex-col gap-4 pt-4 border-t border-brand-border mt-2">
          <div className="flex flex-col gap-2.5 text-[10px] font-bold text-brand-black uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-red" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          {/* Social Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
          >
            <Share2 className="w-3.5 h-3.5" /> Share Event
          </a>
        </div>
      </div>
    </div>
  )
}
export default EventCard
