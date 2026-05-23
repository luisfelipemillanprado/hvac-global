import type { NavbarBrandProps } from '@/common/navbar/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @description Brand link for the HVAC dashboard navbar (logo + title).
 */
export const NavbarBrand = ({ href, label, logo, logoAlt }: NavbarBrandProps) => {
  return (
    <Link href={href} className="flex min-w-0 items-center gap-x-3">
      <span className="relative inline-flex size-10 shrink-0">
        <Image src={logo} alt={logoAlt} fill sizes="2.5rem" className="object-contain" />
      </span>
      <DashboardText text={label} variant="default" bold as="span" />
    </Link>
  )
}
