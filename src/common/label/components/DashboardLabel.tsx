import type { DashboardLabelProps } from '@/common/label/types'

/**
 * @description Renders reusable small labels for the HVAC dashboard.
 * @component
 * @param {DashboardLabelProps} props - Component properties.
 * @returns A rendered dashboard label.
 */
export const DashboardLabel = ({ text, variant = 'muted', id }: DashboardLabelProps) => {
  return (
    <p id={id} className={getLabelClasses(variant)}>
      {text}
    </p>
  )
}

function getLabelClasses(variant: DashboardLabelProps['variant']) {
  switch (variant) {
    case 'default':
      return 'text-small md:text-small-md lg:text-small-lg font-bold'
    case 'muted':
    default:
      return 'text-small md:text-small-md lg:text-small-lg text-muted font-bold'
  }
}
