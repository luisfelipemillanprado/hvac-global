import type { ViewAllButtonProps } from '@/common/call-action/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const ViewAllButton = ({ ariaLabel, href }: ViewAllButtonProps) => {
  return (
    <Link href={href} aria-label={ariaLabel} className="grid size-7 items-center justify-center">
      <ArrowRightIcon className="text-on-media size-5" aria-hidden />
    </Link>
  )
}
