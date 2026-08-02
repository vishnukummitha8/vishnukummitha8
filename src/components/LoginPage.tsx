import { HeroPanel } from './HeroPanel'
import { JswLogo } from './JswLogo'
import { LoginCard } from './LoginCard'
import { StatusBar } from './StatusBar'
import './LoginPage.css'

export function LoginPage() {
  return (
    <div className="page">
      <div className="page__backdrop" aria-hidden="true" />

      <div className="page__brand">
        <JswLogo className="page__brand-logo" />
      </div>

      <div className="page__stage">
        <HeroPanel />
        <LoginCard />
      </div>

      <StatusBar />
    </div>
  )
}
