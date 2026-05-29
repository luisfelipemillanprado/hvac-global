import { ScheduleServiceCta } from '@/common/call-action/components/ScheduleServiceCta'
import { RecentInstallationCard } from '@/common/installation/components/molecules/RecentInstallationCard'
import type { RecentInstallationCardProps } from '@/common/installation/types'
import { PopularServiceCard } from '@/common/service/components/molecules/PopularServiceCard'
import type { PopularServiceCardProps } from '@/common/service/types/popularServiceCard'
import { DashboardQuickStatusGrid } from '@/common/status/components/molecules/DashboardQuickStatusGrid'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
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
  recentInstallations: readonly RecentInstallationCardProps[]
  recentInstallationsTitle: string
  recentInstallationsViewAllAriaLabel: string
  recentInstallationsViewAllHref: string
  recentInstallationsViewAllLabel: string
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
  recentInstallations,
  recentInstallationsTitle,
  recentInstallationsViewAllAriaLabel,
  recentInstallationsViewAllHref,
  recentInstallationsViewAllLabel,
  scheduleServiceCta,
  servicesTitle,
}: DashboardInsightsColumnProps) => {
  return (
    <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
      <section
        className="bg-jet-gray/70 shadow-panel grid gap-2 rounded-4xl border border-white/5 p-3 backdrop-blur-xl sm:hidden"
        aria-label={quickStatusAriaLabel}
      >
        <DashboardQuickStatusGrid className="grid grid-cols-2 gap-2" items={quickStatus} />
      </section>

      <section
        className="bg-jet-gray/70 shadow-panel grid gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
        aria-label={recentInstallationsTitle}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <DashboardTitle text={recentInstallationsTitle} variant="h3" />
          <a
            href={recentInstallationsViewAllHref}
            aria-label={recentInstallationsViewAllAriaLabel}
            className="text-body md:text-body-md lg:text-body-lg leading-body text-periwinkle grid grid-flow-col items-center gap-1 font-semibold"
          >
            {recentInstallationsViewAllLabel}
            <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
          </a>
        </div>
        <div className="scrollbar-ghost grid grid-flow-col gap-3 overflow-x-auto">
          {recentInstallations.map((item) => (
            <RecentInstallationCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section
        className="bg-jet-gray/70 shadow-panel grid gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
        aria-label={servicesTitle}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <DashboardTitle text={servicesTitle} variant="h3" />
          <a
            href={popularServicesViewAllHref}
            aria-label={popularServicesViewAllAriaLabel}
            className="text-body md:text-body-md lg:text-body-lg leading-body text-periwinkle grid grid-flow-col items-center gap-1 font-semibold"
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
