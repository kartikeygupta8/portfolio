'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      'Kartikey played a key role in building and improving the UI using React.js, consistently delivering clean, responsive, and user-friendly interfaces. He has a strong understanding of component-based architecture and pays close attention to performance and usability. Alongside frontend work, he is well-versed in Node.js and contributed effectively to backend integrations, APIs, and business logic. Kartikey\'s ability to work across the stack makes him a reliable and versatile engineer.',
    name:       'Rajeev Sarathe',
    title:      'Python Engineer',
    company:    'Evren',
    relation:   'Teammate',
    linkedin:   'https://www.linkedin.com/in/kartikeyguptadev/',
  },
  {
    quote:
      'He is proactive, takes initiative, and consistently delivers high-quality work across both frontend and backend. Kartikey communicates clearly and works well with others, making collaboration smooth in a fast-paced environment. He takes ownership of his work and is reliable when it comes to execution and follow-through.',
    name:       'John Kevin Go',
    title:      'Software Engineering Manager',
    company:    'Evren',
    relation:   'Direct Manager',
    linkedin:   'https://www.linkedin.com/in/kartikeyguptadev/',
  },
]

export function Testimonials() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          className="s-tag"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.div>

        <motion.h2
          className="s-h2"
          style={{ marginBottom: 52 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          From the people <em>I've shipped with.</em>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, delay: 0.14 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                border: '1px solid var(--rule2)',
                borderRadius: 12,
                padding: '36px 36px 28px',
                background: 'var(--bg1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 64,
                lineHeight: 0.8,
                color: 'var(--blue)',
                opacity: 0.35,
                userSelect: 'none',
              }}>
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: 15,
                color: 'var(--t1)',
                lineHeight: 1.82,
                flex: 1,
                marginTop: -12,
              }}>
                {t.quote}
              </p>

              {/* Attribution */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingTop: 20,
                borderTop: '1px solid var(--rule)',
                gap: 16,
              }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--t0)', letterSpacing: '-0.2px', marginBottom: 3 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>
                    {t.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 6 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--blue)',
                      background: 'var(--blue-d)',
                      border: '1px solid var(--blue-b)',
                      borderRadius: 4,
                      padding: '2px 7px',
                    }}>
                      {t.relation}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>
                      @ {t.company}
                    </span>
                  </div>
                </div>

                {/* LinkedIn source */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on LinkedIn"
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 10,
                    color: 'var(--t2)',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #testimonials { padding: 80px 24px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
