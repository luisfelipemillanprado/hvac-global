import type { ActionButtonProps } from '@/common/call-action/types'
import { FireIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a dashboard free-quote CTA as a native button (e.g. to open a form).
 */
export const ActionButton = ({ ariaLabel, text }: ActionButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? (text ? `${text} button` : undefined)}
      className="text-body md:text-body-md lg:text-body-lg shadow-control bg-cta-quote grid h-10 w-full min-w-0 grid-flow-col items-center justify-center gap-x-2 rounded-2xl px-4 font-medium text-white"
    >
      <FireIcon className="text-gold size-5.5 shrink-0" aria-hidden />
      {text}
    </button>
  )
}
