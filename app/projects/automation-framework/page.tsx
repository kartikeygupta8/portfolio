import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'CRM Regression Automation Framework — Kartikey Gupta',
}

export default function AutomationFramework() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(240,164,41,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-g">Production</span>
              <span className="chip">FIS Global</span>
              <span className="chip">06 / 06</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              Selenium CRM<br />
              <em style={{ color: 'var(--amber)' }}>Automation Framework</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              End-to-end regression automation framework for a large-scale CRM application. Mapped every critical user journey — multi-step forms, data entry workflows, business process flows — and automated them with Selenium WebDriver so the entire CRM surface could be validated on every CI push, with no manual test run required.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '90%+',  label: 'CRM Workflow Coverage' },
                { val: '−80%',  label: 'Manual QA Effort' },
                { val: '<8 min',label: 'Full CI Suite Runtime' },
                { val: '0',     label: 'Manual Regression Cycles' },
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
                Manual CRM regression before every release took days — inconsistent, error-prone, and impossible to scale.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                At FIS Global, every deployment to the CRM required a full manual regression pass across dozens of user workflows — data entry forms, multi-step business processes, reporting flows, and authentication paths. QA engineers executed these by hand before each release. At financial-services scale, even one missed edge case could produce a data integrity issue or a failed customer interaction.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                The manual process was also inconsistent — different engineers ran different subsets depending on what they remembered or had time for. Edge cases outside the standard checklist consistently escaped into production. The goal: build a framework that automated the complete CRM surface, ran on every CI push, and produced a clear pass/fail report without any human involvement.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              Page Object Model — workflow logic decoupled from selectors at every layer.
            </h2>

            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">automation-framework / architecture</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* CI trigger */}
                  <rect x="10" y="110" width="100" height="44" rx="6" fill="rgba(149,124,244,0.1)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="60" y="128" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">CI/CD Trigger</text>
                  <text x="60" y="144" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.6">On every push</text>

                  <path d="M110 132 L150 132" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Test Suite */}
                  <rect x="150" y="88" width="110" height="88" rx="6" fill="rgba(75,139,245,0.08)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="205" y="108" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">Test Suite</text>
                  <text x="205" y="125" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.6">Pytest runner</text>
                  <text x="205" y="141" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.6">Page Objects</text>
                  <text x="205" y="157" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.55">Data fixtures</text>
                  <text x="205" y="170" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="8" opacity="0.45">90%+ CRM coverage</text>

                  <path d="M260 132 L300 132" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Selenium WebDriver */}
                  <rect x="300" y="100" width="120" height="64" rx="6" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.4)" strokeWidth="1.5"/>
                  <text x="360" y="122" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="10">Selenium</text>
                  <text x="360" y="138" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="9" opacity="0.7">WebDriver</text>
                  <text x="360" y="154" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.55">Parallel workers</text>

                  <path d="M420 132 L460 132" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* CRM Application */}
                  <rect x="460" y="100" width="110" height="64" rx="6" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.35)" strokeWidth="1"/>
                  <text x="515" y="118" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">CRM App</text>
                  <text x="515" y="134" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9" opacity="0.6">Browser workflows</text>
                  <text x="515" y="150" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.55">Full journey coverage</text>

                  <path d="M570 132 L610 132" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* Results collector */}
                  <rect x="610" y="100" width="110" height="64" rx="6" fill="rgba(31,208,208,0.08)" stroke="rgba(31,208,208,0.35)" strokeWidth="1"/>
                  <text x="665" y="118" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="10">Report</text>
                  <text x="665" y="134" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="9" opacity="0.6">JUnit XML</text>
                  <text x="665" y="150" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.55">Pass/fail matrix</text>

                  {/* CI output */}
                  <path d="M665 164 L665 210" stroke="rgba(255,255,255,0.1)" strokeWidth="1" markerEnd="url(#arr)"/>
                  <rect x="610" y="210" width="110" height="44" rx="5" fill="rgba(45,214,138,0.06)" stroke="rgba(45,214,138,0.25)" strokeWidth="1"/>
                  <text x="665" y="229" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9">CI Gate</text>
                  <text x="665" y="244" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.6">GitHub Actions / Maven</text>

                  {/* Maven build note */}
                  <rect x="150" y="200" width="110" height="44" rx="5" fill="rgba(240,164,41,0.06)" stroke="rgba(240,164,41,0.2)" strokeWidth="1"/>
                  <text x="205" y="219" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="9">Maven Build</text>
                  <text x="205" y="234" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.6">Dependency mgmt</text>

                  <text x="360" y="184" textAnchor="middle" fill="rgba(240,164,41,0.5)" fontFamily="monospace" fontSize="8">↕ Parallel test workers</text>

                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Selenium WebDriver', 'Python', 'Pytest', 'Maven', 'Page Object Model', 'CI/CD', 'GitHub Actions'].map(t => (
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
                A framework built to last — not just to pass this sprint's tests.
              </h2>
              {[
                {
                  title: 'Page Object Model for CRM workflow maintainability',
                  body: "Every CRM screen and user workflow has a corresponding Python class (Page Object) that encapsulates its selectors and interaction logic. Test logic never touches raw selectors — it calls methods on these objects. When the CRM UI changed (and it changed frequently), only the relevant Page Object needed updating; none of the test cases did. This is what kept the framework maintainable and continuously expanded across 18 months of active CRM development without requiring a rewrite.",
                  accent: 'var(--amber)',
                },
                {
                  title: 'Parallel execution to keep CI runtime under 8 minutes',
                  body: "90%+ coverage generates hundreds of test cases across complex multi-step CRM workflows. Without parallelism, the suite would block CI for 30+ minutes per run, killing deployment velocity. I configured Pytest-xdist with worker counts tuned to the CI environment, bringing end-to-end execution to under 8 minutes. The full regression suite runs on every push to main — developers get a complete pass/fail result before the branch merges.",
                  accent: 'var(--blue)',
                },
                {
                  title: 'External data fixtures decoupled from test logic',
                  body: "Test data lives in external fixture files, not hardcoded in test functions. This kept the framework portable: the same test suite runs against staging and production environments by swapping the config, not rewriting tests. It also let the QA team expand coverage by adding fixture entries without writing Python — lowering the barrier for non-developers to contribute new test scenarios as new CRM features shipped.",
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
                { val: '90',  unit: '%+', label: 'CRM workflow coverage — every major user journey automated end-to-end', color: 'up' },
                { val: '−80', unit: '%',  label: 'manual QA effort eliminated — regression runs automatically on every CI push', color: 'up' },
                { val: '<8',  unit: 'min',label: 'full suite CI runtime via parallel test workers — no blocking releases', color: 'neu' },
                { val: '0',   unit: '',   label: 'manual regression cycles required per release after deployment', color: 'neu' },
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
            <Link href="/projects/etl-sync-pipeline" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Prev: ETL Sync Pipeline
            </Link>
            <Link href="/projects" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--amber)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
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
