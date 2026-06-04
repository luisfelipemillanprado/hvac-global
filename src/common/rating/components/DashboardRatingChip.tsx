import type { DashboardRatingChipProps } from '@/common/rating/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { StarIcon } from '@heroicons/react/24/solid'

export const DashboardRatingChip = ({ ariaLabel, value }: DashboardRatingChipProps) => {
  return (
    <span
      aria-label={ariaLabel}
      className="border-line-strong bg-surface-inset grid w-fit shrink-0 grid-flow-col items-center gap-1 rounded-full border px-3 py-1.5"
    >
      <StarIcon className="text-sunset size-4.5" aria-hidden />
      <DashboardSmallText text={value} variant="default" bold />
    </span>
  )
}
