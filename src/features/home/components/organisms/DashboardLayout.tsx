import { ServiceCarousel } from '@/common/carousel/components/organisms/ServiceCarousel'
import { DashboardHeroOverlay } from '@/features/home/components/molecules/DashboardHeroOverlay'
import { DashboardInsightsColumn } from '@/features/home/components/molecules/DashboardInsightsColumn'
import { DashboardMetricsColumn } from '@/features/home/components/molecules/DashboardMetricsColumn'
import { DashboardShellHeader } from '@/features/home/components/molecules/DashboardShellHeader'
import { homeAssets } from '@/utils/data/static/pages/home'

const {
  comments,
  companyProfile,
  copy,
  insightRange,
  navbar,
  performancePanels,
  popularServices,
  sitePower,
  tabs,
} = homeAssets.dashboard

export const DashboardLayout = () => {
  const [featuredService] = popularServices

  if (!featuredService) return null

  return (
    <section className="bg-eerie shadow-flyout grid h-full min-h-0 gap-3 overflow-hidden rounded-4xl border border-white/5 p-5 backdrop-blur-2xl lg:grid-rows-[auto_minmax(0,1fr)]">
      <DashboardShellHeader
        ariaLabel={copy.popularServicesTitle}
        href={navbar.brandHref}
        label={navbar.brandLabel}
        logo={navbar.brandLogo}
        logoAlt={navbar.brandLogoAlt}
        searchAriaLabel={copy.searchAriaLabel}
        settingsAriaLabel={copy.settingsAriaLabel}
        tabs={tabs}
      />

      <div className="grid min-h-0 gap-3 overflow-hidden lg:grid-cols-[300px_minmax(0,1fr)_300px] xl:grid-cols-[340px_minmax(0,1fr)_340px]">
        <div className="order-2 min-h-0 lg:order-0">
          <DashboardMetricsColumn comments={comments} companyProfile={companyProfile} />
        </div>

        <div className="relative order-1 min-h-0 lg:order-0">
          <ServiceCarousel ariaLabel={copy.popularServicesTitle} slides={popularServices} />
          <DashboardHeroOverlay
            addressLabel={copy.serviceAddressLabel}
            expandAriaLabel={copy.heroPanelExpandAriaLabel}
            infoAriaLabel={copy.heroPanelInfoAriaLabel}
            moreAriaLabel={copy.heroPanelMoreAriaLabel}
            service={featuredService}
            startDateLabel={copy.serviceStartDateLabel}
            title={copy.heroPanelTitle}
          />
        </div>

        <div className="order-3 min-h-0 lg:order-0">
          <DashboardInsightsColumn
            addressLabel={copy.serviceAddressLabel}
            ctaLabel={copy.freeQuoteCta}
            detailsAriaLabel={copy.serviceDetailsAriaLabel}
            insightRange={insightRange}
            panels={performancePanels}
            saveAriaLabel={copy.serviceSaveAriaLabel}
            services={popularServices}
            servicesTitle={copy.servicesPanelTitle}
            sitePower={sitePower}
            startDateLabel={copy.serviceStartDateLabel}
          />
        </div>
      </div>
    </section>
  )
}
