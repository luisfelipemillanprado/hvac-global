import type { DashboardTitleProps } from '@/common/titles/types'

/**
 * @description Renders dashboard headings (h1–h3) with token typography.
 */
export const DashboardTitle = ({ text, variant, id }: DashboardTitleProps) => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          id={id}
          className="text-main-title md:text-main-title-md lg:text-main-title-lg leading-main-title font-black text-white"
        >
          {text}
        </h1>
      )
    case 'h3':
      return (
        <h3
          id={id}
          className="text-tertiary-title md:text-tertiary-title-md lg:text-tertiary-title-lg leading-tertiary-title truncate font-bold text-white"
        >
          {text}
        </h3>
      )
    default:
      return (
        <h2
          id={id}
          className="text-secondary-title md:text-secondary-title-md lg:text-secondary-title-lg leading-secondary-title font-black text-white"
        >
          {text}
        </h2>
      )
  }
}
