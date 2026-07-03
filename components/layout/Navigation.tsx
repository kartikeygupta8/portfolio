'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'about',      label: 'About' },
  { id: 'writing',    label: 'Writing' },
  { id: 'contact',    label: 'Contact' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

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
            display: 'flex', alignItems: 'center', gap: 10,
            textDecoration: 'none',
          }}
        >
          <Image
            src="/avatar.png"
            alt="Kartikey Gupta"
            width={30}
            height={30}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '1.5px solid rgba(75,139,245,0.4)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 13,
              letterSpacing: '0.04em',
              color: 'var(--t0)',
            }}
          >
            kartikey<span style={{ color: 'var(--blue)' }}>.co</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--t1)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t0)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t1)')}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="/resume.pdf"
            download="Kartikey-Gupta-Resume.pdf"
            className="hidden-mobile"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--t1)',
              textDecoration: 'none',
              padding: '9px 18px',
              borderRadius: 'var(--r)',
              border: '1px solid var(--rule2)',
              transition: 'color 0.2s, border-color 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t0)'; el.style.borderColor = 'var(--t2)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t1)'; el.style.borderColor = 'var(--rule2)' }}
          >
            Resume
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden-mobile"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--bg)',
              background: 'var(--t0)',
              border: 'none',
              cursor: 'pointer',
              padding: '9px 20px',
              borderRadius: 'var(--r)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Hire Me
          </button>

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
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setMobileOpen(false) }}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--t1)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo('contact'); setMobileOpen(false) }}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--t0)',
                border: 'none',
                cursor: 'pointer',
                padding: '12px 20px',
                borderRadius: 'var(--r)',
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              Hire Me
            </button>
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
