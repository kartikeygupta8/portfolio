'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { POSTS } from '@/lib/posts'

export function Writing() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="writing" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <motion.div
              className="s-tag"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Writing
            </motion.div>
            <motion.h2
              className="s-h2"
              style={{ marginBottom: 0 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, delay: 0.08 }}
            >
              Engineering in the <em>open.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--t2)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t0)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
            >
              All posts
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="writing-grid">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.58, delay: 0.12 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  style={{
                    border: '1px solid var(--rule)',
                    borderRadius: 12,
                    padding: '28px 28px 24px',
                    background: 'var(--bg1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.2s, background 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = post.tagColor
                    el.style.background = 'var(--bg2)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--rule)'
                    el.style.background = 'var(--bg1)'
                  }}
                >
                  {/* Tag + meta */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}40`,
                      borderRadius: 4,
                      padding: '3px 8px',
                    }}>
                      {post.tag}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: 'var(--t0)',
                    letterSpacing: '-0.3px',
                    lineHeight: 1.35,
                    marginBottom: 14,
                    flex: 1,
                  }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: 13,
                    color: 'var(--t2)',
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>
                      {post.date}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10,
                      color: post.tagColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                      Read
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #writing { padding: 80px 24px !important; }
          .writing-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .writing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
