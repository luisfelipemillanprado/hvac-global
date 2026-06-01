import { ServiceAreaSection } from '@/common/service-area/components/ServiceAreaSection'
import { DashboardCommentsSection } from '@/features/home/components/atoms/DashboardCommentsSection'
import { DashboardCompanyProfile } from '@/features/home/components/atoms/DashboardCompanyProfile'
import type { DashboardMetricsColumnProps } from '@/features/home/types'

export const DashboardMetricsColumn = ({
  comments,
  companyProfile,
  serviceArea,
}: DashboardMetricsColumnProps) => {
  return (
    <div className="order-2 min-h-0 lg:order-0">
      <aside className="grid min-h-0 auto-rows-min content-start gap-3 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
        <DashboardCompanyProfile {...companyProfile} />
        <DashboardCommentsSection {...comments} />
        <ServiceAreaSection {...serviceArea} />
      </aside>
    </div>
  )
}
