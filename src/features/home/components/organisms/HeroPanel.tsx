import { AvatarStack } from '@/common/avatar/components/AvatarStack'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { VisualImage } from '@/common/visual/components/VisualImage'
import type { HeroPanelProps } from '@/features/home/types'
import { StarIcon } from '@heroicons/react/24/solid'

const HERO_IMAGE_SIZES = '(max-width: 1024px) 100vw, 620px'

export const HeroPanel = ({ config, copy, reviewAvatars }: HeroPanelProps) => {
  return (
    <article className="shadow-panel bg-midnight relative min-h-[280px] overflow-hidden rounded-4xl p-5 text-white sm:min-h-[340px] sm:p-7 lg:min-h-0">
      <VisualImage
        image={config.heroImage}
        alt={copy.heroImageAlt}
        priority={config.heroImagePriority}
        sizes={HERO_IMAGE_SIZES}
        overlayClassName="bg-overlay"
      />

      <div className="relative z-10 grid h-full content-end">
        <div className="max-w-sm">
          <div className="grid gap-3">
            <DashboardTitle text={copy.heroTitle} variant="hero" />
            <DashboardText text={copy.heroDescription} variant="onDark" />
          </div>
          <div className="shadow-panel mt-5 grid w-fit grid-cols-[auto_auto_auto] items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-white backdrop-blur-md">
            <AvatarStack avatars={reviewAvatars} ariaLabel={copy.heroReviewersAriaLabel} />
            <span
              className="text-amber grid grid-flow-col items-center gap-1"
              aria-label={copy.heroRatingAriaLabel}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="size-4" />
              ))}
            </span>
            <span className="text-small md:text-small-md lg:text-small-lg font-black">
              {copy.heroRatingLabel}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
