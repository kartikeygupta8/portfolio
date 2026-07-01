export type Post = {
  slug:     string
  title:    string
  excerpt:  string
  date:     string
  readTime: string
  tag:      string
  tagColor: string
}

export const POSTS: Post[] = [
  {
    slug:     'ai-auto-resolution-production',
    title:    '38% Auto-Resolution: What the Other 62% Taught Me',
    excerpt:  'The 38% is the easy part to build. The 62% that still needs human handling — ambiguous intent, emotional escalation, multi-step state — is where the real engineering lives.',
    date:     'Mar 2026',
    readTime: '4 min',
    tag:      'AI Systems',
    tagColor: 'var(--green)',
  },
  {
    slug:     'llm-gateway-architecture',
    title:    'Why We Run Three LLMs in Production',
    excerpt:  "Groq Llama 3.3 for speed, Claude for judgment, Ollama for free deterministic tasks. Routing correctly across them is the optimization — not picking the smartest model.",
    date:     'Apr 2026',
    readTime: '6 min',
    tag:      'Architecture',
    tagColor: 'var(--blue)',
  },
  {
    slug:     'building-mcp-agents',
    title:    'What Nobody Tells You About MCP Agents in Production',
    excerpt:  'The protocol is the easy part. Idempotency, rollback, and audit trails — those are what separate a demo agent from one you can trust with internal operations.',
    date:     'May 2026',
    readTime: '5 min',
    tag:      'AI Agents',
    tagColor: 'var(--violet)',
  },
]
