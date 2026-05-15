import React from 'react'

export const AnnouncementTicker: React.FC = () => {
  const tickerText = 'Now Open: Cargills Food Hall · Moose Clothing · Cool Planet · DSI · Revamped Cineplex · KISS FM Live Studio · '

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-brand-gold py-3 border-y border-brand-gold/20 select-none flex">
      <div className="animate-marquee inline-flex whitespace-nowrap min-w-full">
        {/* Render multiple copies to ensure full coverage and seamless wrapping */}
        <p className="font-display font-black text-xs sm:text-sm text-brand-navy uppercase tracking-[0.15em] shrink-0">
          {tickerText} {tickerText} {tickerText} {tickerText}
        </p>
        <p className="font-display font-black text-xs sm:text-sm text-brand-navy uppercase tracking-[0.15em] shrink-0">
          {tickerText} {tickerText} {tickerText} {tickerText}
        </p>
      </div>
    </div>
  )
}
export default AnnouncementTicker
