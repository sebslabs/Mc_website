import { Film } from './types'

// Helper to generate the next 7 dates starting today (YYYY-MM-DD format)
const getNext7Days = (): string[] => {
  const dates: string[] = []
  for (let i = 0; i < 7; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    dates.push(d.toISOString().split('T')[0])
  }
  return dates
}

const dates = getNext7Days()

export const films: Film[] = [
  {
    id: 'film-1',
    title: 'Neon Justice: Shadow Protocol',
    genre: 'Action, Sci-Fi, Thriller',
    language: 'english',
    rating: 'PG',
    runtime: 124,
    synopsis: 'In a rain-drenched dystopian Colombo, a rogue cyber-operative must stop an AI syndicate from seizing control of the global satellite network before the final countdown.',
    cinema: 'Platinum Screen (445 Seats)',
    isHighlighted: true,
    sessions: dates.map(date => ({
      date,
      times: ['10:30 AM', '01:30 PM', '04:30 PM', '07:30 PM', '10:30 PM']
    }))
  },
  {
    id: 'film-2',
    title: 'The Whimsical Woods',
    genre: 'Animation, Family, Adventure',
    language: 'english',
    rating: 'U',
    runtime: 98,
    synopsis: 'When a curious young squirrel discovers a map to the ancient Golden Acorn, she embarks on a heartwarming journey with a nervous owl and a bubbly rabbit to save their forest home.',
    cinema: 'Deluxe Screen (150 Seats)',
    sessions: dates.map(date => ({
      date,
      times: ['10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM']
    }))
  },
  {
    id: 'film-3',
    title: 'Sanda Diya Dahara (Streams of Moonlight)',
    genre: 'Drama, Romance',
    language: 'sinhala',
    rating: 'PG',
    runtime: 132,
    synopsis: 'A deeply moving story set in the scenic tea plantations of Nuwara Eliya, exploring the forbidden love between an aspiring musician and the daughter of a prominent estate owner.',
    cinema: 'Gold Screen (120 Seats)',
    isHighlighted: true,
    sessions: dates.map(date => ({
      date,
      times: ['01:15 PM', '04:15 PM', '07:15 PM', '10:15 PM']
    }))
  },
  {
    id: 'film-4',
    title: 'Pissu Double (Crazy Double)',
    genre: 'Comedy, Family',
    language: 'sinhala',
    rating: 'U',
    runtime: 110,
    synopsis: 'Identical twins separated at birth find themselves in a web of hilarious misunderstandings in Colombo when they accidentally switch places for a weekend job interview.',
    cinema: 'Ultra Screen (180 Seats)',
    sessions: dates.map(date => ({
      date,
      times: ['10:45 AM', '01:45 PM', '04:45 PM', '07:45 PM']
    }))
  },
  {
    id: 'film-5',
    title: 'Vettaiyan (The Hunter)',
    genre: 'Action, Crime, Drama',
    language: 'tamil',
    rating: '15',
    runtime: 155,
    synopsis: 'A powerful, high-stakes cop drama where a dedicated inspector goes head-to-head with a highly intelligent criminal syndicate operating across Chennai and Colombo.',
    cinema: 'Platinum Screen (445 Seats)',
    sessions: dates.map(date => ({
      date,
      times: ['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM', '10:00 PM']
    }))
  },
  {
    id: 'film-6',
    title: 'Dil Ki Dhadkan (Heartbeats)',
    genre: 'Romance, Musical',
    language: 'hindi',
    rating: 'PG',
    runtime: 140,
    synopsis: 'Two star-crossed chefs from rival families fall in love at a culinary school in Switzerland, blending traditional Indian spices and modern romance in a feast of songs and beautiful vistas.',
    cinema: 'Ultra Screen (180 Seats)',
    sessions: dates.map(date => ({
      date,
      times: ['01:00 PM', '04:00 PM', '07:00 PM', '10:00 PM']
    }))
  }
]
