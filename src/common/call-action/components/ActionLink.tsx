import type { ActionLinkProps } from '@/common/call-action/types'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

/**
 * @description Renders a dashboard free-quote CTA as a Next.js link.
 */
export const ActionLink = ({ href, text }: ActionLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={text ? `${text} button` : undefined}
      className="text-body md:text-body-md lg:text-body-lg shadow-cta bg-cornflower grid h-10 w-full min-w-0 grid-flow-col items-center justify-center gap-2 rounded-2xl px-4 font-medium text-white"
    >
      <ClipboardDocumentListIcon className="size-5.5" />
      {text}
    </Link>
  )
}
