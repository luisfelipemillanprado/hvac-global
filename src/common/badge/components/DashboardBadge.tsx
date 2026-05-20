import type { BadgeIconName, DashboardBadgeProps } from '@/common/badge/types'
import {
  BellIcon,
  BoltIcon,
  FireIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

const renderBadgeIcon = (icon: BadgeIconName) => {
  switch (icon) {
    case 'fire':
      return <FireIcon className="text-gold size-5.5" />
    case 'star':
      return <StarIcon className="text-gold size-5.5" />
    case 'share':
      return <ShareIcon className="text-gold size-5.5" />
    case 'bell':
      return <BellIcon className="text-gold size-5.5" />
    case 'bolt':
      return <BoltIcon className="text-gold size-5.5" />
    default:
      return <QuestionMarkCircleIcon className="text-gold size-5.5" />
  }
}

/**
 * @description Renders a reusable icon badge for the HVAC dashboard.
 */
export const DashboardBadge = ({ icon, ariaLabel }: DashboardBadgeProps) => {
  return (
    <span
      aria-label={ariaLabel}
      className="border-river/40 bg-charleston inline-flex size-10 items-center justify-center rounded-2xl border"
    >
      {renderBadgeIcon(icon)}
    </span>
  )
}
