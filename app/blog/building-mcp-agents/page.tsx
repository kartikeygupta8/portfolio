import Link from 'next/link'
import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'What Nobody Tells You About MCP Agents in Production',
  description: 'The protocol is the easy part. Idempotency, rollback, and audit trails separate a demo agent from one you can trust with internal operations.',
}

export default function Post() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '120px 48px 72px', borderBottom: '1px solid var(--rule)', background: 'linear-gradient(180deg, rgba(149,124,244,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All posts
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--violet)', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(149,124,244,0.3)', borderRadius: 4, padding: '3px 8px' }}>AI Agents</span>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>May 2026 · 5 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--t0)', marginBottom: 24 }}>
              What Nobody Tells You About<br /><em style={{ color: 'var(--violet)' }}>MCP Agents in Production</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.85 }}>
              The protocol is the easy part. Idempotency, rollback, and audit trails — those are what separate a demo agent from one you can trust with internal operations.
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '72px 48px 120px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="post-body">

              <p>MCP (Model Context Protocol) gets a lot of attention right now for the right reasons: it gives you a standardized contract for connecting LLMs to external tools. Instead of every team building their own bespoke function-calling layer, you have a protocol — defined inputs, defined outputs, defined error shapes. That's genuinely useful.</p>

              <p>But the protocol isn't what breaks production agents. What breaks them is everything the protocol doesn't define: what happens when the agent fires the same tool twice, what happens when step 4 of 6 fails, and who's accountable when the agent does something unexpected.</p>

              <p>We built a production MCP-based workflow engine that runs internal operations autonomously — DB queries, Slack notifications, report generation, record updates. It's been running for about 18 months. Here's what I've learned.</p>

              <h2>Idempotency is not optional</h2>

              <p>Agents retry. Networks drop. Users sometimes click twice. If your MCP tools aren't idempotent, you will send duplicate Slack messages, create duplicate records, or charge a card twice. The LLM doesn't know it already ran that step — it might re-invoke a tool if the previous call's result was ambiguous or the context window got truncated.</p>

              <p>Every tool in our MCP server accepts an optional <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 14, color: 'var(--violet)', background: 'rgba(149,124,244,0.08)', padding: '1px 5px', borderRadius: 3 }}>idempotencyKey</code> parameter. The agent generates a key at the start of each workflow run (timestamp + intent hash). Tool implementations check this key against a Redis set before executing — if it's already there, they return the cached result without re-running. This eliminated an entire category of production incidents.</p>

              <h2>Every tool needs a dry-run mode</h2>

              <p>Before we deploy any new agent workflow, we run it in dry-run mode against production data. Dry-run tools log what they <em>would</em> do without actually doing it — which lets us verify the agent's reasoning chain is correct before it has real-world effects.</p>

              <p>This sounds obvious. It wasn't obvious to us until an agent correctly classified a report generation request and then tried to send that report to every customer on the account list instead of just the requester. The tool would have caught this in dry-run. We hadn't built dry-run yet. We built it the next day.</p>

              <h2>The audit trail is the product</h2>

              <p>The hardest cultural challenge with autonomous agents isn't getting them to work — it's getting people to trust them. The way you earn that trust is not by making the agent more capable; it's by making everything the agent does completely transparent and inspectable.</p>

              <p>Every tool invocation in our system emits a structured event: timestamp, workflow ID, tool name, input parameters (sanitized), result, and the LLM's reasoning for why it called that tool. These events are stored in PostgreSQL and surfaced in an admin dashboard. When something goes wrong — and it will — any team member can pull up the exact sequence of decisions the agent made and understand precisely what happened.</p>

              <p>The audit trail also provides a natural rollback surface. For any workflow that modifies state, we log the before-state alongside the after-state. Rolling back a failed workflow is a query, not a support ticket.</p>

              <h2>The thing MCP doesn't solve</h2>

              <p>MCP gives you a clean interface for tool invocation. It doesn't give you workflow orchestration — how you chain multiple tool calls, how you handle partial failures mid-workflow, how you maintain state across a multi-step operation that might take 30 seconds.</p>

              <p>We built a lightweight workflow engine on top of MCP that handles this. Each workflow is defined as a sequence of steps with explicit success/failure transitions. The engine executes steps sequentially, persists state to the database between steps, and can resume from any checkpoint if the process is interrupted. The LLM drives the tool selection within each step; the workflow engine ensures the overall sequence is correct and recoverable.</p>

              <p>That's the part nobody puts in the MCP tutorial. The protocol is the easy part. The workflow layer is where the engineering actually lives.</p>

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
      code { font-family: var(--font-mono), monospace; }
      @media (max-width: 768px) { main section { padding-left: 24px !important; padding-right: 24px !important; } }
    `}</style>
  )
}
