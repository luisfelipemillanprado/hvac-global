import type { VisualImageProps } from '@/common/visual/types'
import Image from 'next/image'

/**
 * @description Renders the hero background visual for the HVAC dashboard.
 * @component
 * @param {VisualImageProps} props - Component properties.
 * @returns A rendered hero visual image.
 */
export const VisualImage = ({ image, alt, priority = false, overlayClassName }: VisualImageProps) => {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={'(max-width: 1024px) 100vw, 620px'}
        className="object-cover"
      />
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </>
  )
}
