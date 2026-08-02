/**
 * Line-art plate that fills the blue foot of the login card:
 * a connected-plant skyline with wind turbines flanking a car outline.
 */
export function SkylineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 118"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      preserveAspectRatio="xMidYEnd meet"
    >
      {/* Ground */}
      <path d="M0 101h360" strokeOpacity="0.55" />

      {/* Left industrial skyline */}
      <path d="M10 101V62h22v39M14 68h5M24 68h5M14 76h5M24 76h5M14 84h5M24 84h5" strokeOpacity="0.5" />
      <path d="M36 101V48h17v53M40 55h4M46 55h4M40 64h4M46 64h4M40 73h4M46 73h4M40 82h4M46 82h4" strokeOpacity="0.5" />
      <path d="M57 101V70h24v31M62 77h5M72 77h5M62 86h5M72 86h5" strokeOpacity="0.5" />
      <path d="M85 101V56h16v45M89 63h3M95 63h3M89 72h3M95 72h3M89 81h3M95 81h3" strokeOpacity="0.5" />
      {/* Plant shed with saw-tooth roof */}
      <path d="M104 101V84l7-7 7 7 7-7 7 7v17" strokeOpacity="0.45" />

      {/* Car */}
      <g strokeOpacity="0.95">
        <path d="M124 95c0-8 3-12 11-14l17-13c5-4 10-6 16-6h27c7 0 13 2 18 7l13 12c8 2 11 6 11 14" />
        <path d="M124 95h113" />
        <path d="M152 68h26v13h-40z" />
        <path d="M186 68h13c5 0 9 1 12 4l9 9h-34z" />
        <path d="M131 84h9M222 84h9" strokeOpacity="0.7" />
        <circle cx="151" cy="95" r="10" />
        <circle cx="151" cy="95" r="4" strokeOpacity="0.6" />
        <circle cx="211" cy="95" r="10" />
        <circle cx="211" cy="95" r="4" strokeOpacity="0.6" />
      </g>

      {/* Wind turbines */}
      <g strokeOpacity="0.5">
        <path d="M262 101V60M262 60l-16-10M262 60l16-9M262 60v-19" />
        <circle cx="262" cy="60" r="1.8" />
        <path d="M290 101V70M290 70l-11-7M290 70l11-6M290 70v-13" />
        <circle cx="290" cy="70" r="1.5" />
      </g>

      {/* Trees + right skyline */}
      <g strokeOpacity="0.5">
        <path d="M310 101V88M310 88l-6-7 6-9 6 9z" />
        <path d="M326 101V90M326 90l-5-6 5-8 5 8z" />
        <path d="M338 101V66h14v35M342 73h3M348 73h3M342 82h3M348 82h3" />
      </g>
    </svg>
  )
}
