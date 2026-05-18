import type { NavbarBrandProps } from '@/common/navbar/types'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

/**
 * @description Brand link for the HVAC dashboard navbar (icon badge + title).
 */
export const NavbarBrand = ({ href, label }: NavbarBrandProps) => {
  return (
    <Link href={href} className="flex min-w-0 items-center gap-2.5">
      <span className="bg-violet shadow-control inline-flex size-10 shrink-0 items-center justify-center rounded-2xl text-white">
        <WrenchScrewdriverIcon className="size-5.5" />
      </span>
      <span className="">
        <DashboardTitle text={label} variant="brand" />
      </span>
    </Link>
  )
}
