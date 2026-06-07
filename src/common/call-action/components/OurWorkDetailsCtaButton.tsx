import type { OurWorkDetailsCtaButtonProps } from '@/common/call-action/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export const OurWorkDetailsCtaButton = ({ ariaLabel }: OurWorkDetailsCtaButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-panel bg-surface grid size-11 items-center justify-center rounded-2xl"
    >
      <ArrowRightIcon className="fill-on-media size-5 shrink-0" aria-hidden />
    </button>
  )
}
