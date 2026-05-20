export type BadgeIconName = 'bolt' | 'fire' | 'star' | 'share' | 'bell'

export interface DashboardBadgeProps {
  icon: BadgeIconName
  ariaLabel: string
}
