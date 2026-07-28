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
    title: 'Deadpool & Wolverine',
    genre: 'Action, Comedy, Sci-Fi',
    language: 'english',
    rating: '18',
    runtime: 127,
    synopsis: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    cinema: 'Platinum Screen (445 Seats)',
    isHighlighted: true,
    poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    trailerVideoId: '73_1biulkYk',
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin'],
    releaseDate: 'July 26, 2024',
    sessions: dates.map(date => ({
      date,
      times: ['10:30 AM', '01:30 PM', '04:30 PM', '07:30 PM', '10:30 PM']
    }))
  },
  {
    id: 'film-2',
    title: 'Inside Out 2',
    genre: 'Animation, Family, Comedy',
    language: 'english',
    rating: 'U',
    runtime: 96,
    synopsis: 'Disney and Pixar’s "Inside Out 2" returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!',
    cinema: 'Deluxe Screen (150 Seats)',
    poster: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    trailerVideoId: 'LEjhY15eCx0',
    director: 'Kelsey Mann',
    cast: ['Amy Poehler', 'Maya Hawke', 'Kensington Tallman'],
    releaseDate: 'June 14, 2024',
    sessions: dates.map(date => ({
      date,
      times: ['10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM']
    }))
  },
  {
    id: 'film-3',
    title: 'Dune: Part Two',
    genre: 'Sci-Fi, Action, Drama',
    language: 'english',
    rating: '15',
    runtime: 166,
    synopsis: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future.',
    cinema: 'Gold Screen (120 Seats)',
    isHighlighted: true,
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    trailerVideoId: 'Way9Dexny3w',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    releaseDate: 'March 1, 2024',
    sessions: dates.map(date => ({
      date,
      times: ['01:15 PM', '05:15 PM', '09:15 PM']
    }))
  },
  {
    id: 'film-4',
    title: 'Oppenheimer',
    genre: 'Drama, Biography, History',
    language: 'english',
    rating: '15',
    runtime: 180,
    synopsis: 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb. A cinematic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it.',
    cinema: 'Ultra Screen (180 Seats)',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    trailerVideoId: 'uYPbbksJxIg',
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    releaseDate: 'July 21, 2023',
    sessions: dates.map(date => ({
      date,
      times: ['10:45 AM', '03:45 PM', '07:45 PM']
    }))
  },
  {
    id: 'film-5',
    title: 'Spider-Man: Across the Spider-Verse',
    genre: 'Animation, Action, Adventure',
    language: 'english',
    rating: 'PG',
    runtime: 140,
    synopsis: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
    cinema: 'Platinum Screen (445 Seats)',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    trailerVideoId: 'cqGjhVJWtEg',
    director: 'Joaquim Dos Santos, Kemp Powers',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    releaseDate: 'June 2, 2023',
    sessions: dates.map(date => ({
      date,
      times: ['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM', '10:00 PM']
    }))
  },
  {
    id: 'film-6',
    title: 'Furiosa: A Mad Max Saga',
    genre: 'Action, Adventure, Sci-Fi',
    language: 'english',
    rating: '18',
    runtime: 148,
    synopsis: 'Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe.',
    cinema: 'Ultra Screen (180 Seats)',
    poster: 'https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    trailerVideoId: 'XJMuhwVlca4',
    director: 'George Miller',
    cast: ['Anya Taylor-Joy', 'Chris Hemsworth', 'Tom Burke'],
    releaseDate: 'May 24, 2024',
    sessions: dates.map(date => ({
      date,
      times: ['01:00 PM', '04:00 PM', '07:00 PM', '10:00 PM']
    }))
  },
  {
    id: 'film-7',
    title: 'Gladiator II',
    genre: 'Action, Adventure, Drama',
    language: 'english',
    rating: '15',
    runtime: 148,
    synopsis: 'Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist.',
    cinema: 'Platinum Screen',
    status: 'upcoming',
    poster: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    trailerVideoId: '4rgYUipGJNo',
    director: 'Ridley Scott',
    cast: ['Paul Mescal', 'Pedro Pascal', 'Denzel Washington'],
    releaseDate: 'November 22, 2024',
    sessions: []
  },
  {
    id: 'film-8',
    title: 'Wicked',
    genre: 'Fantasy, Musical',
    language: 'english',
    rating: 'PG',
    runtime: 160,
    synopsis: 'Elphaba, an ostracized but defiant girl born with green skin, and Glinda, a privileged aristocrat born popular, become extremely unlikely friends in the magical Land of Oz. As they grapple with their opposing personalities, their friendship is tested by the corrupt wizard.',
    cinema: 'Ultra Screen',
    status: 'upcoming',
    poster: 'https://image.tmdb.org/t/p/w500/b5eOT6XENzB2W8Vj1v61JdIuOQj.jpg',
    trailerVideoId: '6COmYeLsz4c',
    director: 'Jon M. Chu',
    cast: ['Cynthia Erivo', 'Ariana Grande', 'Jonathan Bailey'],
    releaseDate: 'November 27, 2024',
    sessions: []
  }
]
