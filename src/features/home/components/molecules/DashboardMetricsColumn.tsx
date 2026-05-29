import type { FeedActivityCardProps } from '@/common/feed/types'
import { ServiceAreaSection } from '@/common/service-area/components/molecules/ServiceAreaSection'
import type { ServiceAreaSectionProps } from '@/common/service-area/types'
import { DashboardCommentsSection } from '@/features/home/components/molecules/DashboardCommentsSection'
import { DashboardCompanyProfile } from '@/features/home/components/molecules/DashboardCompanyProfile'

interface DashboardMetricsColumnProps {
  serviceArea: ServiceAreaSectionProps
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

export const DashboardMetricsColumn = ({
  comments,
  companyProfile,
  serviceArea,
}: DashboardMetricsColumnProps) => {
  return (
    <aside className="scrollbar-ghost grid min-h-0 auto-rows-min content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
      <DashboardCompanyProfile {...companyProfile} />
      <DashboardCommentsSection items={comments.items} title={comments.title} />
      <ServiceAreaSection {...serviceArea} />
    </aside>
  )
}
