import { useState } from 'react'
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Factory,
  ChevronDown,
  ShieldCheck,
  Clock,
  Network,
  BarChart3,
  ScanBarcode,
  Settings2,
} from 'lucide-react'
import './LoginPage.css'

const PLANTS = [
  'Plant 1 - Pune',
  'Plant 2 - Chennai',
  'Plant 3 - Vijayanagar',
  'Plant 4 - Dolvi',
]

const FEATURE_CARDS = [
  {
    icon: Settings2,
    title: 'PRODUCTION MANAGEMENT',
    subtitle: 'Plan | Execute | Monitor',
  },
  {
    icon: ShieldCheck,
    title: 'QUALITY MANAGEMENT',
    subtitle: 'Assure | Control | Improve',
  },
  {
    icon: BarChart3,
    title: 'PERFORMANCE DASHBOARDS',
    subtitle: 'Insights | Analytics | KPI',
  },
  {
    icon: ScanBarcode,
    title: 'TRACEABILITY & REPORTING',
    subtitle: 'Track | Trace | Report',
  },
]

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [plant, setPlant] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="login-page">
      <div className="background-layer">
        <img
          src="/assets/background.jpg"
          alt="Automotive manufacturing assembly line"
          className="background-image"
        />
        <div className="background-overlay" />
      </div>

      <div className="page-content">
        <div className="left-section">
          <header className="brand-header">
            <img
              src="/assets/jsw-logo-white.svg"
              alt="JSW Motors"
              className="brand-logo"
            />
            <h1 className="headline">
              <span>Driving Tomorrow.</span>
              <span>Building Excellence Today.</span>
            </h1>
            <p className="tagline">Smart Manufacturing. Seamless Execution.</p>
            <p className="features-line">
              Real-time Visibility | Integrated Operations | Quality Assured
            </p>
          </header>

          <div className="info-cards">
            {FEATURE_CARDS.map((card) => (
              <div key={card.title} className="info-card">
                <div className="info-card-icon">
                  <card.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="info-card-title">{card.title}</h3>
                <p className="info-card-subtitle">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-section">
          <div className="login-card">
            <div className="login-card-top">
              <div className="login-brand">
                <img
                  src="/assets/jsw-logo.svg"
                  alt="JSW Motors"
                  className="login-logo"
                />
                <p className="login-tagline">Better Everyday</p>
              </div>

              <div className="car-divider">
                <div className="divider-line" />
                <svg
                  className="divider-car"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 16 L10 10 C12 8 16 7 24 7 C32 7 36 8 38 10 L42 16"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="14" cy="16" r="3" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
                  <circle cx="34" cy="16" r="3" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
                  <line x1="6" y1="16" x2="42" y2="16" stroke="#9CA3AF" strokeWidth="1.5" />
                </svg>
                <div className="divider-line" />
              </div>

              <h2 className="mes-title">MES</h2>
              <p className="mes-subtitle">MANUFACTURING EXECUTION SYSTEM</p>

              <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="input-group">
                  <Lock className="input-icon" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="input-group">
                  <Factory className="input-icon" size={18} />
                  <select
                    value={plant}
                    onChange={(e) => setPlant(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="" disabled>
                      Select Plant
                    </option>
                    {PLANTS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="select-chevron" size={18} />
                </div>

                <button type="submit" className="login-button">
                  <span className="login-arrow">→</span> LOGIN
                </button>

                <div className="login-options">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>

            <div className="login-card-bottom">
              <img
                src="/assets/car-illustration.svg"
                alt=""
                className="bottom-illustration"
                aria-hidden="true"
              />
              <p className="bottom-slogan">
                Innovate. Integrate.{' '}
                <span className="slogan-highlight">Inspire the Future.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="footer-left">
          <span className="footer-one">One</span> Plant.{' '}
          <span className="footer-one">One</span> Process.{' '}
          <span className="footer-one">One</span> System.
        </div>

        <div className="footer-center">
          <div className="footer-feature">
            <ShieldCheck size={16} />
            <span>Secure Access</span>
          </div>
          <div className="footer-feature">
            <Clock size={16} />
            <span>Real-time Data</span>
          </div>
          <div className="footer-feature">
            <Network size={16} />
            <span>Connected Operations</span>
          </div>
        </div>

        <div className="footer-right">
          © 2025 JSW Motors Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
