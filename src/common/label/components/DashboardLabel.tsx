import type { DashboardLabelProps } from '@/common/label/types'

/**
 * @description Renders reusable small labels for the HVAC dashboard.
 * @component
 * @param {DashboardLabelProps} props - Component properties.
 * @returns A rendered dashboard label.
 */
export const DashboardLabel = ({ text, id }: DashboardLabelProps) => {
  return (
    <span
      id={id}
      className="text-small md:text-small-md lg:text-small-lg leading-small bg-forest inline-flex w-fit items-center rounded-full px-3 py-2 font-medium text-white"
    >
      {text}
    </span>
  )
}
