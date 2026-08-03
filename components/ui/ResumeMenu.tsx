'use client'

import { useEffect, useRef, useState } from 'react'

const RESUME_OPTIONS = [
  { id: 'node',       label: 'Node.js',      sub: 'Backend / full-stack focus',   href: '/resume-node.pdf',       filename: 'Kartikey-Gupta-Resume-Node.pdf' },
  { id: 'node-react', label: 'Node + React', sub: 'Full-stack focus',             href: '/resume-node-react.pdf', filename: 'Kartikey-Gupta-Resume-Node-React.pdf' },
  { id: 'python',     label: 'Python',       sub: 'Backend / AI-ML focus',        href: '/resume-python.pdf',     filename: 'Kartikey-Gupta-Resume-Python.pdf' },
  { id: 'ai',         label: 'AI',           sub: 'GenAI / LLM systems focus',    href: '/resume-ai.pdf',         filename: 'Kartikey-Gupta-Resume-AI.pdf' },
] as const

export function ResumeMenu({
  align = 'right',
  children,
}: {
  align?: 'left' | 'right'
  children: (props: { open: boolean; toggle: () => void }) => React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex' }}>
      {children({ open, toggle: () => setOpen(v => !v) })}

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            [align]: 0,
            zIndex: 300,
            minWidth: 200,
            background: 'var(--bg2, #0f0f12)',
            border: '1px solid var(--rule2)',
            borderRadius: 'var(--r)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
            overflow: 'hidden',
          }}
        >
          {RESUME_OPTIONS.map((opt, i) => (
            <a
              key={opt.id}
              href={opt.href}
              download={opt.filename}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '10px 14px',
                textDecoration: 'none',
                color: 'var(--t0)',
                borderBottom: i < RESUME_OPTIONS.length - 1 ? '1px solid var(--rule)' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--rule)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.04em' }}>
                {opt.label}
              </span>
              <span style={{ fontSize: 10.5, color: 'var(--t2)' }}>{opt.sub}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
