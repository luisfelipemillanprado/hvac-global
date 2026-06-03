import type { DashboardBadgeProps } from '@/common/badge/types'

export interface DashboardSectionHeaderProps {
  badge: DashboardBadgeProps
  viewAll: {
    ariaLabel: string
    href: string
    label: string
  }
}
