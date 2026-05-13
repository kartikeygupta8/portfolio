'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PHILOSOPHY } from '@/lib/constants'

const LABEL_COLORS = ['var(--blue)', 'var(--violet)', 'var(--cyan)', 'var(--t1)', 'var(--green)', 'var(--amber)']

export function Philosophy() {
  const ref  = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="philosophy" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          className="s-tag"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Engineering Philosophy
        </motion.div>

        <motion.h2
          className="s-h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          How I <em>approach the work.</em>
        </motion.h2>

        <motion.p
          className="s-sub"
          style={{ marginBottom: 60 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Six principles that shape every system I build — accumulated over six years of production engineering.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, border: '1px solid var(--rule)', borderRadius: 12, overflow: 'hidden' }}>
          {PHILOSOPHY.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '36px 32px',
                background: 'var(--bg1)',
                borderRight: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg1)')}
            >
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: LABEL_COLORS[i] ?? 'var(--t2)',
                marginBottom: 14,
              }}>
                {p.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: 19,
                fontWeight: 400,
                lineHeight: 1.22,
                color: 'var(--t0)',
                marginBottom: 14,
              }}>
                {p.title}
              </div>
              <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.78 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #philosophy { padding: 80px 24px !important; } }
        @media (max-width: 620px) { #philosophy .phil-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
