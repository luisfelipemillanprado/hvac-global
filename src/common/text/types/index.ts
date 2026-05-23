export type DashboardTextVariant = 'default' | 'onDark'

export interface DashboardTextProps {
  text: string
  variant: DashboardTextVariant
  truncate?: boolean
  bold?: boolean
  as?: 'p' | 'span'
}

export interface DashboardSmallTextProps {
  text: string
  variant: DashboardTextVariant
  truncate?: boolean
  bold?: boolean
}
