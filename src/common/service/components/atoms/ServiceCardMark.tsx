import type { ServiceCardMarkProps } from '@/common/service/types'

/**
 * @description Short mark badge on the service card image (e.g. AC, MT).
 */
export const ServiceCardMark = ({ mark }: ServiceCardMarkProps) => {
  return (
    <span className="text-small md:text-small-md lg:text-small-lg shadow-nav text-ink absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-2xl bg-white/70 font-black">
      {mark}
    </span>
  )
}
