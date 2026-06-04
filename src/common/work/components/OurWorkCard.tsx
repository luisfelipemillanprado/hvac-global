import { OurWorkDetailsCtaButton } from '@/common/call-action/components/OurWorkDetailsCtaButton'
import { ViewAllButton } from '@/common/call-action/components/ViewAllButton'
import { DashboardRatingChip } from '@/common/rating/components/DashboardRatingChip'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import Image from 'next/image'

export const OurWorkCard = ({
  description,
  detailsAriaLabel,
  image,
  imageAlt,
  ratingAriaLabel,
  ratingValue,
  time,
  title,
  viewAll,
}: OurWorkCardProps) => {
  return (
    <article className="bg-fill shadow-panel border-line grid overflow-hidden rounded-2xl border">
      <div className="relative h-46 w-full overflow-hidden rounded-b-2xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder="blur"
          blurDataURL={blurDataUrlGallery}
          sizes="(min-width: 64rem) 20rem, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 grid place-items-center">
          <OurWorkDetailsCtaButton ariaLabel={detailsAriaLabel} />
        </div>
      </div>

      <div className="grid w-full gap-3.5 p-4">
        <DashboardTitle text={title} variant="h3" />
        <DashboardText text={description} variant="onDark" />
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <div className="grid min-w-0 grid-flow-col items-center gap-2">
            <DashboardRatingChip ariaLabel={ratingAriaLabel} value={ratingValue} />
            <DashboardSmallText text={time} variant="onDark" />
          </div>
          <ViewAllButton href={viewAll.href} ariaLabel={viewAll.ariaLabel} />
        </div>
      </div>
    </article>
  )
}
