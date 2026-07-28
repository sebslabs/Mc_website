'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Calendar, Ticket, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import logo from '@/logo.png'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Stores', href: '/stores' },
    { name: 'Cinema', href: '/cinema' },
    { name: 'Dining', href: '/dining' },
    { name: 'Events', href: '/events' },
    { name: 'Offers', href: '/offers' },
    { name: 'KISS FM', href: '/kissfm' },
    { name: 'Visit', href: '/visit' }
  ]

  const isActive = (path: string) => pathname === path

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 left-0 right-0 w-full h-[72px] bg-white border-b border-brand-border ${
          isScrolled
            ? 'top-0 shadow-xl'
            : 'top-0 shadow-md'
        }`}
      >
        <div className="w-full h-full flex items-stretch justify-between">
          <Link href="/" className="flex items-center group select-none px-6 lg:px-8 border-r border-brand-red/20 shrink-0">
            <Image
              src={logo}
              alt="Majestic City Logo"
              height={50}
              className="h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-stretch overflow-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-center font-display text-[11px] lg:text-xs font-bold uppercase tracking-widest transition-all relative px-3 lg:px-6 border-r border-brand-red/20 ${
                  isActive(link.href) ? 'text-brand-red bg-white/60' : 'text-brand-black/70 hover:bg-black/5 hover:text-brand-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-stretch shrink-0">
            <Link
              href="/cinema"
              className="flex items-center justify-center gap-3 bg-[#FF3B30] text-white hover:bg-[#D62828] transition-colors px-6 lg:px-10 h-full w-full shadow-md"
            >
              <Ticket className="w-5 h-5 shrink-0" strokeWidth={2} />
              <div className="font-display font-bold text-sm tracking-wide whitespace-nowrap">
                Booking Now Cinema Ticket
              </div>
            </Link>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex md:hidden items-center px-6 border-l border-brand-red/20">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-brand-black/80 hover:text-brand-red p-2 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-navy/95 z-50 flex flex-col pt-24 px-6 pb-12 overflow-y-auto"
          >
            {/* Top Logo */}
            <div className="absolute top-6 left-6">
              <Image 
                src={logo} 
                alt="Majestic City" 
                height={40} 
                className="h-10 w-auto object-contain brightness-0 invert opacity-90" 
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-brand-red p-2 transition-colors focus:outline-none bg-white/5 rounded-full"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 mt-4 flex-grow justify-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="border-b border-white/10 pb-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center justify-between font-display font-black text-3xl uppercase tracking-wider transition-all ${
                      isActive(link.href) ? 'text-brand-red' : 'text-white hover:text-brand-red'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-6 h-6 transition-all duration-300 ${isActive(link.href) ? 'opacity-100 translate-x-0 text-brand-red' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.2 }}
                className="mt-6 flex flex-col gap-8"
              >
                <Link
                  href="/cinema"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-brand-red text-white hover:bg-brand-red/80 transition-colors px-6 py-4 w-full shadow-lg"
                >
                  <Ticket className="w-6 h-6 shrink-0" strokeWidth={2} />
                  <div className="font-display font-bold text-sm tracking-widest uppercase whitespace-nowrap">
                    Booking Now Cinema Ticket
                  </div>
                </Link>

                <div className="flex flex-col gap-2 text-center text-white/50 text-[10px] tracking-widest uppercase font-bold">
                  <p>10 Station Road, Colombo 04</p>
                  <p>+94 11 250 1444</p>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar
