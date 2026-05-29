import Link from 'next/link'
import { ProjectNav } from '@/components/layout/ProjectNav'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Why We Run Three LLMs in Production',
  description: 'Claude for judgment, GPT-4o for structured output, Ollama for cheap deterministic tasks. Routing correctly is the optimization — not picking the smartest model.',
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
              Claude for judgment, GPT-4o for structured output, Ollama for cheap deterministic tasks. Routing correctly across them is the optimization — not picking the smartest model.
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '72px 48px 120px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="post-body">

              <p>The standard advice when building an LLM-powered product is: pick a model, stick with it, tune your prompts. That advice made sense in 2023. In 2025, running a single provider in production at any meaningful scale is a mistake — not because the models aren't good enough, but because different tasks have different price/performance profiles, and you're leaving a lot on the table by treating them the same.</p>

              <p>We run three models in production. Here's the decision behind each one.</p>

              <h2>Claude: judgment and nuance</h2>

              <p>Claude handles every task that requires genuine reasoning under ambiguity: escalation decisions, sentiment-aware response generation, nuanced intent disambiguation, and anything where the cost of a confident wrong answer is high. The key property isn't raw capability — it's the model's tendency to express uncertainty when it's uncertain, rather than hallucinating confidently.</p>

              <p>For support automation, this matters enormously. When a ticket is genuinely ambiguous, we want a model that says "I'm not sure whether this is a billing question or a technical question" rather than one that picks one and runs with it at 95% confidence. Claude's calibration on edge cases is better than anything else we've tested for this use case.</p>

              <p>The tradeoff: latency and cost. Claude is the most expensive call in our pipeline and has the highest p95 latency. We route to it selectively.</p>

              <h2>GPT-4o: structured output</h2>

              <p>Every place we need reliable JSON — entity extraction, ticket classification, field parsing, form auto-fill — GPT-4o with structured output mode is faster and cheaper than Claude for the same accuracy. When you have a well-defined schema and the input is reasonably clean, GPT-4o's structured output mode produces correct JSON on the first try in a way that's extremely consistent.</p>

              <p>We use this heavily in the classification layer. Every incoming ticket goes through GPT-4o for entity extraction and intent tagging before anything else touches it. This call costs about $0.0004 per ticket and takes 200–400ms. At 4,800 concurrent sessions, that adds up fast — and the cost discipline of routing these calls away from Claude matters.</p>

              <h2>Ollama: fast, free, and deterministic</h2>

              <p>We run a local Ollama instance (Mistral 7B for most tasks, Llama 3 for a few) for everything that's high-volume, low-stakes, and deterministic. FAQ lookups, template slot-filling, response formatting, simple yes/no classification on clean input. These calls have sub-100ms latency and zero API cost.</p>

              <p>The important constraint: Ollama calls only get tasks with narrow input space and well-validated outputs. We don't trust a 7B model with anything ambiguous. The routing layer enforces this — if a task's confidence score on the Ollama classification is below 0.88, it gets re-run through GPT-4o.</p>

              <h2>The routing layer</h2>

              <p>The gateway works like this: every LLM call goes through a central dispatcher that takes a task type, input, and latency budget. The dispatcher has a routing table — a set of rules that maps task × confidence × budget to a provider. Simple tasks with high confidence go to Ollama. Structured extraction goes to GPT-4o. Anything requiring judgment, or where confidence is below threshold after two attempts, goes to Claude.</p>

              <p>The practical effect at 4,800 concurrent sessions: about 60% of calls go to Ollama (free), 30% to GPT-4o, and 10% to Claude. The infrastructure cost for the LLM layer is roughly a third of what it would be if everything went through Claude or GPT-4o.</p>

              <p>The single-model approach is simpler to build. The multi-provider approach is significantly cheaper to run and more resilient — when one provider has an outage or a degraded API, the other two absorb the load. At scale, that resilience is worth the routing complexity.</p>

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
