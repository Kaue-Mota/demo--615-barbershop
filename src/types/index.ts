export interface Service {
  name: string
  description: string
  price: string
  duration: string
}

export interface Review {
  text: string
  author: string
  rating: number
}

export interface BusinessInfo {
  name: string
  address: string
  phone: string
  phoneFormatted: string
  hours: string
  mapEmbedSrc: string
}
