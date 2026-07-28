'use client'

import React from 'react'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ImagePlaceholder, { SOCIAL_GRADIENT } from '../ui/ImagePlaceholder'

export const InstagramStrip: React.FC = () => {
  const row1 = [
    { tag: '#MCIsBack', likes: '1.2k', comments: '45' },
    { tag: '#KISSFMLive', likes: '942', comments: '18' },
    { tag: '#ColomboEats', likes: '2.1k', comments: '84' },
    { tag: '#CineplexVibe', likes: '811', comments: '32' },
    { tag: '#ShopLocalSL', likes: '1.5k', comments: '61' },
    { tag: '#WeekendGoals', likes: '3.4k', comments: '112' },
  ]

  const row2 = [
    { tag: '#RetailTherapy', likes: '2.8k', comments: '77' },
    { tag: '#FoodiesLK', likes: '1.9k', comments: '52' },
    { tag: '#NightOut', likes: '4.2k', comments: '194' },
    { tag: '#MajesticCity', likes: '6.1k', comments: '311' },
    { tag: '#SriLanka', likes: '8.5k', comments: '402' },
    { tag: '#NowShowing', likes: '1.1k', comments: '29' },
  ]

  // For seamless infinite animation loop, we repeat the arrays
  const duplicatedRow1 = [...row1, ...row1, ...row1]
  const duplicatedRow2 = [...row2, ...row2, ...row2]

  const PostItem = ({ post }: { post: typeof row1[0] }) => (
    <div className="group relative shrink-0 w-[180px] md:w-[260px] aspect-square border border-brand-border bg-white shadow-sm overflow-hidden cursor-pointer select-none">
      <ImagePlaceholder gradient={SOCIAL_GRADIENT} aspectRatio="h-full" label={post.tag} rounded="rounded-none" />
      <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 md:gap-6 transition-all duration-300">
        <span className="flex items-center gap-1.5 font-bold text-xs md:text-sm text-white">
          <Heart className="w-4 h-4 text-brand-red fill-brand-red" /> {post.likes}
        </span>
        <span className="flex items-center gap-1.5 font-bold text-xs md:text-sm text-white">
          <MessageCircle className="w-4 h-4 text-white fill-white/20" /> {post.comments}
        </span>
      </div>
    </div>
  )

  return (
    <section className="py-24 bg-white border-b border-brand-border w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mb-16">
        <div className="flex flex-col items-center gap-2">
          <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
            Join the Vibe
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-black tracking-tight">
            VIBING ON INSTAGRAM
          </h2>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-2 text-sm text-brand-muted font-semibold hover:text-brand-red transition-colors mt-2 group"
          >
            <Instagram className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" /> @majesticcity.lk
          </a>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-4 md:gap-6 relative w-full">
        
        {/* Row 1: Moving Right to Left */}
        <div className="flex overflow-hidden w-full relative mask-fade-edges">
          <motion.div 
            className="flex gap-4 md:gap-6 px-2 md:px-3"
            animate={{ x: [0, '-33.333%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            }}
          >
            {duplicatedRow1.map((post, idx) => (
              <PostItem key={idx} post={post} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left to Right (Opposite) */}
        <div className="flex overflow-hidden w-full relative">
          <motion.div 
            className="flex gap-4 md:gap-6 px-2 md:px-3"
            animate={{ x: ['-33.333%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }
            }}
          >
            {duplicatedRow2.map((post, idx) => (
              <PostItem key={idx} post={post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default InstagramStrip
