import { ClockIcon, NetworkIcon, ShieldIcon } from './Icons'
import './StatusBar.css'

const ASSURANCES = [
  { label: 'Secure Access', Icon: ShieldIcon },
  { label: 'Real-time Data', Icon: ClockIcon },
  { label: 'Connected Operations', Icon: NetworkIcon },
]

export function StatusBar() {
  return (
    <footer className="statusbar">
      <p className="statusbar__motto">
        <span className="statusbar__one">One</span> Plant.{' '}
        <span className="statusbar__one">One</span> Process.{' '}
        <span className="statusbar__one">One</span> System.
      </p>

      <span className="statusbar__rule" aria-hidden="true" />

      <ul className="statusbar__assurances">
        {ASSURANCES.map(({ label, Icon }) => (
          <li key={label}>
            <Icon className="statusbar__icon" />
            {label}
          </li>
        ))}
      </ul>

      <span className="statusbar__rule statusbar__rule--tail" aria-hidden="true" />

      <p className="statusbar__legal">
        © 2025 JSW Motors Limited. All Rights Reserved.
      </p>
    </footer>
  )
}
