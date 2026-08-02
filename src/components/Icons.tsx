import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const strokeBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/* ------------------------------------------------------------------ */
/* Form field icons                                                     */
/* ------------------------------------------------------------------ */

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.8 19.4c.7-3.5 3.6-5.5 7.2-5.5s6.5 2 7.2 5.5" />
      </g>
    </svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <rect x="4.8" y="10.2" width="14.4" height="9.6" rx="2.2" />
        <path d="M8.2 10.2V7.6a3.8 3.8 0 0 1 7.6 0v2.6" />
        <circle cx="12" cy="14.8" r="1.25" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function PlantIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <path d="M3.4 20.2h17.2" />
        <path d="M4.8 20.2V9.6l5.4 3.2V9.6l5.4 3.2V6.4l3.6-1.6v15.4" />
        <path d="M8 16.6h1.6M12.6 16.6h1.6" />
      </g>
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <path d="M2.6 12S6 5.9 12 5.9 21.4 12 21.4 12 18 18.1 12 18.1 2.6 12 2.6 12Z" />
        <circle cx="12" cy="12" r="2.9" />
      </g>
    </svg>
  )
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <path d="M9.6 6.3A9.6 9.6 0 0 1 12 6c6 0 9.4 6 9.4 6a17 17 0 0 1-3.3 4" />
        <path d="M6.2 8A17 17 0 0 0 2.6 12S6 18 12 18a9.4 9.4 0 0 0 3.6-.7" />
        <path d="m9.9 9.9a3 3 0 0 0 4.2 4.2" />
        <path d="m3.6 3.6 16.8 16.8" />
      </g>
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...strokeBase}
        strokeWidth={2}
        d="m6.4 9.4 5.6 5.4 5.6-5.4"
      />
    </svg>
  )
}

export function LoginArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase} strokeWidth={2}>
        <path d="M3.6 12h11.2" />
        <path d="m10.6 7.8 4.2 4.2-4.2 4.2" />
        <path d="M15.8 4.2h3.2a1.4 1.4 0 0 1 1.4 1.4v12.8a1.4 1.4 0 0 1-1.4 1.4h-3.2" />
      </g>
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...strokeBase}
        strokeWidth={3.2}
        d="m4.8 12.6 4.8 4.8 9.6-10.2"
      />
    </svg>
  )
}

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.4v5.4" />
        <circle cx="12" cy="16.4" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Capability card icons                                                */
/* ------------------------------------------------------------------ */

export function RobotArmIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 28h24" />
        <path d="M8.5 28v-2.6h7V28" />
      </g>
      <g
        fill="none"
        stroke="var(--jsw-red)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 25.4V17l7-6.2" />
        <path d="m19 10.8 5.6 1.9" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24.2 9.4v6.2" />
        <path d="M21.6 6.2h5.4" />
      </g>
      <circle cx="12" cy="17" r="1.9" fill="currentColor" />
      <circle cx="19" cy="10.8" r="1.7" fill="var(--jsw-red)" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        d="M16 3.2 27 7.4v8.2c0 6.4-4.4 11.2-11 13.2-6.6-2-11-6.8-11-13.2V7.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="m10.6 16.2 3.9 3.9 7.1-7.6"
        fill="none"
        stroke="var(--jsw-red)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g fill="var(--jsw-red)">
        <rect x="5" y="18.5" width="4.4" height="8.5" rx="1" />
        <rect x="12.4" y="13.5" width="4.4" height="13.5" rx="1" />
        <rect x="19.8" y="9" width="4.4" height="18" rx="1" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.4 12.6 11 7l5.6 3.6L27 4" />
        <path d="M22.4 4H27v4.6" />
      </g>
    </svg>
  )
}

export function BarcodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <rect x="4" y="6" width="1.9" height="20" />
        <rect x="7.4" y="6" width="1.1" height="20" />
        <rect x="10" y="6" width="2.4" height="20" />
        <rect x="13.9" y="6" width="1.1" height="20" />
        <rect x="16.5" y="6" width="1.9" height="20" />
        <rect x="19.9" y="6" width="1.1" height="20" />
        <rect x="22.5" y="6" width="2.4" height="20" />
        <rect x="26.4" y="6" width="1.6" height="20" />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Status bar icons                                                     */
/* ------------------------------------------------------------------ */

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...strokeBase}
        d="M12 2.8 20 5.9v5.9c0 4.7-3.2 8.2-8 9.4-4.8-1.2-8-4.7-8-9.4V5.9Z"
      />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7v5.3l3.3 2" />
      </g>
    </svg>
  )
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...strokeBase}>
        <circle cx="18" cy="5.4" r="2.6" />
        <circle cx="18" cy="18.6" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <path d="m8.3 10.8 7.4-4M8.3 13.2l7.4 4" />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Decorative                                                           */
/* ------------------------------------------------------------------ */

export function CarGlyphIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 20" aria-hidden="true" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14.2h3.1M41.9 14.2H45" />
        <path d="M6.1 14.2a2.9 2.9 0 0 1 5.8 0M36.1 14.2a2.9 2.9 0 0 1 5.8 0" />
        <path d="M11.9 14.2h24.2" />
        <path d="M4.6 12.6c-.6-2.1.2-3.9 2.4-4.6l4.3-1.4 3.5-2.7c.7-.5 1.5-.8 2.4-.8h9.9c1 0 2 .3 2.8.9l4.2 3.2 4.6 1c2 .5 3 2 2.6 4.4" />
        <path d="M22.4 3.3v3.9M11.4 7.2h25.6" />
      </g>
    </svg>
  )
}
