/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for dashboard link actions.
 * @interface ActionLinkProps
 * @property {string} href - Link destination.
 * @property {string} [text] - Visible label.
 */
export interface ActionLinkProps {
  href: string
  text?: string
}

/**
 * @description Defines props for dashboard free-quote button actions.
 * @interface ActionButtonProps
 * @property {string} text - Visible label.
 * @property {string} [ariaLabel] - Accessible label; defaults from text when omitted.
 */
export interface ActionButtonProps {
  text: string
  ariaLabel?: string
}
