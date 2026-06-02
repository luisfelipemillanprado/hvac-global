import { DashboardHeroColumn } from '@/features/home/components/molecules/DashboardHeroColumn'
import { DashboardInsightsColumn } from '@/features/home/components/molecules/DashboardInsightsColumn'
import { DashboardMetricsColumn } from '@/features/home/components/molecules/DashboardMetricsColumn'
import { homeAssets } from '@/utils/data/static/pages/home'

const {
  comments,
  companyProfile,
  hero,
  serviceArea,
  panelPopularServices,
  quickStatus,
  ourWorks,
  scheduleServiceCta,
} = homeAssets.dashboard

export const DashboardLayout = () => {
  return (
    <div className="grid min-h-0 gap-3 lg:h-full lg:grid-cols-[300px_minmax(0,1fr)_300px] lg:overflow-hidden xl:grid-cols-[340px_minmax(0,1fr)_340px]">
      <DashboardMetricsColumn
        comments={comments}
        companyProfile={companyProfile}
        serviceArea={serviceArea}
      />

      <DashboardHeroColumn hero={hero} quickStatus={quickStatus} />

      <DashboardInsightsColumn
        quickStatus={quickStatus}
        panelPopularServices={panelPopularServices}
        ourWorks={ourWorks}
        scheduleServiceCta={scheduleServiceCta}
      />
    </div>
  )
}
