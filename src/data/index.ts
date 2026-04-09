import type { Service, Review, BusinessInfo } from '../types'

export const services: Service[] = [
  {
    name: 'Adult Haircut',
    description: 'Detailed haircut including skin fade/taper',
    price: '$31.50',
    duration: '25 min',
  },
  {
    name: 'Haircut & Beard Trim',
    description: 'Detailed haircut and beard trim with razor',
    price: '$45.00',
    duration: '35 min',
  },
  {
    name: 'Beard Trim',
    description: 'Beard trim lineup with razor',
    price: '$25.00',
    duration: '20 min',
  },
  {
    name: 'Razor Head Shave',
    description: 'Includes hot towel application',
    price: '$35.00',
    duration: '30 min',
  },
  {
    name: 'Buzz Cut',
    description: 'One length haircut, no fade',
    price: '$25.00',
    duration: '20 min',
  },
  {
    name: "Kid's Haircut (12 & under)",
    description: 'Precision cut for the young ones',
    price: '$25.00',
    duration: '20 min',
  },
  {
    name: 'Eyebrows Threaded',
    description: 'Clean, precise eyebrow threading',
    price: '$5.00',
    duration: '10 min',
  },
  {
    name: 'Wax (face, ears, nose)',
    description: 'Professional waxing service',
    price: '$15.00',
    duration: '15 min',
  },
]

export const reviews: Review[] = [
  {
    text: "Super professional from start to finish. Lineups were sharp, beard shaping was on point. If you're within 45 minutes of this barbershop, it's worth the drive.",
    author: 'GH Pancho',
    rating: 5,
  },
  {
    text: 'Travelled all the way from Ontario, Canada. The guys knew exactly how I wanted my hair done. Quick appointment and very reasonable prices.',
    author: 'Chris M.',
    rating: 5,
  },
  {
    text: "Chris did an unbelievably great job. Attention to detail, crazy techniques I've never seen. Got my hair looking exactly the way I wanted.",
    author: 'Addison K.',
    rating: 5,
  },
]

export const businessInfo: BusinessInfo = {
  name: '615 Barbershop',
  address: '4116 Gallatin Pike, Nashville, TN 37216',
  phone: 'tel:+16152067302',
  phoneFormatted: '(615) 206-7302',
  hours: 'Mon–Sun  9AM – 7PM',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.7181777711116!2d-86.72846862418797!3d36.222044372417656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864439b155b41b3%3A0x32c9b25295f66518!2s615%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1775749523830!5m2!1spt-BR!2sbr',
}
