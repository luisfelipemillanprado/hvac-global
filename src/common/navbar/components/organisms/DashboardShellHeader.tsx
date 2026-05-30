import { DashboardNavbarNavItem } from '@/common/navbar/components/atoms/DashboardNavbarNavItem'
import { DashboardNavbarThemeToggle } from '@/common/navbar/components/atoms/DashboardNavbarThemeToggle'
import { NavbarBrand } from '@/common/navbar/components/atoms/NavbarBrand'
import { DashboardNavbarMobileMenu } from '@/common/navbar/components/molecules/DashboardNavbarMobileMenu'
import type { DashboardShellHeaderProps } from '@/common/navbar/types'

/**
 * @description Dashboard navbar organism — brand, navigation and header actions.
 */
export const DashboardShellHeader = ({
  menuCloseAriaLabel,
  menuOpenAriaLabel,
  navAriaLabel,
  navLinks,
  themeToggleAriaLabel,
  ...brand
}: DashboardShellHeaderProps) => {
  return (
    <header className="bg-surface-glass fixed inset-x-4 top-4 z-40 rounded-3xl border border-line p-4 backdrop-blur-xl lg:static lg:inset-x-auto lg:top-auto lg:z-auto">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <NavbarBrand {...brand} />

        <nav
          aria-label={navAriaLabel}
          className="scrollbar-ghost hidden min-w-0 lg:block lg:overflow-x-auto"
        >
          <div className="bg-surface-sunken grid w-max grid-flow-col gap-1 rounded-2xl border border-line p-1">
            {navLinks.map((link) => (
              <DashboardNavbarNavItem key={link.label} {...link} />
            ))}
          </div>
        </nav>

        <div className="grid grid-flow-col justify-end gap-x-2">
          <DashboardNavbarThemeToggle themeToggleAriaLabel={themeToggleAriaLabel} />
          <DashboardNavbarMobileMenu
            menuCloseAriaLabel={menuCloseAriaLabel}
            menuOpenAriaLabel={menuOpenAriaLabel}
            navAriaLabel={navAriaLabel}
            navLinks={navLinks}
          />
        </div>
      </div>
    </header>
  )
}
