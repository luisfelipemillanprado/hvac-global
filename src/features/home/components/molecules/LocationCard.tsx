import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { LocationCopy } from '@/features/home/types'
import { MapPinIcon } from '@heroicons/react/24/solid'

export const LocationCard = ({ copy }: { copy: LocationCopy }) => {
  return (
    <section className="shadow-panel border-cornflower/30 grid h-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-4xl border bg-white p-3">
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-1">
        <div>
          <DashboardLabel text={copy.label} />
          <DashboardTitle text={copy.title} variant="panel" />
        </div>
        <span className="text-small md:text-small-md lg:text-small-lg bg-lilac text-violet grid grid-cols-[auto_auto] items-center gap-1 rounded-full px-3 py-1 font-black">
          <MapPinIcon className="size-3.5" />
          {copy.badge}
        </span>
      </div>

      <div className="bg-frost relative min-h-40 overflow-hidden rounded-3xl">
        <iframe
          title={copy.mapTitle}
          src={copy.mapSrc}
          loading={copy.mapLoading}
          referrerPolicy={copy.mapReferrerPolicy}
          className="absolute inset-0 size-full border-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-violet/10" />
      </div>

      <a
        href={copy.mapHref}
        target={copy.mapLinkTarget}
        rel={copy.mapLinkRel}
        className="text-body md:text-body-md lg:text-body-lg bg-frost text-violet hover:bg-lilac mt-3 grid grid-flow-col items-center justify-center gap-2 rounded-2xl px-4 py-3 font-black transition"
      >
        <MapPinIcon className="size-4" />
        {copy.viewMapLabel}
      </a>
    </section>
  )
}
