import { RadioShow } from './types'

const weekdays: Array<'mon' | 'tue' | 'wed' | 'thu' | 'fri'> = ['mon', 'tue', 'wed', 'thu', 'fri']
const weekends: Array<'sat' | 'sun'> = ['sat', 'sun']

const weekdayShows = (day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri'): RadioShow[] => [
  {
    id: `${day}-1`,
    name: 'The Morning Rush',
    host: 'Shehani & Kavindu',
    startTime: '06:00',
    endTime: '09:00',
    day,
    description: 'Colombo’s most energetic waking-up show! Start your day with hilarious banter, trending topics, traffic updates, and the biggest chart-toppers.'
  },
  {
    id: `${day}-2`,
    name: 'Mid-Morning Mix',
    host: 'Priya Fernando',
    startTime: '09:00',
    endTime: '12:00',
    day,
    description: 'Smooth, feel-good hits to get you through your work morning. Featuring office request hours and lifestyle discussions.'
  },
  {
    id: `${day}-3`,
    name: 'Lunch Beats',
    host: 'DJ Roshan',
    startTime: '12:00',
    endTime: '14:00',
    day,
    description: 'Two hours of high-energy electronic mixes and dance beats to spice up your lunch break.'
  },
  {
    id: `${day}-4`,
    name: 'The Afternoon Drive',
    host: 'Sachini & Nimal',
    startTime: '14:00',
    endTime: '17:00',
    day,
    description: 'Vibrant talk, celebrity gossip, school updates, and interactive games to keep your drive home lively.'
  },
  {
    id: `${day}-5`,
    name: 'Evening Vibes',
    host: 'DJ Tharuka',
    startTime: '17:00',
    endTime: '19:00',
    day,
    description: 'Chillout house, retro classics, and smooth R&B to help you unwind as the sun sets over Colombo.'
  },
  {
    id: `${day}-6`,
    name: 'The Prime Time Show',
    host: 'Harsha & Dilini',
    startTime: '19:00',
    endTime: '21:00',
    day,
    description: 'The biggest trending hits, interviews with local musicians, and deep dives into Sri Lanka’s underground music scene.'
  },
  {
    id: `${day}-7`,
    name: 'Late Night with MC',
    host: 'DJ Kasun',
    startTime: '21:00',
    endTime: '00:00',
    day,
    description: 'Lofi beats, classic love songs, and late-night dedications directly from our Majestic City glass studio.'
  }
]

const weekendShows = (day: 'sat' | 'sun'): RadioShow[] => [
  {
    id: `${day}-1`,
    name: 'The Weekend Kickoff',
    host: 'Kavindu & Priya',
    startTime: '07:00',
    endTime: '10:00',
    day,
    description: 'Relaxed weekend talk, breakfast recipes, travel suggestions, and cheerful acoustic tracks.'
  },
  {
    id: `${day}-2`,
    name: 'KISS Top 40 Countdown',
    host: 'Shehani',
    startTime: '10:00',
    endTime: '14:00',
    day,
    description: 'The definitive countdown of the 40 biggest tracks in the country, updated weekly with listeners votes.'
  },
  {
    id: `${day}-3`,
    name: 'Atrium Live Jam',
    host: 'DJ Roshan & Guest Artists',
    startTime: '14:00',
    endTime: '18:00',
    day,
    description: 'Broadcasting live from the Majestic City ground floor atrium! Live listener requests, meetups, and open-mic sessions.'
  },
  {
    id: `${day}-4`,
    name: 'Club KISS House Mix',
    host: 'DJ Tharuka',
    startTime: '18:00',
    endTime: '22:00',
    day,
    description: 'Non-stop, seamless club anthems, electronic dance music, and exclusive mixes from international DJs.'
  },
  {
    id: `${day}-5`,
    name: 'Midnight Melodies',
    host: 'DJ Kasun',
    startTime: '22:00',
    endTime: '01:00',
    day,
    description: 'Unwind with slow jams, indie-folk, and smooth jazz to end your weekend on a peaceful note.'
  }
]

export const schedule: RadioShow[] = [
  ...weekdays.flatMap(day => weekdayShows(day)),
  ...weekends.flatMap(day => weekendShows(day))
]
