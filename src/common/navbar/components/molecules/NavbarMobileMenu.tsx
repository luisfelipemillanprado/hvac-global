'use client'

import { NavbarLink } from '@/common/navbar/components/atoms/NavbarLink'
import type { NavbarMobileMenuProps } from '@/common/navbar/types'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

/**
 * @description Mobile-only menu: toggle button, floating panel, and open/close behavior.
 */
export const NavbarMobileMenu = ({ items, menuAriaLabel }: NavbarMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

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
        aria-label={menuAriaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="bg-silver shadow-nav inline-flex size-10 shrink-0 items-center justify-center rounded-2xl lg:hidden"
      >
        {isOpen ? (
          <XMarkIcon className="fill-ink-black size-5.5" />
        ) : (
          <Bars3Icon className="fill-ink-black size-5.5" />
        )}
      </button>

      <div
        ref={panelRef}
        className={clsx(
          'bg-graphite shadow-flyout absolute inset-x-0 top-full z-50 mt-3 rounded-4xl px-3 py-4 transition duration-300 lg:hidden',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        )}
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {items.map((item) => (
            <NavbarLink key={item.label} item={item} onClick={() => setIsOpen(false)} mobile />
          ))}
        </div>
      </div>
    </>
  )
}
