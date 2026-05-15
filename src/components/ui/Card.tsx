import React from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-2xl overflow-hidden border border-gray-100 p-5 shadow-sm transition-all duration-300',
        hoverEffect && 'hover:shadow-md hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
export default Card
