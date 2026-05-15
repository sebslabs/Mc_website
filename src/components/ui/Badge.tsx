import React from 'react'
import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'red' | 'surface' | 'green' | 'blue' | 'purple'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'surface',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase'
  
  const variants = {
    gold: 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20',
    navy: 'bg-brand-navy text-white',
    red: 'bg-brand-red/10 text-brand-red border border-brand-red/20',
    surface: 'bg-brand-surface text-brand-navy border border-gray-200',
    green: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-500 border border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
  }

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  )
}
export default Badge
