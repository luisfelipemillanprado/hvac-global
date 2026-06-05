import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import { PopularServiceCard } from '@/common/service/components/molecules/PopularServiceCard'
import type { DashboardPopularServicesSectionProps } from '@/features/home/types'

export const DashboardPopularServicesSection = ({
  badge,
  items,
  viewAll,
}: DashboardPopularServicesSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4"
      aria-label={badge.label}
    >
      <DashboardSectionHeader badge={badge} viewAll={viewAll} />
      <div className="scrollbar-ghost grid grid-flow-col gap-3 overflow-x-auto">
        {items.map((service) => (
          <PopularServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
