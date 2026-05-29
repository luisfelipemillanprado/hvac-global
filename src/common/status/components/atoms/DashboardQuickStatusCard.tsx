import {
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

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
  licensed: 'text-periwinkle glow-periwinkle',
  certified: 'text-periwinkle glow-periwinkle',
  sameDay: 'text-sunset glow-sunset',
  financing: 'text-periwinkle glow-periwinkle',
} as const

export const DashboardQuickStatusCard = ({ icon, line, subline }: DashboardQuickStatusCardProps) => {
  const Icon = iconByType[icon]

  return (
    <article className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl">
      <Icon className={`size-5 shrink-0 stroke-2 ${iconGlowByType[icon]}`} aria-hidden />
      <div className="grid min-w-0 leading-none">
        <span className="text-small md:text-small-md lg:text-small-lg leading-small truncate font-bold text-white">
          {line}
        </span>
        <span className="text-small md:text-small-md lg:text-small-lg leading-small truncate text-white/75">
          {subline}
        </span>
      </div>
    </article>
  )
}
