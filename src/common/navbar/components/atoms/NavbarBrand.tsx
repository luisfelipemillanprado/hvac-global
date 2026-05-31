import type { NavbarBrandProps } from '@/common/navbar/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { blurDataUrlAvatar } from '@/utils/blurs/BlurDataUrl'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @description Brand link for the HVAC dashboard navbar (logo + title).
 */
export const NavbarBrand = ({ href, label, logo, logoAlt }: NavbarBrandProps) => {
  return (
    <Link href={href} className="flex items-center gap-x-3">
      <span className="relative block size-10 shrink-0 overflow-hidden rounded-full">
        <Image
          src={logo}
          alt={logoAlt}
          fill
          placeholder="blur"
          blurDataURL={blurDataUrlAvatar}
          sizes="2.5rem"
          className="object-cover"
        />
      </span>
      <DashboardText text={label} variant="default" bold as="span" />
    </Link>
  )
}
