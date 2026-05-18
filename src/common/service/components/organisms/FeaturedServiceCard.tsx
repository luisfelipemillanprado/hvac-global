import { ActionLink } from '@/common/call-action/components/ActionLink'
import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { FeaturedServiceSaveButton } from '@/common/service/components/atoms/FeaturedServiceSaveButton'
import { FeaturedServiceTags } from '@/common/service/components/molecules/FeaturedServiceTags'
import type { FeaturedServiceCardProps } from '@/common/service/types'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders the featured HVAC service card with tags, rating and booking actions.
 * @component
 * @param {FeaturedServiceCardProps} props - Component properties.
 * @returns A rendered featured service card.
 */
export const FeaturedServiceCard = ({
  title,
  tags,
  rating,
  ratingLabel,
  eyebrowLabel,
  ctaLabel,
  href,
  saveAriaLabel,
}: FeaturedServiceCardProps) => {
  return (
    <article className="shadow-panel border-cornflower/30 grid gap-6 rounded-4xl border bg-white p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="grid min-w-0 grid-cols-1 grid-rows-2 gap-2">
          <DashboardLabel text={eyebrowLabel} />
          <DashboardTitle text={title} variant="panel" />
        </div>
        <FeaturedServiceSaveButton ariaLabel={saveAriaLabel} />
      </div>

      <FeaturedServiceTags tags={tags} />

      <div className="grid grid-cols-[1fr_1.35fr] gap-3">
        <div className="bg-mint text-forest grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-2xl p-3">
          <ShieldCheckIcon className="size-7" />
          <div>
            <DashboardLabel text={ratingLabel} variant="default" />
            <p className="text-tertiary-title font-black">{rating}</p>
          </div>
        </div>
        <ActionLink href={href} text={ctaLabel} />
      </div>
    </article>
  )
}
