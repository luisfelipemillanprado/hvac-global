'use client'

import { DashboardNavbarNavItem } from '@/common/navbar/components/atoms/DashboardNavbarNavItem'
import type { DashboardNavbarMobileMenuProps } from '@/common/navbar/types'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

/**
 * @description Mobile-only menu: toggle button, floating panel, and open/close behavior.
 */
export const DashboardNavbarMobileMenu = ({
  menuCloseAriaLabel,
  menuOpenAriaLabel,
  navAriaLabel,
  navLinks,
}: DashboardNavbarMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return
      setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? menuCloseAriaLabel : menuOpenAriaLabel}
        onClick={() => setIsOpen((current) => !current)}
        className="shadow-nav grid size-10 items-center justify-center rounded-2xl border border-line bg-fill-hover lg:hidden"
      >
        {isOpen ? (
          <XMarkIcon className="size-5 fill-content" aria-hidden />
        ) : (
          <Bars3Icon className="size-5 fill-content" aria-hidden />
        )}
      </button>

      <nav
        ref={panelRef}
        aria-label={navAriaLabel}
        className={clsx(
          'bg-surface shadow-flyout absolute inset-x-0 top-full z-50 mt-4 grid grid-cols-2 gap-2 rounded-3xl border border-line p-3.5 transition duration-300 lg:hidden',
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        )}
      >
        {navLinks.map((link) => (
          <DashboardNavbarNavItem key={link.label} {...link} mobile onClick={() => setIsOpen(false)} />
        ))}
      </nav>
    </>
  )
}
