import type { OurWorkDetailsButtonProps } from '@/common/call-action/types'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

/**
 * @description Business action button to open work item details (card header control).
 */
export const OurWorkDetailsButton = ({ ariaLabel }: OurWorkDetailsButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="border-line bg-fill grid size-10 shrink-0 items-center justify-center rounded-2xl border"
    >
      <EllipsisHorizontalIcon className="text-content-muted size-5" aria-hidden />
    </button>
  )
}
