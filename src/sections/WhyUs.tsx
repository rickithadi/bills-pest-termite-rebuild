import { Users, ClipboardCheck, MessageCircle, Shield, Leaf, Clock } from 'lucide-react'

const points = [
  { Icon: Users, title: 'Family-Owned & Local', body: "Bill's has served Arizona since 1992 and combines three generations of pest-control experience with local customer service." },
  { Icon: ClipboardCheck, title: 'Property-Specific Evaluations', body: 'Recommendations consider the pest problem, available inspection evidence and conditions that may contribute to pest activity.' },
  { Icon: MessageCircle, title: 'Clear Service Recommendations', body: 'Our team explains available treatment options, preparation requirements and applicable service or warranty terms before work begins.' },
  { Icon: Shield, title: 'Licensed & Insured', body: 'All technicians hold Arizona pest control licenses and complete ongoing training. AZ License #5468.' },
  { Icon: Leaf, title: 'Eco-Friendly Options', body: 'EPA-registered, environmentally responsible treatment plans that protect your family, pets and the surrounding ecosystem.' },
  { Icon: Clock, title: 'Fast Response', body: 'Same-day service available when you call before noon, plus a 24/7 text line for whenever you need to reach us.' },
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

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-0.5 h-6 w-6 shrink-0" style={{ color: 'var(--cta)' }} aria-hidden="true" />
              <div>
                <h3 className="font-[var(--display)] text-base font-bold" style={{ color: 'var(--fg)' }}>{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
