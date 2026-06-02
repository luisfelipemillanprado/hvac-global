export type DashboardQuickStatusIcon = 'licensed' | 'insured' | 'certified' | 'sameDay' | 'financing'

export interface DashboardQuickStatusItem {
  icon: DashboardQuickStatusIcon
  line: string
}

export interface DashboardQuickStatusCardProps {
  icon: DashboardQuickStatusIcon
  line: string
}

export interface DashboardQuickStatusSectionProps {
  ariaLabel: string
  items: readonly DashboardQuickStatusItem[]
}
