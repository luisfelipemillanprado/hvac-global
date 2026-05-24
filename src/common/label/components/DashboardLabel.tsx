import type { DashboardLabelProps } from '@/common/label/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'

/**
 * @description Renders reusable small labels for the HVAC dashboard (onDark · onLight).
 */
export const DashboardLabel = ({ text, variant = 'onDark' }: DashboardLabelProps) => {
  switch (variant) {
    case 'onDark':
      return (
        <span className="bg-pewter/40 inline-flex w-fit items-center rounded-full px-3 py-2">
          <DashboardSmallText text={text} variant="default" />
        </span>
      )
    case 'onLight':
      return (
        <span className="bg-pewter inline-flex w-fit items-center rounded-full px-3 py-2">
          <DashboardSmallText text={text} variant="onDark" />
        </span>
      )
  }
}
