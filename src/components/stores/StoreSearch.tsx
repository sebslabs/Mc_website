'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, AlertCircle } from 'lucide-react'
import { Store } from '@/lib/types'
import StoreCard from './StoreCard'

interface StoreSearchProps {
  allStores: Store[]
}

export const StoreSearch: React.FC<StoreSearchProps> = ({ allStores }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeFloor, setActiveFloor] = useState<string>('all')

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Food & Dining', value: 'food' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Services', value: 'services' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Footwear', value: 'footwear' },
    { label: 'Beauty', value: 'beauty' }
  ]

  const floors = [
    { label: 'All Floors', value: 'all' },
    { label: 'Basement', value: 'basement' },
    { label: 'Level 1', value: 'l1' },
    { label: 'Level 2', value: 'l2' },
    { label: 'Level 3', value: 'l3' },
    { label: 'Level 4', value: 'l4' },
    { label: 'Level 5', value: 'l5' }
  ]

  const filteredStores = useMemo(() => {
    return allStores.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = activeCategory === 'all' || store.category === activeCategory
      const matchesFloor = activeFloor === 'all' || store.floor === activeFloor

      return matchesSearch && matchesCategory && matchesFloor
    })
  }, [allStores, searchQuery, activeCategory, activeFloor])

  return (
    <div className="flex flex-col gap-12">
      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto w-full group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted group-focus-within:text-brand-red transition-colors" />
        <input
          type="text"
          placeholder="Search stores, brands, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border-2 border-brand-border px-16 py-5 rounded-none text-base font-bold text-brand-black outline-none placeholder:text-brand-muted shadow-sm focus:border-brand-red focus:shadow-xl transition-all"
          aria-label="Search stores"
        />
      </div>

      {/* Categories Navigation */}
      <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-3 rounded-none text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap border transition-all cursor-pointer active:scale-95 ${
              activeCategory === cat.value
                ? 'bg-brand-red text-white border-brand-red shadow-md'
                : 'bg-white border-brand-border text-brand-muted hover:border-brand-red hover:text-brand-red'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Floor Selector Divider */}
      <div className="border-b-2 border-brand-surface w-full mt-4">
        <div className="flex gap-8 lg:gap-12 overflow-x-auto no-scrollbar justify-start md:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {floors.map((floor) => {
            const isActive = activeFloor === floor.value
            return (
              <button
                key={floor.value}
                onClick={() => setActiveFloor(floor.value)}
                className={`pb-4 text-xs font-black tracking-[0.15em] uppercase transition-all relative whitespace-nowrap focus:outline-none hover:text-brand-red ${
                  isActive ? 'text-brand-red' : 'text-brand-muted'
                }`}
              >
                {floor.label}
                {isActive && (
                  <motion.div
                    layoutId="floor-active-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-red"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs mt-2">
        <span className="font-black text-brand-black uppercase tracking-widest">
          {filteredStores.length} {filteredStores.length === 1 ? 'RESULT' : 'RESULTS FOUND'}
        </span>
      </div>

      {/* Grid Container */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredStores.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredStores.map((store) => (
                <motion.div
                  key={store.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <StoreCard store={store} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State System */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center py-28 border-2 border-dashed border-brand-border bg-brand-surface rounded-none text-center gap-6"
            >
              <div className="w-20 h-20 bg-white border-2 border-brand-border rounded-none flex items-center justify-center text-brand-red shadow-sm">
                <AlertCircle className="w-9 h-9" />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-display font-black text-2xl text-brand-black uppercase tracking-widest">
                  NO STORES FOUND
                </h4>
                <p className="text-brand-muted text-sm font-normal max-w-md leading-relaxed">
                  We couldn&apos;t locate matches for your current filters. Please refine your text input or category selection.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default StoreSearch
