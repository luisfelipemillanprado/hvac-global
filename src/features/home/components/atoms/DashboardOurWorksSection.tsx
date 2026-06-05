import { WorkCarousel } from '@/common/carousel/components/WorkCarousel'
import type { DashboardOurWorksSectionProps } from '@/features/home/types'

export const DashboardOurWorksSection = ({ ariaLabel, badge, items }: DashboardOurWorksSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid min-h-min shrink-0 rounded-3xl border p-4"
      aria-label={ariaLabel}
    >
      <WorkCarousel badge={badge} works={items} />
    </section>
  )
}
