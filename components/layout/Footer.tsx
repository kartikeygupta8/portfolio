'use client'

import { SITE } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        padding: '26px 48px',
        borderTop: '1px solid var(--rule)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 11,
          color: 'var(--t2)',
        }}
      >
        © {year} {SITE.name}
      </span>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11,
            color: 'var(--t2)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--t0)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
        >
          GitHub ↗
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11,
            color: 'var(--t2)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--t0)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
        >
          LinkedIn ↗
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 20px 24px; flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
