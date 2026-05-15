'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, X, Search, Phone, Clock, Navigation } from 'lucide-react'
import { stores } from '@/lib/stores-data'
import { Store } from '@/lib/types'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export const FloorPlan: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<'basement' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'>('l1')
  const [selectedStore, setSelectedStore] = useState<Store | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedStoreId, setHighlightedStoreId] = useState<string | null>(null)

  const floors = [
    { label: 'Basement', value: 'basement' as const },
    { label: 'Level 1', value: 'l1' as const },
    { label: 'Level 2', value: 'l2' as const },
    { label: 'Level 3', value: 'l3' as const },
    { label: 'Level 4', value: 'l4' as const },
    { label: 'Level 5', value: 'l5' as const }
  ]

  // Filter stores on this floor
  const floorStores = useMemo(() => {
    return stores.filter((s) => s.floor === activeFloor)
  }, [activeFloor])

  // Handles floor search highlight and auto floor switching if needed
  const handleStoreSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery) return

    const matched = stores.find((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    if (matched) {
      setActiveFloor(matched.floor)
      setHighlightedStoreId(matched.id)
      setSelectedStore(matched)
      setTimeout(() => setHighlightedStoreId(null), 3000) // Clear highlight after 3 seconds
    }
  }

  // Get color by category - normalized for premium aesthetics
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fashion': return '#FDF4FF' // refined backdrop
      case 'food': return '#FEF2F2' // soft red tint
      case 'entertainment': return '#F5F3FF' // soft violet
      case 'services': return '#F8FAFC' // crisp gray
      case 'footwear': return '#ECFDF5' // soft mint
      case 'beauty': return '#FFF1F2' // soft pink
      default: return '#FFFFFF'
    }
  }

  const formatFloorLabel = (floor: string) => {
    const found = floors.find((f) => f.value === floor)
    return found ? found.label : 'Level 1'
  }

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Search and Floor Tabs Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-2 border-brand-surface pb-8">
        {/* Floor selector tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          {floors.map((floor) => {
            const isActive = activeFloor === floor.value
            return (
              <button
                key={floor.value}
                onClick={() => {
                  setActiveFloor(floor.value)
                  setSelectedStore(null)
                }}
                className={`px-6 py-3 rounded-none text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap transition-all cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-brand-red text-white border border-brand-red shadow-md shadow-brand-red/20'
                    : 'bg-white border border-brand-border text-brand-muted hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {floor.label}
              </button>
            )
          })}
        </div>

        {/* Mini Floor Search */}
        <form onSubmit={handleStoreSearch} className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-muted group-focus-within:text-brand-red transition-colors" />
          <input
            type="text"
            placeholder="FIND STORE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-brand-border px-12 py-3.5 rounded-none text-[11px] font-black text-brand-black outline-none placeholder:text-brand-muted shadow-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all uppercase tracking-widest"
          />
        </form>
      </div>

      {/* Map Layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Interactive SVG Area */}
        <div className="lg:col-span-8 bg-brand-surface border border-brand-border rounded-none p-6 sm:p-12 flex flex-col items-center justify-center relative shadow-md overflow-hidden select-none touch-manipulation">
          {/* Map Tip */}
          <div className="absolute top-5 left-5 flex items-center gap-2 text-[9px] text-brand-black font-black tracking-[0.2em] uppercase bg-white border border-brand-border px-4 py-2 rounded-none shadow-sm z-10">
            <Navigation className="w-3.5 h-3.5 text-brand-red fill-brand-red/10" /> TAP UNIT TO VIEW
          </div>

          <div className="w-full overflow-x-auto no-scrollbar pt-6">
            <svg viewBox="0 0 800 300" className="min-w-[650px] w-full h-auto">
              {/* Outer boundary - Sharp Rect */}
              <rect x="20" y="20" width="760" height="260" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

              {/* Central corridor/atrium - Sharp Rect */}
              <rect x="80" y="120" width="640" height="60" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <text x="400" y="155" fill="#94A3B8" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="4">
                MAIN ATRIUM
              </text>

              {/* Escalators (represented by diagonal lines in center) - Sharp */}
              <g transform="translate(370, 135)">
                <rect width="60" height="30" fill="#000000" />
                <path d="M 5 25 L 55 5 M 15 25 L 55 10 M 5 20 L 45 5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="square" />
                <text x="30" y="20" fill="#FFFFFF" fontSize="8" fontWeight="900" textAnchor="middle">ESC</text>
              </g>

              {/* Fixed Toilets */}
              <g transform="translate(35, 30)">
                <rect width="40" height="40" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <text x="20" y="24" fill="#2563EB" fontSize="10" fontWeight="900" textAnchor="middle">WC</text>
              </g>

              {/* Fixed Lifts */}
              <g transform="translate(725, 30)">
                <rect width="40" height="40" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                <text x="20" y="24" fill="#475569" fontSize="10" fontWeight="900" textAnchor="middle">LIFT</text>
              </g>

              {/* Fixed Emergency Exit */}
              <g transform="translate(35, 230)">
                <rect width="40" height="40" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
                <text x="20" y="24" fill="#DC2626" fontSize="9" fontWeight="900" textAnchor="middle">EXIT</text>
              </g>

              {/* Dynamic Grid Store Units - Zero Radius */}
              {floorStores.map((store, idx) => {
                const totalStores = floorStores.length
                const halfCount = Math.ceil(totalStores / 2)
                const isTopRow = idx < halfCount
                
                // Calculate size based on count to fit within SVG boundary
                const itemsInRow = isTopRow ? halfCount : (totalStores - halfCount)
                const itemWidth = 600 / itemsInRow
                const colIdx = isTopRow ? idx : (idx - halfCount)
                
                const x = 100 + colIdx * itemWidth
                const y = isTopRow ? 30 : 190
                const width = itemWidth - 10
                const height = 80

                const isHighlighted = highlightedStoreId === store.id || selectedStore?.id === store.id
                const catColor = getCategoryColor(store.category)

                return (
                  <g
                    key={store.id}
                    className="cursor-pointer group/shop"
                    onClick={() => setSelectedStore(store)}
                  >
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill={catColor}
                      stroke={isHighlighted ? '#E2231A' : '#E2E8F0'}
                      strokeWidth={isHighlighted ? '3' : '1.5'}
                      className="transition-all group-hover/shop:fill-opacity-80"
                    />
                    {/* Store Unit Label */}
                    <text
                      x={x + width / 2}
                      y={y + 40}
                      fill={isHighlighted ? '#E2231A' : '#000000'}
                      fontSize="8.5"
                      fontWeight="900"
                      textAnchor="middle"
                      className="uppercase tracking-wide transition-colors"
                    >
                      {store.name.split(' ').slice(0, 2).join(' ')}
                    </text>
                    <text
                      x={x + width / 2}
                      y={y + 55}
                      fill="#64748B"
                      fontSize="7"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {store.unit}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Side Panel Store Details Area */}
        <div className="lg:col-span-4 min-h-[350px]">
          <AnimatePresence mode="wait">
            {selectedStore ? (
              <motion.div
                key={selectedStore.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white border-2 border-brand-border rounded-none p-8 shadow-xl flex flex-col justify-between h-full gap-8 text-left relative"
              >
                <div className="flex flex-col gap-6">
                  {/* Header Block */}
                  <div className="flex items-start justify-between gap-3">
                    <Badge variant="red" className="rounded-none text-[9px] tracking-widest font-black px-3">{formatFloorLabel(selectedStore.floor)}</Badge>
                    <button
                      onClick={() => setSelectedStore(null)}
                      className="p-2 text-brand-muted hover:text-white hover:bg-brand-red rounded-none transition-all focus:outline-none cursor-pointer"
                      aria-label="Close sidebar"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Core Info */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-brand-red uppercase tracking-[0.2em] font-black">
                      {selectedStore.category}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-black tracking-tight leading-none uppercase">
                      {selectedStore.name}
                    </h3>
                    <span className="text-xs text-brand-black/50 font-black tracking-widest uppercase mt-1">
                      Unit Reference: {selectedStore.unit}
                    </span>
                  </div>

                  {/* Summary Body */}
                  <p className="text-brand-muted text-sm leading-relaxed font-normal">
                    {selectedStore.description}
                  </p>

                  {/* Key Details Contacts */}
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-border text-[11px] font-black text-brand-black mt-2 uppercase tracking-widest">
                    {selectedStore.phone && (
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-none bg-brand-surface flex items-center justify-center text-brand-red shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span>{selectedStore.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-none bg-brand-surface flex items-center justify-center text-brand-red shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>{selectedStore.hours || '10:00 AM - 10:00 PM'}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="danger"
                  size="md"
                  className="w-full font-black uppercase tracking-widest py-4 mt-4 shadow-lg shadow-brand-red/20 rounded-none"
                  onClick={() => alert(`Mapping route to ${selectedStore.name} on ${formatFloorLabel(selectedStore.floor)}!`)}
                  icon={<Navigation className="w-4 h-4 text-white" />}
                >
                  Launch Route
                </Button>
              </motion.div>
            ) : (
              /* Map Placeholder panel - Pure Box */
              <motion.div
                key="empty-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-brand-black text-white border border-white/10 rounded-none p-10 shadow-2xl flex flex-col justify-center items-center text-center gap-6 h-full min-h-[350px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-3xl pointer-events-none" />
                
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-brand-red shadow-sm z-10">
                  <Map className="w-8 h-8" />
                </div>
                <div className="z-10">
                  <h4 className="font-display font-black text-lg text-white uppercase tracking-widest">
                    SELECT A STORE
                  </h4>
                  <p className="text-white/50 text-xs mt-3 max-w-xs font-normal leading-relaxed">
                    Click any interactive block within the vector map on the left to load localized contact info, routing, and operating profiles.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
export default FloorPlan
