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
      className="text-body md:text-body-md lg:text-body-lg shadow-control bg-violet grid h-10 w-full min-w-0 grid-flow-col items-center justify-center gap-x-2 rounded-full px-4 font-medium text-white"
    >
      <ClipboardDocumentListIcon className="size-5.5" />
      {text}
    </button>
  )
}
