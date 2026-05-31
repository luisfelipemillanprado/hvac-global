import type { DashboardBadgeIcon } from '@/common/badge/types'

export interface OurWorkCardProps {
  badgeIcon: DashboardBadgeIcon
  badgeLabel: string
  description: string
  detailsAriaLabel: string
  image: string
  imageAlt: string
  title: string
}
