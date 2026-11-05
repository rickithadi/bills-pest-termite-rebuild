import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { plans } from '../lib/data'

export default function Pricing() {
  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Affordable Protection For Arizona Homes</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            Pest &amp; Termite Protection Options
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            From affordable ongoing pest control to comprehensive termite treatments and monthly termite protection, explore the program that best fits your property.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl border-2 p-8"
              style={{
                borderColor: p.featured ? 'var(--cta)' : 'var(--border)',
                background: 'var(--bg)',
                boxShadow: p.featured ? '0 16px 40px rgba(224,42,32,0.12)' : 'none',
              }}
            >
              {p.featured && (
                <span className="mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white" style={{ background: 'var(--cta)' }}>
                  MOST COMPREHENSIVE
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>{p.eyebrow}</p>
              <h3 className="mt-2 font-[var(--display)] text-xl font-bold leading-snug" style={{ color: 'var(--fg)' }}>{p.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-[var(--display)] text-4xl font-extrabold" style={{ color: 'var(--fg)' }}>{p.price}</span>
                <span className="text-sm" style={{ color: 'var(--fg-2)' }}>{p.priceNote}</span>
              </div>
              <p className="mt-1 text-xs" style={{ color: 'var(--fg-2)' }}>{p.feeNote}</p>

              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{p.description}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                to={p.href}
                className="mt-7 rounded-md px-5 py-3 text-center text-sm font-bold tracking-wide transition-colors"
                style={
                  p.featured
                    ? { background: 'var(--cta)', color: '#fff' }
                    : { border: '2px solid var(--fg)', color: 'var(--fg)' }
                }
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed" style={{ color: 'var(--fg-2)' }}>
          The $40 monthly general pest-control program requires a 12-month agreement and initial treatment charge. The $75 monthly termite program also requires an initial treatment charge. Pricing, eligibility, warranty terms and availability vary by program and property.
        </p>
      </div>
    </section>
  )
}
