import { OurWorkDetailsCtaButton } from '@/common/call-action/components/OurWorkDetailsCtaButton'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import Image from 'next/image'

export const OurWorkCard = ({
  description,
  detailsAriaLabel,
  image,
  imageAlt,
  ratingAriaLabel,
  ratingValue,
  time,
  title,
  viewDetails,
}: OurWorkCardProps) => {
  return (
    <article className="bg-fill shadow-panel border-line grid overflow-hidden rounded-2xl border">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder="blur"
          blurDataURL={blurDataUrlGallery}
          sizes="(min-width: 64rem) 20rem, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 grid place-items-center">
          <OurWorkDetailsCtaButton ariaLabel={detailsAriaLabel} />
        </div>
      </div>
    </article>
  )
}
