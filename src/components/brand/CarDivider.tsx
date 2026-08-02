/** Hairline rule interrupted by a small car silhouette, used above the MES title. */
export function CarDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-slate-300" />
      <svg
        viewBox="0 0 56 20"
        className="h-4 w-14 shrink-0 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 14h2.5M50.5 14H53" />
        <path d="M5.5 14.2c0-2 .7-3.4 2.6-4.1l4.6-1.7 4.4-3.1c1.2-.8 2.6-1.3 4.1-1.3h9.6c1.6 0 3.1.5 4.4 1.5l4.2 3.2 5.7 1.4c1.9.5 3 1.9 3 3.8v1.3H5.5z" />
        <path d="M17.6 8.6 21 5.4M31.2 4.1l1.4 4.6" />
        <circle cx="16" cy="15.4" r="3" fill="white" />
        <circle cx="40" cy="15.4" r="3" fill="white" />
      </svg>
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-slate-300" />
    </div>
  )
}
