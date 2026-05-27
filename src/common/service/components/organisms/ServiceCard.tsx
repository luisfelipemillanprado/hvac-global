import type { ServiceCardProps } from '@/common/service/types'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { PlusIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

/**
 * @description Renders an HVAC service card with image and booking action.
 */
export const ServiceCard = ({
  title,
  saveAriaLabel,
  image,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <article className="bg-jet-gray/70 shadow-panel relative aspect-square min-h-35.5 overflow-hidden rounded-4xl border border-white/5 backdrop-blur-xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 64rem) 50vw, 10rem"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-overlay-bottom" />

      <div className="relative z-10 grid h-full grid-rows-[auto_minmax(0,1fr)_auto] p-2.5">
        <div className="grid justify-end">
          <button
            type="button"
            aria-label={saveAriaLabel}
            className="from-periwinkle via-hot-pink to-sunset shadow-control grid size-8 items-center justify-center rounded-full bg-linear-to-r text-white"
          >
            <PlusIcon className="size-4.5" aria-hidden />
          </button>
        </div>

        <div />

        <div className="grid gap-2">
          <div className="grid items-end">
            <div className="min-w-0">
              <DashboardTitle text={title} variant="h3" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
