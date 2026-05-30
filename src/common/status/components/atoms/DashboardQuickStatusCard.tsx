import { ClockIcon, CreditCardIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/outline'

type QuickStatusIcon = 'licensed' | 'certified' | 'sameDay' | 'financing'

interface DashboardQuickStatusCardProps {
  icon: QuickStatusIcon
  line: string
  subline: string
}

const iconByType = {
  licensed: ShieldCheckIcon,
  certified: UserIcon,
  sameDay: ClockIcon,
  financing: CreditCardIcon,
} as const

const iconGlowByType = {
  licensed: 'text-accent glow-accent',
  certified: 'text-accent glow-accent',
  sameDay: 'text-accent-warm glow-accent-warm',
  financing: 'text-accent glow-accent',
} as const

export const DashboardQuickStatusCard = ({ icon, line, subline }: DashboardQuickStatusCardProps) => {
  const Icon = iconByType[icon]

  return (
    <article className="border-line-strong bg-fill grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-2xl border px-2 py-2 backdrop-blur-xl">
      <Icon className={`size-5 shrink-0 stroke-2 ${iconGlowByType[icon]}`} aria-hidden />
      <div className="grid min-w-0 leading-none">
        <span className="text-small md:text-small-md lg:text-small-lg leading-small text-content truncate font-bold">
          {line}
        </span>
        <span className="text-small md:text-small-md lg:text-small-lg leading-small text-content-muted truncate">
          {subline}
        </span>
      </div>
    </article>
  )
}
