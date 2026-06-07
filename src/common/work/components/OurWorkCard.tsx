import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { OurWorkDetailsCtaButton } from '@/common/call-action/components/OurWorkDetailsCtaButton'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const OurWorkCard = ({
  badge,
  image,
  imageAlt,
  location,
  title,
  viewDetails: { ariaLabel },
}: OurWorkCardProps) => {
  return (
    <article className="shadow-panel border-line relative h-74 overflow-hidden rounded-2xl border">
      <Image
        src={image}
        alt={imageAlt}
        fill
        placeholder="blur"
        blurDataURL={blurDataUrlGallery}
        sizes="(min-width: 64rem) 20rem, 100vw"
        className="object-cover object-center"
      />
      <div className="bg-overlay-bottom pointer-events-none absolute inset-0" aria-hidden />

      <div className="absolute inset-x-0 top-0 z-10 flex p-4">
        <DashboardBadge {...badge} />
      </div>

      <div className="absolute inset-0 z-10 grid place-items-center">
        <OurWorkDetailsCtaButton ariaLabel={ariaLabel} />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 grid gap-3 p-4">
        <DashboardTitle text={title} variant="h3" />
        <div className="grid grid-flow-col items-center justify-start gap-1.5">
          <MapPinIcon className="fill-accent size-5 shrink-0" aria-hidden />
          <DashboardText text={location} variant="default" />
        </div>
      </div>
    </article>
  )
}
