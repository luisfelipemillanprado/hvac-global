import { AvatarStack } from '@/common/avatar/components/AvatarStack'
import { ActionButton } from '@/common/call-action/components/ActionButton'
import { ServiceCardMark } from '@/common/service/components/atoms/ServiceCardMark'
import type { ServiceCardProps } from '@/common/service/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import Image from 'next/image'

/**
 * @description Renders an HVAC service card with image, reviewer avatars and booking action.
 * @component
 * @param {ServiceCardProps} props - Component properties.
 * @returns A rendered service card.
 */
export const ServiceCard = ({
  title,
  description,
  ctaLabel,
  image,
  imageAlt,
  mark,
  reviewAvatars,
  reviewersAriaLabel,
}: ServiceCardProps) => {
  return (
    <article className="shadow-panel relative flex h-full min-h-80 overflow-hidden rounded-4xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 40rem) 100vw, (max-width: 80rem) 50vw, 16.25rem"
        className="object-cover"
      />
      <div className="bg-overlay-bottom absolute inset-0" />
      <ServiceCardMark mark={mark} />
      <div className="relative z-10 mt-auto grid w-full grid-cols-1 gap-y-4">
        <div className="grid gap-y-3 px-4">
          <DashboardTitle text={title} variant="h3" />
          <DashboardText text={description} variant="onDark" />
        </div>
        <div className="bg-graphite grid grid-cols-2 items-center justify-between p-4 pt-5 backdrop-blur-md">
          <AvatarStack avatars={reviewAvatars} ariaLabel={reviewersAriaLabel} />
          <ActionButton text={ctaLabel} />
        </div>
      </div>
    </article>
  )
}
