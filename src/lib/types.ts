export interface Store {
  id: string
  name: string
  category: 'fashion' | 'food' | 'electronics' | 'services' | 
            'footwear' | 'beauty' | 'entertainment'
  floor: 'basement' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'
  unit: string
  description: string
  phone?: string
  hours?: string
  isAnchor?: boolean
  isNew?: boolean
}

export interface Film {
  id: string
  title: string
  genre: string
  language: 'sinhala' | 'tamil' | 'english' | 'hindi'
  rating: 'U' | 'PG' | '15' | '18'
  runtime: number          // minutes
  synopsis: string
  cinema: string           // which of the 4 cinemas
  sessions: {
    date: string           // ISO date string (YYYY-MM-DD)
    times: string[]        // ['10:00', '13:30', '17:00', '20:30']
  }[]
  status?: 'now-showing' | 'upcoming'
  isHighlighted?: boolean
  poster?: string
  trailerVideoId?: string
  director?: string
  cast?: string[]
  releaseDate?: string
}

export interface Event {
  id: string
  title: string
  category: 'entertainment' | 'family' | 'food' | 'fashion' | 'free'
  date: string             // ISO date (YYYY-MM-DD)
  time: string
  location: string         // location within mall
  description: string
  isFeatured?: boolean
  isFree?: boolean
  imageGradient: string    // CSS gradient string for placeholder
}

export interface Offer {
  id: string
  tenantName: string
  category: 'fashion' | 'food' | 'entertainment' | 'services' | 'beauty'
  headline: string
  description: string
  validUntil: string       // ISO date
  floor: string
  isHighlighted?: boolean
}

export interface RadioShow {
  id: string
  name: string
  host: string
  startTime: string        // '06:00'
  endTime: string          // '09:00'
  day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
  description: string
}

export interface NewsArticle {
  id: string
  title: string
  category: 'renovation' | 'tenant' | 'events' | 'community'
  date: string
  excerpt: string
  content: string
  imageGradient: string
}
