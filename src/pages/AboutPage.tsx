import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import FinalCTA from '../sections/FinalCTA'

const values = [
  { name: 'Integrity', body: 'Act with honesty and integrity in the decisions we make and the work we perform.' },
  { name: 'Service', body: 'Deliver quality, value and responsive service to the customers who trust us.' },
  { name: 'Compassion', body: 'Treat customers, coworkers and community members with care and consideration.' },
  { name: 'Teamwork', body: 'Work together, share knowledge and support one another in achieving better results.' },
  { name: 'Respect', body: 'Treat people with dignity, professionalism and consideration.' },
  { name: 'Accountability', body: 'Accept responsibility for our actions, commitments and results.' },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Bill's Pest & Termite Control"
  }, [])

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        <div className="absolute inset-0">
          <img
            src="https://i0.wp.com/billstermiteco.com/wp-content/uploads/About-Us-Bills-Pest-Termite-Control.jpg?resize=1920%2C1280&ssl=1"
            alt="About Bill's Pest & Termite Control in Phoenix, Arizona"
            className="h-full w-full object-cover"
            style={{ opacity: 0.3 }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, oklch(22% 0.06 255 / 0.55) 0%, oklch(18% 0.06 255 / 0.92) 100%)' }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'oklch(85% 0.03 90)' }}>
            Family Owned &middot; Arizona Based &middot; Serving Phoenix Since 1992
          </p>
          <h1 className="mt-4 font-[var(--display)] text-4xl font-extrabold sm:text-6xl" style={{ color: 'var(--on-dark)' }}>
            About Bill&rsquo;s Pest &amp; Termite Control
          </h1>
          <p className="mt-5 text-lg" style={{ color: 'oklch(88% 0.02 235)' }}>
            A Local Pest-Control Company Built Across Three Generations
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Our Story</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold" style={{ color: 'var(--fg)' }}>
            Built on Protection. Grown Through Opportunity.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            <p>
              Bill&rsquo;s Pest &amp; Termite Control began in 1992 with one man, one truck and a determination to do things the right way. The early focus was termite inspection and treatment, with a simple goal: provide Arizona property owners with effective service at a fair price while giving them confidence that the problem was being handled properly.
            </p>
            <p>
              Over time, customer needs grew and so did the company. Bill&rsquo;s expanded into general pest control, rodents, bed bugs, scorpions, bird and pigeon control, commercial pest management and specialized treatment services.
            </p>
            <p>
              But the company became more than a pest-control business. It became a place where people could learn a trade, build a career, support their families and create a better future.
            </p>
          </div>

          <p className="mt-14 text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>More Than Pest Control</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold" style={{ color: 'var(--fg)' }}>
            People Matter
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            <p>
              For many local residents, Bill&rsquo;s has been a place to learn a trade, develop meaningful skills and build a stable future. Some team members came to us looking for a second chance. Through training, hard work and opportunity, employees have gone on to support families, purchase homes and move into positions of greater responsibility.
            </p>
            <p>
              We believe opportunity matters. We believe people matter. And we believe a local business should strengthen the community it serves. Our company has made a deliberate commitment to developing people from within and creating pathways for advancement.
            </p>
          </div>
          <blockquote className="mt-8 border-l-4 py-2 pl-6 font-[var(--display)] text-xl font-semibold italic" style={{ borderColor: 'var(--cta)', color: 'var(--fg)' }}>
            Protect homes. Create opportunity. Strengthen families. Serve the community.
          </blockquote>
        </div>
      </section>

      <section className="py-20 sm:py-28" style={{ background: 'var(--bg-2)' }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>What Guides Us</p>
          <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
            Our Mission, Vision &amp; Core Values
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-7" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <h3 className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                To protect the well-being of people, pets and places from the damage and disruption caused by unwanted pests.
              </p>
            </div>
            <div className="rounded-xl border p-7" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <h3 className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                To be a trusted industry leader providing effective and affordable pest-management solutions while creating meaningful growth opportunities for our employees and their families.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="rounded-xl border p-6" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <h3 className="font-[var(--display)] text-base font-bold" style={{ color: 'var(--cta)' }}>{v.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact-us#quote" className="rounded-md px-7 py-3.5 text-center text-sm font-bold text-white" style={{ background: 'var(--cta)' }}>
              Request an Evaluation
            </Link>
            <a href="tel:+16023084510" className="flex items-center justify-center gap-2 rounded-md border-2 px-7 py-3.5 text-sm font-bold" style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}>
              <Phone className="h-4 w-4" aria-hidden="true" /> Call (602) 308-4510
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
