import { DashboardQuickStatusCard } from '@/common/status/components/atoms/DashboardQuickStatusCard'

interface DashboardQuickStatusGridProps {
  className: string
  items: readonly {
    icon: 'licensed' | 'certified' | 'sameDay' | 'financing'
    line: string
    subline: string
  }[]
}

export const DashboardQuickStatusGrid = ({ className, items }: DashboardQuickStatusGridProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <DashboardQuickStatusCard
          key={`${item.line}-${item.subline}`}
          icon={item.icon}
          line={item.line}
          subline={item.subline}
        />
      ))}
    </div>
  )
}
