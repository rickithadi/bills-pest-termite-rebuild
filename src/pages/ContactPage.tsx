import { useEffect } from 'react'
import { Phone, MessageSquare, MapPin, Clock, Star } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import { locations } from '../lib/data'

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Bill's Pest & Termite Control - Arizona's Pest Experts"
  }, [])

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        <div className="absolute inset-0">
          <img
            src="https://i0.wp.com/billstermiteco.com/wp-content/uploads/Contact-Us-Bills-Pest-Termite-Control.jpg?resize=1920%2C1280&ssl=1"
            alt="Contact Bill's Pest & Termite Control"
            className="h-full w-full object-cover"
            style={{ opacity: 0.3 }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, oklch(22% 0.06 255 / 0.55) 0%, oklch(18% 0.06 255 / 0.92) 100%)' }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:px-10">
          <div className="flex items-center justify-center gap-1" style={{ color: 'oklch(85% 0.03 90)' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-2 text-sm" style={{ color: 'oklch(88% 0.02 235)' }}>4.9 Rating &middot; 8,000+ Five-Star Reviews</p>
          <h1 className="mt-4 font-[var(--display)] text-4xl font-extrabold sm:text-6xl" style={{ color: 'var(--on-dark)' }}>
            Contact Bill&rsquo;s Pest &amp; Termite Control
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg" style={{ color: 'oklch(88% 0.02 235)' }}>
            Three generations of trusted pest control serving Phoenix, Mesa, and the entire Valley of the Sun. We respond fast &mdash; same-day service available when you call before noon.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--bg-2)' }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-xl border p-6" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>{loc.label}</p>
              <h3 className="mt-1 font-[var(--display)] text-base font-bold" style={{ color: 'var(--fg)' }}>{loc.name}</h3>
              <p className="mt-2 flex items-start gap-1.5 text-xs" style={{ color: 'var(--fg-2)' }}>
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {loc.address}
              </p>
              <a href={`tel:${loc.tel}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: 'var(--cta)' }}>
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {loc.phone}
              </a>
            </div>
          ))}
          <div className="rounded-xl border p-6" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>Hours &amp; Availability</p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'var(--fg)' }}>
              <li className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" /> Mon&ndash;Fri: 8AM&ndash;5PM</li>
              <li className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" /> Saturday: By Appointment</li>
              <li className="flex items-center gap-1.5"><MessageSquare className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden="true" /> Text Line: 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Request Service</p>
            <h2 className="mt-2 font-[var(--display)] text-3xl font-bold" style={{ color: 'var(--fg)' }}>
              Get Your Hassle-Free Quote Today
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
              Fill out the form below and a member of our team will contact you within one business hour during office hours. No pressure, no obligation &mdash; just expert advice from Arizona&rsquo;s most trusted pest control professionals.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border p-7" style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}>
              <h3 className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Contact Bill&rsquo;s Directly</h3>
              <div className="mt-5 space-y-4">
                <a href="tel:+16023084510" className="flex items-center gap-3 text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                  <Phone className="h-5 w-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span>(602) 308-4510<br /><span className="text-xs font-normal" style={{ color: 'var(--fg-2)' }}>Monday&ndash;Friday, 8:00 AM&ndash;5:00 PM</span></span>
                </a>
                <a href="sms:+16027867386" className="flex items-center gap-3 text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                  <MessageSquare className="h-5 w-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span>(602) 786-7386<br /><span className="text-xs font-normal" style={{ color: 'var(--fg-2)' }}>Text us 24/7</span></span>
                </a>
              </div>
              <h4 className="mt-7 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-2)' }}>What Happens Next?</h4>
              <ol className="mt-3 space-y-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <li>1. Tell us about your pest concern or preferred program.</li>
                <li>2. Our team reviews your location and service needs.</li>
                <li>3. We explain treatment recommendations, pricing and applicable agreement terms.</li>
                <li>4. You decide how you would like to proceed.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
