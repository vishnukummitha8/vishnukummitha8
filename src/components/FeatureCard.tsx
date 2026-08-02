import type { Feature } from '../data/features'

/** One of the four capability pillars shown along the bottom of the hero. */
export function FeatureCard({ feature }: { feature: Feature }) {
  const { Icon, title, tags } = feature

  return (
    <article className="group flex flex-col items-center overflow-hidden rounded-md border border-white/12 bg-slate-950/55 px-2 py-3.5 text-center backdrop-blur-[3px] transition duration-300 hover:-translate-y-0.5 hover:border-jsw-red/60 hover:bg-slate-950/70">
      <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-105" />

      <h3 className="mt-2.5 text-[10.5px] leading-[1.32] font-bold tracking-[0.05em] text-white uppercase">
        {title[0]}
        <br />
        {title[1]}
      </h3>

      <span className="mt-1.5 block h-[2px] w-7 rounded-full bg-jsw-red" />

      <p className="mt-1.5 text-[8.5px] leading-none font-medium tracking-[0.01em] whitespace-nowrap text-slate-300/85">
        {tags.map((tag, index) => (
          <span key={tag}>
            {index > 0 && <span className="mx-[3px] text-slate-500">|</span>}
            {tag}
          </span>
        ))}
      </p>
    </article>
  )
}
