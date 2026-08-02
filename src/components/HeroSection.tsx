import { FeatureCard } from './FeatureCard'
import { FEATURES } from '../data/features'

const PROMISES = ['Real-time Visibility', 'Integrated Operations', 'Quality Assured']

export function HeroSection() {
  return (
    <section className="flex min-w-0 flex-1 flex-col pt-24 pr-4 pb-6 pl-8 sm:pt-28 sm:pl-10 lg:pt-32 lg:pl-14">
      <div className="max-w-[36rem]">
        <h1 className="font-sans text-[30px] leading-[1.16] font-extrabold tracking-[-0.02em] text-white drop-shadow-[0_3px_18px_rgba(2,8,23,0.85)] sm:text-[36px] lg:text-[42px]">
          Driving Tomorrow.
          <br />
          Building <span className="text-jsw-red-bright">Excellence</span> Today.
        </h1>

        <p className="mt-4 text-[13px] font-medium tracking-[0.01em] text-slate-200/90 drop-shadow-[0_2px_10px_rgba(2,8,23,0.9)] sm:text-[14px]">
          Smart Manufacturing. Seamless Execution.
        </p>

        <p className="mt-2 flex flex-wrap items-center gap-x-2 text-[12px] font-semibold tracking-[0.01em] text-sky-100/85 drop-shadow-[0_2px_10px_rgba(2,8,23,0.9)] sm:text-[13px]">
          {PROMISES.map((promise, index) => (
            <span key={promise} className="flex items-center gap-x-2">
              {index > 0 && <span className="text-slate-400/70">|</span>}
              {promise}
            </span>
          ))}
        </p>
      </div>

      <div className="mt-10 grid max-w-[38rem] grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-auto">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}
