export type DashboardBadgeIcon = 'bolt' | 'arrowRight' | 'install' | 'upgrade' | 'heating' | 'airQuality'

export type DashboardBadgeIconPosition = 'left' | 'right'

export interface DashboardBadgeProps {
  label: string
  icon?: DashboardBadgeIcon
  iconPosition?: DashboardBadgeIconPosition
  light?: boolean
}
