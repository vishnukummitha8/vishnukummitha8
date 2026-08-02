import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { JswLogo } from './JswLogo'
import { SkylineArt } from './SkylineArt'
import {
  AlertIcon,
  CarGlyphIcon,
  CheckIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  LoginArrowIcon,
  PlantIcon,
  UserIcon,
} from './Icons'
import { PLANTS } from '../data/plants'
import './LoginCard.css'

const REMEMBERED_USER_KEY = 'jsw.mes.remembered-user'
const REMEMBERED_PLANT_KEY = 'jsw.mes.remembered-plant'

type FieldErrors = {
  username?: string
  password?: string
  plant?: string
}

type Feedback = {
  tone: 'error' | 'success' | 'info'
  message: string
}

export function LoginCard() {
  const usernameId = useId()
  const passwordId = useId()
  const plantId = useId()

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const plantRef = useRef<HTMLSelectElement>(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [plant, setPlant] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [capsLockOn, setCapsLockOn] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem(REMEMBERED_USER_KEY)
    const savedPlant = localStorage.getItem(REMEMBERED_PLANT_KEY)
    if (savedUser) {
      setUsername(savedUser)
      setRemember(true)
    }
    if (savedPlant) setPlant(savedPlant)
  }, [])

  const validate = (): FieldErrors => {
    const next: FieldErrors = {}
    if (!username.trim()) next.username = 'Employee ID or username is required.'
    else if (username.trim().length < 3)
      next.username = 'Enter at least 3 characters.'
    if (!password) next.password = 'Password is required.'
    else if (password.length < 6)
      next.password = 'Password must be at least 6 characters.'
    if (!plant) next.plant = 'Select the plant you are logging in to.'
    return next
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFeedback({
        tone: 'error',
        message: 'Please complete the highlighted fields to continue.',
      })
      if (nextErrors.username) usernameRef.current?.focus()
      else if (nextErrors.password) passwordRef.current?.focus()
      else plantRef.current?.focus()
      return
    }

    setFeedback(null)
    setIsSubmitting(true)

    if (remember) {
      localStorage.setItem(REMEMBERED_USER_KEY, username.trim())
      localStorage.setItem(REMEMBERED_PLANT_KEY, plant)
    } else {
      localStorage.removeItem(REMEMBERED_USER_KEY)
      localStorage.removeItem(REMEMBERED_PLANT_KEY)
    }

    // Stands in for the authentication call until the MES gateway is wired up.
    await new Promise((resolve) => setTimeout(resolve, 1400))

    const selected = PLANTS.find((entry) => entry.code === plant)
    setIsSubmitting(false)
    setFeedback({
      tone: 'success',
      message: `Authenticated. Loading the MES workspace for ${selected?.name ?? plant}.`,
    })
  }

  const clearError = (field: keyof FieldErrors) =>
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })

  return (
    <form className="login" onSubmit={handleSubmit} noValidate>
      <div className="login__body">
        <header className="login__brand">
          <JswLogo className="login__logo" />
          <p className="login__tagline">Better Everyday</p>
        </header>

        <div className="login__divider" aria-hidden="true">
          <span className="login__divider-line" />
          <CarGlyphIcon className="login__divider-car" />
          <span className="login__divider-line" />
        </div>

        <div className="login__identity">
          <h2 className="login__mes">MES</h2>
          <p className="login__mes-expansion">Manufacturing Execution System</p>
        </div>

        <div className="login__fields">
          <div className="field">
            <label className="sr-only" htmlFor={usernameId}>
              Username
            </label>
            <div
              className={`field__control${errors.username ? ' field__control--invalid' : ''}`}
            >
              <UserIcon className="field__icon" />
              <input
                id={usernameId}
                ref={usernameRef}
                className="field__input"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
                spellCheck={false}
                value={username}
                aria-invalid={Boolean(errors.username)}
                aria-describedby={errors.username ? `${usernameId}-error` : undefined}
                onChange={(event) => {
                  setUsername(event.target.value)
                  clearError('username')
                }}
              />
            </div>
            {errors.username && (
              <p className="field__error" id={`${usernameId}-error`}>
                {errors.username}
              </p>
            )}
          </div>

          <div className="field">
            <label className="sr-only" htmlFor={passwordId}>
              Password
            </label>
            <div
              className={`field__control${errors.password ? ' field__control--invalid' : ''}`}
            >
              <LockIcon className="field__icon" />
              <input
                id={passwordId}
                ref={passwordRef}
                className="field__input"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? `${passwordId}-error` : undefined}
                onChange={(event) => {
                  setPassword(event.target.value)
                  clearError('password')
                }}
                onKeyUp={(event) =>
                  setCapsLockOn(event.getModifierState?.('CapsLock') ?? false)
                }
                onBlur={() => setCapsLockOn(false)}
              />
              <button
                type="button"
                className="field__toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.password && (
              <p className="field__error" id={`${passwordId}-error`}>
                {errors.password}
              </p>
            )}
            {capsLockOn && !errors.password && (
              <p className="field__hint">Caps Lock is on.</p>
            )}
          </div>

          <div className="field">
            <label className="sr-only" htmlFor={plantId}>
              Select Plant
            </label>
            <div
              className={`field__control${errors.plant ? ' field__control--invalid' : ''}`}
            >
              <PlantIcon className="field__icon" />
              <select
                id={plantId}
                ref={plantRef}
                className={`field__input field__select${plant ? '' : ' field__select--empty'}`}
                name="plant"
                value={plant}
                aria-invalid={Boolean(errors.plant)}
                aria-describedby={errors.plant ? `${plantId}-error` : undefined}
                onChange={(event) => {
                  setPlant(event.target.value)
                  clearError('plant')
                }}
              >
                <option value="" disabled>
                  Select Plant
                </option>
                {PLANTS.map((entry) => (
                  <option key={entry.code} value={entry.code}>
                    {entry.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="field__chevron" />
            </div>
            {errors.plant && (
              <p className="field__error" id={`${plantId}-error`}>
                {errors.plant}
              </p>
            )}
          </div>

          <button className="login__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="login__spinner" aria-hidden="true" />
                SIGNING IN
              </>
            ) : (
              <>
                <LoginArrowIcon className="login__submit-icon" />
                LOGIN
              </>
            )}
          </button>

          <div className="login__meta">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              <span className="checkbox__box" aria-hidden="true">
                <CheckIcon className="checkbox__tick" />
              </span>
              Remember me
            </label>
            <button
              type="button"
              className="login__link"
              onClick={() =>
                setFeedback({
                  tone: 'info',
                  message:
                    'A reset link will be sent by the plant IT helpdesk to your registered email.',
                })
              }
            >
              Forgot Password?
            </button>
          </div>

          <p
            className={`login__feedback${feedback ? ` login__feedback--${feedback.tone}` : ''}`}
            role="status"
            aria-live="polite"
          >
            {feedback && (
              <>
                {feedback.tone === 'success' ? (
                  <CheckIcon className="login__feedback-icon" />
                ) : (
                  <AlertIcon className="login__feedback-icon" />
                )}
                {feedback.message}
              </>
            )}
          </p>
        </div>
      </div>

      <footer className="login__foot">
        <p className="login__promise">
          Innovate. Integrate. <span>Inspire the Future.</span>
        </p>
        <SkylineArt className="login__skyline" />
      </footer>
    </form>
  )
}
