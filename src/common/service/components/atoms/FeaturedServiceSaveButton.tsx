import { HeartIcon } from '@heroicons/react/24/solid'

/**
 * @description Save / favorite control for the featured service card header.
 */
export const FeaturedServiceSaveButton = ({ ariaLabel }: { ariaLabel: string }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="bg-lilac-light text-violet inline-flex size-10 items-center justify-center rounded-2xl"
    >
      <HeartIcon className="size-5.5" />
    </button>
  )
}
