import type { DashboardTextProps } from '@/common/text/types'
import clsx from 'clsx'

/**
 * @description Renders reusable body text for the HVAC dashboard.
 * @component
 * @param {DashboardTextProps} props - Component properties.
 * @returns A rendered dashboard text paragraph.
 */
export const DashboardText = ({ text, variant = 'onDark', truncate, bold = false }: DashboardTextProps) => {
  return (
    <p
      className={clsx(
        'text-body md:text-body-md lg:text-body-lg leading-body',
        variant === 'onDark' ? 'text-white/80' : 'text-white',
        truncate && 'max-w-full min-w-0 truncate',
        bold ? 'font-bold' : 'font-normal'
      )}
    >
      {text}
    </p>
  )
}
