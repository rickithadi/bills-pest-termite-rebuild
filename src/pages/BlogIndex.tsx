import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { posts } from '../lib/blog'

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Blog | Bill's Pest & Termite Control"
  }, [])

  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Pest Blog</p>
        <h1 className="mt-2 font-[var(--display)] text-4xl font-extrabold sm:text-5xl" style={{ color: 'var(--fg)' }}>
          Arizona Pest Insights
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
          Expert pest control tips, prevention guides and Arizona pest insights from Bill&rsquo;s Pest &amp; Termite Control.
        </p>

        <div className="mt-12 space-y-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block rounded-xl border p-7 transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cta)' }}>{p.category}</p>
              <h2 className="mt-2 font-[var(--display)] text-2xl font-bold" style={{ color: 'var(--fg)' }}>{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--fg-2)' }}>
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--cta)' }}>
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
