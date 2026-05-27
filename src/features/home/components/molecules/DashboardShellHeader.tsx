import { NavbarBrand } from '@/common/navbar/components/atoms/NavbarBrand'
import type { NavbarBrandProps } from '@/common/navbar/types'
import { DashboardText } from '@/common/text/components/DashboardText'
import { Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type DashboardShellHeaderTab = {
  label: string
}

interface DashboardShellHeaderProps extends NavbarBrandProps {
  ariaLabel: string
  searchAriaLabel: string
  settingsAriaLabel: string
  tabs: readonly DashboardShellHeaderTab[]
}

/**
 * @description Internal dashboard header with brand, tabs and actions.
 */
export const DashboardShellHeader = ({
  ariaLabel,
  searchAriaLabel,
  settingsAriaLabel,
  tabs,
  ...brand
}: DashboardShellHeaderProps) => {
  return (
    <header className="border-white/5 bg-jet-gray/70 grid gap-4 rounded-4xl border p-3 backdrop-blur-xl lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
      <NavbarBrand {...brand} />
      <nav
        aria-label={ariaLabel}
        className="border-white/5 bg-night/40 mx-auto flex w-fit min-w-0 gap-1 rounded-2xl border p-1"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            className={`grid h-9 shrink-0 items-center rounded-xl px-4 transition ${index === 0 ? 'bg-white/10 shadow-nav' : 'hover:bg-white/5'}`}
          >
            <DashboardText text={tab.label} variant={index === 0 ? 'default' : 'onDark'} truncate as="span" />
          </button>
        ))}
      </nav>
      <div className="grid grid-cols-2 justify-end gap-2">
        <button
          type="button"
          aria-label={searchAriaLabel}
          className="border-white/10 bg-white/5 grid size-10 items-center justify-center rounded-2xl border"
        >
          <MagnifyingGlassIcon className="size-5 text-white" aria-hidden />
        </button>
        <button
          type="button"
          aria-label={settingsAriaLabel}
          className="border-white/10 bg-white/5 grid size-10 items-center justify-center rounded-2xl border"
        >
          <Cog6ToothIcon className="size-5 text-white" aria-hidden />
        </button>
      </div>
    </header>
  )
}
