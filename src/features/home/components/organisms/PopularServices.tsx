import { ServiceCard } from '@/common/service/components/organisms/ServiceCard'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { PopularServicesCta } from '@/features/home/components/atoms/PopularServicesCta'
import type { PopularServicesProps } from '@/features/home/types'

export const PopularServices = ({ config, copy, reviewAvatars, services }: PopularServicesProps) => {
  return (
    <section aria-labelledby={config.popularServicesTitleId} className="grid gap-3">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <DashboardTitle id={config.popularServicesTitleId} text={copy.popularServicesTitle} variant="h2" />
        <PopularServicesCta href={config.popularServicesCtaHref} text={copy.popularServicesCta} />
      </div>
      <div className="grid h-full gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            ctaLabel={copy.freeQuoteCta}
            reviewAvatars={reviewAvatars}
            reviewersAriaLabel={copy.serviceReviewersAriaLabel}
          />
        ))}
      </div>
    </section>
  )
}
