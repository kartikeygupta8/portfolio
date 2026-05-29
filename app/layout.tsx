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
  title: 'Kartikey Gupta — Full-Stack & GenAI Engineer',
  description:
    '6+ years shipping production AI systems, LLM pipelines, and full-stack products end-to-end. 78% AI auto-resolution at 4,800 concurrent sessions. Open to remote roles.',
  keywords: [
    'Full-Stack Engineer', 'Backend Engineer', 'GenAI Engineer', 'AI Integration Engineer',
    'LLM integration', 'MCP servers', 'Node.js', 'React', 'Python', 'TypeScript',
    'OpenAI', 'Claude API', 'LangChain', 'RAG', 'AI Agents',
    'remote engineer India', 'AI product engineer',
  ],
  authors: [{ name: 'Kartikey Gupta', url: 'https://www.kartikeygupta.co' }],
  openGraph: {
    title: 'Kartikey Gupta — Full-Stack & GenAI Engineer',
    description: 'Ships production AI systems end-to-end. 78% AI auto-resolution, 4,800 peak sessions. 6+ years, open to remote.',
    url: 'https://www.kartikeygupta.co',
    siteName: 'Kartikey Gupta',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kartikey Gupta — Full-Stack & GenAI Engineer',
    description: 'Ships production AI systems end-to-end. 78% AI auto-resolution, 4,800 peak sessions. Open to remote.',
    creator: '@kartikeyguptadev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${display.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <VersionBadge />
      </body>
    </html>
  )
}
