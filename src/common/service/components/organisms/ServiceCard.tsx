import { ActionButton } from '@/common/call-action/components/ActionButton'
import { ServiceCardMark } from '@/common/service/components/atoms/ServiceCardMark'
import type { ServiceCardProps } from '@/common/service/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import Image from 'next/image'

/**
 * @description Renders an HVAC service card with image, mark and booking action.
 */
export const ServiceCard = ({ title, description, ctaLabel, image, imageAlt, mark }: ServiceCardProps) => {
  return (
    <article className="shadow-panel grid h-full min-h-80 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-4xl">
      <div className="bg-graphite relative min-h-0">
        <div className="relative h-full overflow-hidden rounded-t-4xl rounded-b-3xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 40rem) 100vw, (max-width: 80rem) 50vw, 16.25rem"
            className="object-cover"
          />
          <div className="bg-overlay-bottom absolute inset-0" />
          <ServiceCardMark mark={mark} />
          <div className="relative z-10 flex h-full flex-col justify-end gap-y-3 p-4">
            <DashboardTitle text={title} variant="h3" />
            <DashboardText text={description} variant="onDark" />
          </div>
        </div>
      </div>
      <div className="bg-graphite p-4 backdrop-blur-md">
        <ActionButton text={ctaLabel} />
      </div>
    </article>
  )
}
