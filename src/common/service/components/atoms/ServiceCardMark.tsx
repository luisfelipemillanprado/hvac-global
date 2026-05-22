import type { ServiceCardMarkProps } from '@/common/service/types'
import { DashboardText } from '@/common/text/components/DashboardText'

/**
 * @description Short mark badge on the service card image (e.g. AC, MT).
 */
export const ServiceCardMark = ({ mark }: ServiceCardMarkProps) => {
  return (
    <div className="shadow-nav bg-navy-gray/70 absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-2xl backdrop-blur-md">
      <DashboardText text={mark} variant="default" bold />
    </div>
  )
}
