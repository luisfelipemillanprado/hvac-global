import type { ViewAllButtonProps } from '@/common/call-action/types'

export interface OurWorkCardProps {
  description: string
  detailsAriaLabel: string
  image: string
  imageAlt: string
  ratingAriaLabel: string
  ratingValue: string
  time: string
  title: string
  viewAll: ViewAllButtonProps
}
