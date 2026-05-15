import { Offer } from './types'

const getRelativeDate = (daysAhead: number): string => {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  return d.toISOString().split('T')[0]
}

export const offers: Offer[] = [
  {
    id: 'offer-1',
    tenantName: 'Cool Planet',
    category: 'fashion',
    headline: 'Flat 20% Off on New Season Arrivals',
    description: 'Upgrade your wardrobe with the latest stylish casuals, kidswear, and formalwear. Discount applicable storewide on items with the Cool tag.',
    validUntil: getRelativeDate(15),
    floor: 'Level 2',
    isHighlighted: true
  },
  {
    id: 'offer-2',
    tenantName: 'Moose Clothing Company',
    category: 'fashion',
    headline: 'Buy 2 Get 1 Free on All Premium Chinos & Jeans',
    description: 'Style meets comfort! Grab any two pairs of premium stretch chinos or rugged denims and get a third pair absolutely free.',
    validUntil: getRelativeDate(10),
    floor: 'Level 2',
    isHighlighted: true
  },
  {
    id: 'offer-3',
    tenantName: 'Cargills Food Hall',
    category: 'food',
    headline: 'Double Star Points & 10% Off on Fresh Produce',
    description: 'Earn double Cargills Star Points and get an instant 10% discount on all fresh vegetables and local fruits when you pay with a Cargo card.',
    validUntil: getRelativeDate(30),
    floor: 'Basement',
    isHighlighted: false
  },
  {
    id: 'offer-4',
    tenantName: 'Majestic Cineplex',
    category: 'entertainment',
    headline: 'Student Tuesday: Buy 1 Get 1 Free on Movie Tickets',
    description: 'Flash your valid university or school student ID card at the ticketing counter on any Tuesday and get a second ticket free for any English or Sinhala movie!',
    validUntil: getRelativeDate(45),
    floor: 'Level 4',
    isHighlighted: true
  },
  {
    id: 'offer-5',
    tenantName: 'The Kottu Bar',
    category: 'food',
    headline: 'Cheese Kottu + Ginger Beer Combo for LKR 950',
    description: 'Enjoy our signature sizzling cheese kottu packed with roasted chicken or fresh veggies paired with a refreshing ice-cold local ginger beer.',
    validUntil: getRelativeDate(7),
    floor: 'Basement Food Court',
    isHighlighted: false
  },
  {
    id: 'offer-6',
    tenantName: 'DSI Premier',
    category: 'fashion',
    headline: 'Up to 40% Off on Selected Sports Footwear',
    description: 'Run faster, jump higher! Massive discounts on selected running shoes, trainers, and sports sandals from DSI, Reebok, and Puma.',
    validUntil: getRelativeDate(12),
    floor: 'Level 1',
    isHighlighted: false
  },
  {
    id: 'offer-7',
    tenantName: 'Dialog Experience Center',
    category: 'services',
    headline: 'Free Router with Any New Unlimited Fiber Connection',
    description: 'Get high-speed fiber internet and receive a premium Wi-Fi router free of charge upon signing up for any unlimited monthly package.',
    validUntil: getRelativeDate(60),
    floor: 'Level 3',
    isHighlighted: false
  },
  {
    id: 'offer-8',
    tenantName: 'Natures Beauty Salon',
    category: 'beauty',
    headline: 'Hair Spa & Mani-Pedi Combo: 30% Discount',
    description: 'Treat yourself! Enjoy an organic herbal hair spa, deep conditioning treatment, and a professional manicure-pedicure session for an unbeatable promotional price.',
    validUntil: getRelativeDate(20),
    floor: 'Level 3',
    isHighlighted: false
  },
  {
    id: 'offer-9',
    tenantName: 'Bata Showroom',
    category: 'fashion',
    headline: 'Flat LKR 1,000 Off on Back-To-School Footwear',
    description: 'Make school days comfortable. Get an instant LKR 1,000 discount when you buy any two pairs of school shoes or children’s sandals.',
    validUntil: getRelativeDate(14),
    floor: 'Level 1',
    isHighlighted: false
  },
  {
    id: 'offer-10',
    tenantName: 'MC PlayZone Arcade',
    category: 'entertainment',
    headline: 'Load LKR 2,000 & Get LKR 1,000 Free Play Credits',
    description: 'Unleash the fun! Load LKR 2,000 or more onto your PlayZone Game Card and receive an additional LKR 1,000 in free play credits instantly.',
    validUntil: getRelativeDate(25),
    floor: 'Level 4',
    isHighlighted: false
  },
  {
    id: 'offer-11',
    tenantName: 'The Perfume Bar',
    category: 'beauty',
    headline: 'Free Travel Mist with Any Fragrance Purchase over LKR 10,000',
    description: 'Smell divine on the go. Choose a free premium 15ml pocket travel perfume mist of your choice when you spend LKR 10,000 or more.',
    validUntil: getRelativeDate(18),
    floor: 'Level 2',
    isHighlighted: false
  },
  {
    id: 'offer-12',
    tenantName: 'Subway',
    category: 'food',
    headline: 'Sub of the Day: Regular Meal Deal for LKR 1,200',
    description: 'Get any 6-inch Sub of the Day, paired with a freshly baked cookie and a regular fountain drink for only LKR 1,200.',
    validUntil: getRelativeDate(30),
    floor: 'Level 5',
    isHighlighted: false
  },
  {
    id: 'offer-13',
    tenantName: 'The Bubble Tea Co.',
    category: 'food',
    headline: 'Buy 2 Large Boba Drinks & Get 50% Off the 3rd',
    description: 'Bring your friends! Purchase any two large taro, matcha, or milk tea boba drinks and get your third drink at half price.',
    validUntil: getRelativeDate(8),
    floor: 'Level 5',
    isHighlighted: false
  }
]
