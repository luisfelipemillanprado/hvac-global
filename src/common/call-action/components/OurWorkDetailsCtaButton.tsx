import type { OurWorkViewDetailsButtonProps } from '@/common/call-action/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export const OurWorkDetailsCtaButton = ({ ariaLabel, label }: OurWorkViewDetailsButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-panel bg-surface grid size-12 items-center justify-center rounded-2xl"
    >
      <ArrowRightIcon className="text-on-media size-5 shrink-0" aria-hidden />
    </button>
  )
}
