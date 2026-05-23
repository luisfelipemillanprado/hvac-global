import type { ServiceHighlightCardProps } from '@/features/home/types'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const ServiceHighlightCard = ({ item, playAriaLabel }: ServiceHighlightCardProps) => {
  return (
    <article className="bg-navy-gray shadow-panel flex h-full w-full min-w-0 overflow-hidden rounded-4xl p-2">
      <div className="relative aspect-square h-full min-h-18 w-full overflow-hidden rounded-3xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 64rem) 50vw, 11rem"
          className="object-cover"
        />
        <div className="bg-overlay-bottom absolute inset-0" />
        <div className="absolute inset-0 z-10 grid place-items-center">
          <button
            type="button"
            aria-label={playAriaLabel}
            className="bg-pewter/40 inline-flex size-10 items-center justify-center rounded-full backdrop-blur-md"
          >
            <PlayIcon className="size-5.5 pl-px text-white" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  )
}
