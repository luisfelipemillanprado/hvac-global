import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import { PopularServiceCard } from '@/common/service/components/organisms/PopularServiceCard'
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
      <div className="grid grid-cols-1 gap-3">
        {items.map((service) => (
          <PopularServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
