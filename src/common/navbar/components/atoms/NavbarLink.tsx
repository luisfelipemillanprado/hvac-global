import type { NavbarIconName, NavbarLinkProps } from '@/common/navbar/types'
import {
  DocumentTextIcon,
  GlobeAltIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  TagIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

const renderNavbarIcon = (icon: NavbarIconName, mobile: boolean) => {
  switch (icon) {
    case 'blog':
      return <DocumentTextIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'book':
      return <StarIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'contact':
      return <PhoneIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'home':
      return <HomeIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'translate':
      return <GlobeAltIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'offers':
      return <TagIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'repairs':
      return <WrenchIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    case 'services':
      return <WrenchScrewdriverIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
    default:
      return <QuestionMarkCircleIcon className={mobile ? 'size-5.5' : 'size-5.5 lg:hidden xl:block'} />
  }
}

/**
 * @description Renders a single navbar navigation link for desktop or mobile layouts.
 */
export const NavbarLink = ({ item, mobile = false, onClick }: NavbarLinkProps) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={clsx(
        'text-body md:text-body-md lg:text-body-lg flex items-center gap-2 font-medium transition-colors',
        mobile
          ? 'border-cornflower/30 min-h-22 flex-col justify-center rounded-3xl border px-3 py-4 text-center'
          : 'rounded-2xl px-4 py-2.5',
        item.active && 'bg-violet shadow-control text-white',
        !item.active &&
          (mobile
            ? 'text-dim shadow-nav hover:bg-lilac-light hover:text-violet bg-white'
            : 'text-dim hover:bg-lilac-light hover:text-violet')
      )}
    >
      <span
        className={clsx(
          mobile && 'inline-flex size-10 items-center justify-center rounded-2xl',
          mobile && (item.active ? 'bg-white/20 text-white' : 'bg-lilac-light text-violet')
        )}
      >
        {renderNavbarIcon(item.icon, mobile)}
      </span>
      <span>{item.label}</span>
    </Link>
  )
}
