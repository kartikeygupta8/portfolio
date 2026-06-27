import { Navigation } from '@/components/layout/Navigation'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Admin & Support Portal — Kartikey Gupta',
}

export default function AdminSupportPortal() {
  return (
    <>
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(45,214,138,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-g">Live</span>
              <span className="chip">Evren</span>
              <span className="chip">06 / 06</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              Admin &amp; <br />
              <em style={{ color: 'var(--green)' }}>Support Portal</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              Scalable admin and support portal for OS management — migrated the backend from Python to Node.js, implemented multi-tiered RBAC, rebuilt the React UI, and shipped a Python log-analysis tool that cut debugging time by 50% and API response times by 30%.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '−30%', label: 'API Latency' },
                { val: '+40%', label: 'Portal Adoption' },
                { val: '−50%', label: 'Debug Time' },
                { val: '0',    label: 'Downtime During Migration' },
              ].map((m, i) => (
                <div key={m.label} style={{ flex: 1, minWidth: 130, padding: '24px 28px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', background: 'var(--bg1)' }}>
                  <div className="metric-big"><span className="up">{m.val}</span></div>
                  <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0 60px' }}>
            <div className="s-tag" style={{ paddingTop: 4 }}>Problem</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 20 }}>
                A Python backend that couldn't scale, no meaningful access controls, and debugging that required tailing raw logs manually.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                Evren's admin and support portal was built on a Python backend that became a bottleneck as the platform grew. Response times degraded under load, onboarding new team members to the codebase was slow, and the access control model was flat — every admin had the same permissions regardless of role.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                On top of that, debugging production issues meant manually grepping through server logs. There was no structured log analysis tooling, no visibility into error patterns, and no way to correlate API latency with specific operations — each incident was a blank-slate investigation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              Node.js migration + RBAC redesign + React UI rebuild — shipped without downtime.
            </h2>

            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">portal.evren.app / admin</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* React UI */}
                  <rect x="10" y="120" width="110" height="52" rx="6" fill="rgba(75,139,245,0.08)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="65" y="140" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">React UI</text>
                  <text x="65" y="157" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="8" opacity="0.6">Role-aware views</text>
                  <text x="65" y="170" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="8" opacity="0.5">+40% adoption</text>

                  <path d="M120 146 L160 146" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrowG)"/>

                  {/* RBAC Middleware */}
                  <rect x="160" y="108" width="120" height="76" rx="6" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.4)" strokeWidth="1.5"/>
                  <text x="220" y="128" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">RBAC Layer</text>
                  <text x="220" y="145" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.65">Admin / Support /</text>
                  <text x="220" y="158" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.65">Viewer tiers</text>
                  <text x="220" y="174" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.5">JWT + policy engine</text>

                  <path d="M280 146 L320 146" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arrowG)"/>

                  {/* Node.js API */}
                  <rect x="320" y="108" width="120" height="76" rx="6" fill="rgba(45,214,138,0.06)" stroke="rgba(45,214,138,0.3)" strokeWidth="1"/>
                  <text x="380" y="128" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">Node.js API</text>
                  <text x="380" y="145" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.65">Migrated from Python</text>
                  <text x="380" y="158" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.65">−30% API latency</text>
                  <text x="380" y="174" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.5">Express + TypeScript</text>

                  <path d="M440 130 L480 110" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arrowG)"/>
                  <path d="M440 162 L480 182" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arrowG)"/>

                  {/* PostgreSQL */}
                  <rect x="480" y="82" width="110" height="52" rx="6" fill="rgba(31,208,208,0.07)" stroke="rgba(31,208,208,0.3)" strokeWidth="1"/>
                  <text x="535" y="102" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="10">PostgreSQL</text>
                  <text x="535" y="118" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.6">Optimised queries</text>
                  <text x="535" y="130" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.5">Redis cache layer</text>

                  {/* Python Log Tool */}
                  <rect x="480" y="160" width="110" height="64" rx="6" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="535" y="180" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">Log Analyser</text>
                  <text x="535" y="197" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.65">Python · structured</text>
                  <text x="535" y="210" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.65">parsing pipeline</text>
                  <text x="535" y="222" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.5">−50% debug time</text>

                  <defs>
                    <marker id="arrowG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Node.js', 'React', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'RBAC', 'Docker', 'JWT Auth'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Decisions ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0 60px' }}>
            <div className="s-tag" style={{ paddingTop: 4 }}>Engineering</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 32 }}>
                Migrated the backend and redesigned access controls without touching production uptime.
              </h2>
              {[
                {
                  title: 'Incremental Python → Node.js migration with zero downtime',
                  body: 'Rather than a big-bang rewrite, the migration ran the Python and Node.js APIs in parallel behind a routing layer. Routes were migrated one service at a time, verified in staging, then cut over. By the time Python was fully decommissioned, Node.js had been running in production for months. API latency dropped 30% — partly from Node\'s async I/O model, partly from query optimisations that the migration surfaced.',
                  accent: 'var(--green)',
                },
                {
                  title: 'Multi-tiered RBAC instead of a flat admin flag',
                  body: 'The old system had one admin boolean. The redesign introduced three tiers — Admin, Support, and Viewer — each with a distinct permission set enforced at the API layer via a policy engine, not just on the frontend. This meant a support agent could action tickets without ever having access to billing or infrastructure settings. Portal adoption jumped 40% after launch, largely because support staff could now do their job without escalating every second action.',
                  accent: 'var(--blue)',
                },
                {
                  title: 'Structured Python log-analysis pipeline to replace grep',
                  body: 'Built a Python tool that ingested raw application logs, parsed them into structured events (request, error, latency, user context), and produced daily summaries plus live alerts for anomalies. What previously required 30 minutes of grep and log correlation became a 2-minute dashboard query. Debugging time dropped 50% and on-call engineers stopped dreading production incidents.',
                  accent: 'var(--violet)',
                },
              ].map((d, i) => (
                <div key={i} style={{ borderLeft: `2px solid ${d.accent}`, paddingLeft: 24, marginBottom: 32 }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--t0)', marginBottom: 8 }}>{d.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--t1)', lineHeight: 1.82 }}>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0 60px' }}>
            <div className="s-tag" style={{ paddingTop: 4 }}>Impact</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { val: '−30', unit: '%', label: 'API latency after Node.js migration and query optimisation', color: 'up' },
                { val: '+40', unit: '%', label: 'portal adoption after RBAC redesign and React UI overhaul', color: 'up' },
                { val: '−50', unit: '%', label: 'debugging time from structured log-analysis tooling', color: 'up' },
                { val: '0',   unit: '',  label: 'production downtime during the Python to Node.js migration', color: 'neu' },
              ].map(m => (
                <div key={m.label} style={{ padding: '24px', border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)' }}>
                  <div className="metric-big"><span className={m.color}>{m.val}</span><span className="unit">{m.unit}</span></div>
                  <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Navigation ── */}
        <section style={{ padding: '60px 48px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/projects/automation-framework" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Prev: Automation Framework
            </Link>
            <Link href="/projects" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--green)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              All Projects
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width:768px){main section{padding-left:24px!important;padding-right:24px!important;}}`}</style>
    </>
  )
}
