import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../lib/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Service FAQ</p>
        <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y" style={{ borderColor: 'var(--border)' }}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full min-h-[56px] items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-[var(--display)] text-base font-semibold" style={{ color: 'var(--fg)' }}>{f.q}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform"
                    style={{ color: 'var(--accent)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  />
                </button>
                <div className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="min-h-0">
                    <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
