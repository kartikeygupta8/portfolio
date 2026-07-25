import type { Metadata } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono, Syne } from 'next/font/google'
import { VersionBadge } from '@/components/ui/VersionBadge'
import './globals.css'

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const display = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kartikeygupta.co'),
  title: 'Kartikey Gupta — Senior Full-Stack Developer & GenAI Engineer',
  description:
    'Full-Stack Developer with 7 years of experience building scalable AI-first systems. Node.js, React, Groq Llama 3.3, MCP agents, agentic workflows. 72% AI auto-resolution without human intervention. Open to senior & lead roles.',
  keywords: [
    'Senior Full-Stack Developer', 'Senior Full-Stack Engineer', 'Backend Engineer',
    'GenAI Engineer', 'AI Integration Engineer', 'LLM Engineer', 'MCP Agent Developer',
    'RAG Pipeline Engineer', 'Node.js Developer', 'React Developer', 'Next.js Developer',
    'React Native Developer', 'Python Developer', 'TypeScript Developer',
    'Full-Stack Developer for hire', 'Freelance Full-Stack Developer', 'Remote Developer India',
    'Hire Full-Stack Developer', 'Senior Developer Remote', 'AI Product Engineer',
    'System Design', 'Distributed Systems', 'LLM integration', 'MCP servers', 'MCP agents',
    'RAG pipelines', 'AI Agents', 'Agentic Workflows', 'Node.js', 'React', 'Python',
    'Groq', 'Llama 3.3', 'Claude API', 'LangChain', 'Prompt Engineering',
    'Technical Lead', 'Engineering Lead', 'tech lead India', 'AI engineer India',
  ],
  authors: [{ name: 'Kartikey Gupta', url: 'https://www.kartikeygupta.co' }],
  alternates: { canonical: 'https://www.kartikeygupta.co' },
  openGraph: {
    title: 'Kartikey Gupta — Senior Full-Stack Developer & GenAI Engineer',
    description: 'Full-Stack Developer with 7 years building scalable AI-first systems — MCP agents, RAG pipelines, Node.js, React. 72% AI auto-resolution without human intervention. Open to senior & lead roles.',
    url: 'https://www.kartikeygupta.co',
    siteName: 'Kartikey Gupta',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kartikey Gupta — Senior Full-Stack Developer & GenAI Engineer',
    description: 'Full-Stack Developer with 7 years building scalable AI-first systems. MCP agents, RAG pipelines, Node.js, React. Open to senior & lead roles.',
    creator: '@kartikeyguptadev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} ${mono.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': 'https://www.kartikeygupta.co/#person',
                name: 'Kartikey Gupta',
                givenName: 'Kartikey',
                familyName: 'Gupta',
                jobTitle: 'Senior Full-Stack Developer & GenAI Engineer',
                description: 'Senior Full-Stack Developer and GenAI Engineer with 7 years building production AI systems — MCP agents, RAG pipelines, agentic workflows. 72% AI auto-resolution shipped at 99.7% uptime. Open to remote senior and lead engineering roles.',
                url: 'https://www.kartikeygupta.co',
                email: 'kartikeygupta8@gmail.com',
                telephone: '+91-9695173723',
                image: 'https://www.kartikeygupta.co/opengraph-image',
                sameAs: [
                  'https://www.linkedin.com/in/kartikeyguptadev/',
                  'https://github.com/kartikeygupta8',
                ],
                knowsAbout: [
                  'Full-Stack Web Development', 'AI Integration', 'GenAI Engineering',
                  'LLM Integration', 'MCP Protocol', 'RAG Pipelines', 'AI Agents',
                  'Agentic Workflows', 'Node.js', 'React', 'Next.js', 'TypeScript',
                  'Python', 'React Native', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
                  'AWS', 'Docker', 'System Design', 'Technical Leadership',
                  'Microservices', 'REST APIs', 'GraphQL', 'ETL Pipelines', 'SSIS',
                  'Salesforce API', 'Selenium', 'CI/CD',
                ],
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'Senior Full-Stack Developer',
                  description: 'Designs and ships production AI-first web applications — LLM integration, MCP agents, backend APIs, React frontends. Leads engineering teams across the full stack.',
                  occupationLocation: { '@type': 'Country', name: 'India' },
                  skills: 'Node.js, React, Next.js, TypeScript, Python, Groq API, Llama 3.3, MCP Protocol, RAG Pipelines, AI Agents, MySQL, PostgreSQL, MongoDB, Redis, AWS, Docker, System Design',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'professional inquiries',
                  email: 'kartikeygupta8@gmail.com',
                  telephone: '+91-9695173723',
                  availableLanguage: ['English', 'Hindi'],
                },
                workLocation: {
                  '@type': 'VirtualLocation',
                  name: 'Remote — Available Worldwide (UTC+5:30)',
                },
                seeks: {
                  '@type': 'Demand',
                  name: 'Senior Full-Stack or Lead Engineering Role',
                  description: 'Open to remote senior engineer and tech lead roles in product companies building AI-first systems.',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Services offered by Kartikey Gupta',
                itemListElement: [
                  {
                    '@type': 'ListItem', position: 1,
                    item: {
                      '@type': 'Service',
                      name: 'Full-Stack Web Development',
                      description: 'End-to-end web application development — Node.js backend, React/Next.js frontend, TypeScript, MySQL/PostgreSQL. Production-ready, scalable architecture.',
                      provider: { '@type': 'Person', '@id': 'https://www.kartikeygupta.co/#person' },
                    },
                  },
                  {
                    '@type': 'ListItem', position: 2,
                    item: {
                      '@type': 'Service',
                      name: 'AI & GenAI Integration',
                      description: 'LLM integration into production systems — Groq Llama 3.3, Claude, Ollama. RAG pipelines, MCP agents, agentic workflows, streaming completions, function calling.',
                      provider: { '@type': 'Person', '@id': 'https://www.kartikeygupta.co/#person' },
                    },
                  },
                  {
                    '@type': 'ListItem', position: 3,
                    item: {
                      '@type': 'Service',
                      name: 'Backend Engineering & API Design',
                      description: 'Scalable REST APIs, GraphQL, microservices, database design, Redis caching, message queues. Node.js and Python.',
                      provider: { '@type': 'Person', '@id': 'https://www.kartikeygupta.co/#person' },
                    },
                  },
                  {
                    '@type': 'ListItem', position: 4,
                    item: {
                      '@type': 'Service',
                      name: 'React Native Mobile Development',
                      description: 'Cross-platform mobile applications using React Native — iOS and Android from a single codebase, shared backend integration.',
                      provider: { '@type': 'Person', '@id': 'https://www.kartikeygupta.co/#person' },
                    },
                  },
                  {
                    '@type': 'ListItem', position: 5,
                    item: {
                      '@type': 'Service',
                      name: 'Technical Leadership & Architecture',
                      description: 'Engineering team leadership, system architecture, code reviews, technical roadmaps, developer mentorship. Led 3–4 engineer teams.',
                      provider: { '@type': 'Person', '@id': 'https://www.kartikeygupta.co/#person' },
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <VersionBadge />
      </body>
    </html>
  )
}
