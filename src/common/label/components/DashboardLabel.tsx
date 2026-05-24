import type { DashboardLabelProps } from '@/common/label/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'

/**
 * @description Renders reusable small labels for the HVAC dashboard.
 * @component
 * @param {DashboardLabelProps} props - Component properties.
 * @returns A rendered dashboard label.
 */
export const DashboardLabel = ({ text }: DashboardLabelProps) => {
  return (
    <span className="bg-pewter/40 inline-flex w-fit items-center rounded-full px-3 py-2">
      <DashboardSmallText text={text} variant="default" />
    </span>
  )
}
