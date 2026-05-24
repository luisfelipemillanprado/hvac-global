import { ActionButton } from '@/common/call-action/components/ActionButton'
import { DashboardLabel } from '@/common/label/components/DashboardLabel'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ServiceHighlightCard } from '@/features/home/components/atoms/ServiceHighlightCard'
import type { ServiceHighlightsProps } from '@/features/home/types'

export const ServiceHighlights = ({
  eyebrowLabel,
  items,
  playAriaLabel,
  title,
  viewMoreLabel,
}: ServiceHighlightsProps) => {
  return (
    <section className="bg-graphite grid h-full grid-rows-[auto_minmax(0,1fr)_auto] gap-y-7 rounded-4xl p-5">
      <div className="grid min-w-0 grid-cols-1 gap-y-7">
        <DashboardLabel text={eyebrowLabel} />
        <DashboardTitle text={title} variant="h2" />
      </div>
      <div className="grid h-full grid-cols-2 gap-3 lg:grid-cols-1 lg:grid-rows-4">
        {items.map((item) => (
          <ServiceHighlightCard key={item.title} item={item} playAriaLabel={playAriaLabel} />
        ))}
      </div>
      <ActionButton text={viewMoreLabel} />
    </section>
  )
}
