import type { DashboardTextProps } from '@/common/text/types'

/**
 * @description Renders dashboard body text (default · onDark · onLight) with token typography.
 */
export const DashboardText = ({ text, variant, truncate, bold, as: Tag = 'p' }: DashboardTextProps) => {
  switch (variant) {
    case 'default':
      return (
        <Tag
          className={`text-body md:text-body-md lg:text-body-lg leading-body text-white ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </Tag>
      )
    case 'onDark':
      return (
        <Tag
          className={`text-body md:text-body-md lg:text-body-lg leading-body text-white/80 ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </Tag>
      )
    case 'onLight':
      return (
        <Tag
          className={`text-body md:text-body-md lg:text-body-lg leading-body text-ink-black ${bold ? 'font-bold' : 'font-normal'} ${truncate ? 'max-w-full min-w-0 truncate' : ''}`}
        >
          {text}
        </Tag>
      )
  }
}
