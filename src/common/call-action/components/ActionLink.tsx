import type { ActionLinkProps } from '@/common/call-action/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

/**
 * @description Renders a dashboard free-quote CTA as a Next.js link.
 */
export const ActionLink = ({ href, text }: ActionLinkProps) => {
  return (
    <Link
      href={href}
      className="shadow-control bg-pewter grid h-10 w-full min-w-0 grid-flow-col items-center justify-center gap-x-2 rounded-full px-4"
    >
      <ClipboardDocumentListIcon className="size-5.5" />
      <DashboardText text={text} variant="default" truncate bold as="span" />
    </Link>
  )
}
