import { CommonServiceNeeds } from '@/features/home/components/molecules/CommonServiceNeeds'
import { ServiceHighlights } from '@/features/home/components/molecules/ServiceHighlights'
import type { LeftRailProps } from '@/features/home/types'

export const LeftRail = ({ commonServiceNeeds, serviceHighlights }: LeftRailProps) => {
  return (
    <aside className="order-2 grid h-full gap-4 lg:order-0 lg:grid-rows-[minmax(0,1fr)_auto]">
      <ServiceHighlights {...serviceHighlights} />
      <CommonServiceNeeds {...commonServiceNeeds} />
    </aside>
  )
}
