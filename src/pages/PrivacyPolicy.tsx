import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Bill's Pest & Termite Control"
  }, [])

  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="font-[var(--display)] text-3xl font-extrabold" style={{ color: 'var(--fg)' }}>Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
          <p>Our website address is: https://billstermiteco.com.</p>
          <h2 className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Contact Forms</h2>
          <p>When you submit a quote request through our site, we collect the information provided in the form (name, email, phone, property address and service request) to respond to your inquiry. We will never sell or share your information.</p>
          <h2 className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Your Rights</h2>
          <p>You can request to receive an exported file of the personal data we hold about you, or request that we erase any personal data we hold about you, by contacting our office.</p>
        </div>
      </div>
    </section>
  )
}
