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
      viewBox="0 0 372 100"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="var(--jsw-red)">
        <path d="M28 34C64 18 112 6 176 0c-13 10-31 18-54 24-27 7-57 8-94 10Z" />
        <path d="M2 44c11-6 24-11 38-15-9 8-20 13-31 18Z" />
      </g>
      <g
        fill="var(--jsw-blue)"
        fontFamily="'Inter Variable', 'Inter', 'Segoe UI', Arial, sans-serif"
      >
        <text
          x="0"
          y="0"
          fontSize="76"
          fontWeight="900"
          letterSpacing="-3.5"
          transform="translate(12 94) skewX(-11)"
        >
          JSW
        </text>
        <text x="188" y="94" fontSize="54" fontWeight="600" letterSpacing="-1.4">
          Motors
        </text>
      </g>
    </svg>
  )
}
