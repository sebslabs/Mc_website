import React from 'react'
import { clsx } from 'clsx'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  dark?: boolean
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col mb-12 md:mb-16',
        align === 'center' && 'items-center text-center',
        align === 'left' && 'items-start text-left',
        align === 'right' && 'items-end text-right',
        className
      )}
    >
      <span className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2">
        {label}
      </span>
      <h2
        className={clsx(
          'font-display font-semibold text-2xl md:text-4xl tracking-tight leading-tight',
          dark ? 'text-white' : 'text-brand-black'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={clsx('mt-3 text-lg max-w-2xl', dark ? 'text-white/60' : 'text-brand-muted')}>
          {subtitle}
        </p>
      )}
      <div className="h-[3px] w-[60px] bg-brand-red mt-4 rounded-full" />
    </div>
  )
}
export default SectionHeading
