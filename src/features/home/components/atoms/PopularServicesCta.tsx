import Link from 'next/link'

/**
 * @description Section header link for the popular services block (e.g. “All services”).
 */
export const PopularServicesCta = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className="text-body md:text-body-md lg:text-body-lg text-violet font-medium">
      {text}
    </Link>
  )
}
