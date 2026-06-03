import type { ServiceAreaSectionProps } from '@/common/service-area/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardSectionHeader } from '@/common/section-header/components/DashboardSectionHeader'
import Image from 'next/image'

export const ServiceAreaSection = ({
  description,
  mapEmbedUrl,
  mapTitle,
  technicianAvatars,
  technicianCount,
  techniciansLabel,
  badge,
  viewMapAriaLabel,
  viewMapHref,
  viewMapLabel,
}: ServiceAreaSectionProps) => {
  return (
    <section
      className="bg-surface-glass shadow-panel border-line grid min-h-min shrink-0 gap-4 rounded-3xl border p-4"
      aria-label={badge.label}
    >
      <DashboardSectionHeader
        badge={badge}
        viewAll={{ href: viewMapHref, label: viewMapLabel, ariaLabel: viewMapAriaLabel }}
      />

      <div className="grid min-w-0 gap-4">
        <div className="grid min-w-0 gap-3">
          <DashboardSmallText text={description} variant="onDark" />
          <div className="grid min-w-0 gap-2">
            <div className="grid w-fit grid-flow-col items-center">
              {technicianAvatars.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className={`border-surface relative size-8 overflow-hidden rounded-full border-2 ${index > 0 ? '-ml-2.5' : ''}`}
                >
                  <Image src={avatar.src} alt={avatar.alt} fill sizes="2rem" className="object-cover" />
                </div>
              ))}
              <span className="bg-periwinkle border-surface -ml-2.5 grid size-8 shrink-0 items-center justify-center rounded-full border-2">
                <DashboardSmallText text={technicianCount} variant="default" bold />
              </span>
            </div>
            <DashboardSmallText text={techniciansLabel} variant="onDark" />
          </div>
        </div>

        <div className="shadow-nav border-line min-h-40 overflow-hidden rounded-3xl border">
          <iframe
            src={mapEmbedUrl}
            title={mapTitle}
            className="h-40 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
