import Link from 'next/link'
import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Why We Run Three LLMs in Production',
  description: 'Groq Llama 3.3 for speed, Claude for judgment, Ollama for free deterministic tasks. Routing correctly is the optimization — not picking the smartest model.',
}

export default function Post() {
  return (
    <>
      <ProjectNav />
      <main>

        {/* Hero */}
        <section style={{ padding: '120px 48px 72px', borderBottom: '1px solid var(--rule)', background: 'linear-gradient(180deg, rgba(75,139,245,0.04) 0%, transparent 100%)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)', textDecoration: 'none', marginBottom: 40, letterSpacing: '0.08em' }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              All posts
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--blue)', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid rgba(75,139,245,0.3)', borderRadius: 4, padding: '3px 8px' }}>Architecture</span>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)' }}>Apr 2026 · 6 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 400, letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--t0)', marginBottom: 24 }}>
              Why We Run <em style={{ color: 'var(--blue)' }}>Three LLMs</em><br />in Production
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t1)', lineHeight: 1.85 }}>
              Groq Llama 3.3 for speed, Claude for judgment, Ollama for free deterministic tasks. Routing correctly across them is the optimization — not picking the smartest model.
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '72px 48px 120px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="post-body">

              <p>The standard advice when building an LLM-powered product is: pick a model, stick with it, tune your prompts. That advice made sense in 2023. In 2025, running a single provider in production at any meaningful scale is a mistake — not because the models aren't good enough, but because different tasks have different price/performance profiles, and you're leaving a lot on the table by treating them the same.</p>

              <p>We run three models in production. Here's the decision behind each one.</p>

              <h2>Groq Llama 3.3: the workhorse</h2>

              <p>Llama 3.3 70B on Groq handles the bulk of the pipeline: intent classification, entity extraction, and response generation for tier-1 support. Two properties made it the default route. First, speed — Groq's inference is fast enough that we stream completions token-by-token into the chat UI and the user perceives the response as instant. Our median response time is 1.2 seconds end-to-end, and most of that budget is retrieval, not inference. Second, cost — at support-ticket volume, the per-call economics of an open-weight model on Groq are a fraction of frontier-model pricing for quality that's more than sufficient when the task is well-scoped.</p>

              <p>The discipline that makes this work: Llama only gets tasks with clear instructions and grounded context. Classification with a fixed label set, response generation with retrieved knowledge-base passages attached. We don't ask it open-ended questions and hope.</p>

              <h2>Claude: judgment and nuance</h2>

              <p>Claude handles the tasks that require genuine reasoning under ambiguity: escalation decisions, sentiment-aware handling of frustrated users, and nuanced intent disambiguation when the classifier's confidence is low. The key property isn't raw capability — it's calibration. When a ticket is genuinely ambiguous, we want a model that says "I'm not sure whether this is a billing question or a technical question" rather than one that picks one and runs with it at 95% confidence.</p>

              <p>The tradeoff: it's the most expensive call in our pipeline. We route to it selectively — it sees roughly one in ten requests, and only the ones where the cost of a confident wrong answer is high.</p>

              <h2>Ollama: fast, free, and deterministic</h2>

              <p>We run a local Ollama instance for everything that's high-volume, low-stakes, and deterministic. FAQ lookups, template slot-filling, response formatting, simple yes/no classification on clean input. These calls have sub-100ms latency and zero API cost.</p>

              <p>The important constraint: Ollama only gets tasks with narrow input space and well-validated outputs. We don't trust a small local model with anything ambiguous. The routing layer enforces this — if the local model's confidence score is below threshold, the task is re-run through Llama 3.3 on Groq.</p>

              <h2>The routing layer</h2>

              <p>The gateway works like this: every LLM call goes through a central dispatcher that takes a task type, input, and latency budget. The dispatcher has a routing table — a set of rules that maps task × confidence × budget to a provider. High-volume deterministic tasks go to Ollama. Classification and response generation go to Llama 3.3 on Groq. Anything requiring judgment, or where confidence stays below threshold after two attempts, escalates to Claude.</p>

              <p>The practical effect at 4,800 concurrent sessions: the majority of calls resolve on Ollama or Groq, and only the hard tail reaches the frontier model. The infrastructure cost for the LLM layer is a fraction of what it would be if everything went through a frontier model by default.</p>

              <p>The single-model approach is simpler to build. The multi-provider approach is significantly cheaper to run and more resilient — when one provider has an outage or a degraded API, the others absorb the load. At scale, that resilience is worth the routing complexity.</p>

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
