import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { template: '%s — Kartikey Gupta', default: 'Writing — Kartikey Gupta' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
