import type { ViewDetailsButtonProps } from '@/common/call-action/types'
import { PlusIcon } from '@heroicons/react/24/solid'

export const ViewDetailsButton = ({ ariaLabel }: ViewDetailsButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="border-line bg-fill grid size-10 shrink-0 items-center justify-center rounded-2xl border"
    >
      <PlusIcon className="fill-on-media size-5" aria-hidden />
    </button>
  )
}
