import { ScheduleServiceCta } from '@/common/call-action/components/ScheduleServiceCta'
import { WorkCarousel } from '@/common/carousel/components/WorkCarousel'
import { PopularServiceCard } from '@/common/service/components/molecules/PopularServiceCard'
import { DashboardQuickStatusCard } from '@/common/status/components/DashboardQuickStatusCard'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { DashboardInsightsColumnProps } from '@/features/home/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

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
          aria-label={ourWorks.title}
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <DashboardTitle text={ourWorks.title} variant="h3" />
            <a
              href={ourWorks.viewAll.href}
              aria-label={ourWorks.viewAll.ariaLabel}
              className="text-body md:text-body-md lg:text-body-lg leading-body text-accent grid grid-flow-col items-center gap-1 font-semibold"
            >
              {ourWorks.viewAll.label}
              <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
          <WorkCarousel ariaLabel={ourWorks.title} works={ourWorks.items} />
        </section>

        <section
          className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4"
          aria-label={panelPopularServices.title}
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <DashboardTitle text={panelPopularServices.title} variant="h3" />
            <a
              href={panelPopularServices.viewAll.href}
              aria-label={panelPopularServices.viewAll.ariaLabel}
              className="text-body md:text-body-md lg:text-body-lg leading-body text-accent grid grid-flow-col items-center gap-1 font-semibold"
            >
              {panelPopularServices.viewAll.label}
              <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
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
