import { ActionButton } from '@/common/call-action/components/ActionButton'
import { DashboardQuickStatusGrid } from '@/common/status/components/molecules/DashboardQuickStatusGrid'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ArrowsPointingOutIcon, BoltIcon } from '@heroicons/react/24/solid'

type DashboardHeroOverlayService = {
  title: string
  description: string
  metricValue: string
  metricUnit: string
  serviceId: string
  startDate: string
  address: string
}

interface DashboardHeroOverlayProps {
  addressLabel: string
  ctaLabel: string
  expandAriaLabel: string
  infoAriaLabel: string
  quickStatus: readonly {
    icon: 'licensed' | 'certified' | 'sameDay' | 'financing'
    line: string
    subline: string
  }[]
  quickStatusAriaLabel: string
  service: DashboardHeroOverlayService
  startDateLabel: string
  title: string
}

export const DashboardHeroOverlay = ({
  ctaLabel,
  expandAriaLabel,
  quickStatus,
  quickStatusAriaLabel,
  service,
  title,
}: DashboardHeroOverlayProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 grid grid-rows-[auto_minmax(0,1fr)] p-4">
      <div className="pointer-events-auto grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="bg-night/45 shadow-nav grid w-fit grid-flow-col items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-2 backdrop-blur-xl">
          <BoltIcon className="text-hot-pink size-3.5" aria-hidden />
          <DashboardSmallText text={title} variant="default" bold />
        </div>

        <button
          type="button"
          aria-label={expandAriaLabel}
          className="bg-night/45 shadow-nav grid size-10 items-center justify-center rounded-2xl border border-white/10 text-white backdrop-blur-xl"
        >
          <ArrowsPointingOutIcon className="size-5" aria-hidden />
        </button>
      </div>

      <div className="pointer-events-auto self-end pb-12 sm:w-full">
        <div className="grid max-w-xs gap-2 sm:w-full sm:max-w-none">
          <DashboardTitle text={service.title} variant="h1" />
          <DashboardText text={service.description} variant="onDark" />
          <section className="hidden sm:block" aria-label={quickStatusAriaLabel}>
            <DashboardQuickStatusGrid className="grid w-full grid-cols-4 gap-2" items={quickStatus} />
          </section>
          <div className="max-w-44">
            <ActionButton text={ctaLabel} />
          </div>
        </div>
      </div>
    </div>
  )
}
