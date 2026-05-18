/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

export type DashboardTitleVariant = 'hero' | 'section' | 'card' | 'panel' | 'brand'

/**
 * @description Defines title styles used by the mobile-first HVAC dashboard.
 * @interface DashboardTitleProps
 * @property {string} text - Title text content.
 * @property {DashboardTitleVariant} [variant='section'] - Visual title variant.
 * @property {string} [id] - Optional DOM id for accessible heading references.
 */
export interface DashboardTitleProps {
  text: string
  variant?: DashboardTitleVariant
  id?: string
}
