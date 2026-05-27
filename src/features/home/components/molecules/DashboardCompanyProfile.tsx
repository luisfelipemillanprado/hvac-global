import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import type { ReactElement, SVGProps } from 'react'

type DashboardSocialNetwork = 'facebook' | 'instagram' | 'youtube' | 'x' | 'whatsapp' | 'linkedin'

type DashboardCompanySocialLink = {
  ariaLabel: string
  href: string
  network: DashboardSocialNetwork
}

interface DashboardCompanyProfileProps {
  avatar: string
  avatarAlt: string
  ctaAriaLabel: string
  ctaLabel: string
  expandAriaLabel: string
  name: string
  role: string
  socialLinks: readonly DashboardCompanySocialLink[]
}

const iconClassName = 'size-5 text-white/80'

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
  </svg>
)

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
)

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M21.58 7.2a2.75 2.75 0 0 0-1.94-1.95C18.28 5 12 5 12 5s-6.28 0-7.64.25A2.75 2.75 0 0 0 2.42 7.2 28.8 28.8 0 0 0 2 12a28.8 28.8 0 0 0 .42 4.8 2.75 2.75 0 0 0 1.94 1.95C5.72 19 12 19 12 19s6.28 0 7.64-.25a2.75 2.75 0 0 0 1.94-1.95A28.8 28.8 0 0 0 22 12a28.8 28.8 0 0 0-.42-4.8zM10 15.46V8.54L15.27 12 10 15.46z" />
  </svg>
)

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M13.68 10.62 20.34 3h-1.56l-5.8 6.62L8.9 3H3.5l7.03 10.15L3.5 21h1.56l6.13-7.01L15.6 21h5.4l-7.32-10.38zm-2.27 2.58-.71-1.02L5.2 4.56h2.43l4.58 6.55.71 1.02 5.92 8.47h-2.43l-4.76-6.8z" />
  </svg>
)

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.17h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.26 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.5-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
)

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const socialIcons: Record<DashboardSocialNetwork, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  x: XIcon,
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon,
}

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
    <article className="bg-jet-gray/70 shadow-panel grid min-h-min w-full shrink-0 justify-items-center gap-4 overflow-hidden rounded-4xl border border-white/5 px-4 pt-0 pb-4 backdrop-blur-xl">
      <div className="relative -mx-4 min-h-52 w-[calc(100%+2rem)]">
        <div aria-hidden className="from-periwinkle via-hot-pink to-sunset h-24 w-full bg-linear-to-r" />
        <div className="absolute inset-x-0 top-0 grid justify-items-end p-3">
          <button
            type="button"
            aria-label={expandAriaLabel}
            className="shadow-nav bg-night/70 grid size-9 items-center justify-center rounded-full border border-white/25 backdrop-blur-md"
          >
            <ArrowsPointingOutIcon className="size-5 text-white" aria-hidden />
          </button>
        </div>
        <div className="relative z-10 -mt-12 grid w-full justify-items-center gap-3 px-4 pb-1">
          <div className="shadow-nav relative size-24 overflow-hidden rounded-full border-2 border-white">
            <Image src={avatar} alt={avatarAlt} fill sizes="6rem" className="object-cover" />
          </div>
          <div className="grid gap-1 text-center">
            <DashboardTitle text={name} variant="h3" />
            <DashboardSmallText text={role} variant="onDark" />
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col justify-center gap-2">
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.network]

          return (
            <a
              key={link.network}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="grid size-10 items-center justify-center rounded-full border border-white/5 bg-white/5"
            >
              <Icon className={iconClassName} />
            </a>
          )
        })}
      </div>

      <button
        type="button"
        aria-label={ctaAriaLabel}
        className="from-periwinkle via-hot-pink to-sunset grid h-10 w-full items-center rounded-2xl bg-linear-to-r"
      >
        <DashboardSmallText text={ctaLabel} variant="default" bold />
      </button>
    </article>
  )
}
