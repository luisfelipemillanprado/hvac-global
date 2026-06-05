import type { DashboardBadgeProps } from '@/common/badge/types'
import type { OurWorkCardProps } from '@/common/work/types'

export interface WorkCarouselProps {
  badge: DashboardBadgeProps
  works: readonly OurWorkCardProps[]
}
