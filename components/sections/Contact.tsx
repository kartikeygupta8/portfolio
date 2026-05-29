'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { SITE } from '@/lib/constants'

// ── Data ─────────────────────────────────────────────────────────────────────

const CHANNELS = [
  {
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    accent: 'var(--blue)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-10 7L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'kartikeyguptadev',
    href: SITE.linkedin,
    accent: 'var(--cyan)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'kartikeygupta8',
    href: SITE.github,
    accent: 'var(--violet)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: SITE.location,
    href: null,
    accent: 'var(--green)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

// ── Grid background — rounded tiles + gap + Gaussian glow, no hard boundary ─────

const CELL   = 44   // grid pitch
const GAP    = 5    // dark gap between tiles
const CORNER = 5    // tile border-radius
const SIGMA  = CELL * 2.8   // Gaussian spread (~124 px)

type MouseState = { x: number; y: number; active: boolean }

function ContactBackground({ mouseRef }: { mouseRef: React.RefObject<MouseState> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cellAlpha = useRef(new Map<string, number>())

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!
    let raf: number
    let frame = 0
    let lastDraw = 0
    let visible  = true
    const TARGET_MS = 1000 / 30

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (!visible || document.hidden || now - lastDraw < TARGET_MS) return
      lastDraw = now
      frame++
      const t  = frame * 0.016
      const W  = canvas.width
      const H  = canvas.height
      const { x: mx, y: my, active } = mouseRef.current
      const aMap = cellAlpha.current

      ctx.clearRect(0, 0, W, H)

      // ── 1. Gaussian targets — no hard cutoff ─────────────────────────────────
      const targets = new Map<string, number>()
      if (active) {
        const range = Math.ceil((SIGMA * 3) / CELL)   // ~9 cells each way
        const ci0   = Math.floor(mx / CELL) - range
        const cj0   = Math.floor(my / CELL) - range
        const ci1   = Math.floor(mx / CELL) + range + 1
        const cj1   = Math.floor(my / CELL) + range + 1

        for (let ci = ci0; ci <= ci1; ci++) {
          for (let cj = cj0; cj <= cj1; cj++) {
            const cx   = ci * CELL + CELL * 0.5
            const cy   = cj * CELL + CELL * 0.5
            const dist = Math.hypot(cx - mx, cy - my)
            const base = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA))
            if (base < 0.008) continue

            const p1    = ci * 3.71 + cj * 5.13
            const p2    = ci * 7.29 - cj * 2.87
            const noise = (
              Math.sin(p1 + t * 1.8)         * 0.45 +
              Math.sin(p2 - t * 1.3)         * 0.35 +
              Math.sin((p1 + p2) * 0.5 + t)  * 0.20
            ) * 0.5 + 0.5

            targets.set(`${ci},${cj}`, base * (0.60 + 0.40 * noise))
          }
        }
      }

      // ── 2. Per-cell smooth lerp ───────────────────────────────────────────────
      const dead: string[] = []
      for (const [key, cur] of aMap) {
        const tgt  = targets.get(key) ?? 0
        const next = tgt > 0 ? cur + (tgt - cur) * 0.15 : cur * 0.87
        if (next < 0.005 && tgt === 0) { dead.push(key); continue }
        aMap.set(key, next)
      }
      dead.forEach(k => aMap.delete(k))
      for (const key of targets.keys()) {
        if (!aMap.has(key)) aMap.set(key, 0)
      }

      // ── 3. Rounded tiles — colour maps alpha → lava palette ──────────────────
      const half = GAP * 0.5
      const sz   = CELL - GAP

      for (const [key, alpha] of aMap) {
        if (alpha < 0.005) continue
        const [ci, cj] = key.split(',').map(Number)
        const px = ci * CELL + half
        const py = cj * CELL + half
        if (px + sz < 0 || px > W || py + sz < 0 || py > H) continue

        // dark-red → orange → yellow-white as alpha rises
        const r = Math.min(255, Math.floor(alpha * 290))
        const g = Math.min(185, Math.floor(Math.max(0, alpha - 0.38) * 310))
        const b = Math.min(55,  Math.floor(Math.max(0, alpha - 0.72) * 220))

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`
        ctx.beginPath()
        // roundRect is Canvas 2D Level 2 — well-supported in modern browsers
        ;(ctx as CanvasRenderingContext2D & { roundRect: (...a: unknown[]) => void })
          .roundRect(px, py, sz, sz, CORNER)
        ctx.fill()
      }

      // ── 4. Fixed grid — drawn last, very dim (tiles define structure) ─────────
      ctx.lineWidth   = 1
      ctx.strokeStyle = 'rgba(242,241,249,0.036)'
      for (let gx = 0; gx <= W + CELL; gx += CELL) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke()
      }
      for (let gy = 0; gy <= H + CELL; gy += CELL) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke()
      }

    }

    const io = new IntersectionObserver(
      entries => { visible = entries[0]?.isIntersecting ?? true },
      { threshold: 0 }
    )
    io.observe(canvas)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    raf = requestAnimationFrame(draw)

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect() }
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Corner orbs — red + blue for contrast */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', right: '-5%', top: '-12%',    width: '38%', height: '38%', borderRadius: '50%', background: 'rgba(220,45,0,0.22)',  filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', left:  '-5%', bottom: '-12%', width: '38%', height: '38%', borderRadius: '50%', background: 'rgba(200,35,0,0.22)',  filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', left:  '-5%', top: '-12%',    width: '30%', height: '30%', borderRadius: '50%', background: 'rgba(30,60,210,0.18)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', right: '-5%', bottom: '-12%', width: '30%', height: '30%', borderRadius: '50%', background: 'rgba(25,50,200,0.18)', filter: 'blur(90px)' }} />
      </div>
    </div>
  )
}

// ── KG personal logo mark ─────────────────────────────────────────────────────

function KGLogo() {
  return (
    <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* pill container */}
      <rect x="0.5" y="0.5" width="41" height="27" rx="5.5"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" />

      {/* K — vertical bar + upper/lower arms from midpoint */}
      <path
        d="M8 5.5 L8 22.5 M8 14 L15 5.5 M8 14 L15 22.5"
        stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* G — 310° arc (sweep=0, large) + horizontal bar */}
      {/* centre (28, 14) radius 6.2 — start at −38°: (28+4.88, 14−3.82)=(32.9,10.2) end at 0°: (34.2,14) */}
      <path
        d="M32.9 10.2 A6.2 6.2 0 1 0 34.2 14 M34.2 14 L28.5 14"
        stroke="#ff7c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Contact() {
  const ref      = useRef<HTMLElement>(null)
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const mouseRef = useRef<MouseState>({ x: -1, y: -1, active: false })

  return (
    <section
      id="contact"
      ref={ref}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top, active: true }
      }}
      onMouseLeave={() => { mouseRef.current = { ...mouseRef.current, active: false } }}
      style={{
        position: 'relative',
        minHeight: 'calc(100svh - 88px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '96px 48px 100px',
        overflow: 'hidden',
        borderTop: '1px solid var(--rule)',
        background: 'var(--bg)',
      }}
    >
      <ContactBackground mouseRef={mouseRef} />

      {/* Content — single centred column */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>

        <motion.div
          className="s-tag"
          style={{ marginBottom: 20, display: 'inline-block' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.div>

        <motion.h2
          className="s-h2"
          style={{ marginBottom: 16 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          Let's build <em>something real.</em>
        </motion.h2>

        <motion.p
          style={{ fontSize: 16, color: 'var(--t1)', lineHeight: 1.82, marginBottom: 36 }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Open to full-time remote roles, contract work, and conversations about
          hard technical problems. If you need someone who ships production AI
          systems end-to-end — let's talk.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 48 }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <a
            href={`mailto:${SITE.email}`}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--bg)', background: 'var(--t0)',
              textDecoration: 'none', padding: '13px 28px',
              borderRadius: 'var(--r)', transition: 'opacity 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: 9,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.84')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Send a Message
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href={SITE.linkedin}
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--t1)', textDecoration: 'none', padding: '13px 28px',
              border: '1px solid var(--rule2)', borderRadius: 'var(--r)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t0)'; el.style.borderColor = 'var(--rule2)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t1)'; el.style.borderColor = 'var(--rule2)' }}
          >
            LinkedIn ↗
          </a>
          <a
            href="/resume.pdf"
            download="Kartikey-Gupta-Resume.pdf"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--t1)', textDecoration: 'none', padding: '13px 28px',
              border: '1px solid var(--rule2)', borderRadius: 'var(--r)',
              transition: 'all 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t0)'; el.style.borderColor = 'var(--t2)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--t1)'; el.style.borderColor = 'var(--rule2)' }}
          >
            Resume
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>

        {/* Channel cards — 4 across */}
        <div className="contact-cards">
          {CHANNELS.map((ch, i) => {
            const card = (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.36 + i * 0.07 }}
                style={{
                  padding: '18px 16px',
                  border: '1px solid var(--rule)',
                  borderRadius: 10,
                  background: 'rgba(7,7,9,0.68)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  textAlign: 'left',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: ch.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  if (ch.href) {
                    e.currentTarget.style.borderColor = ch.accent
                    e.currentTarget.style.background = 'rgba(12,12,18,0.82)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--rule)'
                  e.currentTarget.style.background = 'rgba(7,7,9,0.68)'
                }}
              >
                <div style={{ color: ch.accent, marginBottom: 8 }}>{ch.icon}</div>
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 3 }}>{ch.label}</div>
                <div style={{ fontSize: 11, color: 'var(--t1)', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.value}</div>
              </motion.div>
            )
            return ch.href ? (
              <a key={ch.label} href={ch.href} target={ch.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                {card}
              </a>
            ) : (
              <div key={ch.label}>{card}</div>
            )
          })}
        </div>

      </div>

      {/* Footer bar — pinned to bottom, no border */}
      <div
        className="contact-footer"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          padding: '18px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          zIndex: 1,
        }}
      >
        {/* Logo + year */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <KGLogo />
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t2)' }}>
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {[
            { label: 'GitHub',   href: SITE.github },
            { label: 'LinkedIn', href: SITE.linkedin },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 11,
                color: 'var(--t1)',
                textDecoration: 'none',
                padding: '5px 12px',
                border: '1px solid var(--rule2)',
                borderRadius: 6,
                transition: 'color 0.2s, border-color 0.2s',
                letterSpacing: '0.06em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--t0)'
                el.style.borderColor = 'var(--t2)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--t1)'
                el.style.borderColor = 'var(--rule2)'
              }}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        @media (max-width: 640px) {
          #contact { padding: 72px 24px 120px !important; }
          .contact-cards { grid-template-columns: repeat(2, 1fr); }
          #contact .contact-footer { padding: 16px 24px !important; flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  )
}
