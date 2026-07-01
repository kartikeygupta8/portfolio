import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'
import { NextProjectLink } from '@/components/ui/NextProjectLink'

export const metadata = {
  title: 'MCP-Based AI Agent Workflow Engine — Kartikey Gupta',
}

export default function McpWorkflowEngine() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(31,208,208,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-g">Live · Production</span>
              <span className="chip">Evren</span>
              <span className="chip">02 / 06</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              MCP-Based AI Agent<br />
              <em style={{ color: 'var(--cyan)' }}>Workflow Engine</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              An MCP (Model Context Protocol) server that gives AI agents structured, audited access to internal systems — exposing curated read endpoints as typed tools. Extended into an agentic layer (powered by Groq's Llama 3.3) that executes actions: scheduling support calls, booking appointments, and guiding users through multi-step service flows without human initiation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '3',    label: 'Agentic Workflow Types' },
                { val: '~6h',  label: 'Reclaimed Per Team / Week' },
                { val: '100%', label: 'Audit Trail Coverage' },
                { val: '0',    label: 'Human Triggers Required' },
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
                Every internal operation required someone to manually trigger it — at scale, this becomes a full-time job.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                Generating daily reports, querying customer data for specific conditions, triggering Slack alerts based on thresholds, updating CRM records after support resolutions — each of these required a human to log in, run the operation, and verify the result.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                The internal team was spending 6+ hours per week on mechanical operations that followed deterministic logic. The goal: give an AI agent the ability to execute these workflows autonomously — with full audit coverage and zero trust violations.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              MCP server as the structured interface between AI and internal systems.
            </h2>

            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">mcp-workflow-engine / architecture</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* Trigger */}
                  <rect x="10" y="118" width="110" height="44" rx="6" fill="rgba(75,139,245,0.1)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="65" y="135" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">Trigger Event</text>
                  <text x="65" y="152" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.6">Schedule / Webhook</text>

                  <path d="M120 140 L155 140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Claude API */}
                  <rect x="155" y="100" width="110" height="80" rx="6" fill="rgba(149,124,244,0.1)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="210" y="125" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">Groq Llama 3.3</text>
                  <text x="210" y="143" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.6">Intent reasoning</text>
                  <text x="210" y="160" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.6">Tool selection</text>
                  <text x="210" y="174" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.55">Plan execution</text>

                  <path d="M265 140 L300 140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* MCP Server — center */}
                  <rect x="300" y="88" width="130" height="104" rx="6" fill="rgba(31,208,208,0.08)" stroke="rgba(31,208,208,0.4)" strokeWidth="1.5"/>
                  <text x="365" y="112" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="11" fontWeight="600">MCP Server</text>
                  <text x="365" y="129" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9" opacity="0.6">Tool registry</text>
                  <text x="365" y="145" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9" opacity="0.6">Auth validation</text>
                  <text x="365" y="161" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9" opacity="0.6">Result schema</text>
                  <text x="365" y="178" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9" opacity="0.55">Audit logging</text>

                  {/* Tool spokes */}
                  {/* DB Query */}
                  <path d="M430 110 L500 60" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="500" y="38" width="110" height="36" rx="5" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.3)" strokeWidth="1"/>
                  <text x="555" y="53" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9">DB Query</text>
                  <text x="555" y="67" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.6">PostgreSQL / AWS</text>

                  {/* Slack */}
                  <path d="M430 128 L500 120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="500" y="100" width="110" height="36" rx="5" fill="rgba(75,139,245,0.08)" stroke="rgba(75,139,245,0.3)" strokeWidth="1"/>
                  <text x="555" y="115" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9">Slack Notify</text>
                  <text x="555" y="129" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="8" opacity="0.6">Webhook dispatch</text>

                  {/* REST */}
                  <path d="M430 152 L500 180" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="500" y="162" width="110" height="36" rx="5" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.3)" strokeWidth="1"/>
                  <text x="555" y="177" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="9">REST Call</text>
                  <text x="555" y="191" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.6">External APIs</text>

                  {/* File ops */}
                  <path d="M430 170 L500 240" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="500" y="222" width="110" height="36" rx="5" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.3)" strokeWidth="1"/>
                  <text x="555" y="238" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9">File / Report</text>
                  <text x="555" y="252" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.6">S3 / Lambda</text>

                  {/* Audit → PostgreSQL */}
                  <path d="M365 192 L365 255" stroke="rgba(255,255,255,0.1)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="300" y="255" width="130" height="36" rx="5" fill="rgba(78,78,104,0.15)" stroke="rgba(78,78,104,0.35)" strokeWidth="1"/>
                  <text x="365" y="270" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="9">Audit Log</text>
                  <text x="365" y="284" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="8" opacity="0.7">PostgreSQL — immutable</text>

                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['MCP Protocol', 'Groq API', 'Llama 3.3', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Lambda'].map(t => (
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
                MCP as the trust boundary between agent and system.
              </h2>
              {[
                {
                  title: 'MCP Protocol for structured tool invocation',
                  body: "The system started by exposing selected internal GET endpoints via MCP — structured read access to operational data for AI queries. The MCP server provides a typed tool registry: every exposed endpoint has a schema-validated contract for input shape, output shape, and permissions required. The agent cannot call what isn't registered, and every call is logged before execution. This foundation of audited access is what made extending to write operations (scheduling, booking) safe enough to deploy to production.",
                  accent: 'var(--cyan)',
                },
                {
                  title: 'Serverless tool execution via AWS Lambda',
                  body: "Each MCP tool is a Lambda function. This means tools are isolated from each other, scale independently, and cannot reach outside their defined IAM permissions. A DB query tool cannot touch Slack; a file operation cannot hit the database. The blast radius of any misbehaving tool is bounded by its function boundary.",
                  accent: 'var(--amber)',
                },
                {
                  title: 'Immutable audit trail — append-only PostgreSQL',
                  body: "Every tool invocation writes an immutable record before execution: who triggered it (the AI session ID), what was called, what parameters, what timestamp. Post-execution appends the result or error. The audit table has no UPDATE or DELETE access for the application layer. If regulators or ops ever ask 'what did the agent do last Tuesday?', the answer is a SQL query.",
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
                { val: '3',   unit: '',  label: 'agentic workflow types automated — appointment scheduling, support call booking, guided user flows', color: 'up' },
                { val: '~6',  unit: 'h', label: 'reclaimed per team per week, per workflow scope', color: 'up' },
                { val: '100', unit: '%', label: 'audit coverage — every invocation logged immutably', color: 'neu' },
                { val: '0',   unit: '',  label: 'human triggers required for scheduled operations', color: 'up' },
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
            <Link href="/projects/ai-support-platform" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Prev: AI Support Platform
            </Link>
            <NextProjectLink
              href="/projects/admin-support-portal"
              label="Next: Admin &amp; Support Portal"
              accent="var(--cyan)"
              accentDim="var(--cyan-d)"
              accentBright="var(--cyan-b)"
            />
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width:768px){main section{padding-left:24px!important;padding-right:24px!important;}}`}</style>
    </>
  )
}
