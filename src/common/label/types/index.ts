/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

export type DashboardLabelVariant = 'muted' | 'default'

/**
 * @description Defines small label styles for the HVAC dashboard (eyebrows, captions).
 * @interface DashboardLabelProps
 * @property {string} text - Label text content.
 * @property {DashboardLabelVariant} [variant='muted'] - Visual label variant.
 * @property {string} [id] - Optional DOM id.
 */
export interface DashboardLabelProps {
  text: string
  variant?: DashboardLabelVariant
  id?: string
}
