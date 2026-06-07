import type { DashboardBadgeIcon, DashboardBadgeProps } from '@/common/badge/types'
import type { ScheduleServiceCtaProps } from '@/common/call-action/types'
import type { FeedActivityCardProps } from '@/common/feed/types'
import type { ServiceAreaSectionProps } from '@/common/service-area/types'
import type { PopularServiceCardProps } from '@/common/service/types'
import type { SocialNetwork } from '@/common/social/types'
import type { DashboardQuickStatusCardProps } from '@/common/status/types'
import type { OurWorkItemProps } from '@/common/work/types'

export interface DashboardQuickStatusSectionProps {
  ariaLabel: string
  items: readonly DashboardQuickStatusCardProps[]
}

export interface DashboardCompanyProfileProps {
  avatar: string
  avatarAlt: string
  ctaAriaLabel: string
  ctaLabel: string
  expandAriaLabel: string
  name: string
  role: string
  socialLinks: readonly {
    ariaLabel: string
    href: string
    network: SocialNetwork
  }[]
}

export interface DashboardCommentsSectionProps {
  badge: DashboardBadgeProps
  items: readonly FeedActivityCardProps[]
  viewAll: { label: string; href: string; ariaLabel: string }
}

export interface DashboardOurWorksSectionProps {
  badge: DashboardBadgeProps
  items: readonly OurWorkItemProps[]
  viewAll: { label: string; href: string; ariaLabel: string }
}

export interface DashboardPopularServicesSectionProps {
  badge: DashboardBadgeProps
  items: readonly PopularServiceCardProps[]
  viewAll: { label: string; href: string; ariaLabel: string }
}

export interface DashboardMetricsColumnProps {
  comments: DashboardCommentsSectionProps
  companyProfile: DashboardCompanyProfileProps
  serviceArea: ServiceAreaSectionProps
}

export interface DashboardHeroPanelProps {
  imageAriaLabel: string
  image: string
  imageAlt: string
  badge: {
    title: string
    icon?: DashboardBadgeIcon
  }
  ctaLabel: string
  headline: {
    title: string
    description: string
  }
}

export interface DashboardHeroColumnProps {
  hero: DashboardHeroPanelProps
  quickStatus: DashboardQuickStatusSectionProps
}

export interface DashboardInsightsColumnProps {
  quickStatus: DashboardQuickStatusSectionProps
  popularServices: DashboardPopularServicesSectionProps
  ourWorks: DashboardOurWorksSectionProps
  scheduleServiceCta: ScheduleServiceCtaProps
}

export type DashboardHeroOverlayProps = Omit<
  DashboardHeroPanelProps,
  'image' | 'imageAlt' | 'imageAriaLabel'
> &
  Pick<DashboardHeroColumnProps, 'quickStatus'>
