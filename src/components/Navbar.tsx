import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, MessageSquare, X as CloseIcon } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-shadow"
      style={{
        background: 'var(--bg)',
        boxShadow: scrolled ? '0 2px 16px rgba(10,36,67,0.08)' : 'none',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="hidden items-center justify-between px-6 py-1.5 text-xs sm:flex lg:px-10" style={{ background: 'var(--bg-dark)', color: 'var(--on-dark)' }}>
        <span>Mon&ndash;Fri 8AM&ndash;5PM &middot; 24820 N 16th Ave #130, Phoenix, AZ 85085</span>
        <span className="font-medium">AZ License #5468 &middot; Licensed &amp; Insured</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Bill's Pest & Termite Control — Home">
          <img src="/logo.png" alt="Bill's Pest & Termite Control" className="h-12 w-12" width={48} height={48} />
          <span className="hidden font-[var(--display)] text-sm font-bold leading-tight sm:block" style={{ color: 'var(--fg)' }}>
            BILL&rsquo;S
            <br />
            <span className="font-normal tracking-wide" style={{ color: 'var(--fg-2)' }}>PEST &amp; TERMITE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: location.pathname === l.to ? 'var(--cta)' : 'var(--fg)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+16023084510" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--fg)' }}>
            <Phone className="h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden="true" />
            (602) 308-4510
          </a>
          <Link
            to="/contact-us#quote"
            className="rounded-md px-5 py-2.5 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.02]"
            style={{ background: 'var(--cta)' }}
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          {open && (
            <button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(10,36,67,0.3)', top: '100px' }}
              onClick={() => setOpen(false)}
            />
          )}
          <nav className="relative z-50 flex flex-col gap-1 border-t px-6 py-4" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} aria-label="Mobile">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="py-2.5 text-base font-semibold" style={{ color: 'var(--fg)' }}>
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2.5">
              <a href="tel:+16023084510" className="flex min-h-[44px] items-center gap-2 rounded-md border px-4 text-sm font-semibold" style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}>
                <Phone className="h-4 w-4" aria-hidden="true" /> (602) 308-4510
              </a>
              <a href="sms:+16027867386" className="flex min-h-[44px] items-center gap-2 rounded-md border px-4 text-sm font-semibold" style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}>
                <MessageSquare className="h-4 w-4" aria-hidden="true" /> Text 24/7
              </a>
              <Link to="/contact-us#quote" className="flex min-h-[44px] items-center justify-center rounded-md text-sm font-bold text-white" style={{ background: 'var(--cta)' }}>
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
