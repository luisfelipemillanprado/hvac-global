export type DashboardBadgeIcon = 'bolt' | 'arrowRight'

export type DashboardBadgeIconPosition = 'left' | 'right'

export interface DashboardBadgeProps {
  label: string
  icon?: DashboardBadgeIcon
  iconPosition?: DashboardBadgeIconPosition
  light?: boolean
}
