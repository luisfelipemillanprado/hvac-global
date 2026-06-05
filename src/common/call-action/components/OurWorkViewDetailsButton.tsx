import type { OurWorkViewDetailsButtonProps } from '@/common/call-action/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export const OurWorkViewDetailsButton = ({ ariaLabel, label }: OurWorkViewDetailsButtonProps) => {
  return (
    <button type="button" aria-label={ariaLabel} className="grid grid-flow-col items-center gap-1">
      <span className="text-body md:text-body-md lg:text-body-lg leading-body text-content">{label}</span>
      <ArrowRightIcon className="text-on-media size-5 shrink-0" aria-hidden />
    </button>
  )
}
