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
      className="shadow-control bg-gradient-cta grid h-11 w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl px-4"
    >
      <DashboardText text={text} variant="default" bold as="span" />
      <ArrowRightIcon className="text-on-media size-5" aria-hidden />
    </button>
  )
}
