import type { ActionButtonProps } from '@/common/call-action/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a dashboard free-quote CTA as a native button (e.g. to open a form).
 */
export const ActionButton = ({ ariaLabel, text }: ActionButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? (text ? `${text} button` : undefined)}
      className="shadow-control bg-cta-quote grid h-10.5 w-full min-w-0 grid-flow-col items-center justify-center gap-x-2 rounded-2xl px-3"
    >
      <PaperAirplaneIcon className="fill-ink-black size-5.5 shrink-0" aria-hidden />
      <DashboardText text={text} variant="default" truncate bold as="span" />
    </button>
  )
}
