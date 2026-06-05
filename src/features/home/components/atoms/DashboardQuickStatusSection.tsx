import { DashboardQuickStatusCard } from '@/common/status/components/DashboardQuickStatusCard'
import type { DashboardQuickStatusSectionProps } from '@/features/home/types'

export const DashboardQuickStatusSection = ({ ariaLabel, items }: DashboardQuickStatusSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid gap-2 rounded-3xl border p-3.5 sm:hidden"
      aria-label={ariaLabel}
    >
      <div className="scrollbar-ghost grid auto-cols-max grid-flow-col gap-2 overflow-x-auto">
        {items.map((item) => (
          <DashboardQuickStatusCard key={item.icon} icon={item.icon} line={item.line} />
        ))}
      </div>
    </section>
  )
}
