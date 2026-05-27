import type { FeedActivityCardProps } from '@/common/feed/types'
import { DashboardCommentsSection } from '@/features/home/components/molecules/DashboardCommentsSection'
import { DashboardCompanyProfile } from '@/features/home/components/molecules/DashboardCompanyProfile'

interface DashboardMetricsColumnProps {
  comments: {
    title: string
    items: readonly FeedActivityCardProps[]
  }
  companyProfile: {
    socialLinks: readonly {
      ariaLabel: string
      href: string
      network: 'facebook' | 'instagram' | 'youtube' | 'x' | 'whatsapp' | 'linkedin'
    }[]
    avatar: string
    avatarAlt: string
    ctaAriaLabel: string
    ctaLabel: string
    expandAriaLabel: string
    name: string
    role: string
  }
}

export const DashboardMetricsColumn = ({ comments, companyProfile }: DashboardMetricsColumnProps) => {
  return (
    <aside className="scrollbar-ghost grid min-h-0 content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
      <DashboardCompanyProfile {...companyProfile} />
      <DashboardCommentsSection items={comments.items} title={comments.title} />
    </aside>
  )
}
