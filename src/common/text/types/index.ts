/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

export type DashboardTextVariant = 'default' | 'onDark'

/**
 * @description Defines body text styles for the HVAC dashboard.
 * @interface DashboardTextProps
 * @property {string} text - Text content.
 * @property {DashboardTextVariant} [variant='onDark'] - Text color context.
 * @property {boolean} [truncate] - When true, single-line ellipsis via `truncate`.
 */
export interface DashboardTextProps {
  text: string
  variant?: DashboardTextVariant
  truncate?: boolean
}
