type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.6 20c.6-3.9 3.7-6.2 7.4-6.2s6.8 2.3 7.4 6.2" />
    </svg>
  )
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="4.4" y="10.2" width="15.2" height="10.4" rx="2.2" />
      <path d="M8 10.2V7.6a4 4 0 1 1 8 0v2.6" />
      <circle cx="12" cy="15.4" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M2.4 12S6 5.6 12 5.6 21.6 12 21.6 12 18 18.4 12 18.4 2.4 12 2.4 12" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  )
}

export function EyeOffIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M9.6 6c.8-.2 1.6-.4 2.4-.4 6 0 9.6 6.4 9.6 6.4a17 17 0 0 1-3.2 4" />
      <path d="M6.3 8A17 17 0 0 0 2.4 12S6 18.4 12 18.4c1.5 0 2.8-.4 4-1" />
      <path d="M10 10a2.8 2.8 0 0 0 4 4" />
      <path d="m3.6 3.6 16.8 16.8" />
    </svg>
  )
}

/** Plant / facility marker used by the plant selector. */
export function PlantIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M2.8 20.4h18.4" />
      <path d="M4.2 20.4V9.6l7.8-4.4 7.8 4.4v10.8" />
      <path d="M8.4 20.4v-4.6h7.2v4.6" />
      <path d="M8.6 11.4h2.2M13.2 11.4h2.2" />
    </svg>
  )
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m5.6 9.2 6.4 6 6.4-6" />
    </svg>
  )
}

export function LoginArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M13.6 3.6H18a2.4 2.4 0 0 1 2.4 2.4v12a2.4 2.4 0 0 1-2.4 2.4h-4.4" />
      <path d="M9.6 16.4 14 12 9.6 7.6" />
      <path d="M14 12H3.6" />
    </svg>
  )
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2.8 20 5.8v5.9c0 4.5-3.2 8.5-8 9.5-4.8-1-8-5-8-9.5V5.8z" />
      <path d="m8.8 11.9 2.3 2.3 4.1-4.4" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2.2" />
    </svg>
  )
}

/** Connected nodes glyph for "Connected Operations". */
export function NetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="5" cy="5" r="2.4" />
      <circle cx="19" cy="5" r="2.4" />
      <circle cx="5" cy="19" r="2.4" />
      <circle cx="19" cy="19" r="2.4" />
      <path d="m6.9 6.7 10.2 10.6M17.1 6.7 6.9 17.3" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m5 12.6 4.6 4.6L19 6.8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AlertIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5.2M12 16.4h.01" />
    </svg>
  )
}
