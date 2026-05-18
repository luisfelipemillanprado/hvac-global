import { FeaturedService } from '@/features/home/components/molecules/FeaturedService'
import { LocationCard } from '@/features/home/components/molecules/LocationCard'
import type {
  DashboardCopy,
  FeaturedServiceData,
  FeaturedServicePreview,
  LocationCopy,
} from '@/features/home/types'

export const RightRail = ({
  copy,
  featuredService,
  featuredServicePreviews,
  location,
}: {
  copy: Pick<DashboardCopy, 'freeQuoteCta'>
  featuredService: FeaturedServiceData
  featuredServicePreviews: readonly FeaturedServicePreview[]
  location: LocationCopy
}) => {
  return (
    <aside className="order-3 grid h-full gap-4 lg:sticky lg:top-6 lg:order-0 lg:grid-rows-[auto_minmax(0,1fr)] lg:self-start">
      <FeaturedService
        ctaLabel={copy.freeQuoteCta}
        previews={featuredServicePreviews}
        service={featuredService}
      />
      <LocationCard copy={location} />
    </aside>
  )
}
