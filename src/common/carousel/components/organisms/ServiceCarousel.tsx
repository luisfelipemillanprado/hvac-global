'use client'

import type { ServiceCarouselProps } from '@/common/carousel/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * @description Reusable premium image carousel for dashboard hero panels.
 */
export const ServiceCarousel = ({ ariaLabel, slides }: ServiceCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (slides.length < 2 || isPaused) return

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 7500)

    return () => window.clearTimeout(timer)
  }, [slides.length, activeIndex, isPaused])

  if (!slides.length) return null

  return (
    <section
      aria-label={ariaLabel}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      className="shadow-panel border-line relative h-full min-h-95 overflow-hidden rounded-3xl border lg:min-h-0"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          sizes="(max-width: 64rem) 100vw, 50vw"
          className={`object-cover transition-opacity duration-1500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="bg-overlay-bottom absolute inset-0" />
    </section>
  )
}
