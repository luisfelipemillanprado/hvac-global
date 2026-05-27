import type { ServiceCardDetailsButtonProps } from '@/common/service/types'
import { PlusIcon } from '@heroicons/react/24/solid'

/**
 * @description Icon button to open service details (modal hook-up later).
 */
export const ServiceCardDetailsButton = ({ ariaLabel }: ServiceCardDetailsButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="border-white/10 bg-white/10 shadow-nav absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-2xl border backdrop-blur-md"
    >
      <PlusIcon className="size-5.5 text-white" aria-hidden />
    </button>
  )
}
