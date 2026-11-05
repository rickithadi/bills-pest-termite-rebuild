import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertTriangle, Phone } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Pest Control Quote',
  'Termite Quote',
  'Free Termite Inspection',
  'WDIIR Termite Report',
  'Bed Bugs',
  'Pigeons / Other Birds',
  'Rodents',
  'Ants / Crickets / Cockroaches',
  'Spiders / Scorpions',
  'Other',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')
  const formId = import.meta.env.VITE_FORMSPREE_ID

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    if (!formId) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 text-center" style={{ borderColor: 'var(--accent-light)' }}>
        <CheckCircle2 className="h-10 w-10" style={{ color: 'var(--accent)' }} aria-hidden="true" />
        <p className="font-[var(--display)] text-xl font-bold" style={{ color: 'var(--fg)' }}>Request received.</p>
        <p className="text-sm" style={{ color: 'var(--fg-2)' }}>Our team will contact you within one business hour during office hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Zip Code" name="zip" required />
      </div>
      <Field label="Property Address" name="address" required />

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold" style={{ color: 'var(--fg)' }}>Service Request <span style={{ color: 'var(--cta)' }}>*</span></span>
        <select
          name="service"
          required
          className="min-h-[44px] w-full rounded-md border bg-white px-3 py-2 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold" style={{ color: 'var(--fg)' }}>Comments</span>
        <textarea
          name="comments"
          rows={3}
          className="w-full rounded-md border bg-white px-3 py-2 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
        style={{ background: 'var(--cta)' }}
      >
        {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'sending' ? 'Sending…' : 'Submit Request'}
      </button>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-md border px-4 py-3 text-sm" style={{ borderColor: 'var(--cta)', color: 'var(--fg)', background: 'oklch(97% 0.02 27)' }}>
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--cta)' }} aria-hidden="true" />
          <span>
            Something went wrong sending your request. Please call us directly at{' '}
            <a href="tel:+16023084510" className="inline-flex items-center gap-1 font-semibold underline">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />(602) 308-4510
            </a>{' '}
            and we'll help right away.
          </span>
        </div>
      )}

      <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-2)' }}>
        We will never sell or share your information. By submitting this form, you agree that Bills Pest &amp; Termite, LLC may send occasional appointment reminders or promotional messages via text or email.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold" style={{ color: 'var(--fg)' }}>
        {label} {required && <span style={{ color: 'var(--cta)' }}>*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="min-h-[44px] w-full rounded-md border bg-white px-3 py-2 text-sm"
        style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}
      />
    </label>
  )
}
