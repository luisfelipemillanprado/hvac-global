import { ServiceCarousel } from '@/common/carousel/components/organisms/ServiceCarousel'
import { DashboardHeroOverlay } from '@/features/home/components/molecules/DashboardHeroOverlay'
import { DashboardInsightsColumn } from '@/features/home/components/molecules/DashboardInsightsColumn'
import { DashboardMetricsColumn } from '@/features/home/components/molecules/DashboardMetricsColumn'
import { homeAssets } from '@/utils/data/static/pages/home'

const {
  comments,
  companyProfile,
  copy,
  serviceArea,
  panelPopularServices,
  popularServices,
  quickStatus,
  recentInstallations,
} = homeAssets.dashboard

export const DashboardLayout = () => {
  const [featuredService] = popularServices

  if (!featuredService) return null

  return (
    <div className="grid min-h-0 gap-3 backdrop-blur-2xl lg:h-full lg:grid-cols-[300px_minmax(0,1fr)_300px] lg:overflow-hidden xl:grid-cols-[340px_minmax(0,1fr)_340px]">
      <div className="order-2 min-h-0 lg:order-0">
        <DashboardMetricsColumn
          comments={comments}
          companyProfile={companyProfile}
          serviceArea={{
            description: copy.serviceAreaDescription,
            mapEmbedUrl: serviceArea.mapEmbedUrl,
            mapTitle: copy.serviceAreaMapTitle,
            technicianAvatars: serviceArea.technicianAvatars,
            technicianCount: copy.serviceAreaTechnicianCount,
            techniciansLabel: copy.serviceAreaTechniciansLabel,
            title: copy.serviceAreaTitle,
            viewMapAriaLabel: copy.serviceAreaViewMapAriaLabel,
            viewMapHref: copy.serviceAreaViewMapHref,
            viewMapLabel: copy.serviceAreaViewMapLabel,
          }}
        />
      </div>

      <div className="relative order-0 min-h-0 lg:order-0">
        <ServiceCarousel ariaLabel={copy.popularServicesTitle} slides={popularServices} />
        <DashboardHeroOverlay
          badgeIcon={copy.heroPanelBadgeIcon}
          ctaLabel={copy.freeQuoteCta}
          quickStatus={quickStatus}
          quickStatusAriaLabel={copy.quickStatusAriaLabel}
          service={featuredService}
          title={copy.heroPanelTitle}
        />
      </div>

      <div className="order-1 min-h-0 lg:order-0">
        <DashboardInsightsColumn
          quickStatus={quickStatus}
          quickStatusAriaLabel={copy.quickStatusAriaLabel}
          panelPopularServices={panelPopularServices}
          popularServicesViewAllAriaLabel={copy.popularServicesViewAllAriaLabel}
          popularServicesViewAllHref={copy.popularServicesViewAllHref}
          popularServicesViewAllLabel={copy.popularServicesViewAllLabel}
          recentInstallations={recentInstallations}
          recentInstallationsTitle={copy.recentInstallationsTitle}
          recentInstallationsViewAllAriaLabel={copy.recentInstallationsViewAllAriaLabel}
          recentInstallationsViewAllHref={copy.recentInstallationsViewAllHref}
          recentInstallationsViewAllLabel={copy.recentInstallationsViewAllLabel}
          scheduleServiceCta={{
            ariaLabel: copy.scheduleServiceCtaAriaLabel,
            subtitle: copy.scheduleServiceCtaSubtitle,
            title: copy.scheduleServiceCtaTitle,
          }}
          servicesTitle={copy.servicesPanelTitle}
        />
      </div>
    </div>
  )
}
