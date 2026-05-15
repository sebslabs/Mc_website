'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Calendar } from 'lucide-react'
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
        className={`fixed z-50 transition-all duration-500 left-4 right-4 mx-auto rounded-none border backdrop-blur-xl ${
          isScrolled
            ? 'max-w-5xl top-4 bg-white/90 py-2.5 shadow-xl border-black/5'
            : 'max-w-6xl top-6 bg-white/50 py-3.5 shadow-md border-black/5'
        }`}
      >
        <div className="w-full px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group select-none py-1">
            <Image
              src={logo}
              alt="Majestic City Logo"
              height={50}
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-black/[0.03] border border-black/5 rounded-none p-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-display text-xs font-bold uppercase tracking-widest transition-all relative px-4 py-2 rounded-none ${
                  isActive(link.href) ? 'text-white font-black' : 'text-brand-black/60 hover:text-brand-black'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 bg-brand-red rounded-none -z-10 shadow-lg shadow-brand-red/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/stores" className="text-brand-black/60 hover:text-brand-red hover:scale-110 transition-all p-2">
              <Search className="w-5 h-5" />
            </Link>
            <Button
              variant="danger"
              size="sm"
              href="/visit"
              className="rounded-none font-bold tracking-wider text-xs px-5 py-2 hover:shadow-lg hover:shadow-brand-red/20 transition-all"
              icon={<Calendar className="w-4 h-4" />}
            >
              Visit
            </Button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/stores" className="text-brand-black/60 hover:text-brand-red p-2">
              <Search className="w-5 h-5" />
            </Link>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center"
          >
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-brand-black hover:text-brand-red p-2 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display font-bold text-3xl transition-colors hover:text-brand-red ${
                      isActive(link.href) ? 'text-brand-red' : 'text-brand-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-4"
              >
                <Button variant="danger" size="lg" href="/visit" onClick={() => setIsMobileMenuOpen(false)} className="rounded-none">
                  Plan Your Visit
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar
