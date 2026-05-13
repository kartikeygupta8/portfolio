'use client'

import Link from 'next/link'

interface Props {
  href: string
  label: string
  accent: string
  accentDim: string
  accentBright: string
}

export function NextProjectLink({ href, label, accent, accentDim, accentBright }: Props) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: 12,
        color: accent,
        textDecoration: 'none',
        letterSpacing: '0.08em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        padding: '12px 22px',
        background: accentDim,
        border: `1px solid ${accentBright}`,
        borderRadius: 8,
        transition: 'gap 0.22s, opacity 0.22s',
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.gap = '14px'; el.style.opacity = '0.80' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.gap = '9px'; el.style.opacity = '1' }}
    >
      {label}
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </Link>
  )
}
