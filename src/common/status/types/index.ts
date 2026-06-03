export type DashboardQuickStatusIcon = 'licensed' | 'insured' | 'certified' | 'sameDay' | 'financing'

export interface DashboardQuickStatusCardProps {
  icon: DashboardQuickStatusIcon
  line: string
}
