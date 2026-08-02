import type { SVGProps } from 'react'
import {
  BarcodeIcon,
  ChartIcon,
  RobotArmIcon,
  ShieldCheckIcon,
} from './Icons'
import './HeroPanel.css'

type Capability = {
  title: string
  actions: string[]
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Production Management',
    actions: ['Plan', 'Execute', 'Monitor'],
    Icon: RobotArmIcon,
  },
  {
    title: 'Quality Management',
    actions: ['Assure', 'Control', 'Improve'],
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Performance Dashboards',
    actions: ['Insights', 'Analytics', 'KPI'],
    Icon: ChartIcon,
  },
  {
    title: 'Traceability & Reporting',
    actions: ['Track', 'Trace', 'Report'],
    Icon: BarcodeIcon,
  },
]

const PROMISES = [
  'Real-time Visibility',
  'Integrated Operations',
  'Quality Assured',
]

export function HeroPanel() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <h1 className="hero__headline">
          Driving Tomorrow.
          <br />
          Building <em className="hero__accent">Excellence</em> Today.
        </h1>
        <p className="hero__subline">Smart Manufacturing. Seamless Execution.</p>
        <ul className="hero__promises">
          {PROMISES.map((promise) => (
            <li key={promise}>{promise}</li>
          ))}
        </ul>
      </div>

      <ul className="hero__cards">
        {CAPABILITIES.map(({ title, actions, Icon }) => (
          <li className="capability" key={title}>
            <Icon className="capability__icon" />
            <h2 className="capability__title">{title}</h2>
            <span className="capability__rule" aria-hidden="true" />
            <p className="capability__actions">
              {actions.map((action, index) => (
                <span key={action}>
                  {index > 0 && <i aria-hidden="true">|</i>}
                  {action}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
