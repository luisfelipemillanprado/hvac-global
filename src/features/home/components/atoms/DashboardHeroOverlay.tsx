import { DashboardBadge } from '@/common/badge/components/DashboardBadge'
import { FreeQuoteButton } from '@/common/call-action/components/FreeQuoteButton'
import { DashboardQuickStatusCard } from '@/common/status/components/DashboardQuickStatusCard'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { DashboardHeroOverlayProps } from '@/features/home/types'

export const DashboardHeroOverlay = ({
  badge,
  ctaLabel,
  headline,
  quickStatus,
}: DashboardHeroOverlayProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 grid grid-rows-[auto_minmax(0,1fr)] p-4">
      <DashboardBadge label={badge.title} icon={badge.icon} />

      <div className="pointer-events-auto grid max-w-68 gap-3 self-end sm:max-w-none">
        <DashboardTitle text={headline.title} variant="h1" />
        <DashboardText text={headline.description} variant="onDark" />
        <section className="hidden sm:block" aria-label={quickStatus.ariaLabel}>
          <div className="grid w-full grid-cols-4 gap-2">
            {quickStatus.items.map((item) => (
              <DashboardQuickStatusCard key={item.icon} icon={item.icon} line={item.line} />
            ))}
          </div>
        </section>
        <div className="mt-1.5 max-w-44">
          <FreeQuoteButton text={ctaLabel} />
        </div>
      </div>
    </div>
  )
}
