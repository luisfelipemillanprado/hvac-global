import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { CommonServiceNeedItem } from '@/features/home/components/atoms/CommonServiceNeedItem'
import type { CommonServiceNeed } from '@/features/home/types'

export const CommonServiceNeeds = ({
  href,
  items,
  title,
}: {
  href: string
  items: readonly CommonServiceNeed[]
  title: string
}) => {
  return (
    <section className="shadow-panel border-cornflower/30 grid gap-3 rounded-4xl border bg-white p-3">
      <DashboardTitle text={title} variant="section" />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item) => (
          <CommonServiceNeedItem key={item.title} href={href} item={item} />
        ))}
      </div>
    </section>
  )
}
