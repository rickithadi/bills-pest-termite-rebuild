import { Phone, MessageSquare } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16" style={{ background: 'var(--cta)' }}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <div>
          <h2 className="font-[var(--display)] text-2xl font-bold text-white sm:text-3xl">Ready to Protect Your Property?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/90">Local service. Straightforward answers. No unnecessary pressure.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="tel:+16023084510" className="flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-bold" style={{ color: 'var(--cta)' }}>
            <Phone className="h-4 w-4" aria-hidden="true" /> (602) 308-4510
          </a>
          <a href="sms:+16027867386" className="flex min-h-[48px] items-center justify-center gap-2 rounded-md border-2 border-white px-6 text-sm font-bold text-white">
            <MessageSquare className="h-4 w-4" aria-hidden="true" /> Text 24/7
          </a>
        </div>
      </div>
    </section>
  )
}
