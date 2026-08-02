import { JswLogo } from './brand/JswLogo'

/** White angled plate anchored to the top-left corner holding the corporate logo. */
export function BrandBanner() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 z-20">
      <div className="clip-banner bg-white/97 py-4 pr-24 pl-8 shadow-[0_10px_30px_-12px_rgba(3,10,28,0.7)] sm:py-5 sm:pr-28 sm:pl-10">
        <JswLogo className="h-9 w-auto sm:h-11" />
      </div>
    </div>
  )
}
