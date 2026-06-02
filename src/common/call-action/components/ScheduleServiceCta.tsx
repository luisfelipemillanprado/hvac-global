import type { ScheduleServiceCtaProps } from '@/common/call-action/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export const ScheduleServiceCta = ({ ariaLabel, subtitle, title }: ScheduleServiceCtaProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-control bg-gradient-cta grid w-full grid-cols-[auto_auto_auto] items-center justify-between rounded-2xl px-4 py-3.5"
    >
      <CalendarDaysIcon className="text-on-media size-6" aria-hidden />
      <span className="grid gap-0.5 text-left">
        <DashboardText text={title} variant="default" bold as="span" />
        <DashboardSmallText text={subtitle} variant="onDark" />
      </span>
      <ArrowRightIcon className="text-on-media size-6" aria-hidden />
    </button>
  )
}
