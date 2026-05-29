import type { ActionButtonProps } from '@/common/call-action/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a dashboard free-quote CTA as a native button (e.g. to open a form).
 */
export const ActionButton = ({ text }: ActionButtonProps) => {
  return (
    <button
      type="button"
      className="shadow-control from-periwinkle via-hot-pink to-sunset grid h-10.5 w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl bg-linear-to-r px-4"
    >
      <DashboardText text={text} variant="default" truncate bold as="span" />
      <ArrowRightIcon className="size-4 shrink-0 text-white" aria-hidden />
    </button>
  )
}
