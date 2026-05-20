import type { ServiceHighlightCardProps } from '@/features/home/types'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const ServiceHighlightCard = ({ item, playAriaLabel }: ServiceHighlightCardProps) => {
  return (
    <article className="shadow-panel border-river/40 bg-charleston grid aspect-square max-h-35 w-full grid-cols-1 grid-rows-1 overflow-hidden rounded-3xl border-2">
      <div className="relative min-h-0 min-w-0 overflow-hidden rounded-3xl">
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
            className="shadow-nav border-porcelain/10 bg-porcelain/15 grid size-10 place-items-center rounded-full border backdrop-blur-2xl"
          >
            <PlayIcon className="text-porcelain size-5.5 pl-px" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  )
}
