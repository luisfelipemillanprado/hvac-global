import type { FeaturedServiceRatingProps } from '@/features/home/types'
import { StarIcon } from '@heroicons/react/24/solid'

/**
 * @description Star rating pill for the featured service card footer.
 */
export const FeaturedServiceRating = ({ rating, ariaLabel }: FeaturedServiceRatingProps) => {
  return (
    <div
      aria-label={ariaLabel}
      className="bg-navy-black grid h-10 w-fit grid-flow-col items-center gap-x-2 rounded-full px-4 text-white"
    >
      <StarIcon className="text-gold size-5.5 shrink-0" aria-hidden />
      <span className="text-small md:text-small-md lg:text-small-lg leading-small font-bold">{rating}</span>
    </div>
  )
}
