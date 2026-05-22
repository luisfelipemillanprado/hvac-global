'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

/**
 * @description Theme toggle for the navbar; toggles icon and `dark` on the document root.
 */
export const NavbarThemeToggle = ({ ariaLabel }: { ariaLabel: string }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={isDark}
      onClick={() => setIsDark((current) => !current)}
      className="bg-pewter/40 inline-flex size-10 items-center justify-center rounded-2xl backdrop-blur-md transition-colors"
    >
      {isDark ? <MoonIcon className="size-5.5 fill-white" /> : <SunIcon className="size-5.5 fill-white" />}
    </button>
  )
}
