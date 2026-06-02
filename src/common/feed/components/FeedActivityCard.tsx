import type { FeedActivityCardProps } from '@/common/feed/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ArrowsPointingOutIcon, StarIcon } from '@heroicons/react/24/solid'
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
    <article className="shadow-panel border-line bg-fill grid gap-3 rounded-2xl border p-3">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3">
        <div className="border-line relative size-10 overflow-hidden rounded-full border">
          <Image src={avatar} alt={avatarAlt} fill sizes="2.5rem" className="object-cover" />
        </div>
        <div className="grid min-w-0 gap-0.5">
          <DashboardSmallText text={author} variant="default" bold />
          <DashboardSmallText text={role} variant="onDark" />
        </div>
        <button
          type="button"
          aria-label={expandAriaLabel}
          className="border-line bg-fill grid size-8 items-center justify-center rounded-full border"
        >
          <ArrowsPointingOutIcon className="text-content-muted size-4" aria-hidden />
        </button>
      </div>
      <DashboardText text={quote} variant="onDark" />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <div className="grid min-w-0 grid-flow-col items-center gap-2">
          <span
            aria-label={ratingAriaLabel}
            className="border-line-strong bg-fill grid w-fit shrink-0 grid-flow-col items-center gap-1 rounded-full border px-2.5 py-1"
          >
            <StarIcon className="text-sunset size-4" aria-hidden />
            <DashboardSmallText text={ratingValue} variant="default" bold />
          </span>
          <DashboardSmallText text={time} variant="onDark" />
        </div>
        <span className="border-line-strong bg-fill rounded-full border px-2.5 py-1">
          <DashboardSmallText text={statusLabel} variant="default" bold />
        </span>
      </div>
    </article>
  )
}
