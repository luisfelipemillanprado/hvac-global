import type { PopularServiceCardProps } from '@/common/service/types/popularServiceCard'
import { DashboardSmallText } from '@/common/text/components/DashboardSmallText'
import { DashboardTitle } from '@/common/titles/components/DashboardTitle'
import { HomeIcon, SparklesIcon, StarIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const iconByType = {
  repair: WrenchScrewdriverIcon,
  maintenance: WrenchScrewdriverIcon,
  installation: HomeIcon,
  airQuality: SparklesIcon,
} as const

const iconWrapByType = {
  repair: 'bg-periwinkle',
  maintenance: 'bg-sunset',
  installation: 'bg-hot-pink',
  airQuality: 'bg-mint',
} as const

export const PopularServiceCard = ({
  icon,
  image,
  imageAlt,
  ratingAriaLabel,
  ratingValue,
  title,
}: PopularServiceCardProps) => {
  const Icon = iconByType[icon]

  return (
    <article className="shadow-panel border-line relative min-h-44 w-[46%] min-w-36 shrink-0 overflow-hidden rounded-3xl border">
      <Image src={image} alt={imageAlt} fill sizes="12rem" className="object-cover" />
      <div className="bg-overlay-bottom absolute inset-0" />

      <div className="relative z-10 grid h-full min-h-44 grid-rows-[minmax(0,1fr)_auto] p-3">
        <span
          className={`${iconWrapByType[icon]} border-line grid size-9 w-fit items-center justify-center rounded-xl border`}
        >
          <Icon className="text-on-media size-5" aria-hidden />
        </span>

        <div className="grid gap-1">
          <DashboardTitle text={title} variant="h3" />
          <div aria-label={ratingAriaLabel} className="grid grid-flow-col items-center gap-1">
            <StarIcon className="text-sunset size-4 shrink-0" aria-hidden />
            <DashboardSmallText text={ratingValue} variant="default" bold />
          </div>
        </div>
      </div>
    </article>
  )
}
