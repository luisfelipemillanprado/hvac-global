import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { OurWorkDetailsButton } from '@/common/call-action/components/OurWorkDetailsButton'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import Image from 'next/image'

export const OurWorkCard = ({
  badgeIcon,
  badgeLabel,
  description,
  detailsAriaLabel,
  image,
  imageAlt,
  title,
}: OurWorkCardProps) => {
  return (
    <article className="shadow-panel relative min-h-62 overflow-hidden rounded-2xl">
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

      <div className="absolute inset-0 z-10 grid content-end gap-4 p-4">
        <DashboardBadge label={badgeLabel} icon={badgeIcon} />
        <DashboardTitle text={title} variant="h3" />
        <DashboardText text={description} variant="onDark" truncate />
      </div>

      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <OurWorkDetailsButton ariaLabel={detailsAriaLabel} />
      </div>
    </article>
  )
}
