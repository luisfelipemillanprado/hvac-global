import type { DashboardBadgeProps } from '@/common/badge/types'

export interface ServiceAreaSectionProps {
  badge: DashboardBadgeProps
  description: string
  mapEmbedUrl: string
  mapTitle: string
  technicianAvatars: readonly {
    alt: string
    src: string
  }[]
  technicianCount: string
  techniciansLabel: string
  viewMapAriaLabel: string
  viewMapHref: string
  viewMapLabel: string
}
