import type { DashboardBadgeIcon, DashboardBadgeProps } from '@/common/badge/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import {
  ArrowRightIcon,
  BoltIcon,
  FireIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid'

const renderBadgeIcon = (icon: DashboardBadgeIcon) => {
  switch (icon) {
    case 'bolt':
      return <BoltIcon className="fill-accent-strong size-4" aria-hidden />
    case 'arrowRight':
      return <ArrowRightIcon className="fill-accent-strong size-4" aria-hidden />
    case 'install':
      return <WrenchScrewdriverIcon className="fill-accent-strong size-4" aria-hidden />
    case 'upgrade':
      return <Square3Stack3DIcon className="fill-accent-strong size-4" aria-hidden />
    case 'heating':
      return <FireIcon className="fill-accent-strong size-4" aria-hidden />
    case 'airQuality':
      return <SparklesIcon className="fill-accent-strong size-4" aria-hidden />
    default:
      return <QuestionMarkCircleIcon className="fill-on-media size-4" aria-hidden />
  }
}

/**
 * @description Rounded glass pill with a bold small label and an optional icon on either side.
 */
export const DashboardBadge = ({
  label,
  icon,
  iconPosition = 'left',
  light = false,
}: DashboardBadgeProps) => {
  const iconNode = icon ? renderBadgeIcon(icon) : null

  return (
    <div
      className={`shadow-nav border-line ${light ? 'bg-fill' : 'bg-surface-glass/80'} pointer-events-auto grid w-fit grid-flow-col items-center gap-2 rounded-2xl border p-2 backdrop-blur-md`}
    >
      {iconPosition === 'left' && iconNode}
      <DashboardSmallText text={label} variant="default" bold />
      {iconPosition === 'right' && iconNode}
    </div>
  )
}
