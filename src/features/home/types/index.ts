type FeaturedServiceBadgeIcon = 'bolt' | 'fire' | 'star' | 'share' | 'bell'

type LocationCardMapLoading = 'eager' | 'lazy'

type LocationCardMapReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

type HeroPanelReviewAvatarId = string | number

type DashboardConfig = {
  commonServiceNeedHref: string
  heroImage: string
  heroImagePriority: boolean
  popularServicesCtaHref: string
  popularServicesTitleId: string
}

type DashboardCopy = {
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
  serviceHighlightsBadgeAriaLabel: string
  serviceHighlightsEyebrowLabel: string
  serviceHighlightsPlayAriaLabel: string
  serviceHighlightsTitle: string
}

type HeroPanelReviewAvatar = {
  id: HeroPanelReviewAvatarId
  image: string
  imageAlt: string
}

type CommonServiceNeedItem = {
  title: string
  image: string
}

type ServiceHighlightItem = {
  title: string
  subtitle: string
  image: string
}

export interface ServicePreviewProps {
  label: string
  image: string
  imageAlt: string
}

export interface CommonServiceNeedItemComponentProps {
  href: string
  item: CommonServiceNeedItem
}

export interface CommonServiceNeedsProps {
  href: string
  items: readonly CommonServiceNeedItem[]
  title: string
}

export interface FeaturedServiceProps {
  ctaLabel: string
  previews: readonly ServicePreviewProps[]
  service: {
    title: string
    tags: readonly string[]
    rating: string
    ratingLabel: string
    eyebrowLabel: string
    href: string
    saveIcon: FeaturedServiceBadgeIcon
    saveAriaLabel: string
  }
}

export interface FeaturedServiceRatingProps {
  rating: string
  ariaLabel: string
}

export interface FeaturedServiceTagsProps {
  tags: readonly string[]
}

export interface HeroPanelProps {
  config: DashboardConfig
  copy: DashboardCopy
  reviewAvatars: readonly HeroPanelReviewAvatar[]
}

export interface LeftRailProps {
  commonServiceNeeds: CommonServiceNeedsProps
  serviceHighlights: ServiceHighlightsProps
}

export interface LocationCardProps {
  badge: string
  label: string
  mapHref: string
  mapLinkRel: string
  mapLinkTarget: string
  mapLoading: LocationCardMapLoading
  mapReferrerPolicy: LocationCardMapReferrerPolicy
  mapSrc: string
  mapTitle: string
  title: string
  viewMapLabel: string
}

export interface PopularServicesCtaProps {
  href: string
  text: string
}

export interface PopularServicesProps {
  config: DashboardConfig
  copy: DashboardCopy
  reviewAvatars: readonly HeroPanelReviewAvatar[]
  services: readonly {
    title: string
    description: string
    href: string
    image: string
    imageAlt: string
    mark: string
  }[]
}

export interface RightRailProps {
  featuredService: FeaturedServiceProps
  location: LocationCardProps
}

export interface ServiceHighlightCardProps {
  item: ServiceHighlightItem
  playAriaLabel: string
}

export interface ServiceHighlightsProps {
  badgeAriaLabel: string
  eyebrowLabel: string
  items: readonly ServiceHighlightItem[]
  playAriaLabel: string
  title: string
}
