import { DashboardText } from '@/common/text/components/DashboardText'
import type { FeaturedServiceTagsProps } from '@/features/home/types'

/**
 * @description Category tags grid for the featured service card.
 */
export const FeaturedServiceTags = ({ tags }: FeaturedServiceTagsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tags.map((tag) => (
        <div
          key={tag}
          className="border-steel-blue/40 bg-charleston flex h-10 w-full min-w-0 items-center rounded-full border px-4"
        >
          <DashboardText text={tag} variant="default" truncate />
        </div>
      ))}
    </div>
  )
}
