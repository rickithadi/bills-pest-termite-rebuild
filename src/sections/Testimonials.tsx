import { Quote } from 'lucide-react'
import { testimonials } from '../lib/data'

export default function Testimonials({ compact = false }: { compact?: boolean }) {
  const list = compact ? testimonials.slice(0, 6) : testimonials

  return (
    <section id="reviews" className="py-20 sm:py-28" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'oklch(75% 0.03 90)' }}>Trusted By Arizona Customers</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--on-dark)' }}>
            See What Our Customers Are Saying
          </h2>
          <p className="mt-4 text-base" style={{ color: 'oklch(78% 0.02 235)' }}>
            4.9 stars across more than 8,000 verified reviews on Google, Yelp and Facebook.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name} className="rounded-xl p-6" style={{ background: 'oklch(27% 0.06 255)' }}>
              <Quote className="h-6 w-6" style={{ color: 'var(--cta)' }} aria-hidden="true" />
              <blockquote className="mt-3 text-sm leading-relaxed" style={{ color: 'oklch(92% 0.01 235)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold" style={{ color: 'var(--on-dark)' }}>
                {t.name}
                {t.context && <span className="font-normal" style={{ color: 'oklch(70% 0.02 235)' }}> &mdash; {t.context}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
