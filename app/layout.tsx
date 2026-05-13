import type { Metadata } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono, Syne } from 'next/font/google'
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
  title: 'Kartikey Gupta — Full-Stack & AI Systems Engineer',
  description:
    '6+ years building production AI systems, LLM pipelines, and full-stack products end-to-end. Open to remote roles at high-growth startups.',
  keywords: [
    'Full-Stack Engineer', 'AI Engineer', 'LLM integration', 'MCP servers',
    'Node.js', 'React', 'TypeScript', 'OpenAI', 'Claude API',
    'remote engineer India', 'AI product engineer',
  ],
  authors: [{ name: 'Kartikey Gupta', url: 'https://github.com/kartikeygupta8' }],
  openGraph: {
    title: 'Kartikey Gupta — Full-Stack & AI Systems Engineer',
    description: 'Ships production AI systems end-to-end. 6+ years, open to remote roles.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${display.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
