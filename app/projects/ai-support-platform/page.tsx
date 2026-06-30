import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'
import { NextProjectLink } from '@/components/ui/NextProjectLink'

export const metadata = {
  title: 'AI-Powered Customer Support Platform — Kartikey Gupta',
}

export default function AISupportPlatform() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(75,139,245,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-g">Live · Production</span>
              <span className="chip">Evren</span>
              <span className="chip">01 / 05</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              AI-Powered Customer<br />
              <em style={{ color: 'var(--blue)' }}>Support Platform</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              A full-stack support automation system combining LLM-based intent classification with autonomous agent workflows. Handles the majority of tier-1 support without human intervention — at scale.
            </p>
            {/* Impact metrics bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '38%',   label: 'Auto-Resolution Rate' },
                { val: '1.2s',  label: 'Median Response Time' },
                { val: '4,800', label: 'Peak Concurrent Sessions' },
                { val: '99.7%', label: 'System Uptime (90d)' },
              ].map((m, i) => (
                <div key={m.label} style={{ flex: 1, minWidth: 140, padding: '24px 28px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', background: 'var(--bg1)' }}>
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
                100% of tier-1 support was manual — slow, inconsistent, and unscalable.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                Every customer ticket required a human agent to read, classify, and respond. At 4,800 concurrent sessions, this created bottlenecks, inconsistent response quality, and an agent team under constant pressure. Tier-1 queries — password resets, status checks, standard troubleshooting — consumed the same human time as genuinely complex escalations.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                The goal: automate tier-1 resolution entirely without degrading response quality, while keeping humans in the loop for escalations that required judgment.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              Multi-layer LLM pipeline with autonomous resolution paths.
            </h2>

            {/* Architecture SVG */}
            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">ai-support-platform / architecture</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* Ticket Ingress */}
                  <rect x="10" y="130" width="110" height="44" rx="6" fill="rgba(75,139,245,0.1)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="65" y="148" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">Ticket Ingress</text>
                  <text x="65" y="164" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.6">Web / Email / API</text>

                  {/* Arrow */}
                  <path d="M120 152 L158 152" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* LLM Gateway */}
                  <rect x="158" y="110" width="120" height="84" rx="6" fill="rgba(149,124,244,0.1)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="218" y="138" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">LLM Gateway</text>
                  <text x="218" y="155" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.6">Claude · OpenAI</text>
                  <text x="218" y="170" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.6">Ollama</text>
                  <text x="218" y="185" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.55">Intent classify</text>

                  {/* Arrow to Router */}
                  <path d="M278 152 L316 152" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Router diamond */}
                  <path d="M360 110 L400 152 L360 194 L320 152 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <text x="360" y="155" textAnchor="middle" fill="rgba(242,241,249,0.8)" fontFamily="monospace" fontSize="9">Route?</text>

                  {/* Auto-resolve path — top */}
                  <path d="M360 110 L360 60 L480 60" stroke="rgba(45,214,138,0.4)" strokeWidth="1" markerEnd="url(#arr-g)"/>
                  <rect x="480" y="38" width="130" height="44" rx="6" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.32)" strokeWidth="1"/>
                  <text x="545" y="56" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">Auto-Resolve</text>
                  <text x="545" y="73" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9" opacity="0.6">Response gen → Send</text>

                  {/* Human escalate path — bottom */}
                  <path d="M360 194 L360 244 L480 244" stroke="rgba(240,164,41,0.4)" strokeWidth="1" markerEnd="url(#arr-a)"/>
                  <rect x="480" y="222" width="130" height="44" rx="6" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.32)" strokeWidth="1"/>
                  <text x="545" y="240" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="10">Human Queue</text>
                  <text x="545" y="257" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="9" opacity="0.6">Priority + context</text>

                  {/* Audit trail — both paths → audit */}
                  <path d="M610 60 L680 60 L680 152" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <path d="M610 244 L680 244 L680 172" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <rect x="642" y="130" width="88" height="44" rx="6" fill="rgba(78,78,104,0.15)" stroke="rgba(78,78,104,0.4)" strokeWidth="1"/>
                  <text x="686" y="148" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="9">Audit Log</text>
                  <text x="686" y="163" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="9" opacity="0.7">PostgreSQL</text>

                  {/* Labels */}
                  <text x="360" y="94" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.7">Tier-1 (38%)</text>
                  <text x="360" y="216" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.7">Complex (62%)</text>

                  {/* Redis session note */}
                  <rect x="140" y="220" width="100" height="36" rx="5" fill="rgba(31,208,208,0.07)" stroke="rgba(31,208,208,0.25)" strokeWidth="1"/>
                  <text x="190" y="237" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9">Redis Sessions</text>
                  <text x="190" y="250" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.6">4,800 concurrent</text>

                  {/* Arrowhead markers */}
                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                    <marker id="arr-g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(45,214,138,0.5)" strokeWidth="1"/>
                    </marker>
                    <marker id="arr-a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(240,164,41,0.5)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Claude API', 'OpenAI', 'Ollama', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker'].map(t => (
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
                Three decisions that made the system production-ready.
              </h2>

              {[
                {
                  title: 'Multi-provider LLM gateway',
                  body: "Rather than hard-coding one LLM provider, I built a unified gateway that routes to Claude, OpenAI, or Ollama based on query type, cost, and latency requirements. This removed single-provider lock-in and let us tune each route for accuracy vs. cost. Claude handles nuanced escalation decisions; Ollama serves deterministic FAQ lookups at near-zero cost.",
                  accent: 'var(--violet)',
                },
                {
                  title: 'Intent classification before agent invocation',
                  body: 'Every ticket is classified before any agent work begins. A lightweight classifier tags intent, confidence score, and entity extraction in <200ms. Only high-confidence tier-1 intents proceed to autonomous resolution — everything ambiguous routes to a human with the classification context pre-attached, reducing the agent\'s ramp-up time by ~60%.',
                  accent: 'var(--blue)',
                },
                {
                  title: 'Redis session store for 4,800 concurrent conversations',
                  body: 'Each conversation thread is a stateful session held in Redis with a 30-minute TTL. This lets any backend instance pick up any conversation without re-hydrating from the database, enabling horizontal scaling. The session schema is also the audit record — no separate write path, no consistency issues.',
                  accent: 'var(--cyan)',
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
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20 }}>
                {[
                  { val: '38%',     unit: '',    label: 'of tickets auto-resolved without human intervention', color: 'up' },
                  { val: '1.2',     unit: 's',   label: 'median response time vs. 4-6 minute baseline', color: 'up' },
                  { val: '4,800',   unit: '',    label: 'peak concurrent sessions without degradation', color: 'neu' },
                  { val: '99.7',    unit: '%',   label: 'uptime over a 90-day production window', color: 'up' },
                ].map(m => (
                  <div key={m.label} style={{ padding: '24px', border: '1px solid var(--rule)', borderRadius: 10, background: 'var(--bg)' }}>
                    <div className="metric-big">
                      <span className={m.color}>{m.val}</span>
                      <span className="unit">{m.unit}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Navigation ── */}
        <section style={{ padding: '60px 48px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/projects" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <NextProjectLink
              href="/projects/mcp-workflow-engine"
              label="Next: MCP Workflow Engine"
              accent="var(--blue)"
              accentDim="var(--blue-d)"
              accentBright="var(--blue-b)"
            />
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          .case-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
