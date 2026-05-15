import React from 'react'
import { Sparkles, Calendar, Mic, Radio, Award } from 'lucide-react'

export const AtriumEvents: React.FC = () => {
  const eventsList = [
    {
      icon: <Radio className="w-5 h-5 text-brand-red" />,
      title: 'Audience Mic Hour',
      desc: 'Step into the live glass studio every Wednesday at 08:30 AM! Participate in the Morning Rush quizzes, speak on the radio, and win immediate LKR 5,000 shopping vouchers.'
    },
    {
      icon: <Mic className="w-5 h-5 text-brand-red" />,
      title: 'Atrium Acoustic Jams',
      desc: 'Join us on Saturday afternoons for unplugged acoustic sessions featuring local indie singers and songwriters, broadcasting live directly to the nation.'
    },
    {
      icon: <Award className="w-5 h-5 text-brand-red" />,
      title: 'Friday DJ Mix Session',
      desc: 'Vibe with DJ Roshan and DJ Tharuka as they perform high-energy electronic mixes in the center atrium from 06:00 PM to 09:00 PM, kicking off the weekend in style.'
    }
  ]

  return (
    <section className="bg-brand-soft border border-brand-border rounded-none p-6 md:p-10 text-left flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-brand-red font-bold tracking-widest uppercase">Atrium Experiences</span>
        <h3 className="font-display font-extrabold text-brand-black text-xl md:text-2xl tracking-wide uppercase">
          KISS FM Studio & Atrium Events
        </h3>
        <p className="text-brand-muted text-xs sm:text-sm font-light leading-relaxed">
          The central atrium of Majestic City is now home to the custom-built, acoustic double-glazed glass studio of KISS FM. This interactive broadcasting space merges online radio and live mall entertainment, hosting regular listener meetups, live acoustic gigs, and on-air competitions that bridge the gap between shoppers and their favorite DJs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-brand-border">
        {eventsList.map((ev, idx) => (
          <div key={idx} className="flex flex-col gap-4 bg-white border border-brand-border p-5 rounded-none shadow-sm">
            <div className="w-10 h-10 shrink-0 bg-brand-red/5 border border-brand-red/10 rounded-none flex items-center justify-center text-brand-red select-none">
              {ev.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-display font-bold text-sm text-brand-black">{ev.title}</h4>
              <p className="text-brand-muted text-xs leading-relaxed font-light">{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default AtriumEvents
