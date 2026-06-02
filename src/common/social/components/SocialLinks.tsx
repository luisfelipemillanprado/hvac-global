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
      return <SiFacebook className="text-content size-5" aria-hidden />
    case 'instagram':
      return <SiInstagram className="text-content size-5" aria-hidden />
    case 'youtube':
      return <SiYoutube className="text-content size-5" aria-hidden />
    case 'x':
      return <SiX className="text-content size-4" aria-hidden />
    case 'whatsapp':
      return <SiWhatsapp className="text-content size-5" aria-hidden />
    case 'tiktok':
      return <SiTiktok className="text-content size-4.5" aria-hidden />
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
          className="border-line bg-fill grid size-10 items-center justify-center rounded-full border"
        >
          {renderSocialIcon(link.network)}
        </Link>
      ))}
    </div>
  )
}
