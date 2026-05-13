'use client'

import { useState } from 'react'

const FONTS = [
  { name: 'Exo 2',          label: 'Exo 2 (current)',   family: '"Exo 2"',           weight: 800, spacing: '-2px'  },
  { name: 'Space Grotesk',  label: 'Space Grotesk',      family: '"Space Grotesk"',   weight: 700, spacing: '-3px'  },
  { name: 'Syne',           label: 'Syne',               family: '"Syne"',            weight: 800, spacing: '-2px'  },
  { name: 'Bebas Neue',     label: 'Bebas Neue',         family: '"Bebas Neue"',      weight: 400, spacing: '2px'   },
  { name: 'Orbitron',       label: 'Orbitron',           family: '"Orbitron"',        weight: 800, spacing: '-1px'  },
  { name: 'Rajdhani',       label: 'Rajdhani',           family: '"Rajdhani"',        weight: 700, spacing: '1px'   },
  { name: 'Michroma',       label: 'Michroma',           family: '"Michroma"',        weight: 400, spacing: '2px'   },
  { name: 'Oxanium',        label: 'Oxanium',            family: '"Oxanium"',         weight: 800, spacing: '-1px'  },
]

const GOOGLE_URL =
  'https://fonts.googleapis.com/css2?family=' +
  [
    'Exo+2:wght@800',
    'Space+Grotesk:wght@700',
    'Syne:wght@800',
    'Bebas+Neue',
    'Orbitron:wght@800',
    'Rajdhani:wght@700',
    'Michroma',
    'Oxanium:wght@800',
  ].join('&family=') +
  '&display=swap'

export function FontPicker() {
  const [active, setActive] = useState(0)
  const [open, setOpen]     = useState(true)

  const font = FONTS[active]

  return (
    <>
      {/* Google Fonts load */}
      <link rel="stylesheet" href={GOOGLE_URL} />

      {/* Toggle tab */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          position: 'fixed', bottom: open ? 300 : 20, right: 24, zIndex: 9999,
          fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.1em',
          padding: '6px 14px', borderRadius: 6,
          background: '#1a1a2e', border: '1px solid rgba(75,139,245,0.4)',
          color: '#4B8BF5', cursor: 'pointer', transition: 'bottom 0.3s',
        }}
      >
        {open ? '✕ close' : '🔤 font picker'}
      </button>

      {/* Panel */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
          background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 32px 28px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>

          {/* Live name preview */}
          <div style={{ textAlign: 'center', lineHeight: 0.88, userSelect: 'none' }}>
            <div style={{
              fontFamily: font.family + ', system-ui, sans-serif',
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: font.weight,
              letterSpacing: font.spacing,
              background: 'linear-gradient(120deg, #F2F1F9 40%, rgba(75,139,245,0.92) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'inline-block',
            }}>
              Kartikey
            </div>
            <div style={{
              fontFamily: font.family + ', system-ui, sans-serif',
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: font.weight,
              letterSpacing: font.spacing,
              background: 'linear-gradient(120deg, rgba(149,124,244,0.95) 0%, #F2F1F9 65%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'block',
            }}>
              Gupta
            </div>
          </div>

          {/* Slider row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Prev */}
            <button
              onClick={() => setActive(i => (i - 1 + FONTS.length) % FONTS.length)}
              style={arrowBtn}
            >‹</button>

            {/* Font tiles */}
            <div style={{ flex: 1, display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 0', scrollbarWidth: 'none' }}>
              {FONTS.map((f, i) => (
                <button
                  key={f.name}
                  onClick={() => setActive(i)}
                  style={{
                    flexShrink: 0,
                    padding: '8px 16px',
                    borderRadius: 6,
                    border: `1px solid ${i === active ? 'rgba(75,139,245,0.7)' : 'rgba(255,255,255,0.08)'}`,
                    background: i === active ? 'rgba(75,139,245,0.12)' : 'rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                    transition: 'border-color 0.18s, background 0.18s',
                    minWidth: 110,
                  }}
                >
                  <span style={{
                    fontFamily: f.family + ', system-ui, sans-serif',
                    fontWeight: f.weight,
                    fontSize: 18,
                    letterSpacing: f.spacing,
                    color: i === active ? '#F2F1F9' : 'rgba(242,241,249,0.55)',
                  }}>
                    Kg
                  </span>
                  <span style={{
                    fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.06em',
                    color: i === active ? '#4B8BF5' : 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                  }}>
                    {f.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => setActive(i => (i + 1) % FONTS.length)}
              style={arrowBtn}
            >›</button>
          </div>

          {/* Dot indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
            {FONTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 18 : 6, height: 6, borderRadius: 3,
                  background: i === active ? '#4B8BF5' : 'rgba(255,255,255,0.18)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.2s, background 0.2s',
                }}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
            tell me which one you like → i'll apply it
          </div>
        </div>
      )}
    </>
  )
}

const arrowBtn: React.CSSProperties = {
  width: 36, height: 36, borderRadius: 6, flexShrink: 0,
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
  color: 'rgba(255,255,255,0.6)', fontSize: 22, lineHeight: 1,
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
}
