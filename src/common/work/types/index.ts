import type { DashboardBadgeIcon } from '@/common/badge/types'

export interface OurWorkCardProps {
  badgeIcon: DashboardBadgeIcon
  badgeLabel: string
  detailsAriaLabel: string
  image: string
  imageAlt: string
  location: string
  title: string
}
