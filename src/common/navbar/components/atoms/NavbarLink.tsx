import type { NavbarIconName, NavbarLinkProps } from '@/common/navbar/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import {
  DocumentTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  HomeIcon,
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
      return (
        <DocumentTextIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'book':
      return (
        <StarIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'contact':
      return (
        <EnvelopeIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'home':
      return (
        <HomeIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'translate':
      return (
        <GlobeAltIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'offers':
      return (
        <TagIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'repairs':
      return (
        <WrenchIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    case 'services':
      return (
        <WrenchScrewdriverIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
    default:
      return (
        <QuestionMarkCircleIcon
          className={mobile ? 'fill-ink-black size-5.5' : 'size-5.5 fill-white lg:hidden xl:block'}
        />
      )
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
        'group text-body md:text-body-md lg:text-body-lg flex items-center gap-2 font-medium transition-colors',
        mobile
          ? 'shadow-nav bg-pewter/40 min-h-22 flex-col justify-center rounded-3xl p-4 text-center backdrop-blur-md'
          : 'hover:bg-pewter/40 rounded-2xl px-4 py-2.5 backdrop-blur-md'
      )}
    >
      <span
        className={clsx(mobile && 'bg-silver inline-flex size-10 items-center justify-center rounded-2xl')}
      >
        {renderNavbarIcon(item.icon, mobile)}
      </span>
      <DashboardText text={item.label} variant="default" as="span" />
    </Link>
  )
}
