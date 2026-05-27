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
    <article className="shadow-panel grid gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 backdrop-blur-xl">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3">
        <div className="relative size-10 overflow-hidden rounded-full border border-white/5">
          <Image src={avatar} alt={avatarAlt} fill sizes="2.5rem" className="object-cover" />
        </div>
        <div className="grid min-w-0 gap-0.5">
          <DashboardSmallText text={author} variant="default" bold />
          <DashboardSmallText text={role} variant="onDark" />
        </div>
        <button
          type="button"
          aria-label={expandAriaLabel}
          className="grid size-8 items-center justify-center rounded-full border border-white/5 bg-white/5"
        >
          <ArrowsPointingOutIcon className="size-4 text-white/80" aria-hidden />
        </button>
      </div>
      <DashboardText text={quote} variant="onDark" />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <div className="grid min-w-0 grid-flow-col items-center gap-2">
          <span
            aria-label={ratingAriaLabel}
            className="grid w-fit shrink-0 grid-flow-col items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
          >
            <StarIcon className="text-sunset size-4" aria-hidden />
            <DashboardSmallText text={ratingValue} variant="default" bold />
          </span>
          <DashboardSmallText text={time} variant="onDark" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <DashboardSmallText text={statusLabel} variant="default" bold />
        </span>
      </div>
    </article>
  )
}
