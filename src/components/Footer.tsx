import { Link } from 'react-router-dom'
import { Phone, MessageSquare, MapPin } from 'lucide-react'
import { FacebookIcon, InstagramIcon, XIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons'
import { services, serviceAreas } from '../lib/data'

const social = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/BillsPestTermiteControl/', label: 'Facebook' },
  { Icon: XIcon, href: 'https://x.com/bills_pest', label: 'X' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/billspesttermite/?hl=en', label: 'Instagram' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/bills-pest-termite-control', label: 'LinkedIn' },
  { Icon: YoutubeIcon, href: 'https://www.youtube.com/@BillsPestControl', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'var(--on-dark)' }}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Bill's Pest & Termite Control" className="h-14 w-14" width={56} height={56} />
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'oklch(80% 0.02 235)' }}>
              Bill&rsquo;s Pest Termite Control provides residential and commercial pest-control and termite services throughout Greater Phoenix, AZ. Family-owned since 1992.
            </p>
            <div className="mt-5 flex gap-3">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Follow on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-[var(--cta)]"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[var(--display)] text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--on-dark)' }}>Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: 'oklch(80% 0.02 235)' }}>
              {services.slice(0, 7).map((s) => (
                <li key={s.name}>
                  <Link to="/services" className="transition-colors hover:text-white">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[var(--display)] text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--on-dark)' }}>Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: 'oklch(80% 0.02 235)' }}>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>24820 N 16th Suite 130, Phoenix, Arizona 85085</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="tel:+16023084510" className="hover:text-white">(602) 308-4510</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="sms:+16027867386" className="hover:text-white">24/7 Text: (602) 786-7386</a>
              </li>
              <li>Office Hours: Mon&ndash;Fri 8AM&ndash;5PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-[var(--display)] text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--on-dark)' }}>Service Areas</h3>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'oklch(80% 0.02 235)' }}>
              {serviceAreas.slice(0, 12).join(', ')} and {serviceAreas.length - 12}+ more Arizona communities.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'oklch(70% 0.02 235)' }}>
          <p>&copy; {new Date().getFullYear()} Bills Pest Termite Control. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about-us" className="hover:text-white">About Us</Link>
            <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
