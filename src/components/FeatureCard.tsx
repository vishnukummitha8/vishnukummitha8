import type { Feature } from '../data/features'

/** One of the four capability pillars shown along the bottom of the hero. */
export function FeatureCard({ feature }: { feature: Feature }) {
  const { Icon, title, tags } = feature

  return (
    <article className="group flex flex-col items-center rounded-md border border-white/12 bg-slate-950/55 px-3 py-4 text-center backdrop-blur-[3px] transition duration-300 hover:-translate-y-0.5 hover:border-jsw-red/60 hover:bg-slate-950/70">
      <Icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-105" />

      <h3 className="mt-3 text-[11px] leading-[1.35] font-bold tracking-[0.06em] text-white uppercase">
        {title[0]}
        <br />
        {title[1]}
      </h3>

      <span className="mt-2 block h-[2px] w-7 rounded-full bg-jsw-red" />

      <p className="mt-2 text-[9.5px] leading-none font-medium tracking-[0.02em] text-slate-300/85">
        {tags.map((tag, index) => (
          <span key={tag}>
            {index > 0 && <span className="mx-1 text-slate-500">|</span>}
            {tag}
          </span>
        ))}
      </p>
    </article>
  )
}
