type JswLogoProps = {
  className?: string
  /** Rendered for assistive tech; the visual mark stays purely decorative. */
  title?: string
}

/**
 * JSW Motors wordmark: red sweep above a heavy italic "JSW" lockup
 * followed by "Motors" set on the same baseline.
 */
export function JswLogo({ className, title = 'JSW Motors' }: JswLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 92"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="var(--jsw-red)">
        <path d="M20 41C58 22 104 8 163 1c-13 12-31 21-53 29C88 38 62 45 26 51Z" />
        <path d="M2 55c14-7 30-13 47-18-14 10-27 16-40 22Z" />
      </g>
      <g
        fill="var(--jsw-blue)"
        fontFamily="'Inter Variable', 'Inter', 'Segoe UI', Arial, sans-serif"
      >
        <text
          x="0"
          y="0"
          fontSize="72"
          fontWeight="900"
          letterSpacing="-3"
          transform="translate(10 86) skewX(-10)"
        >
          JSW
        </text>
        <text x="164" y="86" fontSize="52" fontWeight="600" letterSpacing="-1.5">
          Motors
        </text>
      </g>
    </svg>
  )
}
