import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  icon
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-200 select-none cursor-pointer'
  
  const variants = {
    primary: 'bg-brand-black text-white hover:scale-[1.02] active:scale-[0.98] hover:brightness-110 shadow-sm disabled:bg-brand-black/50 disabled:cursor-not-allowed',
    secondary: 'bg-transparent border-2 border-brand-black text-brand-black hover:scale-[1.02] active:scale-[0.98] hover:bg-brand-black/5 disabled:border-brand-black/40 disabled:text-brand-black/40 disabled:cursor-not-allowed',
    ghost: 'bg-transparent border border-brand-border text-brand-black hover:scale-[1.02] active:scale-[0.98] hover:bg-brand-soft disabled:border-brand-border/30 disabled:text-brand-muted disabled:cursor-not-allowed',
    danger: 'bg-brand-red text-white hover:scale-[1.02] active:scale-[0.98] hover:brightness-110 shadow-sm disabled:bg-brand-red/50 disabled:cursor-not-allowed'
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold'
  }

  const combinedStyles = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className,
    disabled && 'opacity-60 pointer-events-none'
  )

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles} onClick={onClick as any}>
        {content}
      </Link>
    )
  }

  return (
    <button className={combinedStyles} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
export default Button
