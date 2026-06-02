import { DashboardHeroOverlay } from '@/features/home/components/atoms/DashboardHeroOverlay'
import type { DashboardHeroColumnProps } from '@/features/home/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import Image from 'next/image'

export const DashboardHeroColumn = ({ hero, quickStatus }: DashboardHeroColumnProps) => {
  return (
    <div className="relative order-0 min-h-0 lg:order-0">
      <section
        aria-label={hero.imageAriaLabel}
        className="shadow-panel border-line relative h-full min-h-96 overflow-hidden rounded-3xl border lg:min-h-0"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          placeholder="blur"
          blurDataURL={blurDataUrlGallery}
          sizes="(min-width: 80rem) calc(100vw - 736px), (min-width: 64rem) calc(100vw - 656px), 100vw"
          className="object-cover"
        />
        <div className="bg-overlay absolute inset-0" />
      </section>
      <DashboardHeroOverlay
        badge={hero.badge}
        ctaLabel={hero.ctaLabel}
        headline={hero.headline}
        quickStatus={quickStatus}
      />
    </div>
  )
}
