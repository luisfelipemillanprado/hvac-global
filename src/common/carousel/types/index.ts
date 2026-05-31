import type { OurWorkCardProps } from '@/common/work/types'

export type ServiceCarouselSlide = {
  image: string
  imageAlt: string
}

export interface ServiceCarouselProps {
  ariaLabel: string
  slides: readonly ServiceCarouselSlide[]
}

export interface WorkCarouselProps {
  ariaLabel: string
  works: readonly OurWorkCardProps[]
}
