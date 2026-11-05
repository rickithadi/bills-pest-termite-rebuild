import { Shield, Leaf, Clock } from 'lucide-react'

const primary = [
  {
    num: '01',
    title: 'Family-Owned & Local',
    body: "Bill's has served Arizona since 1992 and combines three generations of pest-control experience with local customer service. Not a franchise, not a call center — a team that knows the Valley.",
  },
  {
    num: '02',
    title: 'Property-Specific Evaluations',
    body: 'Recommendations consider the pest problem, available inspection evidence and conditions that may contribute to pest activity — never a one-size-fits-all spray.',
  },
  {
    num: '03',
    title: 'Clear Service Recommendations',
    body: 'Our team explains available treatment options, preparation requirements and applicable service or warranty terms before work begins. No surprises on the invoice.',
  },
]

const credentials = [
  { Icon: Shield, label: 'Licensed & Insured', detail: 'AZ License #5468' },
  { Icon: Leaf, label: 'Eco-Friendly Options', detail: 'EPA-registered products' },
  { Icon: Clock, label: 'Fast Response', detail: 'Same-day when you call before noon' },
]

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>The Bill&rsquo;s Difference</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            Why Phoenix Homeowners Choose Bill&rsquo;s
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            Our goal is to provide straightforward answers, dependable service and pest management recommendations appropriate for your property.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
          {primary.map((p) => (
            <div key={p.num}>
              <span className="font-[var(--display)] text-5xl font-extrabold" style={{ color: 'var(--accent-light)' }}>{p.num}</span>
              <h3 className="mt-3 font-[var(--display)] text-xl font-bold" style={{ color: 'var(--fg)' }}>{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-xl border p-7 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}>
          {credentials.map(({ Icon, label, detail }, i) => (
            <div key={label} className="flex items-center gap-3" style={{ borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '1.5rem' : 0 }}>
              <Icon className="h-6 w-6 shrink-0" style={{ color: 'var(--cta)' }} aria-hidden="true" />
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{label}</p>
                <p className="text-xs" style={{ color: 'var(--fg-2)' }}>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
