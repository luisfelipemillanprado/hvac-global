import { FeaturedService } from '@/features/home/components/molecules/FeaturedService'
import { LocationCard } from '@/features/home/components/molecules/LocationCard'
import type { RightRailProps } from '@/features/home/types'

export const RightRail = ({ featuredService, location }: RightRailProps) => {
  return (
    <aside className="order-3 grid h-full gap-4 lg:sticky lg:top-6 lg:order-0 lg:grid-rows-[auto_minmax(0,1fr)] lg:self-start">
      <FeaturedService {...featuredService} />
      <LocationCard {...location} />
    </aside>
  )
}
