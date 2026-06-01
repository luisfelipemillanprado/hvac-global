import type { DashboardNavbarLinkIcon, DashboardNavbarNavItemProps } from '@/common/navbar/types'
import { DashboardText } from '@/common/text/components/DashboardText'
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

const renderNavbarIcon = (icon: DashboardNavbarLinkIcon) => {
  switch (icon) {
    case 'blog':
      return <DocumentTextIcon className="fill-content size-5" aria-hidden />
    case 'contact':
      return <PhoneIcon className="fill-content size-5" aria-hidden />
    case 'home':
      return <HomeIcon className="fill-content size-5" aria-hidden />
    case 'translate':
      return <GlobeAltIcon className="fill-content size-5" aria-hidden />
    case 'specials':
      return <TagIcon className="fill-content size-5" aria-hidden />
    case 'repairs':
      return <WrenchIcon className="fill-content size-5" aria-hidden />
    case 'reviews':
      return <StarIcon className="fill-content size-5" aria-hidden />
    case 'services':
      return <WrenchScrewdriverIcon className="fill-content size-5" aria-hidden />
    default:
      return <QuestionMarkCircleIcon className="fill-content size-5" aria-hidden />
  }
}

/**
 * @description Renders a single navbar navigation link for desktop or mobile layouts.
 */
export const DashboardNavbarNavItem = ({
  ariaLabel,
  href,
  icon,
  label,
  mobile = false,
  onClick,
}: DashboardNavbarNavItemProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        'border-line flex items-center gap-2 border',
        mobile
          ? 'shadow-nav bg-fill min-h-22 flex-col justify-center rounded-3xl p-4'
          : 'hover:bg-fill-hover rounded-2xl px-4 py-3'
      )}
    >
      <span
        className={clsx(mobile && 'bg-surface-inset flex size-10 items-center justify-center rounded-2xl')}
      >
        {renderNavbarIcon(icon)}
      </span>
      <DashboardText text={label} variant="onDark" as="span" />
    </Link>
  )
}
