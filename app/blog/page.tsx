import Link from 'next/link'
import { POSTS } from '@/lib/posts'
import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer } from '@/components/layout/Footer'

export const metadata = { title: 'Writing' }

export default function BlogIndex() {
  return (
    <>
      <ProjectNav />
      <main>
        <section style={{ padding: '120px 48px 80px', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Link href="/#writing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back home
            </Link>
            <div className="s-tag" style={{ marginBottom: 16 }}>Writing</div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.08, color: 'var(--t0)' }}>
              Engineering in the <em>open.</em>
            </h1>
            <p style={{ marginTop: 20, fontSize: 16, color: 'var(--t1)', lineHeight: 1.8, maxWidth: 560 }}>
              Lessons from building production AI systems — what worked, what failed, and what I&apos;d do differently.
            </p>
          </div>
        </section>

        <section style={{ padding: '64px 48px 120px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="blog-article" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 32,
                  padding: '32px 0',
                  borderBottom: '1px solid var(--rule)',
                  cursor: 'pointer',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: post.tagColor, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {post.tag}
                      </span>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--t3)', display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>{post.date}</span>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--t3)', display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>{post.readTime} read</span>
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 600, color: 'var(--t0)', letterSpacing: '-0.4px', lineHeight: 1.3, marginBottom: 10 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7 }}>{post.excerpt}</p>
                  </div>
                  <div style={{ flexShrink: 0, paddingTop: 28, color: 'var(--t2)' }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .blog-article { transition: opacity 0.2s; }
        .blog-article:hover { opacity: 0.72; }
        @media (max-width: 768px) { main section { padding-left: 24px !important; padding-right: 24px !important; } }
      `}</style>
    </>
  )
}
