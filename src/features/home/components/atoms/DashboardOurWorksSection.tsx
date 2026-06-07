import { WorkCarousel } from '@/common/carousel/components/WorkCarousel'
import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import type { DashboardOurWorksSectionProps } from '@/features/home/types'

export const DashboardOurWorksSection = ({ badge, items, viewAll }: DashboardOurWorksSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid min-h-min shrink-0 gap-4 rounded-3xl border p-4"
      aria-label={badge.label}
    >
      <DashboardSectionHeader badge={badge} viewAll={viewAll} />
      <WorkCarousel badge={badge} works={items} />
    </section>
  )
}
