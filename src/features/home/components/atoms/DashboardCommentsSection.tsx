import { FeedActivityCard } from '@/common/feed/components/FeedActivityCard'
import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import type { DashboardCommentsSectionProps } from '@/features/home/types'

export const DashboardCommentsSection = ({ badge, items, viewAll }: DashboardCommentsSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid min-h-min shrink-0 gap-4 rounded-3xl border p-4"
      aria-label={badge.label}
    >
      <DashboardSectionHeader badge={badge} viewAll={viewAll} />
      <div className="grid gap-3">
        {items.map((item) => (
          <FeedActivityCard key={item.author} {...item} />
        ))}
      </div>
    </section>
  )
}
