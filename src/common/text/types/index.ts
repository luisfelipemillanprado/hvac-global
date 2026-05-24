export type DashboardTextVariant = 'default' | 'onDark' | 'onLight'

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
