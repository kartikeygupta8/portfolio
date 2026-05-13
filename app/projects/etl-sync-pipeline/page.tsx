import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'
import { NextProjectLink } from '@/components/ui/NextProjectLink'

export const metadata = {
  title: 'Fault-Tolerant ETL Sync Pipeline — Kartikey Gupta',
}

export default function EtlSyncPipeline() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(45,214,138,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-g">Production</span>
              <span className="chip">FIS Global</span>
              <span className="chip">04 / 05</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              Fault-Tolerant<br />
              <em style={{ color: 'var(--green)' }}>ETL Sync Pipeline</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              Bidirectional sync pipeline between SQL databases and Salesforce CRM with schema validation, retry logic, dead-letter queuing, and a full audit trail. Eliminated weekly manual reconciliation at a financial-scale operation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '95%',  label: 'Data Accuracy' },
                { val: '−80%', label: 'Manual QA Effort' },
                { val: '0',    label: 'Manual Reconciliation' },
                { val: '100%', label: 'Failure Auditability' },
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
                Weekly manual reconciliation between SQL databases and Salesforce — error-prone and unscalable at financial data volumes.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                At FIS Global, transaction data lived in internal SQL databases while customer-facing records lived in Salesforce. Every week, a team member would run a set of comparison queries, identify discrepancies, and manually patch records in one or both systems. At financial scale, even a 1% error rate represented thousands of records.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                The manual process also had no audit trail — if a reconciliation introduced an error, there was no way to trace when, what, or why a record changed. The goal: replace the entire process with a fault-tolerant automated pipeline that handled failures explicitly and logged everything.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              Extract → Validate → Transform → Load, with failure paths as first-class citizens.
            </h2>

            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">etl-sync-pipeline / architecture</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* SQL Source */}
                  <rect x="10" y="100" width="100" height="44" rx="6" fill="rgba(75,139,245,0.1)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="60" y="118" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">SQL DB</text>
                  <text x="60" y="135" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="8" opacity="0.6">Source of truth</text>

                  {/* Arrow */}
                  <path d="M110 122 L148 122" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Extract */}
                  <rect x="148" y="100" width="90" height="44" rx="6" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.3)" strokeWidth="1"/>
                  <text x="193" y="118" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">Extract</text>
                  <text x="193" y="133" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.6">Pandas / Python</text>

                  <path d="M238 122 L278 122" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Validate */}
                  <rect x="278" y="100" width="100" height="44" rx="6" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.3)" strokeWidth="1"/>
                  <text x="328" y="118" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="10">Validate</text>
                  <text x="328" y="133" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.6">Schema + type check</text>

                  {/* Validation failure → DLQ */}
                  <path d="M328 144 L328 195" stroke="rgba(240,84,84,0.5)" strokeWidth="1" markerEnd="url(#arr-r)"/>
                  <rect x="278" y="195" width="100" height="44" rx="5" fill="rgba(240,84,84,0.07)" stroke="rgba(240,84,84,0.3)" strokeWidth="1"/>
                  <text x="328" y="213" textAnchor="middle" fill="#F05454" fontFamily="monospace" fontSize="9">Dead-Letter Q</text>
                  <text x="328" y="229" textAnchor="middle" fill="#F05454" fontFamily="monospace" fontSize="8" opacity="0.6">Retry + alert</text>

                  <path d="M378 122 L418 122" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Transform */}
                  <rect x="418" y="100" width="100" height="44" rx="6" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.3)" strokeWidth="1"/>
                  <text x="468" y="118" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">Transform</text>
                  <text x="468" y="133" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.6">Map to SF schema</text>

                  <path d="M518 122 L558 122" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Salesforce */}
                  <rect x="558" y="100" width="110" height="44" rx="6" fill="rgba(31,208,208,0.08)" stroke="rgba(31,208,208,0.35)" strokeWidth="1"/>
                  <text x="613" y="118" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="10">Salesforce CRM</text>
                  <text x="613" y="133" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.6">REST API upsert</text>

                  {/* Audit trail */}
                  <path d="M613 144 L613 195" stroke="rgba(255,255,255,0.08)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="558" y="195" width="110" height="44" rx="5" fill="rgba(78,78,104,0.15)" stroke="rgba(78,78,104,0.35)" strokeWidth="1"/>
                  <text x="613" y="213" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="9">Audit Log</text>
                  <text x="613" y="229" textAnchor="middle" fill="#4E4E68" fontFamily="monospace" fontSize="8" opacity="0.7">PostgreSQL — immutable</text>

                  {/* Retry annotation */}
                  <path d="M328 239 L193 239 L193 144" stroke="rgba(240,164,41,0.25)" strokeWidth="1" strokeDasharray="4 3"/>
                  <text x="255" y="252" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.6">Exponential backoff retry</text>

                  {/* Bidirectional note */}
                  <path d="M558 130 L110 130" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
                  <text x="340" y="72" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontFamily="monospace" fontSize="8">← Bidirectional sync (SF changes → SQL)</text>

                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                    <marker id="arr-r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(240,84,84,0.5)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Python', 'SQL', 'Salesforce API', 'Docker', 'Pandas', 'PostgreSQL'].map(t => (
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
                Building failures into the design — not bolting them on after.
              </h2>
              {[
                {
                  title: 'Dead-letter queue with exponential backoff',
                  body: "Records that fail schema validation or the Salesforce upsert don't crash the pipeline — they go to a dead-letter queue with a full record of why they failed. The retry scheduler uses exponential backoff with a max of 5 attempts before alerting a human. This means the pipeline handles transient network issues automatically, and only real data problems surface to the team.",
                  accent: 'var(--red)',
                },
                {
                  title: 'Schema validation before any transformation',
                  body: "The biggest source of data corruption in ETL pipelines is late validation — transforming first, discovering type mismatches after the load. I inverted this: every extracted record is validated against the target schema before any transformation begins. Invalid records are quarantined immediately. 95% accuracy isn't a measurement of success rate — it's a statement that 5% of source records had genuine data quality issues in the upstream system.",
                  accent: 'var(--amber)',
                },
                {
                  title: 'Immutable audit trail for every write',
                  body: "Every Salesforce upsert writes a before/after snapshot to a PostgreSQL audit table before the write executes. If a reconciliation introduces an error, we can trace exactly when it happened, what the record looked like before and after, and which pipeline run caused it. This was the primary ask from the compliance team and turned what was previously a black box into a fully observable system.",
                  accent: 'var(--green)',
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
                { val: '95',  unit: '%', label: 'data accuracy — remaining 5% are upstream data quality issues', color: 'up' },
                { val: '−80', unit: '%', label: 'manual QA effort — reconciliation runs automatically on schedule', color: 'up' },
                { val: '0',   unit: '',  label: 'manual reconciliation sessions required post-deployment', color: 'neu' },
                { val: '100', unit: '%', label: 'write auditability — every Salesforce change is traceable', color: 'neu' },
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
            <Link href="/projects/cross-platform-ecosystem" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Prev: Cross-Platform Ecosystem
            </Link>
            <NextProjectLink
              href="/projects/automation-framework"
              label="Next: Automation Framework"
              accent="var(--green)"
              accentDim="var(--green-d)"
              accentBright="var(--green-b)"
            />
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width:768px){main section{padding-left:24px!important;padding-right:24px!important;}}`}</style>
    </>
  )
}
