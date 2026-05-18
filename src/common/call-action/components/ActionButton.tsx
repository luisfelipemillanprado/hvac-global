import type { ActionButtonProps } from '@/common/call-action/types'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a dashboard free-quote CTA as a native button (e.g. to open a form).
 */
export const ActionButton = ({ ariaLabel, text }: ActionButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? (text ? `${text} button` : undefined)}
      className="text-body md:text-body-md lg:text-body-lg shadow-cta bg-cornflower grid h-10 w-full min-w-0 grid-flow-col items-center justify-center gap-2 rounded-2xl px-3 font-medium text-white"
    >
      <ClipboardDocumentListIcon className="size-5.5" />
      {text}
    </button>
  )
}
