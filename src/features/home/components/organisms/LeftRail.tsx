import { CommonServiceNeeds } from '@/features/home/components/molecules/CommonServiceNeeds'
import { ServiceHighlights } from '@/features/home/components/molecules/ServiceHighlights'
import type {
  CommonServiceNeed,
  DashboardConfig,
  DashboardCopy,
  ServiceHighlight,
} from '@/features/home/types'

export const LeftRail = ({
  commonServiceNeeds,
  config,
  copy,
  serviceHighlights,
}: {
  commonServiceNeeds: readonly CommonServiceNeed[]
  config: DashboardConfig
  copy: DashboardCopy
  serviceHighlights: readonly ServiceHighlight[]
}) => {
  return (
    <aside className="order-2 grid h-full gap-4 lg:order-0 lg:grid-rows-[minmax(0,1fr)_auto]">
      <ServiceHighlights
        badge={copy.serviceHighlightBadge}
        items={serviceHighlights}
        location={copy.serviceHighlightsLocation}
        title={copy.serviceHighlightsTitle}
      />
      <CommonServiceNeeds
        href={config.commonServiceNeedHref}
        items={commonServiceNeeds}
        title={copy.commonServiceNeedsTitle}
      />
    </aside>
  )
}
