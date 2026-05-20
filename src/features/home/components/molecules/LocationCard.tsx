import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { LocationCardProps } from '@/features/home/types'
import { MapPinIcon } from '@heroicons/react/24/solid'

export const LocationCard = ({
  badge,
  label,
  mapHref,
  mapLinkRel,
  mapLinkTarget,
  mapLoading,
  mapReferrerPolicy,
  mapSrc,
  mapTitle,
  title,
  viewMapLabel,
}: LocationCardProps) => {
  return (
    <section className="shadow-panel border-cornflower/30 grid h-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-4xl border bg-white p-3">
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-1">
        <div>
          <DashboardLabel text={label} />
          <DashboardTitle text={title} variant="panel" />
        </div>
        <span className="text-small md:text-small-md lg:text-small-lg bg-lilac text-violet grid grid-cols-[auto_auto] items-center gap-1 rounded-full px-3 py-1 font-black">
          <MapPinIcon className="size-3.5" />
          {badge}
        </span>
      </div>
      <div className="bg-frost relative min-h-40 overflow-hidden rounded-3xl">
        <iframe
          title={mapTitle}
          src={mapSrc}
          loading={mapLoading}
          referrerPolicy={mapReferrerPolicy}
          className="absolute inset-0 size-full border-0"
        />
        <div className="bg-violet/10 pointer-events-none absolute inset-0" />
      </div>
      <a
        href={mapHref}
        target={mapLinkTarget}
        rel={mapLinkRel}
        className="text-body md:text-body-md lg:text-body-lg bg-frost text-violet hover:bg-lilac mt-3 grid grid-flow-col items-center justify-center gap-2 rounded-2xl px-4 py-3 font-black transition"
      >
        <MapPinIcon className="size-4" />
        {viewMapLabel}
      </a>
    </section>
  )
}
