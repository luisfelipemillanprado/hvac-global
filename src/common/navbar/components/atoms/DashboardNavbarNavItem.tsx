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
      return <DocumentTextIcon className="size-5 fill-content" aria-hidden />
    case 'contact':
      return <PhoneIcon className="size-5 fill-content" aria-hidden />
    case 'home':
      return <HomeIcon className="size-5 fill-content" aria-hidden />
    case 'translate':
      return <GlobeAltIcon className="size-5 fill-content" aria-hidden />
    case 'specials':
      return <TagIcon className="size-5 fill-content" aria-hidden />
    case 'repairs':
      return <WrenchIcon className="size-5 fill-content" aria-hidden />
    case 'reviews':
      return <StarIcon className="size-5 fill-content" aria-hidden />
    case 'services':
      return <WrenchScrewdriverIcon className="size-5 fill-content" aria-hidden />
    default:
      return <QuestionMarkCircleIcon className="size-5 fill-content" aria-hidden />
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
        'flex items-center gap-2 border border-line',
        mobile
          ? 'shadow-nav min-h-22 flex-col justify-center rounded-3xl bg-fill p-4'
          : 'rounded-2xl px-4 py-2.5 hover:bg-fill-hover'
      )}
    >
      <span className={clsx(mobile && 'bg-surface-inset flex size-10 items-center justify-center rounded-2xl')}>
        {renderNavbarIcon(icon)}
      </span>
      <DashboardText text={label} variant="onDark" as="span" />
    </Link>
  )
}
