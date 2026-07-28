import React from 'react'
import { MapPin, Clock, Car, Headphones } from 'lucide-react'

export const VisitorInfoBar: React.FC = () => {
  const items = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-red shrink-0" />,
      title: 'Easy Location',
      desc: 'Station Rd, Colombo 04'
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-red shrink-0" />,
      title: 'Opening Hours',
      desc: '10:00 AM - 10:00 PM Daily'
    },
    {
      icon: <Car className="w-6 h-6 text-brand-red shrink-0" />,
      title: 'Basement Parking',
      desc: '250+ Secured Slots'
    },
    {
      icon: <Headphones className="w-6 h-6 text-brand-red shrink-0" />,
      title: 'Customer Service',
      desc: 'Helpdesk on Level 1'
    }
  ]

  return (
    <section className="bg-brand-navy border-y border-brand-red text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center sm:justify-start gap-4 text-left py-6 sm:py-8 lg:py-12 ${
                idx === 0 ? 'border-b border-brand-red/50 lg:border-b-0 lg:pr-8' : 
                idx === 1 ? 'border-b border-brand-red/50 lg:border-b-0 sm:border-l sm:border-brand-red/50 sm:pl-8 lg:px-8' : 
                idx === 2 ? 'border-b border-brand-red/50 sm:border-b-0 lg:border-l lg:border-brand-red/50 lg:px-8' : 
                'sm:border-l sm:border-brand-red/50 sm:pl-8 lg:pl-8'
              }`}
            >
              {item.icon}
              <div className="flex flex-col">
                <span className="font-display font-black text-sm uppercase tracking-wider text-white">
                  {item.title}
                </span>
                <span className="text-white/60 text-xs mt-0.5 leading-snug">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default VisitorInfoBar
