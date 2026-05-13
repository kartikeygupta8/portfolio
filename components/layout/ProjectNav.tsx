'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function ProjectNav() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 60,
        display: 'flex', alignItems: 'center',
        padding: '0 48px',
        justifyContent: 'space-between',
        transition: 'background 0.4s, border-color 0.4s',
        background: stuck ? 'rgba(7,7,9,0.94)' : 'transparent',
        backdropFilter: stuck ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: stuck ? 'blur(24px)' : 'none',
        borderBottom: `1px solid ${stuck ? 'var(--rule)' : 'transparent'}`,
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 13,
          letterSpacing: '0.04em',
          color: 'var(--t0)',
          textDecoration: 'none',
        }}
      >
        kartikey<span style={{ color: 'var(--blue)' }}>.dev</span>
      </Link>

      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--bg)',
          background: 'var(--t0)',
          textDecoration: 'none',
          padding: '9px 20px',
          borderRadius: 'var(--r)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.82')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
      >
        Home
      </Link>

      <style>{`
        @media (max-width: 768px) { nav { padding: 0 24px !important; } }
      `}</style>
    </nav>
  )
}
