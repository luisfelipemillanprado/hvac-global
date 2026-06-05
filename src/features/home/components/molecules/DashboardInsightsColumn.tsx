import { ScheduleServiceCta } from '@/common/call-action/components/ScheduleServiceCta'
import { DashboardOurWorksSection } from '@/features/home/components/atoms/DashboardOurWorksSection'
import { DashboardPopularServicesSection } from '@/features/home/components/atoms/DashboardPopularServicesSection'
import { DashboardQuickStatusSection } from '@/features/home/components/atoms/DashboardQuickStatusSection'
import type { DashboardInsightsColumnProps } from '@/features/home/types'

export const DashboardInsightsColumn = ({
  quickStatus,
  popularServices,
  ourWorks,
  scheduleServiceCta,
}: DashboardInsightsColumnProps) => {
  return (
    <div className="order-1 min-h-0 lg:order-0">
      <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
        <DashboardQuickStatusSection {...quickStatus} />

        <DashboardOurWorksSection {...ourWorks} />

        <DashboardPopularServicesSection {...popularServices} />

        <ScheduleServiceCta {...scheduleServiceCta} />
      </aside>
    </div>
  )
}
