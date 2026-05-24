import { AvatarStack } from '@/common/avatar/components/AvatarStack'
import { NavbarBrand } from '@/common/navbar/components/atoms/NavbarBrand'
import { NavbarLink } from '@/common/navbar/components/atoms/NavbarLink'
import { NavbarMobileMenu } from '@/common/navbar/components/molecules/NavbarMobileMenu'
import { NavbarThemeToggle } from '@/common/navbar/components/molecules/NavbarThemeToggle'
import type { NavbarProps } from '@/common/navbar/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a single responsive navbar for the HVAC dashboard.
 */
export const Navbar = ({
  brandHref,
  brandLabel,
  brandLogo,
  brandLogoAlt,
  items,
  menuAriaLabel,
  themeToggleAriaLabel,
  serviceAreaAriaLabel,
  serviceAreaAvatars,
  serviceAreaLabel,
}: NavbarProps) => {
  return (
    <nav className="shadow-nav border-navy-gray/40 bg-graphite fixed top-5 right-5 left-5 z-50 rounded-3xl border-2 p-3 backdrop-blur-xl sm:right-8 sm:left-8 md:top-7 lg:top-8 lg:px-4">
      <div className="flex items-center justify-between">
        <NavbarBrand href={brandHref} label={brandLabel} logo={brandLogo} logoAlt={brandLogoAlt} />
        <div className="hidden flex-1 items-center justify-center gap-x-1 lg:flex">
          {items.map((item) => (
            <NavbarLink key={item.label} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-x-3">
          <NavbarThemeToggle ariaLabel={themeToggleAriaLabel} />
          <div className="bg-ink-black hidden items-center gap-x-2 rounded-2xl px-2 py-1.5 md:flex">
            <AvatarStack avatars={serviceAreaAvatars} ariaLabel={serviceAreaAriaLabel} />
            <span className="hidden xl:block">
              <DashboardSmallText text={serviceAreaLabel} variant="onDark" bold />
            </span>
            <ChevronDownIcon className="text-taupe size-4 shrink-0" />
          </div>
          <NavbarMobileMenu items={items} menuAriaLabel={menuAriaLabel} />
        </div>
      </div>
    </nav>
  )
}
