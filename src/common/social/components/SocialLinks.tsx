import type { SocialLinksProps, SocialNetwork } from '@/common/social/types'
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import Link from 'next/link'

const renderSocialIcon = (network: SocialNetwork) => {
  switch (network) {
    case 'facebook':
      return <SiFacebook className="size-5 text-white" aria-hidden />
    case 'instagram':
      return <SiInstagram className="size-5 text-white" aria-hidden />
    case 'youtube':
      return <SiYoutube className="size-5 text-white" aria-hidden />
    case 'x':
      return <SiX className="size-4 text-white" aria-hidden />
    case 'whatsapp':
      return <SiWhatsapp className="size-5 text-white" aria-hidden />
    case 'tiktok':
      return <SiTiktok className="size-4.5 text-white" aria-hidden />
  }
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="grid grid-flow-col justify-center gap-2">
      {links.map((link) => (
        <Link
          key={link.network}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="grid size-10 items-center justify-center rounded-full border border-white/5 bg-white/5"
        >
          {renderSocialIcon(link.network)}
        </Link>
      ))}
    </div>
  )
}
