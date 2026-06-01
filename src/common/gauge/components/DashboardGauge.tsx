import type { DashboardGaugeProps } from '@/common/gauge/types'

/**
 * @description Compact gradient gauge for dashboard score indicators.
 */
export const DashboardGauge = ({ ariaLabel, value }: DashboardGaugeProps) => {
  return (
    <div
      aria-label={ariaLabel}
      className="shadow-control relative grid size-13 place-items-center rounded-full"
      role="img"
    >
      <svg className="absolute inset-0 size-full" viewBox="0 0 52 52" aria-hidden>
        <defs>
          <linearGradient
            id="dashboard-gauge-gradient"
            x1="0"
            x2="52"
            y1="26"
            y2="26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--color-periwinkle)" />
            <stop offset="50%" stopColor="var(--color-hot-pink)" />
            <stop offset="100%" stopColor="var(--color-sunset)" />
          </linearGradient>
        </defs>
        <circle
          cx="26"
          cy="26"
          r="21"
          fill="none"
          stroke="oklch(from var(--color-white) l c h / 0.12)"
          strokeWidth="4"
        />
        <circle
          cx="26"
          cy="26"
          r="21"
          fill="none"
          pathLength="100"
          stroke="url(#dashboard-gauge-gradient)"
          strokeDasharray="74 26"
          strokeLinecap="round"
          strokeWidth="4"
          transform="rotate(135 26 26)"
        />
      </svg>

      <div className="grid size-9 place-items-center rounded-full">
        <span className="text-secondary-title md:text-secondary-title-md lg:text-secondary-title-lg leading-secondary-title font-black text-white">
          {value}
        </span>
      </div>
    </div>
  )
}
