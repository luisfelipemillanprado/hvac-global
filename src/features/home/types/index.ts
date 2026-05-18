import type { AvatarStackItem } from '@/common/avatar/types'
import type {
  FeaturedServiceCardProps,
  ServiceCardProps,
  ServicePreviewCardProps,
} from '@/common/service/types'
import type { HTMLAttributeReferrerPolicy } from 'react'

export interface ServiceHighlight {
  title: string
  subtitle: string
  image: string
}

export interface CommonServiceNeed {
  title: string
  image: string
}

export type HeroReviewAvatar = AvatarStackItem

export type PopularService = Omit<ServiceCardProps, 'ctaLabel' | 'reviewAvatars' | 'reviewersAriaLabel'>

export type FeaturedServiceData = Omit<FeaturedServiceCardProps, 'ctaLabel'>

export type FeaturedServicePreview = ServicePreviewCardProps

export interface DashboardCopy {
  commonServiceNeedsTitle: string
  heroDescription: string
  heroImageAlt: string
  heroRatingAriaLabel: string
  heroRatingLabel: string
  heroReviewersAriaLabel: string
  heroTitle: string
  freeQuoteCta: string
  popularServicesCta: string
  popularServicesTitle: string
  serviceReviewersAriaLabel: string
  serviceHighlightBadge: string
  serviceHighlightsLocation: string
  serviceHighlightsTitle: string
}

export interface DashboardConfig {
  commonServiceNeedHref: string
  heroImage: string
  heroImagePriority: boolean
  popularServicesCtaHref: string
  popularServicesTitleId: string
}

export interface LocationCopy {
  badge: string
  label: string
  mapHref: string
  mapLinkRel: string
  mapLinkTarget: string
  mapLoading: 'eager' | 'lazy'
  mapReferrerPolicy: HTMLAttributeReferrerPolicy
  mapSrc: string
  mapTitle: string
  title: string
  viewMapLabel: string
}
