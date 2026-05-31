'use client'

import type { WorkCarouselProps } from '@/common/carousel/types'
import { OurWorkCard } from '@/common/work/components/OurWorkCard'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Whole-card carousel for the works section, sliding one full card at a time.
 */
export const WorkCarousel = ({ ariaLabel, works }: WorkCarouselProps) => {
  return (
    <Swiper
      aria-label={ariaLabel}
      modules={[Autoplay]}
      loop={true}
      slidesPerView={1}
      autoplay={{ delay: 7500, disableOnInteraction: false }}
      className="h-auto w-full rounded-2xl"
    >
      {works.map((item) => (
        <SwiperSlide key={item.title} className="h-auto w-full">
          <OurWorkCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
