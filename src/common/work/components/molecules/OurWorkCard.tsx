import { DashboardBadge } from '@/common/badge/components/atoms/DashboardBadge'
import { OurWorkDetailsButton } from '@/common/call-action/components/OurWorkDetailsButton'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const OurWorkCard = ({
  badgeIcon,
  badgeLabel,
  detailsAriaLabel,
  image,
  imageAlt,
  location,
  title,
}: OurWorkCardProps) => {
  return (
    <article className="shadow-panel border-line relative min-h-60 overflow-hidden rounded-2xl border">
      <Image
        src={image}
        alt={imageAlt}
        fill
        placeholder="blur"
        blurDataURL={blurDataUrlGallery}
        sizes="(min-width: 64rem) 20rem, 100vw"
        className="object-cover"
      />
      <div className="bg-overlay-bottom absolute inset-0" />

      <div className="relative z-10 grid h-full content-end gap-4 p-4">
        <DashboardBadge label={badgeLabel} icon={badgeIcon} />
        <DashboardTitle text={title} variant="h3" />
        <div className="grid grid-flow-col items-center justify-start gap-1.5">
          <MapPinIcon className="fill-accent-strong size-4 shrink-0" aria-hidden />
          <DashboardText text={location} variant="onDark" />
        </div>
      </div>

      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <OurWorkDetailsButton ariaLabel={detailsAriaLabel} />
      </div>
    </article>
  )
}
