export interface NavbarBrandProps {
  href: string
  label: string
  logo: string
  logoAlt: string
}

export type DashboardNavbarLinkIcon =
  | 'home'
  | 'services'
  | 'specials'
  | 'repairs'
  | 'blog'
  | 'reviews'
  | 'contact'
  | 'translate'

export type DashboardNavbarLink = {
  ariaLabel: string
  href: string
  icon: DashboardNavbarLinkIcon
  label: string
}

export interface DashboardNavbarNavItemProps {
  ariaLabel: string
  href: string
  icon: DashboardNavbarLinkIcon
  label: string
  mobile?: boolean
  onClick?: () => void
}

export interface DashboardNavbarThemeToggleProps {
  themeToggleAriaLabel: string
}

export interface DashboardNavbarMobileMenuProps {
  menuCloseAriaLabel: string
  menuOpenAriaLabel: string
  navAriaLabel: string
  navLinks: readonly DashboardNavbarLink[]
}

export interface DashboardShellHeaderProps extends NavbarBrandProps {
  menuCloseAriaLabel: string
  menuOpenAriaLabel: string
  navAriaLabel: string
  navLinks: readonly DashboardNavbarLink[]
  themeToggleAriaLabel: string
}
