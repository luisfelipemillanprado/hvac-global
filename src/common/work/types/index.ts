import type { OurWorkViewDetailsButtonProps } from '@/common/call-action/types'

export interface OurWorkCardProps {
  description: string
  detailsAriaLabel: string
  image: string
  imageAlt: string
  location: string
  time: string
  title: string
  viewDetails: OurWorkViewDetailsButtonProps
}
