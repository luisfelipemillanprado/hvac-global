'use client'

import type { DashboardNavbarThemeToggleProps } from '@/common/navbar/types'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

export const DashboardNavbarThemeToggle = ({ themeToggleAriaLabel }: DashboardNavbarThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label={themeToggleAriaLabel}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="border-line bg-fill grid size-10 items-center justify-center rounded-2xl border"
    >
      <MoonIcon className="fill-content hidden size-5 dark:block" aria-hidden />
      <SunIcon className="fill-content size-5 dark:hidden" aria-hidden />
    </button>
  )
}
