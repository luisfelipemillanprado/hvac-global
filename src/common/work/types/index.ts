import type { DashboardBadgeProps } from '@/common/badge/types'
import type { OurWorkDetailsCtaButtonProps } from '@/common/call-action/types'

export interface OurWorkItemProps {
  image: string
  imageAlt: string
  location: string
  title: string
  viewDetails: OurWorkDetailsCtaButtonProps
}

export interface OurWorkCardProps extends OurWorkItemProps {
  badge: DashboardBadgeProps
}
