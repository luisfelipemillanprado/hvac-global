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
      return <ShieldCheckIcon className="fill-content size-5" aria-hidden />
    case 'insured':
      return <CheckBadgeIcon className="fill-content size-5" aria-hidden />
    case 'certified':
      return <UserIcon className="fill-content size-5" aria-hidden />
    case 'sameDay':
      return <ClockIcon className="fill-content size-5" aria-hidden />
    case 'financing':
      return <CreditCardIcon className="fill-content size-5" aria-hidden />
  }
}

export const DashboardQuickStatusCard = ({ icon, line }: DashboardQuickStatusCardProps) => {
  return (
    <article className="border-line shadow-nav bg-fill flex shrink-0 items-center gap-2 rounded-2xl border py-2 pr-4 pl-3">
      <span className="bg-surface-inset flex size-8.5 shrink-0 items-center justify-center rounded-2xl">
        {renderQuickStatusIcon(icon)}
      </span>
      <DashboardText text={line} variant="default" bold as="span" />
    </article>
  )
}
