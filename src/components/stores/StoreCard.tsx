import React from 'react'
import { Phone, ShoppingBag, Utensils, Laptop, Landmark, Heart, Sparkles, Footprints } from 'lucide-react'
import { Store } from '@/lib/types'
import Badge from '../ui/Badge'

interface StoreCardProps {
  store: Store
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const getCategoryDetails = (category: string) => {
    switch (category) {
      case 'fashion':
        return { icon: <ShoppingBag className="w-4 h-4 text-pink-600" />, bg: 'bg-pink-50' }
      case 'food':
        return { icon: <Utensils className="w-4 h-4 text-brand-red" />, bg: 'bg-brand-red/5' }
      case 'electronics':
        return { icon: <Laptop className="w-4 h-4 text-blue-600" />, bg: 'bg-blue-50' }
      case 'services':
        return { icon: <Landmark className="w-4 h-4 text-indigo-600" />, bg: 'bg-indigo-50' }
      case 'footwear':
        return { icon: <Footprints className="w-4 h-4 text-emerald-600" />, bg: 'bg-emerald-50' }
      case 'beauty':
        return { icon: <Heart className="w-4 h-4 text-rose-600" />, bg: 'bg-rose-50' }
      default:
        return { icon: <Sparkles className="w-4 h-4 text-brand-red" />, bg: 'bg-brand-red/5' }
    }
  }

  const formatFloor = (floor: string) => {
    switch (floor) {
      case 'basement': return 'Basement'
      case 'l1': return 'Level 1'
      case 'l2': return 'Level 2'
      case 'l3': return 'Level 3'
      case 'l4': return 'Level 4'
      case 'l5': return 'Level 5'
      default: return 'Level 1'
    }
  }

  const catDetails = getCategoryDetails(store.category)

  return (
    <div className="bg-white rounded-none p-6 border border-brand-border flex flex-col justify-between gap-6 hover:shadow-xl transition-all duration-500 relative group cursor-default hover:-translate-y-1">
      <div className="flex flex-col gap-4 text-left">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-none flex items-center justify-center shrink-0 ${catDetails.bg} border border-black/5`}>
              {catDetails.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-extrabold text-lg text-brand-black leading-tight tracking-tight group-hover:text-brand-red transition-colors">
                {store.name}
              </h3>
              <div className="flex gap-1.5 flex-wrap mt-0.5">
                {store.isNew && <Badge variant="red" className="rounded-none text-[8px] py-0.5 h-auto tracking-widest">NEW</Badge>}
                {store.isAnchor && <Badge variant="surface" className="rounded-none border-brand-border text-[8px] py-0.5 h-auto tracking-widest uppercase">Anchor</Badge>}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-brand-muted text-xs leading-relaxed font-normal line-clamp-2">
          {store.description}
        </p>
      </div>

      {/* Bottom details */}
      <div className="flex items-center justify-between gap-2 pt-5 border-t border-brand-border text-xs">
        <div className="flex items-center gap-4">
          <Badge variant="surface" className="rounded-none bg-brand-surface">{formatFloor(store.floor)}</Badge>
          <span className="text-[10px] text-brand-black font-black tracking-wider uppercase">{store.unit}</span>
        </div>
        {store.phone && (
          <a
            href={`tel:${store.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-[10px] font-extrabold text-brand-muted hover:text-brand-red uppercase tracking-wider transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" /> CALL
          </a>
        )}
      </div>
    </div>
  )
}
export default StoreCard
