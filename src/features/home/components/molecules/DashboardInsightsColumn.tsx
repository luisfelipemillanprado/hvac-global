import { ScheduleServiceCta } from '@/common/call-action/components/ScheduleServiceCta'
import { WorkCarousel } from '@/common/carousel/components/WorkCarousel'
import { PopularServiceCard } from '@/common/service/components/molecules/PopularServiceCard'
import { DashboardQuickStatusCard } from '@/common/status/components/DashboardQuickStatusCard'
import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import type { DashboardInsightsColumnProps } from '@/features/home/types'

export const DashboardInsightsColumn = ({
  quickStatus,
  panelPopularServices,
  ourWorks,
  scheduleServiceCta,
}: DashboardInsightsColumnProps) => {
  return (
    <div className="order-1 min-h-0 lg:order-0">
      <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
        <section
          className="bg-surface-glass shadow-panel border-line grid gap-2 rounded-3xl border p-3.5 sm:hidden"
          aria-label={quickStatus.ariaLabel}
        >
          <div className="scrollbar-ghost grid auto-cols-max grid-flow-col gap-2 overflow-x-auto">
            {quickStatus.items.map((item) => (
              <DashboardQuickStatusCard key={item.icon} icon={item.icon} line={item.line} />
            ))}
          </div>
        </section>

        <section
          className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4"
          aria-label={ourWorks.badge.label}
        >
          <DashboardSectionHeader badge={ourWorks.badge} viewAll={ourWorks.viewAll} />
          <WorkCarousel ariaLabel={ourWorks.badge.label} works={ourWorks.items} />
        </section>

        <section
          className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4"
          aria-label={panelPopularServices.badge.label}
        >
          <DashboardSectionHeader badge={panelPopularServices.badge} viewAll={panelPopularServices.viewAll} />
          <div className="scrollbar-ghost grid grid-flow-col gap-3 overflow-x-auto">
            {panelPopularServices.items.map((service) => (
              <PopularServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <ScheduleServiceCta {...scheduleServiceCta} />
      </aside>
    </div>
  )
}
