import type { ServicePreviewProps } from '@/features/home/types'
import Image from 'next/image'

/**
 * @description Renders a compact visual preview for a featured HVAC service.
 */
export const ServicePreview = ({ label, image, imageAlt }: ServicePreviewProps) => {
  return (
    <div className="shadow-nav border-steel-blue/40 relative aspect-square overflow-hidden rounded-4xl border-2">
      <Image src={image} alt={imageAlt} fill sizes="6rem" className="object-cover" />
      <div className="bg-overlay absolute inset-0" />
      <span className="text-small md:text-small-md lg:text-small-lg absolute inset-0 z-10 inline-flex items-center justify-center font-black text-white">
        {label}
      </span>
    </div>
  )
}
