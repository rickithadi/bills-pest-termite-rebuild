import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { posts } from '../lib/blog'

export default function BlogPreview() {
  const featured = posts.slice(0, 3)
  if (featured.length === 0) return null

  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>From the Blog</p>
            <h2 className="mt-2 font-[var(--display)] text-3xl font-bold sm:text-4xl" style={{ color: 'var(--fg)' }}>
              Arizona Pest Insights
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cta)' }}>
            View All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col rounded-xl border p-6 transition-colors hover:border-[var(--accent)]" style={{ borderColor: 'var(--border)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cta)' }}>{p.category}</p>
              <h3 className="mt-2 font-[var(--display)] text-lg font-bold leading-snug" style={{ color: 'var(--fg)' }}>{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{p.excerpt}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs" style={{ color: 'var(--fg-2)' }}>
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
