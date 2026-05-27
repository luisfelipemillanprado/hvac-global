import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'

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
  expandAriaLabel: string
  infoAriaLabel: string
  moreAriaLabel: string
  service: DashboardHeroOverlayService
  startDateLabel: string
  title: string
}

export const DashboardHeroOverlay = ({
  addressLabel,
  expandAriaLabel,
  infoAriaLabel,
  moreAriaLabel,
  service,
  startDateLabel,
  title,
}: DashboardHeroOverlayProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 grid grid-rows-[auto_minmax(0,1fr)_auto] p-4">
      <div className="pointer-events-auto grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="bg-night/45 shadow-nav grid w-fit grid-flow-col items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 backdrop-blur-xl">
          <DashboardSmallText text={title} variant="default" bold />
          <button
            type="button"
            aria-label={infoAriaLabel}
            className="grid size-5 items-center justify-center rounded-full text-white/70"
          >
            <InformationCircleIcon className="size-4" aria-hidden />
          </button>
        </div>

        <div className="grid grid-flow-col gap-2">
          <button
            type="button"
            aria-label={expandAriaLabel}
            className="bg-night/45 shadow-nav grid size-10 items-center justify-center rounded-2xl border border-white/10 text-white backdrop-blur-xl"
          >
            <ArrowsPointingOutIcon className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={moreAriaLabel}
            className="bg-night/45 shadow-nav grid size-10 items-center justify-center rounded-2xl border border-white/10 text-white backdrop-blur-xl"
          >
            <EllipsisHorizontalIcon className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <div />

      <div className="pointer-events-auto grid gap-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="grid gap-2">
            <DashboardTitle text={service.title} variant="h1" />
            <DashboardSmallText text={service.serviceId} variant="onDark" />
          </div>
          <div className="grid justify-items-end gap-0.5">
            <span className="text-main-title md:text-main-title-md lg:text-main-title-lg leading-main-title font-black text-white">
              {service.metricValue}
            </span>
            <DashboardSmallText text={service.metricUnit} variant="default" bold />
          </div>
        </div>

        <div className="grid max-w-lg grid-cols-2 gap-4">
          <div>
            <DashboardSmallText text={startDateLabel} variant="onDark" />
            <DashboardSmallText text={service.startDate} variant="default" bold />
          </div>
          <div>
            <DashboardSmallText text={addressLabel} variant="onDark" />
            <DashboardSmallText text={service.address} variant="default" bold />
          </div>
        </div>

        <DashboardText text={service.description} variant="onDark" />

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <span className="from-periwinkle via-hot-pink to-sunset grid size-10 items-center justify-center rounded-2xl bg-linear-to-br">
            <HomeIcon className="size-5 text-white" aria-hidden />
          </span>
          <div />
          <span className="bg-night/70 grid size-10 items-center justify-center rounded-2xl border border-white/10 backdrop-blur-xl">
            <ArrowDownTrayIcon className="size-5 text-white" aria-hidden />
          </span>
        </div>
      </div>
    </div>
  )
}
