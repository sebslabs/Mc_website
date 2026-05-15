import { Store } from './types'

export const stores: Store[] = [
  // Basement (Basement level - Cargills, food stalls, services)
  {
    id: 'cargills-foodhall',
    name: 'Cargills Food Hall',
    category: 'food',
    floor: 'basement',
    unit: 'B-01',
    description: 'Renovated, state-of-the-art flagship food hall with gourmet sections, fresh local produce, bakery, and dine-in experiences.',
    phone: '+94 11 258 1121',
    hours: '08:00 AM - 10:00 PM',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'bombay-sweet',
    name: 'Bombay Sweet House',
    category: 'food',
    floor: 'basement',
    unit: 'B-02',
    description: 'Traditional Indian sweets, savory bites, and refreshing lassi. A Colombo staple.',
    phone: '+94 11 250 1234',
    hours: '10:00 AM - 09:30 PM'
  },
  {
    id: 'kottu-bar',
    name: 'The Kottu Bar',
    category: 'food',
    floor: 'basement',
    unit: 'B-03',
    description: 'Fresh, sizzling cheese kottu, chicken kottu, and customized Sri Lankan street food delights.',
    hours: '10:00 AM - 10:00 PM',
    isNew: true
  },
  {
    id: 'murali-shorteats',
    name: 'Murali Short Eats',
    category: 'food',
    floor: 'basement',
    unit: 'B-04',
    description: 'Freshly baked fish buns, rolls, patties, and authentic Sri Lankan tea and ginger beer.',
    hours: '08:30 AM - 09:00 PM'
  },
  {
    id: 'juice-hub',
    name: 'The Juice Hub',
    category: 'food',
    floor: 'basement',
    unit: 'B-05',
    description: 'Fresh tropical fruit juices, woodapple shakes, and avocado creams with zero artificial sugars.',
    hours: '10:00 AM - 09:30 PM'
  },
  {
    id: 'waffle-house',
    name: 'Waffle & Co.',
    category: 'food',
    floor: 'basement',
    unit: 'B-06',
    description: 'Sweet and savory hot waffles topped with chocolate, strawberries, or spicy chicken.',
    hours: '10:00 AM - 09:30 PM',
    isNew: true
  },
  {
    id: 'perera-sons',
    name: 'Perera & Sons',
    category: 'food',
    floor: 'basement',
    unit: 'B-07',
    description: 'Sri Lanka’s favorite bakery serving cakes, short eats, and ready-to-go lunches.',
    phone: '+94 11 259 8761',
    hours: '09:00 AM - 09:00 PM'
  },
  {
    id: 'mr-petti',
    name: 'Mr. Petti Rice & Curry',
    category: 'food',
    floor: 'basement',
    unit: 'B-08',
    description: 'Authentic village-style claypot rice and curry with a wide selection of Sri Lankan curries.',
    hours: '11:00 AM - 08:30 PM'
  },
  {
    id: 'mc-cleaners',
    name: 'Majestic Dry Cleaners',
    category: 'services',
    floor: 'basement',
    unit: 'B-09',
    description: 'Professional dry cleaning and laundry services with express same-day delivery option.',
    phone: '+94 11 250 8734',
    hours: '09:00 AM - 08:00 PM'
  },

  // Level 1 (Shoes, Bank ATMs, Mid-range Fashion)
  {
    id: 'dsi-showroom',
    name: 'DSI Premier',
    category: 'footwear',
    floor: 'l1',
    unit: '1-01',
    description: 'Spacious multi-brand footwear showroom featuring Ranpa, Clarks, Reebok, and local classics.',
    phone: '+94 11 259 1130',
    hours: '10:00 AM - 09:00 PM',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'bata-showroom',
    name: 'Bata Flagship Store',
    category: 'footwear',
    floor: 'l1',
    unit: '1-02',
    description: 'Reliable, stylish, and comfortable footwear for men, women, and kids.',
    phone: '+94 11 250 4356',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'rohini-shoes',
    name: 'Rohini Shoes & Bags',
    category: 'footwear',
    floor: 'l1',
    unit: '1-03',
    description: 'High-quality leather formal shoes, sandals, handbags, and backpacks for daily use.',
    phone: '+94 11 258 7654',
    hours: '10:00 AM - 08:30 PM'
  },
  {
    id: 'samura-fashion',
    name: 'Samura Silk & Fashion',
    category: 'fashion',
    floor: 'l1',
    unit: '1-04',
    description: 'Exquisite sarees, shalwars, and traditional Sri Lankan and Indian ethnic wear.',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'glitz-express',
    name: 'Glitz Express',
    category: 'fashion',
    floor: 'l1',
    unit: '1-05',
    description: 'Trendy casual wear, party outfits, and accessories for the youth at mid-market prices.',
    phone: '+94 11 255 4321',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'fashion-bug-kids',
    name: 'Fashion Bug Kids',
    category: 'fashion',
    floor: 'l1',
    unit: '1-06',
    description: 'Colorful, safe, and comfortable clothes and accessories for infants, toddlers, and young kids.',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'the-gift-box',
    name: 'The Gift Box',
    category: 'services',
    floor: 'l1',
    unit: '1-07',
    description: 'Customized gift wrapping, cards, party decorations, and souvenirs for all occasions.',
    hours: '10:00 AM - 08:30 PM'
  },
  {
    id: 'hemas-pharmacy',
    name: 'Hemas Pharmacy',
    category: 'services',
    floor: 'l1',
    unit: '1-08',
    description: '24/7 accessible pharmacy with certified pharmacists, prescriptions, and daily essentials.',
    phone: '+94 11 258 2211',
    hours: '08:00 AM - 10:00 PM',
    isNew: true
  },
  {
    id: 'commercial-bank-atm',
    name: 'Commercial Bank ATM',
    category: 'services',
    floor: 'l1',
    unit: '1-09',
    description: 'Instant cash withdrawal, cash deposit, and utility bill payment machine.',
    hours: '24 Hours'
  },
  {
    id: 'sampath-bank-atm',
    name: 'Sampath Bank ATM',
    category: 'services',
    floor: 'l1',
    unit: '1-10',
    description: 'Multi-functional ATM with cash withdrawals and local card services.',
    hours: '24 Hours'
  },
  {
    id: 'peoples-bank-atm',
    name: 'People\'s Bank ATM',
    category: 'services',
    floor: 'l1',
    unit: '1-11',
    description: 'Local government bank ATM supporting local and international debit networks.',
    hours: '24 Hours'
  },

  // Level 2 (Cool Planet, Moose, Nolimit, Fashion)
  {
    id: 'cool-planet',
    name: 'Cool Planet',
    category: 'fashion',
    floor: 'l2',
    unit: '2-01',
    description: 'Mega department store featuring clothing, toys, homeware, and fashion accessories for the entire family.',
    phone: '+94 11 250 8899',
    hours: '10:00 AM - 09:30 PM',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'moose-clothing',
    name: 'Moose Clothing Company',
    category: 'fashion',
    floor: 'l2',
    unit: '2-02',
    description: 'Trendy, affordable, and incredibly comfortable activewear, jeans, and premium cotton t-shirts.',
    phone: '+94 11 258 9911',
    hours: '10:00 AM - 09:30 PM',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'nolimit',
    name: 'Nolimit',
    category: 'fashion',
    floor: 'l2',
    unit: '2-03',
    description: 'Sri Lanka’s largest fashion chain, providing high-quality clothing at budget-friendly prices.',
    phone: '+94 11 259 8812',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'code-jeans',
    name: 'Code Jeans Co.',
    category: 'fashion',
    floor: 'l2',
    unit: '2-04',
    description: 'Youth-centric denim jackets, rugged jeans, graphic tees, and streetwear essentials.',
    hours: '10:00 AM - 09:00 PM',
    isNew: true
  },
  {
    id: 'triumph',
    name: 'Triumph International',
    category: 'fashion',
    floor: 'l2',
    unit: '2-05',
    description: 'Premium quality global lingerie, sleepwear, and shapewear brand.',
    phone: '+94 11 255 1122',
    hours: '10:00 AM - 08:30 PM'
  },
  {
    id: 'cotton-collection',
    name: 'Cotton Collection',
    category: 'fashion',
    floor: 'l2',
    unit: '2-06',
    description: 'Boho-chic cotton clothing, lightweight linen garments, and handmade jewelry for women.',
    phone: '+94 11 258 4400',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'avarat',
    name: 'Avarat Men\'s Wear',
    category: 'fashion',
    floor: 'l2',
    unit: '2-07',
    description: 'Formal shirts, trousers, custom-tailored suits, and high-quality ties for men.',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'shades-shack',
    name: 'The Sunglasses Shack',
    category: 'beauty',
    floor: 'l2',
    unit: '2-08',
    description: 'Branded sunglasses, frames, and prescription lenses at reasonable mid-market rates.',
    hours: '10:00 AM - 08:30 PM'
  },
  {
    id: 'perfume-bar',
    name: 'The Perfume Bar',
    category: 'beauty',
    floor: 'l2',
    unit: '2-09',
    description: 'Imported French and Middle Eastern fragrances, body mists, and designer perfume oils.',
    hours: '10:00 AM - 09:00 PM',
    isNew: true
  },
  {
    id: 'active-sports',
    name: 'Active Sports & Fitness',
    category: 'fashion',
    floor: 'l2',
    unit: '2-10',
    description: 'Athletic wear, cricket gear, badminton rackets, and fitness equipment from global brands.',
    hours: '10:00 AM - 09:00 PM'
  },

  // Level 3 (Electronics, Services, Beauty)
  {
    id: 'dialog-experience',
    name: 'Dialog Experience Center',
    category: 'electronics',
    floor: 'l3',
    unit: '3-01',
    description: 'Mobile connections, broadband, Dialog TV, bill payments, and the latest mobile phone releases.',
    phone: '+94 77 767 8678',
    hours: '10:00 AM - 08:30 PM',
    isAnchor: true
  },
  {
    id: 'softlogic-max',
    name: 'Softlogic MAX',
    category: 'electronics',
    floor: 'l3',
    unit: '3-02',
    description: 'Authorised dealer for Samsung, Panasonic, Dell, Acer, and high-end home appliances.',
    phone: '+94 11 250 9900',
    hours: '10:00 AM - 09:00 PM',
    isAnchor: true
  },
  {
    id: 'singer-mega',
    name: 'Singer Mega',
    category: 'electronics',
    floor: 'l3',
    unit: '3-03',
    description: 'Home electronics, refrigerators, washing machines, laptops, and interest-free installment plans.',
    phone: '+94 11 259 4433',
    hours: '10:00 AM - 09:00 PM'
  },
  {
    id: 'abans-service',
    name: 'Abans Service & Apple Shop',
    category: 'electronics',
    floor: 'l3',
    unit: '3-04',
    description: 'Apple authorised reseller and reliable electronic repair service center.',
    phone: '+94 11 250 1199',
    hours: '10:00 AM - 08:00 PM'
  },
  {
    id: 'dhl-express',
    name: 'DHL Express',
    category: 'services',
    floor: 'l3',
    unit: '3-05',
    description: 'International courier and document delivery service with world-class tracking.',
    phone: '+94 11 250 7711',
    hours: '09:00 AM - 07:00 PM'
  },
  {
    id: 'western-union',
    name: 'Western Union Money Transfer',
    category: 'services',
    floor: 'l3',
    unit: '3-06',
    description: 'Fast, secure, and reliable global money remittance and currency exchange.',
    hours: '09:00 AM - 06:30 PM'
  },
  {
    id: 'seylan-bank',
    name: 'Seylan Bank Branch',
    category: 'services',
    floor: 'l3',
    unit: '3-07',
    description: 'Full-service commercial bank branch offering deposits, loans, and foreign exchange.',
    phone: '+94 11 258 4455',
    hours: '09:00 AM - 04:00 PM'
  },
  {
    id: 'hnb-promenade',
    name: 'HNB Customer Centre',
    category: 'services',
    floor: 'l3',
    unit: '3-08',
    description: 'Hatton National Bank kiosk for immediate personal banking, credit cards, and cash deposits.',
    phone: '+94 11 250 8822',
    hours: '09:00 AM - 05:00 PM'
  },
  {
    id: 'sri-lankan-beauty',
    name: 'Natures Beauty Salon',
    category: 'beauty',
    floor: 'l3',
    unit: '3-09',
    description: 'Affordable hair treatments, facials, bridal dressing, and nail art using natural local herbs.',
    phone: '+94 11 255 3300',
    hours: '10:00 AM - 08:00 PM',
    isNew: true
  },
  {
    id: 'the-barber-shop',
    name: 'The Barber Shop by MC',
    category: 'beauty',
    floor: 'l3',
    unit: '3-10',
    description: 'Premium men\'s grooming, hair fades, hot towel shaves, and beard grooming.',
    hours: '10:00 AM - 08:30 PM'
  },

  // Level 4 (Majestic Cineplex, KISS FM Studio, Entertainment)
  {
    id: 'majestic-cineplex',
    name: 'Majestic Cineplex',
    category: 'entertainment',
    floor: 'l4',
    unit: '4-01',
    description: 'Colombo\'s legendary 4-screen cinema multiplex. Featuring the premium Platinum Screen (445 seats) and Dolby Atmos sound.',
    phone: '+94 11 250 1444',
    hours: '09:30 AM - Midnight',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'kissfm-studio',
    name: 'KISS FM Live Studio',
    category: 'entertainment',
    floor: 'l4',
    unit: '4-02',
    description: 'Sri Lanka’s #1 hit music station, broadcasting LIVE directly from our state-of-the-art atrium studio! Drop by and see your favorite DJs.',
    hours: '24 Hours',
    isAnchor: true,
    isNew: true
  },
  {
    id: 'cinema-popcorn-bar',
    name: 'Cine-Bites Popcorn & Soda',
    category: 'food',
    floor: 'l4',
    unit: '4-03',
    description: 'Fresh caramel, cheese, and salted popcorn, nachos, hotdogs, and oversized slushies for moviegoers.',
    hours: '10:00 AM - 10:30 PM'
  },
  {
    id: 'game-arcade',
    name: 'MC PlayZone Arcade',
    category: 'entertainment',
    floor: 'l4',
    unit: '4-04',
    description: 'Fun-filled arcade with racing simulators, air hockey, virtual reality games, and prize grabbers.',
    hours: '10:00 AM - 09:30 PM',
    isNew: true
  },
  {
    id: 'candy-planet',
    name: 'Candy Planet',
    category: 'food',
    floor: 'l4',
    unit: '4-05',
    description: 'Pick-and-mix candies, imported chocolates, sour gummies, and Sri Lankan sweet treats.',
    hours: '10:00 AM - 09:00 PM'
  },

  // Level 5 (Cinema overflow screens, remaining food/services)
  {
    id: 'gold-screen-cinema',
    name: 'Majestic Gold Screen (L5)',
    category: 'entertainment',
    floor: 'l5',
    unit: '5-01',
    description: 'Cozy and intimate 120-seat luxury screen featuring comfortable reclining loungers and 3D projection.',
    hours: '01:00 PM - 11:30 PM'
  },
  {
    id: 'subway-mc',
    name: 'Subway',
    category: 'food',
    floor: 'l5',
    unit: '5-02',
    description: 'Freshly baked breads, custom-built subs, wraps, and healthy salads.',
    phone: '+94 11 250 8833',
    hours: '10:00 AM - 10:00 PM'
  },
  {
    id: 'mc-bookshop',
    name: 'Vijitha Yapa Bookshop',
    category: 'services',
    floor: 'l5',
    unit: '5-03',
    description: 'Sri Lanka’s premier bookshop with a vast collection of local and international fiction, educational books, and stationery.',
    phone: '+94 11 259 6600',
    hours: '10:00 AM - 08:30 PM'
  },
  {
    id: 'sithuvili-art',
    name: 'Sithuvili Sri Lankan Crafts',
    category: 'services',
    floor: 'l5',
    unit: '5-04',
    description: 'Handcrafted wooden masks, brass items, batik clothing, and authentic Sri Lankan cultural souvenirs.',
    hours: '10:00 AM - 08:00 PM'
  },
  {
    id: 'bubble-tea-l5',
    name: 'The Bubble Tea Co.',
    category: 'food',
    floor: 'l5',
    unit: '5-05',
    description: 'Refreshing taro, matcha, and brown sugar boba milk teas with chewy tapioca pearls.',
    hours: '10:00 AM - 09:30 PM',
    isNew: true
  }
]
