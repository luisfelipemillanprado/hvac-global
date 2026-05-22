import type { CommonServiceNeedItemComponentProps } from '@/features/home/types'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const COMMON_SERVICE_NEED_IMAGE_SIZES = '44px'

export const CommonServiceNeedItem = ({ href, item }: CommonServiceNeedItemComponentProps) => {
  return (
    <a
      href={href}
      className="hover:bg-blue-slate grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-2xl p-1.5 transition"
    >
      <span className="bg-jet-black relative size-11 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={COMMON_SERVICE_NEED_IMAGE_SIZES}
          className="object-cover"
        />
      </span>
      <span className="text-body md:text-body-md lg:text-body-lg text-ink-black min-w-0 font-bold">
        {item.title}
      </span>
      <span className="bg-ink-navy text-pewter grid size-7 shrink-0 place-items-center rounded-full">
        <PlayIcon className="size-3.5" />
      </span>
    </a>
  )
}
