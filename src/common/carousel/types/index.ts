import type { OurWorkCardProps } from '@/common/work/types'

export interface WorkCarouselProps {
  ariaLabel: string
  works: readonly OurWorkCardProps[]
}
