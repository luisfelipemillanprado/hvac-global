import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ServiceHighlightCard } from '@/features/home/components/atoms/ServiceHighlightCard'
import type { ServiceHighlight } from '@/features/home/types'

export const ServiceHighlights = ({
  badge,
  items,
  location,
  title,
}: {
  badge: string
  items: readonly ServiceHighlight[]
  location: string
  title: string
}) => {
  return (
    <section className="shadow-panel border-cornflower/30 grid h-full grid-rows-[auto_minmax(0,1fr)] rounded-4xl border bg-white p-3">
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <DashboardTitle text={title} variant="section" />
        <span className="text-small md:text-small-md lg:text-small-lg text-dim font-bold">
          {location}
        </span>
      </div>

      <div className="grid h-full gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
        {items.map((item) => (
          <ServiceHighlightCard key={item.title} badge={badge} item={item} />
        ))}
      </div>
    </section>
  )
}
