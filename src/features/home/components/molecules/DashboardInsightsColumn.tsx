import { ServiceCard } from '@/common/service/components/organisms/ServiceCard'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid'

type DashboardInsightPanel = {
  title: string
  value: string
  unit: string
  detailsAriaLabel: string
  segments: readonly {
    label: string
    value: string
  }[]
}

type DashboardInsightService = {
  title: string
  description: string
  metricValue: string
  metricUnit: string
  serviceId: string
  startDate: string
  address: string
  href: string
  image: string
  imageAlt: string
}

interface DashboardInsightsColumnProps {
  addressLabel: string
  ctaLabel: string
  detailsAriaLabel: string
  insightRange: {
    label: string
    value: string
    settingsAriaLabel: string
  }
  panels: readonly DashboardInsightPanel[]
  saveAriaLabel: string
  services: readonly DashboardInsightService[]
  servicesTitle: string
  sitePower: {
    title: string
    tabs: readonly string[]
    note: string
  }
  startDateLabel: string
}

const bubbleClasses = [
  'size-12 bg-periwinkle left-[18%] top-[28%]',
  'size-9 bg-hot-pink left-[37%] top-[20%]',
  'size-8 bg-sunset left-[68%] top-[48%]',
  'size-7 bg-periwinkle left-[12%] top-[58%]',
  'size-11 bg-hot-pink left-[54%] top-[35%]',
  'size-10 bg-sunset left-[78%] top-[64%]',
  'size-6 bg-hot-pink left-[42%] top-[62%]',
  'size-8 bg-periwinkle left-[28%] top-[72%]',
]

/**
 * @description Right dashboard column matching the reference insight stack.
 */
export const DashboardInsightsColumn = ({
  addressLabel,
  ctaLabel,
  detailsAriaLabel,
  insightRange,
  panels,
  saveAriaLabel,
  services,
  servicesTitle,
  sitePower,
  startDateLabel,
}: DashboardInsightsColumnProps) => {
  return (
    <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
      <div className="bg-jet-gray/70 shadow-panel grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-4xl border border-white/5 p-3 backdrop-blur-xl">
        <CalendarDaysIcon className="size-5 text-white" aria-hidden />
        <div>
          <DashboardSmallText text={insightRange.label} variant="default" bold />
          <DashboardSmallText text={insightRange.value} variant="onDark" />
        </div>
        <button
          type="button"
          aria-label={insightRange.settingsAriaLabel}
          className="grid size-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
        >
          <AdjustmentsHorizontalIcon className="size-5 text-white" aria-hidden />
        </button>
      </div>

      <section
        className="bg-jet-gray/70 shadow-panel grid gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
        aria-label={servicesTitle}
      >
        <DashboardTitle text={servicesTitle} variant="h3" />
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <ServiceCard
              key={service.serviceId}
              {...service}
              addressLabel={addressLabel}
              ctaLabel={ctaLabel}
              detailsAriaLabel={detailsAriaLabel}
              saveAriaLabel={saveAriaLabel}
              startDateLabel={startDateLabel}
            />
          ))}
        </div>
      </section>

      {panels.map((panel) => (
        <article
          key={panel.title}
          className="bg-jet-gray/70 shadow-panel grid gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <DashboardTitle text={panel.title} variant="h3" />
            <button
              type="button"
              aria-label={panel.detailsAriaLabel}
              className="grid size-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
            >
              <EllipsisHorizontalIcon className="size-5 text-white" aria-hidden />
            </button>
          </div>
          <div>
            <span className="text-main-title md:text-main-title-md lg:text-main-title-lg leading-main-title font-black text-white">
              {panel.value}
            </span>
            <DashboardSmallText text={panel.unit} variant="onDark" />
          </div>
          <div className="grid gap-3">
            {panel.segments.map((segment, index) => (
              <div key={segment.label} className="grid gap-1">
                <div className="grid grid-cols-2 gap-3">
                  <DashboardSmallText text={segment.value} variant="default" bold />
                  <DashboardSmallText text={segment.label} variant="onDark" />
                </div>
                <span
                  className={`h-3 rounded-full ${index === 0 ? 'from-periwinkle to-hot-pink bg-linear-to-r' : 'from-hot-pink to-sunset bg-linear-to-r'}`}
                />
              </div>
            ))}
          </div>
        </article>
      ))}

      <article className="bg-jet-gray/70 shadow-panel grid gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <DashboardTitle text={sitePower.title} variant="h3" />
          <div className="bg-night/40 grid grid-cols-2 rounded-2xl border border-white/5 p-1">
            {sitePower.tabs.map((tab, index) => (
              <span key={tab} className={`rounded-xl px-3 py-1 ${index === 0 ? 'bg-white/10' : ''}`}>
                <DashboardSmallText text={tab} variant={index === 0 ? 'default' : 'onDark'} />
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-44 overflow-hidden rounded-3xl">
          {bubbleClasses.map((className) => (
            <span
              key={className}
              className={`absolute rounded-full opacity-90 blur-[0.2px] ${className}`}
            />
          ))}
        </div>
        <DashboardSmallText text={sitePower.note} variant="onDark" />
      </article>
    </aside>
  )
}
