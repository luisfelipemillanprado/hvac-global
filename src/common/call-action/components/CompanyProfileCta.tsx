import type { CompanyProfileCtaProps } from '@/common/call-action/types'
import { DashboardText } from '@/common/text/components/DashboardText'

export const CompanyProfileCta = ({ ariaLabel, text }: CompanyProfileCtaProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="shadow-control bg-gradient-cta grid h-11 w-full items-center rounded-2xl"
    >
      <DashboardText text={text} variant="default" bold as="span" />
    </button>
  )
}
