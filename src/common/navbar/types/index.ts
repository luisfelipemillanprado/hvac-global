import type { AvatarStackItem } from '@/common/avatar/types'

/* ------------------------------------------------------- TYPES -------------------------------------------------------------- */

export type NavbarIconName =
  | 'blog'
  | 'book'
  | 'contact'
  | 'home'
  | 'offers'
  | 'repairs'
  | 'services'
  | 'translate'

/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Defines a navigation item for the HVAC dashboard navbar.
 * @interface NavbarItem
 * @property {string} label - Visible navigation label.
 * @property {string} href - Navigation destination.
 * @property {NavbarIconName} icon - Semantic icon name rendered in the menu.
 * @property {boolean} [active] - Marks the item as currently selected.
 */
export interface NavbarItem {
  label: string
  href: string
  icon: NavbarIconName
  active?: boolean
}

/**
 * @description Defines props for the navbar brand link.
 * @interface NavbarBrandProps
 * @property {string} href - Brand link destination.
 * @property {string} label - Brand visible label.
 */
export interface NavbarBrandProps {
  href: string
  label: string
}

/**
 * @description Defines props for a single navbar navigation link.
 * @interface NavbarLinkProps
 */
export interface NavbarLinkProps {
  item: NavbarItem
  mobile?: boolean
  onClick?: () => void
}

/**
 * @description Defines props for the mobile navbar menu (toggle + panel + behavior).
 * @interface NavbarMobileMenuProps
 */
export interface NavbarMobileMenuProps {
  items: readonly NavbarItem[]
  menuAriaLabel: string
}

/**
 * @description Defines props for the HVAC dashboard navbar.
 * @interface NavbarProps
 * @property {string} brandHref - Brand link destination.
 * @property {string} brandLabel - Brand visible label.
 * @property {readonly NavbarItem[]} items - Navigation items.
 * @property {string} menuAriaLabel - Mobile menu toggle accessible label.
 * @property {string} themeToggleAriaLabel - Theme toggle button accessible label.
 * @property {string} serviceAreaAriaLabel - Service area avatars accessible label.
 * @property {readonly AvatarStackItem[]} serviceAreaAvatars - Service area avatar items.
 * @property {string} serviceAreaLabel - Service area visible label.
 */
export interface NavbarProps {
  brandHref: string
  brandLabel: string
  items: readonly NavbarItem[]
  menuAriaLabel: string
  themeToggleAriaLabel: string
  serviceAreaAriaLabel: string
  serviceAreaAvatars: readonly AvatarStackItem[]
  serviceAreaLabel: string
}
