import type { RecentInstallationCardProps } from '@/common/installation/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const RecentInstallationCard = ({
  badgeLabel,
  detailsAriaLabel,
  image,
  imageAlt,
  location,
  title,
}: RecentInstallationCardProps) => {
  return (
    <article className="shadow-panel relative min-h-36 w-[88%] min-w-56 shrink-0 overflow-hidden rounded-3xl border border-white/5">
      <Image src={image} alt={imageAlt} fill sizes="20rem" className="object-cover" />
      <div className="bg-overlay-bottom absolute inset-0" />

      <div className="relative z-10 grid h-full min-h-36 grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_minmax(0,1fr)_auto] gap-2 p-3">
        <span className="bg-night/55 w-fit rounded-full border border-white/10 px-2.5 py-1">
          <DashboardSmallText text={badgeLabel} variant="default" bold />
        </span>

        <div className="col-start-1 row-start-3 grid gap-1 self-end">
          <DashboardTitle text={title} variant="h3" />
          <div className="grid grid-flow-col items-center gap-1.5">
            <span className="bg-periwinkle size-1.5 shrink-0 rounded-full" aria-hidden />
            <DashboardSmallText text={location} variant="onDark" />
          </div>
        </div>

        <button
          type="button"
          aria-label={detailsAriaLabel}
          className="bg-night/55 col-start-2 row-span-3 row-start-1 grid size-9 shrink-0 items-center justify-center self-center rounded-full border border-white/10 backdrop-blur-xl"
        >
          <ChevronRightIcon className="size-4 text-white" aria-hidden />
        </button>
      </div>
    </article>
  )
}
