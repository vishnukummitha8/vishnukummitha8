type JswLogoProps = {
  /** Colour treatment: `dark` renders navy wordmark for light surfaces. */
  variant?: 'dark' | 'light'
  className?: string
  title?: string
}

/**
 * JSW Motors lockup: red swoosh above a heavy italic "JSW" wordmark,
 * followed by "Motors" in the corporate blue.
 */
export function JswLogo({ variant = 'dark', className, title = 'JSW Motors' }: JswLogoProps) {
  const wordmark = variant === 'dark' ? 'var(--color-jsw-blue)' : '#ffffff'

  return (
    <svg
      viewBox="0 0 322 96"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>

      {/* Red swoosh */}
      <path
        d="M16 38 C52 10 104 -4 160 2 C108 10 56 24 4 52 Z"
        fill="var(--color-jsw-red)"
      />
      <path
        d="M6 56 C34 40 62 30 92 24 C66 34 40 46 16 60 Z"
        fill="var(--color-jsw-red)"
        opacity="0.9"
      />

      {/* JSW wordmark */}
      <g transform="skewX(-11)">
        <text
          x="24"
          y="88"
          fontFamily="var(--font-display)"
          fontSize="62"
          letterSpacing="-1"
          fill={wordmark}
        >
          JSW
        </text>
      </g>

      {/* Motors */}
      <text
        x="172"
        y="86"
        fontFamily="var(--font-sans)"
        fontSize="46"
        fontWeight="600"
        letterSpacing="-0.5"
        fill={wordmark}
      >
        Motors
      </text>
    </svg>
  )
}
