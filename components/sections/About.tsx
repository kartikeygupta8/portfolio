'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CERTIFICATIONS, SIDE_PROJECTS, SITE } from '@/lib/constants'

const FACTS = [
  { label: 'Role',       value: 'Senior Full-Stack & GenAI Engineer' },
  { label: 'Experience', value: '7 Years' },
  { label: 'Education',  value: 'B.E. Computer Science' },
  { label: 'University', value: 'LNCT — RGPV' },
  { label: 'Graduated',  value: '2019' },
  { label: 'Based in',   value: 'India (UTC+5:30)' },
  { label: 'Status',     value: 'Open to remote roles' },
]

const CERT_COLOR = ['var(--blue)', 'var(--green)', 'var(--cyan)', 'var(--amber)', 'var(--violet)', 'var(--green)']

export function About() {
  const ref  = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          className="s-tag"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px 80px', alignItems: 'start' }} className="about-grid">

          {/* Left — bio */}
          <div>
            <motion.h2
              className="s-h2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, delay: 0.08 }}
            >
              The engineer <em>behind the work.</em>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, margin: '40px 0 52px' }}>
              {[
                <>
                  I started writing production code at <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>FIS Global</strong> in 2019 — building automation frameworks and ETL pipelines that handled financial-scale data at an enterprise with zero tolerance for error. That early constraint shaped how I think: instrument everything, fail gracefully, ship with confidence.
                </>,
                <>
                  At <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>Bestpeers</strong>, I led a 3-engineer team shipping a healthcare monitoring platform across React web, React Native mobile, and a custom smartwatch tracking heart rate, SpO2, and GPS — all from a single Node.js backend. I learned that clean architecture isn't aesthetic, it's operational: it's what lets you ship three surfaces without tripling the maintenance burden.
                </>,
                <>
                  At <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>Evren</strong>, I own the technical architecture — an AI support chatbot on Groq Llama 3.3, MCP agents, agentic workflows, and the customer-facing Admin Portal for enterprise OS management. I set technical direction, lead cross-functional engineering decisions, and mentor developers through code reviews and system design. The AI here is invisible infrastructure, not a UI feature bolted on.
                </>,
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.85 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* GitHub link */}
            <motion.a
              href={SITE.github}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.52 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 20px',
                border: '1px solid var(--rule2)',
                borderRadius: 8,
                background: 'var(--bg1)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--blue)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rule2)'; e.currentTarget.style.background = 'var(--bg2)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule2)'; e.currentTarget.style.background = 'var(--bg1)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              github.com/kartikeygupta8
            </motion.a>
          </div>

          {/* Right — sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.62, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {/* Quick facts */}
            <div style={{ border: '1px solid var(--rule2)', borderRadius: 10, background: 'var(--bg1)', overflow: 'hidden' }}>
              <div style={{ borderBottom: '1px solid var(--rule)', padding: '14px 20px', fontFamily: 'var(--font-mono), monospace', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--t2)' }}>
                Quick Facts
              </div>
              {FACTS.map((f, fi) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                    padding: '12px 20px',
                    borderBottom: fi < FACTS.length - 1 ? '1px solid var(--rule)' : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)', letterSpacing: '0.06em' }}>{f.label}</span>
                  <span style={{ fontSize: 13, color: 'var(--t0)', fontWeight: 400, textAlign: 'right' }}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ border: '1px solid var(--rule2)', borderRadius: 10, background: 'var(--bg1)', overflow: 'hidden' }}>
              <div style={{ borderBottom: '1px solid var(--rule)', padding: '14px 20px', fontFamily: 'var(--font-mono), monospace', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--t2)' }}>
                Certifications
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {CERTIFICATIONS.map((cert, ci) => (
                  <div key={cert.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: CERT_COLOR[ci] ?? 'var(--blue)', flexShrink: 0, marginTop: 5 }} />
                    <div>
                      <div style={{ fontSize: 13, color: 'var(--t1)', lineHeight: 1.45, marginBottom: 2 }}>{cert.title}</div>
                      <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>{cert.issuer} · {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about { padding: 80px 24px !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
