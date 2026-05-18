import { HeroPanel } from '@/features/home/components/organisms/HeroPanel'
import { LeftRail } from '@/features/home/components/organisms/LeftRail'
import { PopularServices } from '@/features/home/components/organisms/PopularServices'
import { RightRail } from '@/features/home/components/organisms/RightRail'
import { homeAssets } from '@/utils/data/static/pages/home'

const {
  commonServiceNeeds,
  config,
  copy,
  featuredService,
  featuredServicePreviews,
  heroReviewAvatars,
  location,
  popularServices,
  serviceReviewAvatars,
  serviceHighlights,
} = homeAssets.dashboard

export const DashboardLayout = () => {
  return (
    <div className="grid h-full items-stretch gap-4 lg:grid-cols-[180px_minmax(0,1fr)_290px] lg:gap-5 lg:pb-2">
      <LeftRail
        config={config}
        copy={copy}
        serviceHighlights={serviceHighlights}
        commonServiceNeeds={commonServiceNeeds}
      />

      <section className="order-1 grid min-w-0 gap-5 lg:order-0 lg:grid-rows-[minmax(0,1fr)_auto]">
        <HeroPanel config={config} copy={copy} reviewAvatars={heroReviewAvatars} />
        <PopularServices
          config={config}
          copy={copy}
          reviewAvatars={serviceReviewAvatars}
          services={popularServices}
        />
      </section>

      <RightRail
        copy={copy}
        featuredService={featuredService}
        featuredServicePreviews={featuredServicePreviews}
        location={location}
      />
    </div>
  )
}
