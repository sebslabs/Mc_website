import React from 'react'
import { Phone } from 'lucide-react'
import { Store } from '@/lib/types'
import Badge from '../ui/Badge'

interface StoreCardProps {
  store: Store
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
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

  const getImageUrl = (id: string, category: string) => {
    const specificImages: Record<string, string> = {
      'cargills-foodhall': '1542838132-92c53300491e',
      'kottu-bar': '1555939594-58d7cb561ad1',
      'waffle-house': '1504754524776-8f4f37790ca0',
      'dsi-showroom': '1549298916-b41d501d3772',
      'hemas-pharmacy': '1585435557343-3b092031a831',
      'cool-planet': '1441984904996-e0b6ba687e04',
      'moose-clothing': '1523381210434-271e8be1f52b',
      'code-jeans': '1542272604-787c3835535d',
      'majestic-cineplex': '1489599849927-2ee91cede3ba',
      'kissfm-studio': '1598488035139-bdbb2231ce04'
    }

    if (specificImages[id]) {
      return `https://images.unsplash.com/photo-${specificImages[id]}?auto=format&fit=crop&w=600&q=80`
    }

    let catId = '1441986300917-64674bd600d8' // generic mall
    switch (category) {
      case 'fashion': catId = '1445205170230-053b83016050'; break;
      case 'food': catId = '1517248135467-4c7edcad34c4'; break;
      case 'electronics': catId = '1498049794561-7780e7231661'; break;
      case 'services': catId = '1556761175-5973dc0f32b7'; break;
      case 'footwear': catId = '1549298916-b41d501d3772'; break;
      case 'beauty': catId = '1596462502278-27bfdc403348'; break;
      case 'entertainment': catId = '1511795409834-ef04bbd61622'; break;
    }
    
    return `https://images.unsplash.com/photo-${catId}?auto=format&fit=crop&w=600&q=80`
  }

  const imageUrl = getImageUrl(store.id, store.category)

  return (
    <div className="group relative bg-brand-black rounded-none border border-brand-border flex flex-col overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,59,48,0.15)] hover:border-brand-red/50 transition-all duration-500 min-h-[380px] w-full cursor-default">
      {/* Full Card Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageUrl} 
          alt={store.name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-0" />
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col gap-4 text-left p-6 relative z-10 flex-grow justify-end">
        {/* Store Logo */}
        <div className="w-14 h-14 bg-white border border-brand-border rounded-none flex items-center justify-center select-none shadow-md overflow-hidden mb-2">
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(store.name)}&background=FF3B30&color=fff&rounded=false&bold=true&font-size=0.4`} 
            alt={`${store.name} Logo`} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide uppercase leading-none group-hover:text-brand-red transition-colors">
              {store.name}
            </h3>
            {store.isNew && (
              <span className="bg-brand-red/90 text-white font-extrabold text-[9px] tracking-wider px-2.5 py-1 rounded-none uppercase leading-none shadow-sm">
                NEW
              </span>
            )}
            {store.isAnchor && (
              <span className="bg-white/10 text-white border border-white/20 font-extrabold text-[9px] tracking-wider px-2.5 py-1 rounded-none uppercase leading-none shadow-sm">
                ANCHOR
              </span>
            )}
          </div>
          <p className="text-white/80 text-xs leading-relaxed font-normal line-clamp-2">
            {store.description}
          </p>
        </div>
      </div>

      {/* Badges Row */}
      <div className="flex items-center justify-between p-6 pt-4 relative z-10 border-t border-white/20 text-xs font-semibold">
        <div className="flex items-center gap-3">
          <Badge variant="red" className="rounded-none bg-brand-red text-white border-brand-red shadow-sm">{formatFloor(store.floor)}</Badge>
          <span className="text-[10px] text-white/90 uppercase font-bold tracking-widest">{store.unit}</span>
        </div>
        {store.phone && (
          <a
            href={`tel:${store.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-[10px] font-extrabold text-white/80 hover:text-brand-red uppercase tracking-wider transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" /> CALL
          </a>
        )}
      </div>
    </div>
  )
}
export default StoreCard
