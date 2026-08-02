/**
 * Faint line-art strip used inside the navy foot of the login card:
 * wind turbines and a plant skyline on the left, a sedan silhouette in the
 * middle and greenery on the right.
 */
export function SkylineArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 118"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Ground */}
        <path d="M0 108h400" />

        {/* Wind turbines */}
        <g>
          <path d="M26 108V60" />
          <path d="M26 58 12 42M26 58l17-12M26 58l4 20" />
          <circle cx="26" cy="58" r="2.2" />
        </g>
        <g opacity="0.75">
          <path d="M56 108V72" />
          <path d="M56 70 46 58M56 70l12-9M56 70l3 15" />
          <circle cx="56" cy="70" r="1.7" />
        </g>

        {/* Plant skyline, left */}
        <path d="M74 108V84h18v24" />
        <path d="M78 88h4M86 88h3M78 95h4M86 95h3M78 102h4M86 102h3" />
        <path d="M92 108V76h14l6-6 6 6v32" />
        <path d="M96 82h5M96 90h5M96 98h5M108 82h6M108 90h6M108 98h6" />
        <path d="M118 108V88h12v20" />
        <path d="M122 93h4M122 100h4" />

        {/* Chimneys with vapour */}
        <path d="M136 108V70h6v38" />
        <path d="M139 66c4-3 1-7 4-9" opacity="0.6" />

        {/* Sedan, centre */}
        <g transform="translate(150 46)">
          <path d="M4 46c-2.6-3-2.6-8.4-.4-11.4 1.4-1.9 4-3 7.4-3.8l12.4-10c2.4-1.9 5.4-3 8.6-3h30.4c3.4 0 6.6 1.2 9.1 3.4l11.3 9.8c4 .8 7 2 8.6 3.8 2.4 2.9 2.6 8 .2 11.2" />
          <path d="M11 30.8h84.6" />
          <path d="M40.4 17.8v13" />
          <path d="M20 30.5l9.6-9.4c1.4-1.4 3.3-2.2 5.3-2.2h29.6c2.1 0 4.1.8 5.6 2.3l9.3 9.3" />
          <path d="M4 46h9.6M40 46h30M96.4 46H106" />
          <path d="M13.6 46a8.6 8.6 0 0 1 17.2 0M79.2 46a8.6 8.6 0 0 1 17.2 0" />
          <circle cx="22.2" cy="46" r="3.4" />
          <circle cx="87.8" cy="46" r="3.4" />
          <path d="M6 37.6h7.4M92.6 37.6H100" />
        </g>

        {/* Charging point */}
        <path d="M272 108V84h9v24" />
        <path d="M276.5 89v6M274 92h5" />

        {/* Skyline, right */}
        <path d="M292 108V78h16v30" />
        <path d="M296 84h3M303 84h3M296 92h3M303 92h3M296 100h3M303 100h3" />
        <path d="M308 108V88h13v20" />
        <path d="M312 93h5M312 100h5" />

        {/* Trees */}
        <g>
          <path d="M338 108v-9" />
          <path d="M338 99c-7 0-10-4-10-8s3-8 10-8 10 4 10 8-3 8-10 8Z" />
        </g>
        <g opacity="0.8">
          <path d="M362 108v-7" />
          <path d="M362 101c-5.4 0-8-3.2-8-6.4s2.6-6.4 8-6.4 8 3.2 8 6.4-2.6 6.4-8 6.4Z" />
        </g>
        <g opacity="0.65">
          <path d="M384 108v-6" />
          <path d="M384 102c-4.4 0-6.6-2.6-6.6-5.2s2.2-5.2 6.6-5.2 6.6 2.6 6.6 5.2-2.2 5.2-6.6 5.2Z" />
        </g>
      </g>
    </svg>
  )
}
