import type { AvatarStackItem } from '@/common/avatar/types'

/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for the service card image mark badge.
 * @interface ServiceCardMarkProps
 * @property {string} mark - Short visual mark (e.g. AC, MT).
 */
export interface ServiceCardMarkProps {
  mark: string
}

/**
 * @description Defines props for an HVAC service card.
 * @interface ServiceCardProps
 * @property {string} title - Service title.
 * @property {string} description - Service description.
 * @property {string} ctaLabel - Service action label.
 * @property {string} image - Service image from public assets.
 * @property {string} imageAlt - Accessible service image description.
 * @property {string} mark - Short visual mark rendered inside the image block.
 * @property {readonly AvatarStackItem[]} reviewAvatars - Customer reviewer avatars.
 * @property {string} reviewersAriaLabel - Accessible label for customer reviewer avatars.
 * @property {string} href - Service action destination.
 */
export interface ServiceCardProps {
  title: string
  description: string
  ctaLabel: string
  href: string
  image: string
  imageAlt: string
  mark: string
  reviewAvatars: readonly AvatarStackItem[]
  reviewersAriaLabel: string
}

/**
 * @description Defines props for the featured service card tags grid.
 * @interface FeaturedServiceTagsProps
 * @property {readonly string[]} tags - Service category tags.
 */
export interface FeaturedServiceTagsProps {
  tags: readonly string[]
}

/**
 * @description Defines props for the featured HVAC service card.
 * @interface FeaturedServiceCardProps
 * @property {string} title - Featured service title.
 * @property {readonly string[]} tags - Service category tags.
 * @property {string} rating - Customer rating label.
 * @property {string} ratingLabel - Customer rating title label.
 * @property {string} eyebrowLabel - Featured card eyebrow label.
 * @property {string} ctaLabel - Service action label.
 * @property {string} href - Service action destination.
 * @property {string} saveAriaLabel - Accessible saved-service button label.
 */
export interface FeaturedServiceCardProps {
  title: string
  tags: readonly string[]
  rating: string
  ratingLabel: string
  eyebrowLabel: string
  ctaLabel: string
  href: string
  saveAriaLabel: string
}

/**
 * @description Defines props for a compact media preview card.
 * @interface ServicePreviewCardProps
 * @property {string} label - Preview label.
 * @property {string} image - Preview image from public assets.
 * @property {string} imageAlt - Accessible preview image description.
 */
export interface ServicePreviewCardProps {
  label: string
  image: string
  imageAlt: string
}
