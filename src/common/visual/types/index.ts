/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for the dashboard hero visual image.
 * @interface VisualImageProps
 * @property {string} image - Image source URL.
 * @property {string} alt - Accessible image description.
 * @property {boolean} [priority] - Enables priority loading for important images.
 * @property {string} [sizes] - Responsive image sizes hint.
 * @property {string} [overlayClassName] - Optional overlay classes.
 */
export interface VisualImageProps {
  image: string
  alt: string
  priority?: boolean
  sizes?: string
  overlayClassName?: string
}
