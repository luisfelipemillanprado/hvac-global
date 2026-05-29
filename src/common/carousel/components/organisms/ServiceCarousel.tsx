'use client'

import type { ServiceCarouselProps } from '@/common/carousel/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * @description Reusable premium image carousel for dashboard hero panels.
 */
export const ServiceCarousel = ({ ariaLabel, slides }: ServiceCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 7500)

    return () => window.clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section
      aria-label={ariaLabel}
      className="bg-jet-gray/70 shadow-panel relative h-full min-h-100 overflow-hidden rounded-4xl border border-white/5 backdrop-blur-xl lg:min-h-0"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          sizes="(max-width: 64rem) 100vw, 50vw"
          className={`object-cover transition-[opacity,filter] duration-1500 ease-in-out ${index === activeIndex ? 'blur-0 opacity-100' : 'opacity-0 blur-[1px]'}`}
        />
      ))}

      <div className="bg-overlay-bottom absolute inset-0" />

      <div className="absolute bottom-4 left-1/2 z-10 grid -translate-x-1/2 justify-center">
        <div className="bg-night/45 grid grid-flow-col gap-2 rounded-full border border-white/10 p-1.5 backdrop-blur-xl">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={slide.imageAlt}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-[width,background-color,opacity] duration-300 ${index === activeIndex ? 'w-8 bg-white opacity-100' : 'w-2 bg-white/50 opacity-80'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
