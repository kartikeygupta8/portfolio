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
    'Full-Stack Developer with 7 years of experience building scalable AI-first systems. Node.js, React, Claude API, MCP agents, RAG pipelines. 78% AI auto-resolution at 4,800 concurrent sessions. Open to senior & lead roles.',
  keywords: [
    'Senior Full-Stack Engineer', 'Backend Engineer', 'GenAI Engineer', 'AI Integration Engineer',
    'System Design', 'Distributed Systems', 'LLM integration', 'MCP servers', 'MCP agents',
    'RAG pipelines', 'AI Agents', 'Node.js', 'React', 'Python', 'TypeScript',
    'OpenAI', 'Claude API', 'LangChain', 'Prompt Engineering',
    'remote engineer India', 'AI product engineer', 'tech lead',
  ],
  authors: [{ name: 'Kartikey Gupta', url: 'https://www.kartikeygupta.co' }],
  openGraph: {
    title: 'Kartikey Gupta — Senior Full-Stack Developer & GenAI Engineer',
    description: 'Full-Stack Developer with 7 years building scalable AI-first systems — MCP agents, RAG pipelines, Node.js, React. 78% AI auto-resolution at 4,800 peak sessions. Open to senior & lead roles.',
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
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kartikey Gupta',
              jobTitle: 'Senior Full-Stack Developer & GenAI Engineer',
              url: 'https://www.kartikeygupta.co',
              email: 'kartikeygupta8@gmail.com',
              sameAs: [
                'https://www.linkedin.com/in/kartikeyguptadev/',
                'https://github.com/kartikeygupta8',
              ],
            }),
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
