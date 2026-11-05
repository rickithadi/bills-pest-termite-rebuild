export interface BlogPost {
  title: string
  date: string
  category: string
  excerpt: string
  slug: string
  content: string
}

const raw = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseFrontmatter(src: string): { data: Record<string, string>; content: string } {
  const match = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: src }
  const [, frontmatter, content] = match
  const data = Object.fromEntries(
    frontmatter
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(':')
        return [key.trim(), rest.join(':').trim().replace(/^"|"$/g, '')]
      }),
  )
  return { data, content: content.trim() }
}

export const posts: BlogPost[] = Object.values(raw)
  .map((src) => {
    const { data, content } = parseFrontmatter(src)
    return { ...(data as Omit<BlogPost, 'content'>), content }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
