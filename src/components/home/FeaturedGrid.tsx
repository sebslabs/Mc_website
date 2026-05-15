import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  ImagePlaceholder,
  FILM_GRADIENT,
  EVENT_GRADIENT,
  FOOD_GRADIENT,
  SOCIAL_GRADIENT
} from '../ui/ImagePlaceholder'

export const FeaturedGrid: React.FC = () => {
  const sections = [
    {
      title: 'Majestic Cineplex',
      subtitle: 'Premium Screens & Big Sounds',
      href: '/cinema',
      gradient: FILM_GRADIENT,
      label: 'Cinema',
      videoUrl: '/cinama.mp4'
    },
    {
      title: 'KISS FM at MC',
      subtitle: 'Live Radio in the Atrium',
      href: '/kissfm',
      gradient: SOCIAL_GRADIENT,
      label: 'KISS FM',
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80',
      videoUrl: '/kissfm.mp4'
    },
    {
      title: 'Dining & Food Hall',
      subtitle: 'Sizzling Local & Global Eats',
      href: '/dining',
      gradient: FOOD_GRADIENT,
      label: 'Dining',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
      videoUrl: '/food.mp4'
    },
    {
      title: 'Events & Happenings',
      subtitle: 'What’s On This Week',
      href: '/events',
      gradient: EVENT_GRADIENT,
      label: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="py-6 w-full px-2 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
        {sections.map((sec) => (
          <Link
            key={sec.title}
            href={sec.href}
            className="group relative flex flex-col justify-end overflow-hidden rounded-none aspect-[4/5] md:aspect-[4/5] shadow-lg cursor-pointer border border-white/5"
          >
            {/* Media/Background Placeholder */}
            <div className="absolute inset-0 transition-transform duration-500 md:group-hover:scale-105 bg-brand-black">
              {(sec as any).videoUrl ? (
                <video 
                  src={(sec as any).videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity" 
                />
              ) : (
                <ImagePlaceholder gradient={sec.gradient} imageUrl={sec.imageUrl} aspectRatio="h-full" rounded="rounded-none" />
              )}
            </div>

            {/* Dark Hover Overlay - Desktop Only */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-0 hidden md:block md:group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="relative z-10 p-4 md:p-6 m-3 md:m-0 rounded-none text-left flex flex-col gap-1 text-white bg-black/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border border-white/10 md:border-none transform translate-y-0 opacity-100 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
              <span className="text-[10px] md:text-xs font-bold uppercase text-brand-red tracking-widest">
                {sec.label}
              </span>
              <h3 className="font-display font-extrabold text-lg md:text-xl tracking-wide md:group-hover:text-brand-red transition-colors">
                {sec.title}
              </h3>
              <p className="text-white/70 text-xs font-light tracking-wide line-clamp-1">
                {sec.subtitle}
              </p>

              {/* Bouncing Arrow Link Indicator */}
              <div className="mt-3 flex items-center justify-center w-8 h-8 rounded-none bg-brand-red/90 text-brand-navy md:bg-white/10 md:text-white md:group-hover:bg-brand-red md:group-hover:text-brand-navy transition-colors self-start">
                <ArrowUpRight className="w-4 h-4 transition-transform md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default FeaturedGrid
