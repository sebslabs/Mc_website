'use client'

import React from 'react'
import { Film, Calendar, MapPin, Clock } from 'lucide-react'

export default function QuickBookBar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16 relative z-30 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            {/* Left Section: Label & Toggle */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <span className="font-display font-black text-xl text-brand-black uppercase tracking-wider">Quick Book</span>
              <div className="bg-brand-red text-white px-3 py-1 rounded-none text-xs font-bold uppercase tracking-wide shadow-sm">
                Movies
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:flex-1">
              
              {/* Movie Select */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-hover:text-brand-red transition-colors">
                  <Film className="w-4 h-4" />
                </div>
                <select className="w-full appearance-none bg-white/50 border border-gray-200 text-gray-900 py-3 pl-11 pr-10 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-medium transition-all hover:bg-white cursor-pointer shadow-sm text-sm">
                  <option value="" disabled selected hidden>Select Movie</option>
                  <option value="deadpool">Deadpool & Wolverine</option>
                  <option value="inside-out">Inside Out 2</option>
                  <option value="dune">Dune: Part Two</option>
                  <option value="oppenheimer">Oppenheimer</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              {/* Date Select */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-hover:text-brand-red transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <select className="w-full appearance-none bg-white/50 border border-gray-200 text-gray-900 py-3 pl-11 pr-10 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-medium transition-all hover:bg-white cursor-pointer shadow-sm text-sm">
                  <option value="" disabled selected hidden>Select Date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              {/* Cinema Select */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-hover:text-brand-red transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <select className="w-full appearance-none bg-white/50 border border-gray-200 text-gray-900 py-3 pl-11 pr-10 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-medium transition-all hover:bg-white cursor-pointer shadow-sm text-sm">
                  <option value="" disabled selected hidden>Select Cinema</option>
                  <option value="mc-colombo">Majestic City - Colombo</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              {/* Timing Select */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-hover:text-brand-red transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <select className="w-full appearance-none bg-white/50 border border-gray-200 text-gray-900 py-3 pl-11 pr-10 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-medium transition-all hover:bg-white cursor-pointer shadow-sm text-sm">
                  <option value="" disabled selected hidden>Select Timing</option>
                  <option value="1030">10:30 AM</option>
                  <option value="1330">01:30 PM</option>
                  <option value="1630">04:30 PM</option>
                  <option value="1930">07:30 PM</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <button className="w-full lg:w-auto bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-none transition-all transform hover:scale-105 shrink-0 shadow-lg hover:shadow-red-500/30">
              Book Now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
