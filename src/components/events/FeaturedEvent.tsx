'use client'

import React from 'react'
import { Sparkles, MapPin, Clock, Share2 } from 'lucide-react'
import { Event } from '@/lib/types'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

interface FeaturedEventProps {
  event: Event
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({ event }) => {
  const eventDate = new Date(event.date)
  const dayNum = eventDate.getDate()
  const monthStr = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()

  const shareText = `Hey! Look at this featured event at Majestic City: "${event.title}" on ${event.date} at ${event.time} in ${event.location}! Let's join the fun!`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <div className="group relative bg-white rounded-none overflow-hidden border border-brand-border shadow-lg hover:shadow-xl transition-all duration-500 w-full mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Gradient Banner */}
        <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-[450px] overflow-hidden bg-brand-black">
          <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ease-out">
            <ImagePlaceholder gradient={event.imageGradient} aspectRatio="h-full" rounded="rounded-none" />
          </div>
          
          {/* Date Block */}
          <div className="absolute top-0 left-0 bg-brand-red text-white flex flex-col items-center justify-center rounded-none w-20 h-20 shadow-lg select-none z-10">
            <span className="font-display font-black text-3xl leading-none">{dayNum}</span>
            <span className="font-body font-bold text-[10px] tracking-wider uppercase mt-1">{monthStr}</span>
          </div>

          <div className="absolute bottom-6 left-6 z-10 flex gap-2 items-center">
            <div className="bg-white text-brand-red border border-brand-border flex items-center gap-2 px-4 py-2 rounded-none text-xs font-extrabold tracking-widest uppercase shadow-md">
              <Sparkles className="w-4 h-4 text-brand-red fill-brand-red/20" /> FEATURED
            </div>
            <Badge variant="surface" className="rounded-none px-4 py-2 h-auto text-xs">{event.category}</Badge>
          </div>
        </div>

        {/* Right Side: Event Details */}
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center items-start text-left gap-8 border-t lg:border-t-0 lg:border-l border-brand-border bg-white">
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-extrabold text-2xl md:text-4xl text-brand-black tracking-tight leading-tight group-hover:text-brand-red transition-colors">
              {event.title}
            </h3>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed font-normal">
              {event.description}
            </p>
          </div>

          {/* Time & Location */}
          <div className="flex flex-col gap-3.5 text-xs md:text-sm font-bold text-brand-black uppercase tracking-wider w-full pb-6 border-b border-brand-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-soft flex items-center justify-center rounded-none">
                <Clock className="w-4 h-4 text-brand-red" />
              </div>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-soft flex items-center justify-center rounded-none">
                <MapPin className="w-4 h-4 text-brand-red" />
              </div>
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          {/* Share & Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <Button variant="danger" size="lg" href="/visit" className="w-full font-bold shadow-lg shadow-brand-red/20 rounded-none">
              Plan Your Visit
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg text-center cursor-pointer active:scale-[0.98]"
            >
              <Share2 className="w-4 h-4 shrink-0" /> Share Event
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeaturedEvent
