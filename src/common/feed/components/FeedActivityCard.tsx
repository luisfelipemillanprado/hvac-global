import { ViewDetailsButton } from '@/common/call-action/components/ViewDetailsButton'
import type { FeedActivityCardProps } from '@/common/feed/types'
import { DashboardRatingChip } from '@/common/rating/components/DashboardRatingChip'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import Image from 'next/image'

export const FeedActivityCard = ({
  author,
  avatar,
  avatarAlt,
  expandAriaLabel,
  quote,
  ratingAriaLabel,
  ratingValue,
  role,
  statusLabel,
  time,
}: FeedActivityCardProps) => {
  return (
    <article className="bg-fill shadow-panel border-line grid w-full min-w-0 gap-4.25 rounded-2xl border p-4">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-2xl">
          <Image src={avatar} alt={avatarAlt} fill sizes="3.125rem" className="object-cover" />
        </div>
        <div className="grid min-w-0 gap-1 self-center">
          <DashboardSmallText text={author} variant="default" bold />
          <DashboardSmallText text={role} variant="onDark" />
        </div>
        <ViewDetailsButton ariaLabel={expandAriaLabel} />
      </div>
      <DashboardText text={quote} variant="onDark" />
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
