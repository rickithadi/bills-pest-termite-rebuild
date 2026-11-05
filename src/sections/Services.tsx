import { Link } from 'react-router-dom'
import { Bug, Home, Rat, Skull, BedDouble, Bird, Building2, Leaf, ArrowRight } from 'lucide-react'
import { services, type Service } from '../lib/data'

const iconMap: Record<Service['icon'], typeof Bug> = {
  bug: Bug,
  home: Home,
  rat: Rat,
  skull: Skull,
  bed: BedDouble,
  bird: Bird,
  building: Building2,
  leaf: Leaf,
}

export default function Services({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 6) : services

  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Our Pest Control Services</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            What Pest Problem Can We Help You Solve?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            Choose a service below to learn about common pest problems, inspection recommendations and available control options for Phoenix-area homes and businesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div
                key={s.name}
                className="group rounded-xl border p-6 transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <Icon className="h-8 w-8" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>{s.blurb}</p>
                <h3 className="mt-1 font-[var(--display)] text-xl font-bold transition-colors" style={{ color: 'var(--fg)' }}>{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{s.description}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--cta)' }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            )
          })}
        </div>

        {compact && (
          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border-2 px-6 py-3 text-sm font-bold" style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}>
              View All Pest Control Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
