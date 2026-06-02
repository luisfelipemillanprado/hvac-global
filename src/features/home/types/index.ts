import type { DashboardBadgeIcon } from '@/common/badge/types'
import type { ScheduleServiceCtaProps } from '@/common/call-action/types'
import type { FeedActivityCardProps } from '@/common/feed/types'
import type { ServiceAreaSectionProps } from '@/common/service-area/types'
import type { PopularServiceCardProps } from '@/common/service/types/popularServiceCard'
import type { SocialNetwork } from '@/common/social/types'
import type { OurWorkCardProps } from '@/common/work/types'

export type DashboardQuickStatusIcon = 'licensed' | 'certified' | 'sameDay' | 'financing'

export interface DashboardQuickStatusSectionProps {
  ariaLabel: string
  items: readonly {
    icon: DashboardQuickStatusIcon
    line: string
    subline: string
  }[]
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
  items: readonly FeedActivityCardProps[]
  title: string
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
  panelPopularServices: {
    title: string
    viewAll: { label: string; href: string; ariaLabel: string }
    items: readonly PopularServiceCardProps[]
  }
  ourWorks: {
    title: string
    viewAll: { label: string; href: string; ariaLabel: string }
    items: readonly OurWorkCardProps[]
  }
  scheduleServiceCta: ScheduleServiceCtaProps
}

export type DashboardHeroOverlayProps = Omit<
  DashboardHeroPanelProps,
  'image' | 'imageAlt' | 'imageAriaLabel'
> &
  Pick<DashboardHeroColumnProps, 'quickStatus'>
