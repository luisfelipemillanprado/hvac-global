import { ScheduleServiceCta } from '@/common/call-action/components/ScheduleServiceCta'
import { PopularServiceCard } from '@/common/service/components/molecules/PopularServiceCard'
import type { PopularServiceCardProps } from '@/common/service/types/popularServiceCard'
import { DashboardQuickStatusGrid } from '@/common/status/components/molecules/DashboardQuickStatusGrid'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { OurWorkCard } from '@/common/work/components/molecules/OurWorkCard'
import type { OurWorkCardProps } from '@/common/work/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

interface DashboardInsightsColumnProps {
  quickStatus: readonly {
    icon: 'licensed' | 'certified' | 'sameDay' | 'financing'
    line: string
    subline: string
  }[]
  quickStatusAriaLabel: string
  panelPopularServices: readonly PopularServiceCardProps[]
  popularServicesViewAllAriaLabel: string
  popularServicesViewAllHref: string
  popularServicesViewAllLabel: string
  ourWorks: readonly OurWorkCardProps[]
  ourWorksTitle: string
  ourWorksViewAllAriaLabel: string
  ourWorksViewAllHref: string
  ourWorksViewAllLabel: string
  scheduleServiceCta: {
    ariaLabel: string
    subtitle: string
    title: string
  }
  servicesTitle: string
}

export const DashboardInsightsColumn = ({
  quickStatus,
  quickStatusAriaLabel,
  panelPopularServices,
  popularServicesViewAllAriaLabel,
  popularServicesViewAllHref,
  popularServicesViewAllLabel,
  ourWorks,
  ourWorksTitle,
  ourWorksViewAllAriaLabel,
  ourWorksViewAllHref,
  ourWorksViewAllLabel,
  scheduleServiceCta,
  servicesTitle,
}: DashboardInsightsColumnProps) => {
  return (
    <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
      <section
        className="bg-surface-glass shadow-panel border-line grid gap-2 rounded-3xl border p-3 backdrop-blur-xl sm:hidden"
        aria-label={quickStatusAriaLabel}
      >
        <DashboardQuickStatusGrid className="grid grid-cols-2 gap-2" items={quickStatus} />
      </section>

      <section
        className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4 backdrop-blur-xl"
        aria-label={ourWorksTitle}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <DashboardTitle text={ourWorksTitle} variant="h3" />
          <a
            href={ourWorksViewAllHref}
            aria-label={ourWorksViewAllAriaLabel}
            className="text-body md:text-body-md lg:text-body-lg leading-body text-accent grid grid-flow-col items-center gap-1 font-semibold"
          >
            {ourWorksViewAllLabel}
            <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
          </a>
        </div>
        <div className="grid gap-3">
          {ourWorks.map((item) => (
            <OurWorkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section
        className="bg-surface-glass shadow-panel border-line grid gap-4 rounded-3xl border p-4 backdrop-blur-xl"
        aria-label={servicesTitle}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <DashboardTitle text={servicesTitle} variant="h3" />
          <a
            href={popularServicesViewAllHref}
            aria-label={popularServicesViewAllAriaLabel}
            className="text-body md:text-body-md lg:text-body-lg leading-body text-accent grid grid-flow-col items-center gap-1 font-semibold"
          >
            {popularServicesViewAllLabel}
            <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
          </a>
        </div>
        <div className="scrollbar-ghost grid grid-flow-col gap-3 overflow-x-auto">
          {panelPopularServices.map((service) => (
            <PopularServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <ScheduleServiceCta {...scheduleServiceCta} />
    </aside>
  )
}
