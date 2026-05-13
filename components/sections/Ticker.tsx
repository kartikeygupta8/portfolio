'use client'

import { useState, useEffect } from 'react'
import { TICKER_ITEMS } from '@/lib/constants'

const DOT_COLORS: Record<string, string> = {
  green: 'var(--green)',
  blue:  'var(--blue)',
  amber: 'var(--amber)',
}

export function Ticker() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      style={{
        position: 'fixed', top: 60, left: 0, right: 0, zIndex: 199,
        height: 34, background: 'var(--bg1)',
        borderBottom: '1px solid var(--rule)',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 0,
          animation: 'ticker 48s linear infinite',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '0 28px', borderRight: '1px solid var(--rule)',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 10, letterSpacing: '0.06em',
            }}
          >
            <span
              style={{
                width: 5, height: 5, borderRadius: '50%',
                background: DOT_COLORS[item.dot] ?? 'var(--blue)',
                animation: 'blink 2.2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            <span style={{ color: 'var(--t0)', fontWeight: 500 }}>{item.val}</span>
            <span style={{ color: 'var(--t2)' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
