import { FeedActivityCard } from '@/common/feed/components/FeedActivityCard'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { DashboardCommentsSectionProps } from '@/features/home/types'

export const DashboardCommentsSection = ({ items, title }: DashboardCommentsSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid min-h-min shrink-0 gap-4 rounded-3xl border p-4"
      aria-label={title}
    >
      <DashboardTitle text={title} variant="h3" />
      <div className="grid gap-3">
        {items.map((item) => (
          <FeedActivityCard key={item.author} {...item} />
        ))}
      </div>
    </section>
  )
}
