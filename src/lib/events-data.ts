import { Event } from './types'

const getRelativeDate = (daysAhead: number): string => {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  return d.toISOString().split('T')[0]
}

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Cargills Grand Opening Weekend & Food Festival',
    category: 'food',
    date: getRelativeDate(2), // 2 days from now (typically upcoming weekend)
    time: '10:00 AM - 10:00 PM',
    location: 'Basement Food Hall & Outdoor Plaza',
    description: 'Celebrate the grand opening of the newly renovated Cargills Food Hall! Enjoy live cooking demonstrations, free food tastings, exclusive discounts, and live Sri Lankan music.',
    isFeatured: true,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' // Emerald/Green
  },
  {
    id: 'event-2',
    title: 'KISS FM Live DJ Night at the Atrium',
    category: 'entertainment',
    date: getRelativeDate(1), // 1 day from now
    time: '06:00 PM - 11:00 PM',
    location: 'Main Atrium, Ground Floor',
    description: 'Vibe with Sri Lanka\'s top DJs directly from the live KISS FM booth in the atrium! Bring your energy, join the crowd, and listen to the freshest beats live at Majestic City.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)' // Red
  },
  {
    id: 'event-3',
    title: 'Kids Holiday Crafts & Fun Workshop',
    category: 'family',
    date: getRelativeDate(4),
    time: '11:00 AM - 04:00 PM',
    location: 'Level 2 Kids Zone',
    description: 'Keep your little ones entertained during school holidays with face painting, clay modeling workshops, and balloon-twisting artists. Safe, engaging, and absolutely free.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' // Blue
  },
  {
    id: 'event-4',
    title: 'Cool Planet Fashion Show - New Season Launch',
    category: 'fashion',
    date: getRelativeDate(14),
    time: '05:00 PM - 08:00 PM',
    location: 'Main Atrium Runway',
    description: 'Witness the latest casual, active, and partywear collections live on the runway. Brought to you by Cool Planet & Moose Clothing, showcasing affordable, high-street style.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)' // Pink
  },
  {
    id: 'event-5',
    title: 'Food Court Battle - Sri Lankan Street Food Special',
    category: 'food',
    date: getRelativeDate(6),
    time: '12:00 PM - 09:00 PM',
    location: 'Basement Food Court',
    description: 'Top local stalls compete to make Colombo’s ultimate cheese kottu, hot hopper, and spicy pol roti. Be the judge! Samples starting from just LKR 150.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' // Gold/Amber
  },
  {
    id: 'event-6',
    title: 'Cinema Premiere Night: Sanda Diya Dahara',
    category: 'entertainment',
    date: getRelativeDate(3),
    time: '06:30 PM onwards',
    location: 'Majestic Cineplex, Platinum Screen',
    description: 'An exclusive star-studded premiere night for the highly anticipated Sinhala romance drama. Red carpet, meet-and-greet with the main cast, and premiere screening.',
    isFeatured: false,
    isFree: false,
    imageGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)' // Purple
  },
  {
    id: 'event-7',
    title: 'Weekend Family Entertainment & Magic Show',
    category: 'family',
    date: getRelativeDate(0), // Today!
    time: '03:00 PM - 05:00 PM',
    location: 'Level 4 PlayZone',
    description: 'An afternoon of unbelievable illusions, sleight of hand, and family-friendly laughs with Colombo’s renowned magician. Fun for kids and parents alike.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)' // Cyan
  },
  {
    id: 'event-8',
    title: 'KISS FM Morning Show LIVE - Audience Special',
    category: 'entertainment',
    date: getRelativeDate(5),
    time: '07:00 AM - 09:00 AM',
    location: 'Atrium Live Studio',
    description: 'Watch Shehani & Kavindu broadcast the legendary Morning Rush live from the atrium! Walk in, participate in live quizzes, win cash prizes, and grab a free hot coffee.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)' // Rose
  },
  {
    id: 'event-9',
    title: 'Majestic City Anniversary Mini-Concert',
    category: 'entertainment',
    date: getRelativeDate(21),
    time: '06:00 PM - 10:00 PM',
    location: 'Outdoor Plaza',
    description: 'Celebrate our journey as Colombo’s most iconic everyday destination with an acoustic concert featuring local stars and indie bands. Street food stalls and high-energy vibes guaranteed.',
    isFeatured: false,
    isFree: true,
    imageGradient: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)' // Indigo
  }
]
