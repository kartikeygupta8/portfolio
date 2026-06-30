'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CERTIFICATIONS, PINNED_REPOS, SIDE_PROJECTS, SITE } from '@/lib/constants'

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

const LANG_ICON: Record<string, string> = {
  TypeScript: '●',
  JavaScript: '●',
  Python:     '●',
}

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
                  At <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>Bestpeers</strong>, I led a 3-engineer team shipping simultaneously across React web, React Native iOS, and a custom smartwatch — all from a single Node.js backend. I learned that clean architecture isn't aesthetic, it's operational: it's what lets you ship three surfaces without tripling the maintenance burden.
                </>,
                <>
                  At <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>Evren</strong>, I own the technical architecture — LLM gateways, MCP agents, RAG pipelines, and support automation. I set technical direction, lead cross-functional engineering decisions, and mentor developers through code reviews and system design. The AI here is invisible infrastructure, not a UI feature bolted on.
                </>,
                <>
                  Deployed across <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>FIS Global (Fortune 500)</strong>, Evren, and Bestpeers — I work at the intersection of distributed systems and AI, owning the full stack from database schema to production deployment.
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

            {/* Pinned repos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.52 }}
            >
              <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: 16 }}>
                Pinned Repos
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {PINNED_REPOS.map((repo, ri) => (
                  <motion.a
                    key={repo.name}
                    href={`${SITE.github}/${repo.name}`}
                    target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.42, delay: 0.58 + ri * 0.06 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                      padding: '14px 18px',
                      border: '1px solid var(--rule)',
                      borderRadius: 8,
                      background: 'var(--bg1)',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rule2)'; e.currentTarget.style.background = 'var(--bg2)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.background = 'var(--bg1)' }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--blue)', marginBottom: 3 }}>{repo.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{repo.desc}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)' }}>
                        <span style={{ color: repo.langColor, fontSize: 10 }}>{LANG_ICON[repo.lang] ?? '●'}</span>
                        {repo.lang}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)' }}>★ {repo.stars}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
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
