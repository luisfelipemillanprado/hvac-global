import { AvatarStack } from '@/common/avatar/components/AvatarStack'
import { NavbarBrand } from '@/common/navbar/components/atoms/NavbarBrand'
import { NavbarLink } from '@/common/navbar/components/atoms/NavbarLink'
import { NavbarMobileMenu } from '@/common/navbar/components/molecules/NavbarMobileMenu'
import { NavbarThemeToggle } from '@/common/navbar/components/molecules/NavbarThemeToggle'
import type { NavbarProps } from '@/common/navbar/types'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

/**
 * @description Renders a single responsive navbar for the HVAC dashboard.
 */
export const Navbar = ({
  brandHref,
  brandLabel,
  items,
  menuAriaLabel,
  themeToggleAriaLabel,
  serviceAreaAriaLabel,
  serviceAreaAvatars,
  serviceAreaLabel,
}: NavbarProps) => {
  return (
    <nav className="border-cornflower/30 shadow-nav fixed top-6 right-5 left-5 z-50 rounded-3xl border bg-white/78 px-3 py-3 backdrop-blur-2xl sm:right-8 sm:left-8 md:top-7 lg:top-8 lg:px-4">
      <div className="flex items-center gap-3">
        <NavbarBrand href={brandHref} label={brandLabel} />

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {items.map((item) => (
            <NavbarLink key={item.label} item={item} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <NavbarThemeToggle ariaLabel={themeToggleAriaLabel} />

          <div className="bg-frost hidden items-center gap-2 rounded-2xl px-2 py-1.5 md:flex">
            <AvatarStack avatars={serviceAreaAvatars} ariaLabel={serviceAreaAriaLabel} />
            <span className="text-ink text-small md:text-small-md lg:text-small-lg hidden font-bold xl:block">
              {serviceAreaLabel}
            </span>
            <ChevronDownIcon className="text-muted size-4" />
          </div>

          <NavbarMobileMenu items={items} menuAriaLabel={menuAriaLabel} />
        </div>
      </div>
    </nav>
  )
}
