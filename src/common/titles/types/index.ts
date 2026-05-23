export type DashboardTitleVariant = 'h1' | 'h2' | 'h3'

export interface DashboardTitleProps {
  text: string
  variant: DashboardTitleVariant
  id?: string
}
