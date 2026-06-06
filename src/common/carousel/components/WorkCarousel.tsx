'use client'

import type { WorkCarouselProps } from '@/common/carousel/types'
import { OurWorkCard } from '@/common/work/components/OurWorkCard'
import type {
  EmblaCarouselType,
  EmblaEventListType,
  EmblaEventModelType,
  EmblaOptionsType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef } from 'react'

const TWEEN_FACTOR_BASE = 0.84

const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max)

export const WorkCarousel = ({ badge, works }: WorkCarouselProps) => {
  const options: EmblaOptionsType = {
    loop: true,
    align: 'center',
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length
  }, [])

  const tweenOpacity = useCallback(
    <EventType extends keyof EmblaEventListType>(
      emblaApi: EmblaCarouselType,
      event?: EmblaEventModelType<EventType>
    ) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = event?.type === 'scroll'
      emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex]
        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }
          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = clamp(tweenValue, 0.5, 1)
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity.toString()
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    const syncTween = () => {
      setTweenFactor(emblaApi)
      tweenOpacity(emblaApi)
    }

    emblaApi.on('scroll', tweenOpacity).on('reinit', syncTween)

    queueMicrotask(syncTween)

    return () => {
      emblaApi.off('scroll', tweenOpacity).off('reinit', syncTween)
    }
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="-ml-4 flex">
        {works.map((item) => (
          <div key={item.title} className="min-w-0 flex-[0_0_82%] pl-4">
            <OurWorkCard {...item} badge={badge} />
          </div>
        ))}
      </div>
    </div>
  )
}
