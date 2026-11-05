import { MapPin, Phone } from 'lucide-react'
import { locations } from '../lib/data'

export default function Locations() {
  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Serving Greater Phoenix</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            Two Arizona Locations. One Local Team.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-xl border p-7" style={{ borderColor: 'var(--border)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>{loc.label}</p>
              <h3 className="mt-1 font-[var(--display)] text-xl font-bold" style={{ color: 'var(--fg)' }}>{loc.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                {loc.address}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{loc.serves}</p>
              <a href={`tel:${loc.tel}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cta)' }}>
                <Phone className="h-4 w-4" aria-hidden="true" /> {loc.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
