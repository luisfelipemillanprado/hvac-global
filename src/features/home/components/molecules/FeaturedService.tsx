import { ServicePreviewCard } from '@/common/service/components/atoms/ServicePreviewCard'
import { FeaturedServiceCard } from '@/common/service/components/organisms/FeaturedServiceCard'
import type { FeaturedServiceData, FeaturedServicePreview } from '@/features/home/types'

export const FeaturedService = ({
  ctaLabel,
  previews,
  service,
}: {
  ctaLabel: string
  previews: readonly FeaturedServicePreview[]
  service: FeaturedServiceData
}) => {
  return (
    <section className="grid gap-4">
      <FeaturedServiceCard {...service} ctaLabel={ctaLabel} />

      <div className="grid grid-cols-3 gap-3">
        {previews.map((item) => (
          <ServicePreviewCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}
