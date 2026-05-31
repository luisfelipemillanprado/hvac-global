import type { ScheduleServiceCtaProps } from '@/common/call-action/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export const ScheduleServiceCta = ({ ariaLabel, subtitle, title }: ScheduleServiceCtaProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-control from-periwinkle via-hot-pink to-sunset grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-linear-to-r px-4 py-3"
    >
      <CalendarDaysIcon className="size-6 shrink-0 text-white" aria-hidden />
      <span className="grid min-w-0 justify-items-start gap-0.5 text-left">
        <DashboardText text={title} variant="default" truncate bold as="span" />
        <DashboardSmallText text={subtitle} variant="onDark" />
      </span>
      <span className="grid size-9 shrink-0 items-center justify-center rounded-full bg-white">
        <ArrowRightIcon className="text-ink-black size-4" aria-hidden />
      </span>
    </button>
  )
}
