import { ActionButton } from '@/common/call-action/components/ActionButton'
import { ServiceCardDetailsButton } from '@/common/service/components/atoms/ServiceCardDetailsButton'
import type { ServiceCardProps } from '@/common/service/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import Image from 'next/image'

/**
 * @description Renders an HVAC service card with image and booking action.
 */
export const ServiceCard = ({
  title,
  description,
  ctaLabel,
  detailsAriaLabel,
  image,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <article className="shadow-panel border-navy-gray grid h-full min-h-82 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-4xl border-2">
      <div className="relative h-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 40rem) 100vw, (max-width: 80rem) 50vw, 16.25rem"
          className="object-cover"
        />
        <div className="bg-overlay-bottom absolute inset-0" />
        <ServiceCardDetailsButton ariaLabel={detailsAriaLabel} />
        <div className="relative z-10 flex h-full flex-col justify-end gap-y-3.5 p-4">
          <DashboardTitle text={title} variant="h3" />
          <DashboardText text={description} variant="onDark" />
        </div>
      </div>

      <div className="bg-graphite p-4 backdrop-blur-md">
        <ActionButton text={ctaLabel} />
      </div>
    </article>
  )
}
