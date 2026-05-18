import type { DashboardTitleProps } from '@/common/titles/types'

/**
 * @description Renders reusable title styles for the HVAC dashboard.
 * @component
 * @param {DashboardTitleProps} props - Component properties.
 * @returns A rendered dashboard title.
 */
export const DashboardTitle = ({ text, variant = 'section', id }: DashboardTitleProps) => {
  const classes = getTitleClasses(variant)

  if (variant === 'hero') {
    return (
      <h1 id={id} className={classes}>
        {text}
      </h1>
    )
  }

  if (variant === 'section' || variant === 'panel') {
    return (
      <h2 id={id} className={classes}>
        {text}
      </h2>
    )
  }

  if (variant === 'card') {
    return (
      <h3 id={id} className={classes}>
        {text}
      </h3>
    )
  }

  return <p className={classes}>{text}</p>
}

function getTitleClasses(variant: DashboardTitleProps['variant']) {
  switch (variant) {
    case 'hero':
      return 'text-main-title leading-main text-white font-black tracking-[-0.07em]'
    case 'card':
      return 'text-tertiary-title leading-title text-white font-bold'
    case 'panel':
      return 'text-secondary-title leading-title text-ink font-black tracking-[-0.04em]'
    case 'brand':
      return 'text-body md:text-body-md lg:text-body-lg leading-body text-ink font-semibold tracking-tight'
    case 'section':
    default:
      return 'text-secondary-title leading-title text-ink font-bold tracking-[-0.03em]'
  }
}
