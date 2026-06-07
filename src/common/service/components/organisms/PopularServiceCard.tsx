import { ViewDetailsButton } from '@/common/call-action/components/ViewDetailsButton'
import { DashboardRatingChip } from '@/common/rating/components/DashboardRatingChip'
import type { PopularServiceCardProps } from '@/common/service/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import Image from 'next/image'

export const PopularServiceCard = ({
  description,
  expandAriaLabel,
  image,
  imageAlt,
  ratingAriaLabel,
  ratingValue,
  statusLabel,
  time,
  title,
}: PopularServiceCardProps) => {
  return (
    <article className="bg-fill shadow-panel border-line grid w-full min-w-0 gap-4.5 rounded-2xl border p-4">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3">
        <div className="border-line relative size-11 shrink-0 overflow-hidden rounded-2xl border">
          <Image src={image} alt={imageAlt} fill sizes="3.125rem" className="object-cover" />
        </div>
        <div className="grid min-w-0 gap-0.5 self-center">
          <DashboardSmallText text={title} variant="default" bold />
        </div>
        <ViewDetailsButton ariaLabel={expandAriaLabel} />
      </div>
      <DashboardText text={description} variant="onDark" />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <div className="grid min-w-0 grid-flow-col items-center gap-2">
          <DashboardRatingChip ariaLabel={ratingAriaLabel} value={ratingValue} />
          <DashboardSmallText text={time} variant="onDark" />
        </div>
        <span className="border-line-strong bg-fill rounded-full border px-2.5 py-1">
          <DashboardSmallText text={statusLabel} variant="default" bold />
        </span>
      </div>
    </article>
  )
}
