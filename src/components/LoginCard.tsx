import { useEffect, useId, useState, type FormEvent } from 'react'
import { JswLogo } from './brand/JswLogo'
import { CarDivider } from './brand/CarDivider'
import { SkylineArt } from './brand/SkylineArt'
import {
  AlertIcon,
  CheckIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  LoginArrowIcon,
  PlantIcon,
  UserIcon,
} from './icons/UiIcons'
import { PLANTS } from '../data/plants'

const REMEMBERED_USER_KEY = 'jsw-mes.remembered-user'

const fieldShell =
  'flex h-11 items-center gap-2.5 rounded-lg border border-field-border bg-field px-3 transition-colors focus-within:border-jsw-blue-light focus-within:bg-white focus-within:ring-2 focus-within:ring-jsw-blue-light/20'

const fieldInput =
  'min-w-0 flex-1 bg-transparent text-[13px] font-medium text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400'

export function LoginCard() {
  const usernameId = useId()
  const passwordId = useId()
  const plantId = useId()
  const rememberId = useId()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [plant, setPlant] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(REMEMBERED_USER_KEY)
    if (saved) {
      setUsername(saved)
      setRemember(true)
    }
  }, [])

  /** Any edit dismisses the previous validation message. */
  function edit<T>(apply: (value: T) => void) {
    return (value: T) => {
      apply(value)
      setError(null)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    if (!username.trim() || !password) {
      setError('Enter your username and password to continue.')
      return
    }
    if (!plant) {
      setError('Select a plant to sign in to.')
      return
    }

    setError(null)
    setIsSubmitting(true)

    if (remember) localStorage.setItem(REMEMBERED_USER_KEY, username.trim())
    else localStorage.removeItem(REMEMBERED_USER_KEY)

    // Placeholder for the MES authentication call.
    window.setTimeout(() => setIsSubmitting(false), 1200)
  }

  return (
    <aside className="flex w-full shrink-0 items-center justify-center px-6 pt-2 pb-8 lg:w-[26.5rem] lg:px-8 lg:py-4">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex h-full max-h-[40rem] w-full max-w-[22.5rem] flex-col overflow-hidden rounded-xl bg-white shadow-[0_28px_70px_-20px_rgba(2,8,23,0.85)] ring-1 ring-white/50"
      >
        <div className="flex flex-1 flex-col px-7 pt-6 pb-4">
          {/* Identity */}
          <JswLogo className="mx-auto h-10 w-auto" />
          <p className="mt-1.5 text-center text-[13px] font-semibold tracking-[0.01em] text-jsw-red">
            Better Everyday
          </p>

          <CarDivider className="mt-4" />

          <h1 className="mt-3 text-center font-display text-[54px] leading-[0.9] tracking-[-0.02em] text-jsw-navy">
            MES
          </h1>
          <p className="mt-2 text-center text-[10px] font-semibold tracking-[0.13em] text-slate-500 uppercase">
            Manufacturing Execution System
          </p>

          {/* Credentials */}
          <div className="mt-6 space-y-3">
            <div>
              <label htmlFor={usernameId} className="sr-only">
                Username
              </label>
              <div className={fieldShell}>
                <UserIcon className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                <input
                  id={usernameId}
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => edit(setUsername)(event.target.value)}
                  className={fieldInput}
                />
              </div>
            </div>

            <div>
              <label htmlFor={passwordId} className="sr-only">
                Password
              </label>
              <div className={fieldShell}>
                <LockIcon className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                <input
                  id={passwordId}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => edit(setPassword)(event.target.value)}
                  className={fieldInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  className="shrink-0 rounded text-slate-400 transition-colors hover:text-jsw-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jsw-blue-light"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-[18px] w-[18px]" />
                  ) : (
                    <EyeIcon className="h-[18px] w-[18px]" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor={plantId} className="sr-only">
                Select Plant
              </label>
              <div className={`${fieldShell} relative`}>
                <PlantIcon className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                <select
                  id={plantId}
                  name="plant"
                  value={plant}
                  onChange={(event) => edit(setPlant)(event.target.value)}
                  className={`${fieldInput} cursor-pointer appearance-none pr-6 ${
                    plant ? 'text-slate-800' : 'text-slate-400'
                  }`}
                >
                  <option value="" disabled>
                    Select Plant
                  </option>
                  {PLANTS.map((option) => (
                    <option key={option.code} value={option.code} className="text-slate-800">
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 h-[18px] w-[18px] text-slate-400" />
              </div>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-jsw-red"
            >
              <AlertIcon className="h-3.5 w-3.5 shrink-0" />
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-jsw-blue text-[14px] font-bold tracking-[0.09em] text-white uppercase shadow-[0_10px_22px_-10px_rgba(22,53,127,0.95)] transition-colors hover:bg-jsw-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jsw-blue-light disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                Signing in
              </>
            ) : (
              <>
                <LoginArrowIcon className="h-[18px] w-[18px]" />
                Login
              </>
            )}
          </button>

          {/* Helpers */}
          <div className="mt-3.5 flex items-center justify-between">
            <label
              htmlFor={rememberId}
              className="flex cursor-pointer items-center gap-2 text-[11.5px] font-medium text-slate-600 select-none"
            >
              <span className="relative flex h-[15px] w-[15px] shrink-0">
                <input
                  id={rememberId}
                  name="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer appearance-none opacity-0"
                />
                <span
                  className={`flex h-full w-full items-center justify-center rounded-[3px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-jsw-blue-light/50 peer-focus-visible:ring-offset-1 ${
                    remember ? 'border-jsw-blue bg-jsw-blue' : 'border-slate-300 bg-white'
                  }`}
                >
                  <CheckIcon
                    className={`h-2.5 w-2.5 text-white transition-opacity ${remember ? 'opacity-100' : 'opacity-0'}`}
                  />
                </span>
              </span>
              Remember me
            </label>

            <a
              href="#forgot-password"
              className="text-[11.5px] font-semibold text-jsw-blue-light transition-colors hover:text-jsw-blue hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Vision strip */}
        <div className="relative overflow-hidden bg-linear-to-b from-jsw-blue-light to-jsw-blue px-5 pt-1.5 pb-2.5">
          <SkylineArt className="h-[68px] w-full text-white/45" />
          <p className="mt-1 text-center text-[11.5px] font-semibold tracking-[0.01em] text-white">
            Innovate. Integrate. <span className="text-jsw-red-bright">Inspire the Future.</span>
          </p>
        </div>
      </form>
    </aside>
  )
}
