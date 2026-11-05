import { useEffect, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { marked } from 'marked'
import { Calendar, ArrowLeft, Phone } from 'lucide-react'
import { getPostBySlug } from '../lib/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useEffect(() => {
    if (post) document.title = `${post.title} | Bill's Pest & Termite Control`
  }, [post])

  const html = useMemo(() => (post ? marked.parse(post.content, { async: false }) : ''), [post])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--cta)' }}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Blog
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cta)' }}>{post.category}</p>
        <h1 className="mt-2 font-[var(--display)] text-3xl font-extrabold sm:text-4xl" style={{ color: 'var(--fg)' }}>{post.title}</h1>
        <p className="mt-3 flex items-center gap-1.5 text-sm" style={{ color: 'var(--fg-2)' }}>
          <Calendar className="h-4 w-4" aria-hidden="true" />
          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div
          className="prose-content mt-10 space-y-5 text-base leading-relaxed"
          style={{ color: 'var(--fg-2)' }}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />

        <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border p-7 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}>
          <div>
            <p className="font-[var(--display)] text-lg font-bold" style={{ color: 'var(--fg)' }}>Dealing with this pest right now?</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--fg-2)' }}>Request a free evaluation and we'll help you figure out the next step.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact-us#quote" className="rounded-md px-5 py-2.5 text-sm font-bold text-white" style={{ background: 'var(--cta)' }}>
              Get a Free Quote
            </Link>
            <a href="tel:+16023084510" className="flex items-center gap-1.5 rounded-md border-2 px-5 py-2.5 text-sm font-bold" style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}>
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
