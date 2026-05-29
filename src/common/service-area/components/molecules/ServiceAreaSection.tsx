import type { ServiceAreaSectionProps } from '@/common/service-area/types'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const ServiceAreaSection = ({
  description,
  mapEmbedUrl,
  mapTitle,
  technicianAvatars,
  technicianCount,
  techniciansLabel,
  title,
  viewMapAriaLabel,
  viewMapHref,
  viewMapLabel,
}: ServiceAreaSectionProps) => {
  return (
    <section
      className="bg-jet-gray/70 shadow-panel grid min-h-min shrink-0 gap-4 rounded-4xl border border-white/5 p-4 backdrop-blur-xl"
      aria-label={title}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <DashboardTitle text={title} variant="h3" />
        <a
          href={viewMapHref}
          aria-label={viewMapAriaLabel}
          className="text-body md:text-body-md lg:text-body-lg leading-body text-periwinkle grid grid-flow-col items-center gap-1 font-semibold"
        >
          {viewMapLabel}
          <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
        </a>
      </div>

      <div className="grid min-w-0 gap-4">
        <div className="grid min-w-0 gap-3">
          <DashboardSmallText text={description} variant="onDark" />
          <div className="grid min-w-0 gap-2">
            <div className="grid w-fit grid-flow-col items-center">
              {technicianAvatars.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className={`relative size-8 overflow-hidden rounded-full border-2 border-jet-gray ${index > 0 ? '-ml-2.5' : ''}`}
                >
                  <Image src={avatar.src} alt={avatar.alt} fill sizes="2rem" className="object-cover" />
                </div>
              ))}
              <span className="bg-periwinkle -ml-2.5 grid size-8 shrink-0 items-center justify-center rounded-full border-2 border-jet-gray">
                <DashboardSmallText text={technicianCount} variant="default" bold />
              </span>
            </div>
            <DashboardSmallText text={techniciansLabel} variant="onDark" />
          </div>
        </div>

        <div className="shadow-nav min-h-40 overflow-hidden rounded-3xl border border-white/10">
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
