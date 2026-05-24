import type { DashboardSmallTextProps } from '@/common/text/types'

/**
 * @description Renders dashboard small text (default · onDark · onLight) with token typography.
 */
export const DashboardSmallText = ({ text, variant, truncate, bold }: DashboardSmallTextProps) => {
  switch (variant) {
    case 'default':
      return (
        <span
          className={`text-small md:text-small-md lg:text-small-lg leading-small text-white ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </span>
      )
    case 'onDark':
      return (
        <span
          className={`text-small md:text-small-md lg:text-small-lg leading-small text-white/80 ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </span>
      )
    case 'onLight':
      return (
        <span
          className={`text-small md:text-small-md lg:text-small-lg leading-small text-ink-black ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </span>
      )
  }
}
