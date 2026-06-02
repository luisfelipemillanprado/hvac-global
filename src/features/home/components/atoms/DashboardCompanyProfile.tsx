import { CompanyProfileCta } from '@/common/call-action/components/CompanyProfileCta'
import { SocialLinks } from '@/common/social/components/SocialLinks'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { DashboardCompanyProfileProps } from '@/features/home/types'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const DashboardCompanyProfile = ({
  avatar,
  avatarAlt,
  ctaAriaLabel,
  ctaLabel,
  expandAriaLabel,
  name,
  role,
  socialLinks,
}: DashboardCompanyProfileProps) => {
  return (
    <article className="bg-surface-glass shadow-panel border-line grid min-h-min w-full shrink-0 justify-items-center gap-4 overflow-hidden rounded-3xl border px-4 pt-0 pb-4">
      <div className="relative -mx-4 min-h-52 w-[calc(100%+2rem)]">
        <div aria-hidden className="from-periwinkle via-hot-pink to-sunset h-24 w-full bg-linear-to-r" />
        <div className="absolute inset-x-0 top-0 grid justify-items-end p-3">
          <button
            type="button"
            aria-label={expandAriaLabel}
            className="bg-surface-sunken shadow-nav border-line grid size-9 items-center justify-center rounded-2xl border"
          >
            <ArrowsPointingOutIcon className="text-on-media size-5" aria-hidden />
          </button>
        </div>
        <div className="relative z-10 -mt-12 grid w-full justify-items-center gap-3 px-4 pb-1">
          <div className="shadow-nav border-line relative size-24 overflow-hidden rounded-full border-2">
            <Image src={avatar} alt={avatarAlt} fill sizes="6rem" className="object-cover" />
          </div>
          <div className="grid gap-1 text-center">
            <DashboardTitle text={name} variant="h3" />
            <DashboardSmallText text={role} variant="onDark" />
          </div>
        </div>
      </div>

      <SocialLinks links={socialLinks} />

      <CompanyProfileCta ariaLabel={ctaAriaLabel} text={ctaLabel} />
    </article>
  )
}
