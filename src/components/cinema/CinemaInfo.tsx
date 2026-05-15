import React from 'react'
import { Disc, Users, Tv, Volume2, Shield, Sparkles } from 'lucide-react'

export const CinemaInfo: React.FC = () => {
  const screens = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-red" />,
      title: 'Platinum Screen',
      desc: 'Our premier screen featuring 445 luxurious seats, a massive silver screen, and world-class 4K laser projection.'
    },
    {
      icon: <Tv className="w-5 h-5 text-brand-red" />,
      title: 'Gold Screen',
      desc: 'An intimate 120-seat auditorium equipped with plush, fully reclining leather chairs for ultimate comfort.'
    },
    {
      icon: <Volume2 className="w-5 h-5 text-brand-red" />,
      title: 'Ultra Screen',
      desc: 'Features 180 seats and a fully calibrated Dolby Digital soundscape, perfect for high-octane thrillers.'
    },
    {
      icon: <Users className="w-5 h-5 text-brand-red" />,
      title: 'Deluxe Screen',
      desc: 'Comfortable 150 seats with crisp active 3D projection, ideal for family blockbusters and animation.'
    }
  ]

  return (
    <section className="bg-brand-soft border border-brand-border rounded-none p-6 md:p-10 text-left flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-brand-red font-bold tracking-widest uppercase">The MC Experience</span>
        <h3 className="font-display font-extrabold text-brand-black text-xl md:text-2xl tracking-wide uppercase">
          Welcome to Majestic Cineplex
        </h3>
        <p className="text-brand-muted text-xs sm:text-sm font-light leading-relaxed">
          The Majestic Cineplex has been Colombo’s favorite silver screen destination for over two decades. Following our major renovation, all four theaters feature advanced digital projection, crisp acoustics, and pristine luxury seating options to keep your cinematic experiences absolutely unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4 border-t border-brand-border">
        {screens.map((screen, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-brand-red/5 border border-brand-red/10 rounded-none flex items-center justify-center text-brand-red select-none">
              {screen.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-display font-bold text-sm text-brand-black">{screen.title}</h4>
              <p className="text-brand-muted text-xs leading-relaxed font-light">{screen.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default CinemaInfo
