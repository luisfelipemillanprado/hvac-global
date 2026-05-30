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
      className="grid size-10 items-center justify-center rounded-2xl border border-line-strong bg-fill"
    >
      <MoonIcon className="hidden size-5 fill-content dark:block" aria-hidden />
      <SunIcon className="size-5 fill-content dark:hidden" aria-hidden />
    </button>
  )
}
