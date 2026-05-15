import React from 'react'
import type { Metadata } from 'next'
import { offers } from '@/lib/offers-data'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Badge from '@/components/ui/Badge'
import { Percent, Calendar, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Promotions & Offers',
  description: 'Shop smart and save big! Explore exclusive active discounts, seasonal sales, fashion deals, and dining offers from retailers at Majestic City Colombo.'
}

const categoryGradients: Record<string, string> = {
  fashion: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
  food: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
  entertainment: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
  services: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  beauty: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)'
}

export default function OffersPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Page Header */}
        <div className="text-center">
          <SectionHeading
            label="Unbeatable Savings"
            title="PROMOTIONS & OFFERS"
            subtitle="Explore the latest sales and exclusive retail and dining vouchers active at Majestic City. Shop high, pay low!"
            align="center"
          />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => {
            const validUntil = new Date(offer.validUntil).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })

            const shareText = `Hey! Look at this sweet offer at Majestic City: "${offer.headline} at ${offer.tenantName}" valid until ${validUntil}! Let's check it out.`
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
            const fallbackGradient = categoryGradients[offer.category] || categoryGradients.fashion

            return (
              <div
                key={offer.id}
                className="group bg-white rounded-none overflow-hidden border border-brand-border flex flex-col hover:shadow-xl transition-all duration-500"
              >
                {/* Promo Header banner */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ImagePlaceholder gradient={fallbackGradient} aspectRatio="h-full" rounded="rounded-none" />
                  </div>
                  <div className="absolute top-0 left-0 bg-brand-red text-white flex items-center gap-1.5 px-4 py-2 rounded-none text-xs font-extrabold uppercase tracking-widest shadow-lg z-10">
                    <Percent className="w-3.5 h-3.5 text-white" /> PROMO
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6 text-left">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] text-brand-red font-black uppercase tracking-[0.2em]">{offer.tenantName}</span>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-black tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                      {offer.headline}
                    </h3>
                    <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-normal">
                      {offer.description}
                    </p>
                  </div>

                  {/* Date Row and Share */}
                  <div className="flex flex-col gap-5 pt-5 border-t border-brand-border mt-2">
                    <div className="flex items-center justify-between text-[10px] font-bold text-brand-black uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" /> Valid Until {validUntil}
                      </span>
                      <Badge variant="surface" className="rounded-none">{offer.category}</Badge>
                    </div>

                    {/* Share deal */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
                    >
                      <Share2 className="w-4 h-4" /> Share Offer
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
