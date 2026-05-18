import { DashboardText } from '@/common/text/components/DashboardText'
import type { ServiceHighlight } from '@/features/home/types'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const SERVICE_HIGHLIGHT_IMAGE_SIZES = '180px'

export const ServiceHighlightCard = ({ badge, item }: { badge: string; item: ServiceHighlight }) => {
  return (
    <article className="group bg-midnight relative min-h-28 overflow-hidden rounded-4xl p-3 text-white lg:min-h-0">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={SERVICE_HIGHLIGHT_IMAGE_SIZES}
        className="object-cover"
      />
      <div className="bg-overlay absolute inset-0" />
      <div className="relative z-10 grid h-full min-h-22 grid-rows-[auto_1fr_auto]">
        <span className="text-small md:text-small-md lg:text-small-lg bg-rose w-fit rounded-full px-2 py-0.5 font-bold">
          {badge}
        </span>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2 self-end">
          <div>
            <p className="text-small md:text-small-md lg:text-small-lg line-clamp-1 font-black">
              {item.title}
            </p>
            <DashboardText text={item.subtitle} variant="onDark" truncate />
          </div>
          <span className="text-violet grid size-7 shrink-0 place-items-center rounded-full bg-white">
            <PlayIcon className="size-3.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
