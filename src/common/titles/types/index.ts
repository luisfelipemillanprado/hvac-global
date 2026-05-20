export type DashboardTitleVariant = 'hero' | 'section' | 'card' | 'panel' | 'brand'

export interface DashboardTitleProps {
  text: string
  variant?: DashboardTitleVariant
  id?: string
}
