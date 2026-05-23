import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { CommonServiceNeedItem } from '@/features/home/components/atoms/CommonServiceNeedItem'
import type { CommonServiceNeedsProps } from '@/features/home/types'

export const CommonServiceNeeds = ({ href, items, title }: CommonServiceNeedsProps) => {
  return (
    <section className="shadow-panel bg-graphite grid gap-3 rounded-4xl p-5">
      <DashboardTitle text={title} variant="h2" />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item) => (
          <CommonServiceNeedItem key={item.title} href={href} item={item} />
        ))}
      </div>
    </section>
  )
}
