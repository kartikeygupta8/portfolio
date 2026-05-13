export const SITE = {
  name: 'Kartikey Gupta',
  title: 'Full-Stack & AI Systems Engineer',
  tagline: 'I build production AI systems — backend to UI — and ship them fast.',
  email: 'kartikeygupta8@gmail.com',
  phone: '+91-9695173723',
  github: 'https://github.com/kartikeygupta8',
  linkedin: 'https://www.linkedin.com/in/kartikeyguptadev/',
  location: 'India (UTC+5:30)',
  availability: 'Open to remote roles',
}

export const PROOF = [
  { num: '6', sup: '+', label: 'Years Production' },
  { num: '78', sup: '%', label: 'AI Auto-Resolution' },
  { num: '−30', sup: '%', label: 'API Latency' },
  { num: '95', sup: '%', label: 'ETL Accuracy' },
]

export const TICKER_ITEMS = [
  { dot: 'green', val: '78%',   label: 'AI Ticket Auto-Resolution' },
  { dot: 'blue',  val: '1.2s',  label: 'Median Support Response Time' },
  { dot: 'green', val: '−30%',  label: 'API Latency Reduction' },
  { dot: 'amber', val: '95%',   label: 'ETL Data Accuracy' },
  { dot: 'green', val: '−80%',  label: 'Manual QA Eliminated' },
  { dot: 'blue',  val: '4,800', label: 'Peak Concurrent Sessions' },
  { dot: 'green', val: '99.7%', label: 'System Uptime (90d)' },
  { dot: 'blue',  val: '6+',    label: 'Years Production Engineering' },
]

export const PROJECTS = [
  {
    slug: 'ai-support-platform',
    index: '01',
    badge: 'Live',
    badgeColor: 'green' as const,
    company: 'Evren',
    title: 'AI-Powered Customer Support Platform',
    titleEm: 'Customer Support',
    summary: 'Built a full-stack support automation system combining LLM-based intent classification with autonomous agent workflows. Handles the majority of tier-1 support without human intervention at 4,800 concurrent sessions.',
    stack: ['Claude API', 'OpenAI', 'Ollama', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    chipColors: ['b', 'b', 'b', '', '', '', '', ''],
    metrics: ['78% auto-resolution', '4,800 peak sessions', '99.7% uptime'],
    accent: 'blue' as const,
  },
  {
    slug: 'mcp-workflow-engine',
    index: '02',
    badge: 'Live',
    badgeColor: 'green' as const,
    company: 'Evren',
    title: 'MCP-Based AI Agent Workflow Engine',
    titleEm: 'AI Agent',
    summary: 'Designed a Model Context Protocol server architecture enabling AI agents to autonomously execute multi-step internal workflows — querying databases, triggering notifications, updating records — without human initiation on each step.',
    stack: ['MCP Protocol', 'Claude API', 'OpenAI API', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Lambda'],
    chipColors: ['c', 'v', 'v', '', '', '', ''],
    metrics: ['100% ops automated', '~6h/week reclaimed', '100% audit coverage'],
    accent: 'cyan' as const,
  },
  {
    slug: 'cross-platform-ecosystem',
    index: '03',
    badge: 'Shipped',
    badgeColor: 'blue' as const,
    company: 'Bestpeers',
    title: 'Cross-Platform Product Ecosystem',
    titleEm: 'Product Ecosystem',
    summary: 'Unified product presence across React.js web, React Native iOS, and watchOS — all consuming a single Node.js backend with one auth contract. Led a 3-engineer team. Shipped with 25% performance improvement and 35% fewer bugs.',
    stack: ['React.js', 'React Native', 'Node.js', 'watchOS Bridge', 'MySQL', 'JWT Auth'],
    chipColors: ['b', 'b', '', '', '', ''],
    metrics: ['+25% performance', '−35% bug reports', '1 backend, 3 surfaces'],
    accent: 'violet' as const,
  },
  {
    slug: 'etl-sync-pipeline',
    index: '04',
    badge: 'Production',
    badgeColor: 'green' as const,
    company: 'FIS Global',
    title: 'Fault-Tolerant ETL Sync Pipeline',
    titleEm: 'ETL Sync Pipeline',
    summary: 'Bidirectional sync pipeline between SQL databases and Salesforce CRM with schema validation, retry logic, dead-letter queuing, and a full audit trail. Eliminated weekly manual reconciliation entirely.',
    stack: ['Python', 'SQL', 'Salesforce API', 'Docker', 'Pandas', 'PostgreSQL'],
    chipColors: ['g', '', '', '', '', ''],
    metrics: ['95% data accuracy', '−80% manual QA', 'Zero manual reconciliation'],
    accent: 'green' as const,
  },
  {
    slug: 'automation-framework',
    index: '05',
    badge: 'Production',
    badgeColor: 'green' as const,
    company: 'FIS Global',
    title: 'Selenium WebDriver Automation Framework',
    titleEm: 'Automation Framework',
    summary: 'End-to-end REST API test automation framework built with Selenium WebDriver, covering 90%+ of the application surface. Reduced manual QA effort by 80% and enabled continuous regression testing in CI/CD pipelines.',
    stack: ['Selenium WebDriver', 'Python', 'Maven', 'REST API Testing', 'CI/CD', 'Pytest'],
    chipColors: ['a', '', '', '', '', ''],
    metrics: ['90%+ test coverage', '−80% manual QA', '100% REST API coverage'],
    accent: 'amber' as const,
  },
]

export const EXPERIENCE = [
  {
    id: 'evren',
    company: 'Evren',
    role: 'Full-Stack Developer',
    period: 'Jan 2023 – Present',
    type: 'current' as const,
    hl: 'Built and scaled an AI-first admin and support platform from scratch',
    kpis: [
      { label: '+40% Portal Adoption', color: 'green' },
      { label: '−30% API Latency', color: 'blue' },
      { label: '78% AI Resolution', color: 'green' },
    ],
    points: [
      'Led Python → Node.js backend migration, improving throughput and maintainability across the platform',
      'Integrated OpenAI, Claude API, and Ollama behind a unified LLM gateway for support automation, chatbots, and image/video/voice generation pipelines',
      'Built MCP server-based AI agents that autonomously execute internal workflows — database queries, notifications, report generation',
      'Implemented RBAC and redesigned React UI; query optimization cut API response times by 30%',
    ],
    tags: ['Node.js', 'React', 'Python', 'PostgreSQL', 'Claude API', 'OpenAI', 'MCP', 'Docker', 'AWS'],
  },
  {
    id: 'bestpeers',
    company: 'Bestpeers Infosystem',
    role: 'Full-Stack Developer',
    period: 'Jul 2021 – Dec 2022',
    type: 'past' as const,
    hl: 'Led a 3-engineer team shipping web, mobile, and smartwatch apps on a shared backend',
    kpis: [
      { label: '+25% Performance', color: 'blue' },
      { label: '−35% Bug Reports', color: 'green' },
      { label: 'Team Lead · 3 Devs', color: 'amber' },
    ],
    points: [
      'Built unified product across React.js web, React Native iOS, and watchOS with a single Node.js backend and shared JWT auth contract',
      'Enforced structured code review gates and architecture standards — 35% reduction in bug reports directly attributed to this process',
      'Resolved memory leaks, N+1 queries, and security vulnerabilities during development, not after ship',
      'Applied Redux, Context API, custom hooks, and memoization for performant, scalable frontend architecture',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'Redux', 'MySQL', 'MongoDB', 'watchOS'],
  },
  {
    id: 'fis',
    company: 'FIS Global (Worldpay)',
    role: 'Software Developer',
    period: 'Jan 2020 – Jun 2021',
    type: 'past' as const,
    hl: 'Built automation and data infrastructure handling financial-scale transaction data',
    kpis: [
      { label: '100% API Coverage', color: 'amber' },
      { label: '95% ETL Accuracy', color: 'green' },
      { label: '−80% Manual QA', color: 'blue' },
    ],
    points: [
      'Built Selenium WebDriver automation framework achieving 90%+ test coverage and eliminating 80% of manual QA effort',
      'Developed fault-tolerant ETL pipeline syncing SQL databases with Salesforce CRM — 95% data accuracy, zero manual reconciliation',
      'Optimized complex SQL queries reducing report generation latency significantly on financial-scale datasets',
      'Integrated CI/CD pipeline for automated regression testing on every deployment',
    ],
    tags: ['Python', 'SQL', 'Selenium', 'Salesforce API', 'Maven', 'PostgreSQL', 'CI/CD'],
  },
]

export const STACK_LAYERS = [
  {
    dot: 'violet',
    name: 'AI & LLMs',
    desc: 'Agents · Pipelines · Protocols',
    chips: [
      { label: 'Claude API', color: 'v' },
      { label: 'OpenAI API', color: 'v' },
      { label: 'Ollama', color: 'v' },
      { label: 'MCP Protocol', color: 'c' },
      { label: 'LangChain', color: '' },
      { label: 'Prompt Engineering', color: '' },
    ],
  },
  {
    dot: 'blue',
    name: 'Backend',
    desc: 'APIs · Services · Infrastructure',
    chips: [
      { label: 'Node.js', color: 'b' },
      { label: 'Python', color: 'b' },
      { label: 'Express.js', color: '' },
      { label: 'REST APIs', color: '' },
      { label: 'Microservices', color: '' },
      { label: 'GraphQL', color: '' },
    ],
  },
  {
    dot: 'cyan',
    name: 'Frontend',
    desc: 'Web · Mobile · Cross-platform',
    chips: [
      { label: 'React.js', color: 'c' },
      { label: 'Next.js', color: 'c' },
      { label: 'TypeScript', color: 'b' },
      { label: 'React Native', color: '' },
      { label: 'Tailwind', color: '' },
      { label: 'Framer Motion', color: '' },
    ],
  },
  {
    dot: 'green',
    name: 'Data',
    desc: 'Databases · Pipelines · Caching',
    chips: [
      { label: 'PostgreSQL', color: 'g' },
      { label: 'MySQL', color: '' },
      { label: 'MongoDB', color: 'g' },
      { label: 'Redis', color: '' },
      { label: 'SQL Optimization', color: '' },
      { label: 'ETL Pipelines', color: '' },
    ],
  },
  {
    dot: 'amber',
    name: 'DevOps & Cloud',
    desc: 'AWS · Docker · CI/CD',
    chips: [
      { label: 'AWS (EC2, S3, Lambda)', color: 'a' },
      { label: 'Docker', color: '' },
      { label: 'Git', color: '' },
      { label: 'CI/CD', color: '' },
      { label: 'Nginx', color: '' },
    ],
  },
]

export const PHILOSOPHY = [
  {
    label: 'Iteration',
    title: 'Ship to learn, not to plan',
    body: 'A working system in production teaches more in one week than six weeks of design docs. I bias toward getting something real in front of users, then improving it fast.',
  },
  {
    label: 'Ownership',
    title: 'Own the full stack',
    body: "I don't hand off to \"the frontend team\" or wait on \"the infra team.\" End-to-end ownership means I debug across the entire system and ship without blockers.",
  },
  {
    label: 'AI-native',
    title: 'AI as infrastructure, not a feature',
    body: 'The most durable AI integrations are invisible — woven into the workflow, not bolted on as a chatbot. I design LLM layers as reliable infrastructure with fallbacks, auditing, and graceful degradation.',
  },
  {
    label: 'Clarity',
    title: 'Readable systems over clever ones',
    body: "Code that reads clearly is cheaper to maintain, faster to debug, and easier to hand off. I write for the engineer who comes after me, because that engineer is often me.",
  },
  {
    label: 'Product',
    title: 'Performance is a product decision',
    body: 'Every 100ms matters. Query optimization, caching strategy, and bundle size are product decisions, not engineering afterthoughts. I track them from day one.',
  },
  {
    label: 'Observability',
    title: 'Observability from the start',
    body: 'Structured logging, meaningful error messages, and audit trails are built in, not retrofitted. You cannot fix what you cannot see, and you cannot see what you did not instrument.',
  },
]

export const CERTIFICATIONS = [
  { title: 'Machine Learning with R — Level 1', issuer: 'IBM', year: '2021' },
  { title: 'MongoDB Developer Certification', issuer: 'MongoDB, Inc.', year: '2021' },
  { title: 'Big Data Foundations — Level 2', issuer: 'IBM', year: '2020' },
  { title: 'Big Data & Machine Learning Training', issuer: 'Appin Technologies', year: '2019' },
]

export const PINNED_REPOS = [
  {
    name: 'mcp-workflow-engine',
    desc: 'Model Context Protocol server for internal AI agent workflows — DB, Slack, file ops, REST calls.',
    lang: 'TypeScript',
    langColor: '#3178C6',
    stars: 12,
  },
  {
    name: 'ai-support-platform',
    desc: 'LLM-based customer support automation with multi-provider gateway (Claude, OpenAI, Ollama).',
    lang: 'JavaScript',
    langColor: '#F7DF1E',
    stars: 8,
  },
  {
    name: 'etl-sync-pipeline',
    desc: 'Fault-tolerant bidirectional ETL sync between PostgreSQL and Salesforce with full audit trail.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 5,
  },
]
