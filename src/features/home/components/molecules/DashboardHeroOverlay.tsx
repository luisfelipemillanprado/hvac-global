import { DashboardBadge } from '@/common/badge/components/atoms/DashboardBadge'
import { FreeQuoteButton } from '@/common/call-action/components/FreeQuoteButton'
import { DashboardQuickStatusGrid } from '@/common/status/components/molecules/DashboardQuickStatusGrid'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { DashboardHeroOverlayProps } from '@/features/home/types'

export const DashboardHeroOverlay = ({
  badgeIcon,
  ctaLabel,
  quickStatus,
  quickStatusAriaLabel,
  service,
  title,
}: DashboardHeroOverlayProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 grid grid-rows-[auto_minmax(0,1fr)] p-4">
      <DashboardBadge label={title} icon={badgeIcon} />

      <div className="pointer-events-auto grid max-w-68 gap-2.5 self-end sm:max-w-none">
        <DashboardTitle text={service.title} variant="h1" />
        <DashboardText text={service.description} variant="onDark" />
        <section className="hidden sm:block" aria-label={quickStatusAriaLabel}>
          <DashboardQuickStatusGrid className="grid w-full grid-cols-4 gap-2" items={quickStatus} />
        </section>
        <div className="mt-2 max-w-44">
          <FreeQuoteButton text={ctaLabel} />
        </div>
      </div>
    </div>
  )
}
