import type { DashboardQuickStatusCardProps, DashboardQuickStatusIcon } from '@/common/status/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import {
  CheckBadgeIcon,
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/24/solid'

const renderQuickStatusIcon = (icon: DashboardQuickStatusIcon) => {
  switch (icon) {
    case 'licensed':
      return <ShieldCheckIcon className="fill-on-media size-5" aria-hidden />
    case 'insured':
      return <CheckBadgeIcon className="fill-on-media size-5" aria-hidden />
    case 'certified':
      return <UserIcon className="fill-on-media size-5" aria-hidden />
    case 'sameDay':
      return <ClockIcon className="fill-on-media size-5" aria-hidden />
    case 'financing':
      return <CreditCardIcon className="fill-on-media size-5" aria-hidden />
  }
}

export const DashboardQuickStatusCard = ({ icon, line }: DashboardQuickStatusCardProps) => {
  return (
    <article className="border-line shadow-nav bg-fill grid min-h-12 grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-2xl border pr-3.5 pl-3">
      <span className="bg-surface-inset grid size-8 place-items-center rounded-2xl">
        {renderQuickStatusIcon(icon)}
      </span>
      <DashboardText text={line} variant="default" bold as="span" />
    </article>
  )
}
