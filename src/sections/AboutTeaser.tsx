import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AboutTeaser() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Our Story</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            Built on Protection. Grown Through Opportunity.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            Bill&rsquo;s Pest &amp; Termite Control began in 1992 with one man, one truck and a determination to do things the right way. The early focus was termite inspection and treatment &mdash; a simple goal: effective service at a fair price, with confidence the problem was handled properly.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            But the company became more than a pest-control business. It became a place where people could learn a trade, build a career, support their families and create a better future.
          </p>
          <Link to="/about-us" className="mt-6 inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cta)' }}>
            Read Our Full Story <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
          <img
            src="https://i0.wp.com/billstermiteco.com/wp-content/uploads/Comprehensive-Phoenix-Pest-Control-Services.jpeg"
            alt="Bill's Pest & Termite Control technician treating a Phoenix-area front yard, branded company truck in the driveway"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
