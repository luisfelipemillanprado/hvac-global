export type NavbarIconName =
  | 'blog'
  | 'book'
  | 'contact'
  | 'home'
  | 'offers'
  | 'repairs'
  | 'services'
  | 'translate'

export interface NavbarItem {
  label: string
  href: string
  icon: NavbarIconName
  active?: boolean
}

export interface NavbarBrandProps {
  href: string
  label: string
}

export interface NavbarLinkProps {
  item: NavbarItem
  mobile?: boolean
  onClick?: () => void
}

export interface NavbarMobileMenuProps {
  items: readonly NavbarItem[]
  menuAriaLabel: string
}

export interface NavbarProps {
  brandHref: string
  brandLabel: string
  items: readonly NavbarItem[]
  menuAriaLabel: string
  themeToggleAriaLabel: string
  serviceAreaAriaLabel: string
  serviceAreaAvatars: readonly {
    id: string | number
    image: string
    imageAlt: string
  }[]
  serviceAreaLabel: string
}
