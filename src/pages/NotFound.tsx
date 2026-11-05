import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Bug, Phone } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Bill's Pest & Termite Control"
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center" style={{ background: 'var(--bg-dark)', color: 'var(--on-dark)' }}>
      <Bug className="mb-6 h-12 w-12" style={{ color: 'var(--cta)' }} aria-hidden="true" />
      <h1 className="font-[var(--display)] text-4xl font-bold sm:text-5xl">This page got away from us.</h1>
      <p className="mt-4 max-w-md text-base" style={{ color: 'oklch(85% 0.02 235)' }}>
        We couldn't find the page you're looking for — but unlike the pests we deal with, it's nowhere on this property.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors"
          style={{ background: 'var(--cta)', color: '#fff' }}
        >
          Back to Home
        </Link>
        <a
          href="tel:+16023084510"
          className="flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold tracking-wide transition-colors"
          style={{ borderColor: 'oklch(45% 0.03 235)', color: 'var(--on-dark)' }}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          (602) 308-4510
        </a>
      </div>
    </main>
  )
}
