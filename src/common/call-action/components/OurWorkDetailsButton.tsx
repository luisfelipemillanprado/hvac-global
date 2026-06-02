import type { OurWorkDetailsButtonProps } from '@/common/call-action/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

/**
 * @description Business action button to open the details of one of our works.
 */
export const OurWorkDetailsButton = ({ ariaLabel }: OurWorkDetailsButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-control bg-gradient-cta grid size-10 items-center justify-center rounded-2xl"
    >
      <ArrowRightIcon className="fill-on-media size-5" aria-hidden />
    </button>
  )
}
