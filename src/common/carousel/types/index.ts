import type { DashboardBadgeProps } from '@/common/badge/types'
import type { OurWorkItemProps } from '@/common/work/types'

export interface WorkCarouselProps {
  badge: DashboardBadgeProps
  works: readonly OurWorkItemProps[]
}
