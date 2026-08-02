import { ClockIcon, NetworkIcon, ShieldCheckIcon } from './icons/UiIcons'

const ASSURANCES = [
  { id: 'secure', label: 'Secure Access', Icon: ShieldCheckIcon },
  { id: 'realtime', label: 'Real-time Data', Icon: ClockIcon },
  { id: 'connected', label: 'Connected Operations', Icon: NetworkIcon },
]

const ONE_LINERS = ['Plant.', 'Process.', 'System.']

/** Full-width footer rail with the "One Plant. One Process. One System." promise. */
export function StatusBar() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-jsw-navy-deep/95 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-6 py-2.5 text-[11px] lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
          <p className="font-semibold text-white">
            {ONE_LINERS.map((word) => (
              <span key={word}>
                <span className="text-jsw-red-bright">One</span> {word}{' '}
              </span>
            ))}
          </p>

          {ASSURANCES.map(({ id, label, Icon }) => (
            <div key={id} className="flex items-center gap-x-5">
              <span aria-hidden="true" className="hidden h-3.5 w-px bg-white/20 sm:block" />
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Icon className="h-3.5 w-3.5 text-slate-400" />
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-medium text-slate-400">
          © {new Date().getFullYear()} JSW Motors Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
