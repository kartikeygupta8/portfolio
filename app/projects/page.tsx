'use client'

import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import { PROJECTS }   from '@/lib/constants'
import Link from 'next/link'

const ACCENT_VAR: Record<string, { fg: string; bg: string; bd: string }> = {
  blue:   { fg: 'var(--blue)',   bg: 'var(--blue-d)',   bd: 'var(--blue-b)' },
  cyan:   { fg: 'var(--cyan)',   bg: 'var(--cyan-d)',   bd: 'var(--cyan-b)' },
  green:  { fg: 'var(--green)',  bg: 'var(--green-d)',  bd: 'var(--green-b)' },
  amber:  { fg: 'var(--amber)',  bg: 'var(--amber-d)',  bd: 'var(--amber-b)' },
  violet: { fg: 'var(--violet)', bg: 'var(--violet-d)', bd: 'var(--violet-b)' },
}

const TBD = [
  { title: 'Livoh', desc: 'Mobile-first product — case study in progress.', accent: 'cyan' as const },
  { title: 'Lex & Ledger', desc: 'Legal-tech automation platform — case study in progress.', accent: 'violet' as const },
]

export default function ProjectsIndex() {
  return (
    <>
      <ProjectNav />
      <main style={{ padding: '120px 48px 120px', maxWidth: 1060, margin: '0 auto' }}>

        <div className="s-tag" style={{ marginTop: 20 }}>All Projects</div>
        <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>
          Production work, <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>end-to-end.</em>
        </h1>
        <p className="s-sub" style={{ marginBottom: 72 }}>
          Every project here shipped to real users. Architecture diagrams, impact metrics, and technical decisions documented per case.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: 16 }}>
          {PROJECTS.map(p => {
            const av = ACCENT_VAR[p.accent]
            return (
              <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    border: '1px solid var(--rule2)',
                    borderRadius: 12,
                    background: 'var(--bg1)',
                    padding: '32px 32px 28px',
                    height: '100%',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.25s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = av.bd; e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule2)'; e.currentTarget.style.background = 'var(--bg1)'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 32, fontWeight: 300, color: 'var(--t3)', letterSpacing: '-2px' }}>{p.index}</span>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: av.fg, background: av.bg, border: `1px solid ${av.bd}`, borderRadius: 4, padding: '3px 9px' }}>
                        {p.badge}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)', background: 'var(--bg3)', border: '1px solid var(--rule)', borderRadius: 4, padding: '3px 9px' }}>
                        {p.company}
                      </span>
                    </div>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 22, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.25, marginBottom: 12 }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.72, marginBottom: 22 }}>{p.summary}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {p.metrics.map(m => (
                      <span key={m} style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: av.fg, background: av.bg, border: `1px solid ${av.bd}`, borderRadius: 4, padding: '2px 9px' }}>
                        {m}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: av.fg }}>
                    Read case study
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}

          {/* TBD slots */}
          {TBD.map(t => {
            const av = ACCENT_VAR[t.accent]
            return (
              <div
                key={t.title}
                style={{
                  border: '1px dashed var(--rule)',
                  borderRadius: 12,
                  background: 'var(--bg)',
                  padding: '32px 32px 28px',
                  opacity: 0.55,
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: av.fg, background: av.bg, border: `1px solid ${av.bd}`, borderRadius: 4, padding: '3px 9px', display: 'inline-block', marginBottom: 20 }}>
                  Coming Soon
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 22, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.25, marginBottom: 10 }}>
                  {t.title}
                </h2>
                <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) { main { padding: 100px 24px 80px !important; } }
        @media (max-width: 520px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
