import { ImageResponse } from 'next/og'

export const alt = 'Kartikey Gupta — Full-Stack & GenAI Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#070709',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'rgba(75,139,245,0.12)',
            display: 'flex',
            filter: 'blur(80px)',
          }}
        />
        {/* Background glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(149,124,244,0.10)',
            display: 'flex',
            filter: 'blur(60px)',
          }}
        />

        {/* Role tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 30,
          }}
        >
          <div style={{ width: 28, height: 1, background: '#4B8BF5', display: 'flex' }} />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 15,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#4B8BF5',
            }}
          >
            Full-Stack · Backend · AI Integration · GenAI
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: '#F2F1F9',
            letterSpacing: '-2.5px',
            lineHeight: 1.0,
            marginBottom: 22,
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          Kartikey Gupta
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 21,
            color: '#9494B0',
            lineHeight: 1.55,
            marginBottom: 52,
            maxWidth: 680,
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          Ships production AI systems end-to-end. 6+ years across fintech, SaaS, and product startups.
        </div>

        {/* Metric chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' }}>
          {[
            { label: '78% AI Auto-Resolution', bg: '#f0fdf4', color: '#047857', border: '#6ee7b7' },
            { label: '4,800 Peak Sessions',    bg: '#eff6ff', color: '#1d4ed8', border: '#93c5fd' },
            { label: '99.7% Uptime',           bg: '#f0fdf4', color: '#047857', border: '#6ee7b7' },
            { label: '−80% Manual QA',         bg: '#fefce8', color: '#92400e', border: '#fcd34d' },
          ].map(chip => (
            <div
              key={chip.label}
              style={{
                fontFamily: 'monospace',
                fontSize: 13,
                fontWeight: 500,
                color: chip.color,
                background: chip.bg,
                border: `1px solid ${chip.border}`,
                borderRadius: 4,
                padding: '7px 14px',
                display: 'flex',
                letterSpacing: '0.02em',
              }}
            >
              {chip.label}
            </div>
          ))}
        </div>

        {/* Website — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            right: 90,
            fontFamily: 'monospace',
            fontSize: 15,
            color: '#4E4E68',
            letterSpacing: '0.06em',
            display: 'flex',
          }}
        >
          www.kartikeygupta.co
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: '#4B8BF5',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
