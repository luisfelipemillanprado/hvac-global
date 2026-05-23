import { AvatarStack } from '@/common/avatar/components/AvatarStack'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { VisualImage } from '@/common/visual/components/VisualImage'
import type { HeroPanelProps } from '@/features/home/types'
import { StarIcon } from '@heroicons/react/24/solid'

export const HeroPanel = ({ config, copy, reviewAvatars }: HeroPanelProps) => {
  return (
    <article className="shadow-panel border-navy-gray/40 relative grid min-h-70 grid-cols-1 overflow-hidden rounded-4xl border-2 p-5 sm:min-h-85 sm:p-7 lg:min-h-0">
      <VisualImage image={config.heroImage} alt={copy.heroImageAlt} priority={config.heroImagePriority} />
      <div className="bg-overlay absolute inset-0" />
      <div className="relative z-10 col-start-1 row-start-1 grid h-full min-h-0">
        <div className="grid max-w-2xs grid-cols-1 gap-5">
          <div className="grid grid-cols-1 gap-3">
            <DashboardTitle text={copy.heroTitle} variant="h1" />
            <DashboardText text={copy.heroDescription} variant="onDark" />
          </div>
          <div className="shadow-panel flex w-fit items-center gap-x-2.5 rounded-3xl bg-white/20 p-3 backdrop-blur-md">
            <AvatarStack avatars={reviewAvatars} ariaLabel={copy.heroReviewersAriaLabel} />
            <div className="grid grid-flow-col items-center gap-1" aria-label={copy.heroRatingAriaLabel}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="fill-gold size-4.5" />
              ))}
            </div>
            <DashboardText text={copy.heroRatingLabel} variant="onDark" bold={true} />
          </div>
        </div>
      </div>
    </article>
  )
}
