/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines a decorative avatar item for stacked avatar groups.
 * @interface AvatarStackItem
 * @property {string | number} id - Unique item identifier.
 * @property {string} image - Avatar image source.
 * @property {string} imageAlt - Accessible avatar image description.
 */
export interface AvatarStackItem {
  id: string | number
  image: string
  imageAlt: string
}

/**
 * @description Defines props for a stacked avatar group.
 * @interface AvatarStackProps
 * @property {readonly AvatarStackItem[]} avatars - Avatar items to render.
 * @property {string} ariaLabel - Accessible label for the avatar group.
 */
export interface AvatarStackProps {
  avatars: readonly AvatarStackItem[]
  ariaLabel: string
}
