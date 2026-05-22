export type DashboardTextVariant = 'default' | 'onDark'

export interface DashboardTextProps {
  text: string
  variant?: DashboardTextVariant
  truncate?: boolean
  bold?: boolean
}
