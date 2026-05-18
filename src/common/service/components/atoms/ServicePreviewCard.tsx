import type { ServicePreviewCardProps } from '@/common/service/types'
import Image from 'next/image'

/**
 * @description Renders a compact visual preview card for a featured HVAC service.
 * @component
 * @param {ServicePreviewCardProps} props - Component properties.
 * @returns A rendered service preview card.
 */
export const ServicePreviewCard = ({ label, image, imageAlt }: ServicePreviewCardProps) => {
  return (
    <div className="shadow-nav relative aspect-square overflow-hidden rounded-4xl">
      <Image src={image} alt={imageAlt} fill sizes="6rem" className="object-cover" />
      <div className="bg-overlay absolute inset-0" />
      <span className="text-small md:text-small-md lg:text-small-lg absolute inset-0 z-10 inline-flex items-center justify-center font-black text-white">
        {label}
      </span>
    </div>
  )
}
