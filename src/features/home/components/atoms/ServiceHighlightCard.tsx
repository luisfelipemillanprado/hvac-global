import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { ServiceHighlightCardProps } from '@/features/home/types'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const ServiceHighlightCard = ({ item, playAriaLabel }: ServiceHighlightCardProps) => {
  return (
    <article className="shadow-panel border-steel-blue/40 relative aspect-square w-full overflow-hidden rounded-4xl border-2">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 64rem) 50vw, 11rem"
        className="object-cover"
      />
      <div className="bg-overlay absolute inset-0" />
      <div className="absolute inset-0 z-10 grid place-items-center">
        <button
          type="button"
          aria-label={playAriaLabel}
          className="border-steel-blue/40 bg-charleston inline-flex size-10 items-center justify-center rounded-2xl border"
        >
          <PlayIcon className="size-5.5 pl-px text-white" aria-hidden />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 grid p-3 backdrop-blur-lg">
        <DashboardTitle text={item.title} variant="card" />
      </div>
    </article>
  )
}
