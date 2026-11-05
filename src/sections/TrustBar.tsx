const stats = [
  { label: 'Arizona Experience', value: 'Since 1992', detail: 'Family-owned pest and termite control serving Arizona properties.' },
  { label: 'Phoenix Google Reviews', value: '4.9 Stars', detail: 'More than 3,700 Google reviews for our Phoenix location.' },
  { label: 'Greater Phoenix Service', value: 'Two Locations', detail: 'Local offices in Phoenix and Mesa serving communities across the Valley.' },
]

export default function TrustBar() {
  return (
    <section className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="border-l-4 pl-5" style={{ borderColor: 'var(--cta)' }}>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--fg-2)' }}>{s.label}</p>
            <p className="mt-1 font-[var(--display)] text-3xl font-bold" style={{ color: 'var(--fg)' }}>{s.value}</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
