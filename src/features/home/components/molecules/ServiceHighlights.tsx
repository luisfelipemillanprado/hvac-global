import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ServiceHighlightCard } from '@/features/home/components/atoms/ServiceHighlightCard'
import type { ServiceHighlightsProps } from '@/features/home/types'

export const ServiceHighlights = ({
  badgeAriaLabel,
  eyebrowLabel,
  items,
  playAriaLabel,
  title,
}: ServiceHighlightsProps) => {
  return (
    <section className="bg-shale grid h-full grid-rows-[auto_minmax(0,1fr)] gap-y-7 rounded-4xl p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4">
        <div className="grid min-w-0 grid-cols-1 gap-y-7">
          <DashboardLabel text={eyebrowLabel} />
          <DashboardTitle text={title} variant="panel" />
        </div>
        <DashboardBadge icon="fire" ariaLabel={badgeAriaLabel} />
      </div>
      <div className="grid h-full grid-cols-2 gap-3 lg:grid-cols-1 lg:grid-rows-4">
        {items.map((item) => (
          <ServiceHighlightCard key={item.title} item={item} playAriaLabel={playAriaLabel} />
        ))}
      </div>
    </section>
  )
}
