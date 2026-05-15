import React from 'react'

export const HERO_GRADIENT = 'linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 50%, #161626 100%)'
export const FILM_GRADIENT = 'linear-gradient(135deg, #2D142C 0%, #510A32 50%, #801336 100%)'
export const EVENT_GRADIENT = 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #111827 100%)'
export const STORE_GRADIENT = 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)'
export const FOOD_GRADIENT = 'linear-gradient(135deg, #451A03 0%, #78350F 50%, #451A03 100%)'
export const SOCIAL_GRADIENT = 'linear-gradient(135deg, #311042 0%, #631B7C 50%, #311042 100%)'

interface ImagePlaceholderProps {
  gradient?: string
  aspectRatio?: 'aspect-video' | 'aspect-square' | 'aspect-[2/3]' | 'aspect-[4/5]' | 'aspect-[3/4]' | 'h-screen' | 'h-64' | 'h-96' | 'h-full'
  className?: string
  label?: string
  rounded?: string
  imageUrl?: string
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  gradient = STORE_GRADIENT,
  aspectRatio = 'aspect-video',
  className = '',
  label,
  rounded = 'rounded-2xl',
  imageUrl
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center text-center p-6 ${rounded} ${aspectRatio} ${className}`}
      style={imageUrl ? undefined : { background: gradient }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={label || 'Image'}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Subtle overlay grid for a premium tech/vibrant feel */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      {label && !imageUrl && (
        <span className="relative z-20 font-display font-semibold text-lg md:text-xl text-white/95 tracking-wide uppercase drop-shadow-md">
          {label}
        </span>
      )}
    </div>
  )
}
export default ImagePlaceholder
