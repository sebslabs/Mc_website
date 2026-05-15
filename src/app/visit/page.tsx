import React from 'react'
import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import { MapPin, Clock, Car, Bus, Train, Phone, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: 'Find directions, opening hours, transport networks, basement parking rates, and customer amenities for your next trip to Majestic City Colombo.'
}

export default function VisitPage() {
  const directions = [
    {
      icon: <Bus className="w-5 h-5 text-brand-red" />,
      title: 'By Galle Road Bus',
      desc: 'Take any bus heading along Galle Road (Route 100, 101, etc.). Exit at the "Bambalapitiya Junction" or "Station Road" halt. Majestic City is just a 2-minute walk away.'
    },
    {
      icon: <Train className="w-5 h-5 text-brand-red" />,
      title: 'By Train',
      desc: 'Ride the Coastal Line train and disembark at the "Bambalapitiya Railway Station." Head up the Station Road staircase; Majestic City is directly on your right.'
    },
    {
      icon: <Car className="w-5 h-5 text-brand-red" />,
      title: 'By Car / Cab',
      desc: 'Pin "Majestic City, Colombo 04" on Google Maps. Enter our secure basement parking ramp from Station Road. Standard rates apply: LKR 100 per hour.'
    }
  ]

  const amenities = [
    { title: 'ATM Machines', desc: 'Commercial Bank, Sampath Bank, and HNB ATMs located on Level 1.' },
    { title: 'Information Helpdesk', desc: 'Located in the Ground Floor Atrium, adjacent to the KISS FM glass studio.' },
    { title: 'Secured Parking', desc: '250+ basement parking spots with 24/7 CCTV surveillance and security staff.' },
    { title: 'Pristine Washrooms', desc: 'Clean, regularly maintained rest areas located on every floor.' }
  ]

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="Welcome To MC"
            title="PLAN YOUR VISIT"
            subtitle="All the details you need to ensure a smooth, enjoyable shopping and dining experience at Colombo’s everyday hub."
            align="center"
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white border border-brand-border rounded-none p-8 text-left flex gap-5 items-center hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-soft rounded-none flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
              <Clock className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-brand-muted font-black uppercase tracking-[0.15em]">Opening Hours</span>
              <span className="font-display font-extrabold text-base text-brand-black">10:00 AM - 10:00 PM Daily</span>
            </div>
          </div>

          <div className="bg-white border border-brand-border rounded-none p-8 text-left flex gap-5 items-center hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-soft rounded-none flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-brand-muted font-black uppercase tracking-[0.15em]">Location Address</span>
              <span className="font-display font-extrabold text-base text-brand-black">Station Road, Colombo 04</span>
            </div>
          </div>

          <div className="bg-white border border-brand-border rounded-none p-8 text-left flex gap-5 items-center hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-soft rounded-none flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
              <Phone className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-brand-muted font-black uppercase tracking-[0.15em]">Management Office</span>
              <span className="font-display font-extrabold text-base text-brand-black">+94 11 250 1444</span>
            </div>
          </div>
        </div>

        {/* Getting Here Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Col: list of directions */}
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-brand-red font-black uppercase tracking-[0.2em]">TRAVEL & TRANSPORT</span>
              <h3 className="font-display font-black text-3xl md:text-4xl text-brand-black tracking-tight leading-none uppercase">
                Getting To Majestic City
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed font-normal mt-2 max-w-xl">
                Positioned in the heart of Bambalapitiya, Majestic City is one of the most accessible destinations in the capital. Arriving here is straightforward via road or rail.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              {directions.map((d, idx) => (
                <div key={idx} className="flex gap-5 bg-white border border-brand-border p-6 rounded-none shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-soft rounded-none flex items-center justify-center text-brand-red shrink-0">
                    {d.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display font-extrabold text-base text-brand-black tracking-tight">{d.title}</h4>
                    <p className="text-brand-muted text-xs leading-relaxed font-normal">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Amenities Checklist */}
          <div className="bg-brand-black text-white rounded-none p-8 md:p-12 flex flex-col gap-8 text-left relative overflow-hidden shadow-2xl h-full flex-grow border border-white/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col gap-3 z-10">
              <span className="text-brand-red text-[10px] font-black uppercase tracking-[0.2em]">CONVENIENCE & SERVICE</span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight uppercase">
                Customer Amenities
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-normal leading-relaxed mt-1">
                We aim to make your everyday outing completely comfortable. Enjoy world-class assistance while you visit us.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4 z-10 flex-grow justify-center">
              {amenities.map((a, idx) => (
                <div key={idx} className="flex gap-4 items-start border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 fill-brand-red/20" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-extrabold text-sm text-white tracking-wide uppercase">{a.title}</span>
                    <span className="text-white/60 text-xs font-normal leading-relaxed">{a.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
