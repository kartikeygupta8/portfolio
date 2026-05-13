'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '@/lib/constants'

const KPI_VAR: Record<string, { fg: string; bg: string; bd: string }> = {
  green: { fg: 'var(--green)', bg: 'var(--green-d)', bd: 'var(--green-b)' },
  blue:  { fg: 'var(--blue)',  bg: 'var(--blue-d)',  bd: 'var(--blue-b)'  },
  amber: { fg: 'var(--amber)', bg: 'var(--amber-d)', bd: 'var(--amber-b)' },
}

function ExpCard({ exp, i, isLast }: { exp: typeof EXPERIENCE[0]; i: number; isLast: boolean }) {
  const ref   = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="exp-entry"
      style={{
        display: 'grid',
        gridTemplateColumns: '210px 1fr',
        borderTop: '1px solid var(--rule)',
        borderBottom: isLast ? '1px solid var(--rule)' : undefined,
        padding: '48px 0',
      }}
    >
      {/* Left column */}
      <div className="exp-left" style={{ paddingRight: 40 }}>
        <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', letterSpacing: '0.06em', marginBottom: 10 }}>
          {exp.period}
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.3px', marginBottom: 4, color: 'var(--t0)' }}>
          {exp.company}
        </div>
        <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--blue)', letterSpacing: '0.04em' }}>
          {exp.role}
        </div>
      </div>

      {/* Right column */}
      <div className="exp-right" style={{ paddingLeft: 48, borderLeft: '1px solid var(--rule)' }}>
        {/* Headline */}
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.4px', marginBottom: 16, lineHeight: 1.3, color: 'var(--t0)' }}>
          {exp.hl}
        </div>

        {/* KPI chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {exp.kpis.map(k => {
            const v = KPI_VAR[k.color] ?? KPI_VAR.blue
            return (
              <span key={k.label} style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: v.fg, background: v.bg, border: `1px solid ${v.bd}`, borderRadius: 4, padding: '4px 12px' }}>
                {k.label}
              </span>
            )
          })}
        </div>

        {/* Bullet points */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {exp.points.map((pt, pi) => (
            <motion.li
              key={pi}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.2 + pi * 0.06 }}
              style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.65 }}
            >
              {pt}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exp.tags.map(tag => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref  = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          className="s-tag"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.div>

        <motion.h2
          className="s-h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          Where I've <em>shipped.</em>
        </motion.h2>

        <motion.p
          className="s-sub"
          style={{ marginBottom: 60 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Three companies, six years, measurable outcomes at every step.
        </motion.p>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <ExpCard key={exp.id} exp={exp} i={i} isLast={i === EXPERIENCE.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 80px 24px !important; }
          #experience .exp-entry { grid-template-columns: 1fr !important; }
          #experience .exp-left  { padding: 0 0 24px !important; }
          #experience .exp-right { padding: 24px 0 0 !important; border-left: none !important; border-top: 1px solid var(--rule) !important; }
        }
      `}</style>
    </section>
  )
}
