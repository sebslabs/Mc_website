import React from 'react'
import type { Metadata } from 'next'
import { stores } from '@/lib/stores-data'
import SectionHeading from '@/components/ui/SectionHeading'
import StoreCard from '@/components/stores/StoreCard'
import ImagePlaceholder, { FOOD_GRADIENT } from '@/components/ui/ImagePlaceholder'
import Button from '@/components/ui/Button'
import { Sparkles, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dining & Food Hall',
  description: 'Sizzle your taste buds at Majestic City! Explore local Sri Lankan curries, international burgers, desserts, bubble teas, and the premium Cargills Food Hall.'
}

export default function DiningPage() {
  // Filter dining units
  const foodOutlets = stores.filter((s) => s.category === 'food')

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Page Header */}
        <div>
          <SectionHeading
            label="Sizzling Eats & Treats"
            title="DINING & FOOD COURT"
            subtitle="From rapid bites to family dinners, explore our diverse culinary offerings ranging from authentic local favorites to popular international quick-service chains."
            align="center"
          />
        </div>

        {/* Featured Anchor: Cargills Food Hall */}
        <div className="group bg-white border border-brand-border rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-brand-black">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ease-out">
              <ImagePlaceholder gradient={FOOD_GRADIENT} aspectRatio="h-full" label="Cargills Food Hall" rounded="rounded-none" />
            </div>
            <div className="absolute top-0 left-0 z-10">
              <span className="bg-brand-red text-white flex items-center gap-2 px-5 py-2.5 rounded-none text-[10px] font-black tracking-widest uppercase shadow-lg">
                <Sparkles className="w-4 h-4 text-white fill-white/20" /> PRIMARY ANCHOR
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 text-left flex flex-col justify-center items-start gap-8 bg-white border-t lg:border-t-0 lg:border-l border-brand-border">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-brand-red uppercase tracking-[0.2em] font-black">LEVEL 1 ATRIUM</span>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-brand-black tracking-tight leading-none">
                CARGILLS FOOD HALL
              </h3>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-normal mt-2">
                Our state-of-the-art Cargills Food Hall offers a complete culinary revolution. Skip the generic food court experience and explore custom live cooking counters, artisanal bakery spreads, authentic Sri Lankan curries, bubbling hot pizzas, and gourmet coffees under one roof.
              </p>
            </div>
            <Button variant="danger" size="lg" href="/map" icon={<Compass className="w-5 h-5" />} className="w-full sm:w-auto shadow-lg shadow-brand-red/20 rounded-none">
              Find on Floor Plan
            </Button>
          </div>
        </div>

        {/* Outlets Grid */}
        <div className="flex flex-col gap-10">
          <div className="border-b border-brand-border pb-4 text-left">
            <h4 className="font-display font-black text-xl text-brand-black uppercase tracking-widest">
              ALL DINING OUTLETS
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {foodOutlets.map((outlet) => (
              <StoreCard key={outlet.id} store={outlet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
