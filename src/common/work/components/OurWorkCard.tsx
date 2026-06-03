import { OurWorkDetailsButton } from '@/common/call-action/components/OurWorkDetailsButton'
import { OurWorkDetailsCtaButton } from '@/common/call-action/components/OurWorkDetailsCtaButton'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardText } from '@/common/text/components/DashboardText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import type { OurWorkCardProps } from '@/common/work/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import { ChatBubbleLeftIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export const OurWorkCard = ({
  badgeLabel,
  description,
  detailsAriaLabel,
  menuAriaLabel,
  image,
  imageAlt,
  title,
}: OurWorkCardProps) => {
  return (
    <article className="bg-fill shadow-panel border-line grid overflow-hidden rounded-2xl border">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-4 pb-3">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
          <Image src={image} alt="" fill sizes="40px" className="object-cover" aria-hidden />
        </div>
        <div className="grid min-w-0 gap-0.5">
          <DashboardSmallText text={title} variant="default" truncate bold />
          <DashboardSmallText text={badgeLabel} variant="onDark" />
        </div>
        <OurWorkDetailsButton ariaLabel={menuAriaLabel} />
      </div>

      <div className="px-2">
        <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
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
      </div>

      <div className="border-line grid w-full gap-2 border-t p-4">
        <div className="grid grid-flow-col items-center gap-4">
          <HeartIcon className="text-content size-6" aria-hidden />
          <ChatBubbleLeftIcon className="text-content size-6" aria-hidden />
          <PaperAirplaneIcon className="text-content size-6" aria-hidden />
        </div>
        <DashboardTitle text={title} variant="h3" />
        <DashboardText text={description} variant="onDark" />
      </div>
    </article>
  )
}
