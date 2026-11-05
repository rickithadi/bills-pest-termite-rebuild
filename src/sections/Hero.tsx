import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/billstermiteco.com/wp-content/uploads/Phoenix-Pest-and-Termite-Control.jpeg?resize=1920%2C1280&ssl=1"
          alt="The Bill's Pest & Termite Control team in Arizona-branded jerseys in front of the company mural"
          className="h-full w-full object-cover"
          style={{ opacity: 0.32 }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, oklch(22% 0.06 255 / 0.55) 0%, oklch(18% 0.06 255 / 0.9) 100%)' }} />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'oklch(85% 0.03 90)' }}>
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <span className="ml-2" style={{ color: 'var(--on-dark)' }}>4.9 Rating &middot; 8,000+ Five-Star Reviews</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-6 max-w-3xl font-[var(--display)] text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          style={{ color: 'var(--on-dark)' }}
        >
          Pest Control Phoenix AZ
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
          style={{ color: 'oklch(88% 0.02 235)' }}
        >
          Bill&rsquo;s Pest &amp; Termite Control provides professional pest control for Phoenix homes and businesses &mdash; ants, cockroaches, spiders, scorpions, termites, rodents, bed bugs and other common Arizona pests. Same-day service may be available for qualifying requests.
        </motion.p>

        <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact-us#quote"
            className="rounded-md px-8 py-4 text-center text-base font-bold tracking-wide text-white transition-transform hover:scale-[1.02]"
            style={{ background: 'var(--cta)' }}
          >
            Get My Hassle-Free Quote
          </Link>
          <a
            href="tel:+16023084510"
            className="flex items-center justify-center gap-2 rounded-md border-2 px-8 py-4 text-base font-bold tracking-wide transition-colors"
            style={{ borderColor: 'oklch(60% 0.03 235)', color: 'var(--on-dark)' }}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            (602) 308-4510
          </a>
        </motion.div>

        <motion.p initial="hidden" animate="show" custom={4} variants={fadeUp} className="mt-5 text-sm" style={{ color: 'oklch(72% 0.02 235)' }}>
          Family-Owned Since 1992 &middot; Three Generations &middot; Arizona Local
        </motion.p>
      </div>
    </section>
  )
}
