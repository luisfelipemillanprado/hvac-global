import type { DashboardBadgeIcon, DashboardBadgeProps } from '@/common/badge/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { ArrowRightIcon, BoltIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const renderBadgeIcon = (icon: DashboardBadgeIcon) => {
  switch (icon) {
    case 'bolt':
      return <BoltIcon className="fill-accent-strong size-4" aria-hidden />
    case 'arrowRight':
      return <ArrowRightIcon className="fill-accent-strong size-4" aria-hidden />
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
      className={`shadow-nav border-line ${light ? 'bg-surface' : 'bg-surface-glass/80'} pointer-events-auto grid w-fit grid-flow-col items-center gap-2 rounded-2xl border p-2 backdrop-blur-md`}
    >
      {iconPosition === 'left' && iconNode}
      <DashboardSmallText text={label} variant="default" bold />
      {iconPosition === 'right' && iconNode}
    </div>
  )
}
