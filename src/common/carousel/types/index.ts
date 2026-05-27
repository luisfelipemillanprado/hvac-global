export type ServiceCarouselSlide = {
  image: string
  imageAlt: string
}

export interface ServiceCarouselProps {
  ariaLabel: string
  slides: readonly ServiceCarouselSlide[]
}
