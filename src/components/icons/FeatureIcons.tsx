type IconProps = { className?: string }

const RED = 'var(--color-jsw-red-bright)'

/** Articulated robot arm — Production Management. */
export function RobotArmIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 28h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M6.5 27.5v-2.2c0-.7.6-1.3 1.3-1.3h5.4c.7 0 1.3.6 1.3 1.3v2.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 24V13.5"
        stroke={RED}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="m10.5 13.5 8-6"
        stroke={RED}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="10.5" cy="13.5" r="2.1" fill="#fff" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="m18.5 7.5 4.6 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 9.6l3.4 2.6-2.2 2.9-3.4-2.6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M25.8 15.6c1.6 1.2 2 3.1 1.1 4.6" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** Shield with a validation tick — Quality Management. */
export function QualityShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M16 3.2 27 7.4v8.1c0 6.2-4.3 11.7-11 13.3-6.7-1.6-11-7.1-11-13.3V7.4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m10.6 16.2 3.9 3.9 7-7.4"
        stroke={RED}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Column chart with a rising trend arrow — Performance Dashboards. */
export function PerformanceChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M4 27.2h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 27.2V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6.4" y="18.4" width="4.4" height="8.8" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.8" y="13.2" width="4.4" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="21.2" y="8.6" width="4.4" height="18.6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.6 15.4 12 9.6l4.4 3.6L26 4.6"
        stroke={RED}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.4 4.6H26v5.5" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Scannable barcode — Traceability & Reporting. */
export function BarcodeIcon({ className }: IconProps) {
  const bars = [
    { x: 4, w: 1.6 },
    { x: 7, w: 1 },
    { x: 9.4, w: 2.4 },
    { x: 13, w: 1 },
    { x: 15.4, w: 1.6 },
    { x: 18.4, w: 1 },
    { x: 20.8, w: 2.4 },
    { x: 24.4, w: 1 },
    { x: 26.6, w: 1.6 },
  ]
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {bars.map((bar) => (
        <rect key={bar.x} x={bar.x} y="5" width={bar.w} height="22" fill="currentColor" rx="0.3" />
      ))}
    </svg>
  )
}
