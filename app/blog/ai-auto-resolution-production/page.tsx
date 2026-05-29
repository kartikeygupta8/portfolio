import Link from 'next/link'
import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: '78% Auto-Resolution: What the Other 22% Taught Me',
  description: 'The 78% is the easy part. Understanding why 22% of tickets fail reveals the real engineering challenges of production AI support systems.',
}

export default function Post() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '120px 48px 72px', borderBottom: '1px solid var(--rule)', background: 'linear-gradient(180deg, rgba(45,214,138,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All posts
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--green)', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(45,214,138,0.3)', borderRadius: 4, padding: '3px 8px' }}>AI Systems</span>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>Mar 2026 · 4 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--t0)', marginBottom: 24 }}>
              78% Auto-Resolution:<br /><em style={{ color: 'var(--green)' }}>What the Other 22% Taught Me</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.85 }}>
              The 78% is the easy part to build. The 22% that fails — ambiguous intent, emotional escalation, multi-step state — is where the real engineering lives.
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '72px 48px 120px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="post-body">

              <p>When people hear "78% of support tickets auto-resolved by AI," they usually ask one of two things: <em>how do I get that number</em>, or <em>is that number real</em>. The answer to both is the same: focus on the 22%, not the 78%.</p>

              <p>Here's what I mean. The 78% — password resets, status checks, standard troubleshooting steps, billing lookups — those resolve themselves almost by accident once you have decent intent classification and a connected knowledge base. They're high-volume, low-variance, and the LLM handles them confidently on the first try. Building that part took maybe three weeks.</p>

              <p>The next six months were spent on the 22%.</p>

              <h2>The three failure modes</h2>

              <p>After logging and analyzing every ticket that fell through to a human agent, the failures clustered into three categories:</p>

              <p><strong>Ambiguous intent.</strong> The user says something like "it's not working." No entity. No context. Low confidence classification across four possible intents. The naive approach is to ask a clarifying question — but ask the wrong one and you've just added a round-trip that frustrates a user who already wanted to talk to a human. The right approach: when confidence is below threshold, don't guess. Route immediately, but attach the classification attempt and the extracted entities so the human agent doesn't start from zero.</p>

              <p><strong>Emotional escalation.</strong> A user who's been dealing with the same problem for three days doesn't want to be auto-resolved. They want to feel heard. LLMs can detect sentiment reliably, but the product decision — "what do we do when we detect frustration?" — is not a technical decision. We route to human within two turns for any session where compound frustration signals are detected. The AI does the triage; the human does the relationship work.</p>

              <p><strong>Multi-step state.</strong> Some tickets reference previous interactions: "same issue as last week," "the fix you suggested didn't work." Single-turn classification misses these entirely. We added session context hydration — on every incoming ticket, the last three related sessions (matched by email + entity overlap) are loaded into the LLM context window. Resolution rate for this class went from 40% to 71% after that change.</p>

              <h2>The boundary is the product</h2>

              <p>The lesson I keep coming back to: the quality of an AI support system isn't measured by how many tickets it resolves — it's measured by how well it handles the ones it <em>shouldn't</em> resolve. A graceful, context-rich handoff to a human agent is a better product outcome than a failed auto-resolution that leaves the user confused about what just happened.</p>

              <p>We now track two metrics side-by-side: auto-resolution rate (78%) and handoff quality score (based on agent feedback on whether the context provided was useful). The second metric is harder to improve and more meaningful than the first.</p>

              <p>If you're building something similar, design the exit path first. The 78% will mostly take care of itself.</p>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <PostStyles />
    </>
  )
}

function PostStyles() {
  return (
    <style>{`
      .post-body { font-size: 16px; color: var(--t1); line-height: 1.88; }
      .post-body p { margin-bottom: 24px; }
      .post-body h2 {
        font-family: var(--font-sans), system-ui, sans-serif;
        font-size: 22px; font-weight: 600; color: var(--t0);
        letter-spacing: -0.4px; margin: 48px 0 18px;
      }
      .post-body strong { color: var(--t0); font-weight: 600; }
      .post-body em { font-style: italic; }
      @media (max-width: 768px) { main section { padding-left: 24px !important; padding-right: 24px !important; } }
    `}</style>
  )
}
