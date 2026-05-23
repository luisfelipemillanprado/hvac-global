import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { ActionLink } from '@/common/call-action/components/ActionLink'
import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { FeaturedServiceRating } from '@/features/home/components/atoms/FeaturedServiceRating'
import { FeaturedServiceTags } from '@/features/home/components/atoms/FeaturedServiceTags'
import { ServicePreview } from '@/features/home/components/atoms/ServicePreview'
import type { FeaturedServiceProps } from '@/features/home/types'

export const FeaturedService = ({ ctaLabel, previews, service }: FeaturedServiceProps) => {
  return (
    <section className="grid gap-4">
      <article className="bg-graphite grid grid-rows-[auto_auto_auto] gap-y-7 rounded-4xl p-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4">
          <div className="grid min-w-0 grid-cols-1 gap-y-7">
            <DashboardLabel text={service.eyebrowLabel} />
            <DashboardTitle text={service.title} variant="h2" />
          </div>
          <DashboardBadge icon={service.saveIcon} ariaLabel={service.saveAriaLabel} />
        </div>
        <FeaturedServiceTags tags={service.tags} />
        <div className="mt-1 grid grid-cols-[auto_1fr] items-center gap-x-8">
          <FeaturedServiceRating rating={service.rating} ariaLabel={service.ratingLabel} />
          <ActionLink href={service.href} text={ctaLabel} />
        </div>
      </article>
      <div className="grid grid-cols-3 gap-3">
        {previews.map((item) => (
          <ServicePreview key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}
