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
    <section className="bg-brand-navy border-y border-white/5 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-left sm:border-l border-white/10 sm:pl-6 lg:[&:nth-child(4n+1)]:border-0 lg:[&:nth-child(4n+1)]:pl-0 md:[&:nth-child(2n+1)]:border-0 md:[&:nth-child(2n+1)]:pl-0 first:border-0 first:pl-0">
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
