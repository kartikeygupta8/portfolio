'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#projects',    label: 'Projects' },
  { href: '#experience',  label: 'Experience' },
  { href: '#skills',      label: 'Skills' },
  { href: '#about',       label: 'About' },
  { href: '#contact',     label: 'Contact' },
]

export function Navigation() {
  const [stuck,       setStuck]       = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else            document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
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
        {/* Logo */}
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

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--t1)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t0)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t1)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#contact"
            className="hidden-mobile"
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
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Hire Me
          </a>

          <button
            className="show-mobile"
            onClick={() => setMobileOpen(v => !v)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--t0)',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 199,
              background: 'rgba(7,7,9,0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--rule)',
              padding: '24px 32px 32px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--t1)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--t0)',
                textDecoration: 'none',
                padding: '12px 20px',
                borderRadius: 'var(--r)',
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        nav { padding: 0 48px; }
        @media (max-width: 768px) { nav { padding: 0 24px !important; } }
      `}</style>
    </>
  )
}
