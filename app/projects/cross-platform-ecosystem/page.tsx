import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer }     from '@/components/layout/Footer'
import Link from 'next/link'
import { NextProjectLink } from '@/components/ui/NextProjectLink'

export const metadata = {
  title: 'Cross-Platform Healthcare Monitoring Platform — Kartikey Gupta',
}

export default function CrossPlatformEcosystem() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--rule)', padding: '120px 48px 80px', background: 'linear-gradient(180deg, rgba(149,124,244,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All Projects
            </Link>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <span className="chip chip-b">Shipped</span>
              <span className="chip">Bestpeers Infosystem</span>
              <span className="chip">04 / 06</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 24, color: 'var(--t0)' }}>
              Cross-Platform<br />
              <em style={{ color: 'var(--violet)' }}>Healthcare Monitoring Platform</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.82, maxWidth: 680, marginBottom: 48 }}>
              A unified healthcare monitoring platform spanning a custom smartwatch, React Native mobile app, and React.js web dashboard — all consuming a single Node.js backend with one auth contract. The smartwatch continuously monitors heart rate, SpO2, and GPS; the mobile app displays health metrics and manages sync; the web portal gives administrators real-time visibility across users.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--rule2)', borderRadius: 10, overflow: 'hidden' }}>
              {[
                { val: '+25%',  label: 'Performance Improvement' },
                { val: '−35%',  label: 'Bug Report Reduction' },
                { val: '3',     label: 'Surfaces, 1 Backend' },
                { val: '24/7',  label: 'Background Health Monitoring' },
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
                Three product surfaces had evolved into three separate systems — tripling maintenance and fragmenting the user experience.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 16 }}>
                The healthcare monitoring product spanned three surfaces — a custom smartwatch collecting real-time health data (heart rate, SpO2, GPS), a React Native mobile app, and a web dashboard. Each had its own data fetching logic, auth flows, and interpretation of the health domain. A schema change to how health metrics were stored required three separate frontend updates. Bugs manifested differently per platform.
              </p>
              <p style={{ fontSize: 15, color: 'var(--t1)', lineHeight: 1.82 }}>
                The mandate: ship all three surfaces from a single backend and a unified auth contract — without a full rewrite timeline.
              </p>
            </div>
          </div>
        </section>

        {/* ── Architecture ── */}
        <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--rule)', background: 'var(--bg1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="s-tag" style={{ marginBottom: 32 }}>Architecture</div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 28, fontWeight: 400, color: 'var(--t0)', lineHeight: 1.3, marginBottom: 40 }}>
              One backend. One auth contract. Three production surfaces.
            </h2>

            <div style={{ border: '1px solid var(--rule2)', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
              <div className="browser-bar">
                <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                <span className="browser-url">cross-platform-ecosystem / architecture</span>
              </div>
              <div style={{ padding: '40px 32px', background: 'var(--bg)' }}>
                <svg viewBox="0 0 760 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* Web */}
                  <rect x="30" y="30" width="110" height="50" rx="6" fill="rgba(31,208,208,0.08)" stroke="rgba(31,208,208,0.35)" strokeWidth="1"/>
                  <text x="85" y="52" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="10">React.js Web</text>
                  <text x="85" y="70" textAnchor="middle" fill="#1FD0D0" fontFamily="monospace" fontSize="8" opacity="0.6">Redux · Context API</text>

                  {/* iOS */}
                  <rect x="30" y="115" width="110" height="50" rx="6" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="85" y="137" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">React Native iOS</text>
                  <text x="85" y="155" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="8" opacity="0.6">Shared RN codebase</text>

                  {/* watchOS */}
                  <rect x="30" y="200" width="110" height="50" rx="6" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.35)" strokeWidth="1"/>
                  <text x="85" y="222" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="10">Smartwatch App</text>
                  <text x="85" y="240" textAnchor="middle" fill="#F0A429" fontFamily="monospace" fontSize="8" opacity="0.6">BLE + Custom SDK</text>

                  {/* Shared API client */}
                  <path d="M140 55 L220 120" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <path d="M140 140 L220 140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <path d="M140 225 L220 165" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

                  <rect x="220" y="106" width="120" height="68" rx="6" fill="rgba(75,139,245,0.08)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
                  <text x="280" y="128" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="10">API Client</text>
                  <text x="280" y="145" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.6">Shared contract</text>
                  <text x="280" y="162" textAnchor="middle" fill="#4B8BF5" fontFamily="monospace" fontSize="9" opacity="0.55">JWT Auth header</text>

                  <path d="M340 140 L390 140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#arr)"/>

                  {/* JWT Auth layer */}
                  <rect x="390" y="86" width="120" height="56" rx="6" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.35)" strokeWidth="1"/>
                  <text x="450" y="109" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="10">JWT Auth</text>
                  <text x="450" y="127" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9" opacity="0.6">Unified contract</text>

                  <rect x="390" y="158" width="120" height="56" rx="6" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
                  <text x="450" y="180" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="10">REST API</text>
                  <text x="450" y="198" textAnchor="middle" fill="#957CF4" fontFamily="monospace" fontSize="9" opacity="0.6">Node.js / Express</text>

                  <path d="M510 114 L570 114" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <path d="M510 186 L570 186" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <path d="M570 114 L570 140" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <path d="M570 186 L570 160" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

                  {/* MySQL */}
                  <rect x="590" y="120" width="110" height="60" rx="6" fill="rgba(78,78,104,0.15)" stroke="rgba(78,78,104,0.4)" strokeWidth="1"/>
                  <text x="645" y="144" textAnchor="middle" fill="#9494B0" fontFamily="monospace" fontSize="10">MySQL</text>
                  <text x="645" y="162" textAnchor="middle" fill="#9494B0" fontFamily="monospace" fontSize="8" opacity="0.7">Single source of truth</text>

                  {/* Performance note */}
                  <rect x="220" y="210" width="120" height="44" rx="5" fill="rgba(45,214,138,0.06)" stroke="rgba(45,214,138,0.2)" strokeWidth="1"/>
                  <text x="280" y="228" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="9">+25% perf</text>
                  <text x="280" y="244" textAnchor="middle" fill="#2DD68A" fontFamily="monospace" fontSize="8" opacity="0.6">Memoization + N+1 fix</text>

                  <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['React.js', 'React Native', 'Node.js', 'Smartwatch SDK', 'MySQL', 'JWT Auth', 'Redux'].map(t => (
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
                Architectural bets that turned three separate systems into one.
              </h2>
              {[
                {
                  title: 'Shared API client with a single JWT auth contract',
                  body: "Every surface — web, iOS, watchOS — uses the same API client library with the same JWT header shape. Auth is handled once, at the client level, and attached to every request identically. This eliminated the three separate auth implementations that were causing divergent session behavior and made security auditing a single code path rather than three.",
                  accent: 'var(--green)',
                },
                {
                  title: 'React Native as the cross-platform mobile layer',
                  body: "Rather than maintaining separate iOS and Android codebases, React Native gave us one JavaScript codebase for the mobile layer. The custom smartwatch integrates via a BLE-based SDK bridge — the watch sends health data (heart rate, SpO2, GPS) to the mobile app, which aggregates and syncs to the backend. No separate backend integration on the watch; all data flows through the mobile layer, keeping the backend contract clean and consistent across all three surfaces.",
                  accent: 'var(--violet)',
                },
                {
                  title: 'Structured code review gates to enforce the architecture',
                  body: "The shared architecture only works if no one builds around it. I instituted a review checklist that every PR had to pass: no direct API calls outside the shared client, no inline auth logic, no platform-specific business logic. The 35% reduction in bug reports was a direct result of catching architectural violations at review time rather than post-ship.",
                  accent: 'var(--amber)',
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
                { val: '+25', unit: '%', label: 'performance improvement from memoization and N+1 fixes', color: 'up' },
                { val: '−35', unit: '%', label: 'bug reports over 18 months via structured review gates', color: 'up' },
                { val: '3',   unit: '',  label: 'product surfaces shipped from a single Node.js backend', color: 'neu' },
                { val: '24/7',unit: '',  label: 'background health monitoring — HR, SpO2, GPS synced automatically across all surfaces', color: 'neu' },
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
            <Link href="/projects/admin-support-portal" style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 7 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Prev: Admin &amp; Support Portal
            </Link>
            <NextProjectLink
              href="/projects/etl-sync-pipeline"
              label="Next: ETL Sync Pipeline"
              accent="var(--violet)"
              accentDim="var(--violet-d)"
              accentBright="var(--violet-b)"
            />
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width:768px){main section{padding-left:24px!important;padding-right:24px!important;}}`}</style>
    </>
  )
}
