import { FeedActivityCard } from '@/common/feed/components/molecules/FeedActivityCard'
import type { FeedActivityCardProps } from '@/common/feed/types'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'

interface DashboardCommentsSectionProps {
  items: readonly FeedActivityCardProps[]
  title: string
}

export const DashboardCommentsSection = ({ items, title }: DashboardCommentsSectionProps) => {
  return (
    <section
      className="bg-jet-gray/70 shadow-panel grid min-h-min shrink-0 gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
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
