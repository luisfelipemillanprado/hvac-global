import type { FreeQuoteButtonProps } from '@/common/call-action/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

/**
 * @description Business action button that opens the free-quote form.
 */
export const FreeQuoteButton = ({ text }: FreeQuoteButtonProps) => {
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
