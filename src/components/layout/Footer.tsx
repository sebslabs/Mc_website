import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react'
import logo from '@/logo.png'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 text-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center select-none">
            <Image
              src={logo}
              alt="Majestic City Logo"
              height={48}
              className="h-12 w-auto object-contain hover:scale-105 transition-transform"
              priority
            />
          </Link>
          <p className="text-white/60 text-sm font-body mt-2 leading-relaxed">
            Colombo’s most exciting everyday destination — where you shop, eat, catch a movie, and vibe to KISS FM, all without breaking the bank.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" className="text-white/70 hover:text-brand-red transition-colors p-2 bg-white/5 border border-white/10 rounded-none hover:bg-brand-red/10" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" className="text-white/70 hover:text-brand-red transition-colors p-2 bg-white/5 border border-white/10 rounded-none hover:bg-brand-red/10" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-white/70 hover:text-brand-red transition-colors p-2 bg-white/5 border border-white/10 rounded-none hover:bg-brand-red/10" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-display font-bold text-white tracking-wider uppercase text-sm mb-6">
            Explore
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li><Link href="/stores" className="hover:text-brand-red transition-colors">Store Directory</Link></li>
            <li><Link href="/cinema" className="hover:text-brand-red transition-colors">Majestic Cineplex</Link></li>
            <li><Link href="/dining" className="hover:text-brand-red transition-colors">Dining & Food Court</Link></li>
            <li><Link href="/events" className="hover:text-brand-red transition-colors">Events & Happenings</Link></li>
            <li><Link href="/offers" className="hover:text-brand-red transition-colors">Promotions & Offers</Link></li>
          </ul>
        </div>

        {/* Mall Info Links */}
        <div>
          <h4 className="font-display font-bold text-white tracking-wider uppercase text-sm mb-6">
            Mall Info
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li><Link href="/visit" className="hover:text-brand-red transition-colors">Plan Your Visit</Link></li>
            <li><Link href="/about" className="hover:text-brand-red transition-colors">About Majestic City</Link></li>
            <li><Link href="/news" className="hover:text-brand-red transition-colors">News & Stories</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red transition-colors">Leasing & Inquiries</Link></li>
            <li><Link href="/map" className="hover:text-brand-red transition-colors">Interactive Mall Map</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-display font-bold text-white tracking-wider uppercase text-sm mb-6">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <span>10 Station Road, Galle Road, Colombo 04, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
              <span>+94 11 250 1444</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
              <span>info@majesticcity.lk</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mall Hours:</p>
                <p>10:00 AM - 10:00 PM Daily</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2026 Majestic City Colombo. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Powered by <span className="font-bold text-brand-red">KISS FM</span> • Colombo’s #1 Hit Music Station.
        </p>
      </div>
    </footer>
  )
}
export default Footer
