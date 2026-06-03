import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { ViewAllButton } from '@/common/call-action/components/ViewAllButton'
import type { DashboardSectionHeaderProps } from '@/common/section-header/types'

export const DashboardSectionHeader = ({ badge, viewAll }: DashboardSectionHeaderProps) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
      <DashboardBadge {...badge} />
      <ViewAllButton href={viewAll.href} ariaLabel={viewAll.ariaLabel} />
    </div>
  )
}
