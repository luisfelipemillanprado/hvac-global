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
  serviceHighlights,
} = homeAssets.dashboard

export const DashboardLayout = () => {
  return (
    <div className="grid h-full items-stretch gap-4 lg:grid-cols-[180px_minmax(0,1fr)_290px] lg:gap-5 lg:pb-2">
      <LeftRail
        commonServiceNeeds={{
          href: config.commonServiceNeedHref,
          items: commonServiceNeeds,
          title: copy.commonServiceNeedsTitle,
        }}
        serviceHighlights={{
          eyebrowLabel: copy.serviceHighlightsEyebrowLabel,
          items: serviceHighlights,
          playAriaLabel: copy.serviceHighlightsPlayAriaLabel,
          title: copy.serviceHighlightsTitle,
          viewMoreLabel: copy.serviceHighlightsViewMoreLabel,
        }}
      />

      <section className="order-1 grid min-w-0 gap-5 lg:order-0 lg:grid-rows-[minmax(0,1fr)_auto]">
        <HeroPanel config={config} copy={copy} reviewAvatars={heroReviewAvatars} />
        <PopularServices config={config} copy={copy} services={popularServices} />
      </section>

      <RightRail
        featuredService={{
          ctaLabel: copy.freeQuoteCta,
          previews: featuredServicePreviews,
          service: featuredService,
        }}
        location={location}
      />
    </div>
  )
}
