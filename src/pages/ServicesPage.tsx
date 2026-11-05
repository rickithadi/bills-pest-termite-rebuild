import { useEffect } from 'react'
import { Phone } from 'lucide-react'
import Services from '../sections/Services'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Pest Control Services Phoenix AZ | Bill's Pest & Termite Control"
  }, [])

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        <div className="absolute inset-0">
          <img
            src="https://i0.wp.com/billstermiteco.com/wp-content/uploads/Pest-Control-Company-Phoenix.jpg?w=1920&ssl=1"
            alt="Bill's Pest & Termite Control technician inspecting a Phoenix-area property"
            className="h-full w-full object-cover"
            style={{ opacity: 0.4, objectPosition: '70% 30%' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, oklch(17% 0.05 255 / 0.95) 0%, oklch(17% 0.05 255 / 0.75) 55%, oklch(17% 0.05 255 / 0.55) 100%)' }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'oklch(85% 0.03 90)' }}>
            Residential &middot; Commercial &middot; Family-Owned Arizona Company
          </p>
          <h1 className="mt-4 font-[var(--display)] text-4xl font-extrabold sm:text-6xl" style={{ color: 'var(--on-dark)' }}>
            Pest Control Services Phoenix AZ
          </h1>
          <p className="mt-5 text-lg" style={{ color: 'oklch(88% 0.02 235)' }}>
            Pest, Termite, Rodent, Scorpion, Bed Bug, Bird &amp; Commercial Pest Control
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+16023084510" className="flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold text-white" style={{ background: 'var(--cta)' }}>
              <Phone className="h-4 w-4" aria-hidden="true" /> Call (602) 308-4510
            </a>
            <a href="#services" className="flex items-center justify-center rounded-md border-2 px-7 py-3.5 text-sm font-bold" style={{ borderColor: 'oklch(60% 0.03 235)', color: 'var(--on-dark)' }}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-16" style={{ background: 'var(--bg-2)' }}>
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <h2 className="font-[var(--display)] text-2xl font-bold sm:text-3xl" style={{ color: 'var(--fg)' }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            You do not need to identify the pest before contacting us. Tell our team what you are seeing, hearing or finding and where the activity is occurring &mdash; droppings, damage, insects, mud tubes, scratching noises, nests or photographs can all provide useful starting information.
          </p>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  )
}
