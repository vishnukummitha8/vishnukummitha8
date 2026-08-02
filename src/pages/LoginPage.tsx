import { BrandBanner } from '../components/BrandBanner'
import { HeroSection } from '../components/HeroSection'
import { LoginCard } from '../components/LoginCard'
import { StatusBar } from '../components/StatusBar'
import factoryBackground from '../assets/images/factory-bg.jpg'

export function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-jsw-ink">
      {/* Shop-floor backdrop */}
      <img
        src={factoryBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-jsw-navy-deep/88 via-jsw-navy-deep/45 to-jsw-navy-deep/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-jsw-ink/85 via-transparent to-jsw-ink/35"
      />

      <BrandBanner />

      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">
        <HeroSection />
        <LoginCard />
      </div>

      <StatusBar />
    </div>
  )
}
