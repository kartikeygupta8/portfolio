'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STACK_LAYERS } from '@/lib/constants'

const DOT_COLOR: Record<string, string> = {
  violet: 'var(--violet)',
  blue:   'var(--blue)',
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  amber:  'var(--amber)',
}

const CHIP_CLASS: Record<string, string> = {
  v: 'chip chip-v',
  b: 'chip chip-b',
  c: 'chip chip-c',
  g: 'chip chip-g',
  a: 'chip chip-a',
  '': 'chip',
}

function LayerCard({ layer, i }: { layer: typeof STACK_LAYERS[0]; i: number }) {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const dotColor = DOT_COLOR[layer.dot] ?? 'var(--blue)'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        border: '1px solid var(--rule2)',
        borderRadius: 10,
        background: 'var(--bg1)',
        padding: '28px 30px',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${dotColor}50`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--rule2)')}
    >
      {/* Layer header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, fontWeight: 500, color: dotColor, letterSpacing: '0.06em' }}>
          {layer.name}
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, color: 'var(--t2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
        {layer.desc}
      </div>

      {/* Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {layer.chips.map((chip, ci) => (
          <motion.span
            key={chip.label}
            className={CHIP_CLASS[chip.color] ?? 'chip'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.08 + 0.18 + ci * 0.04 }}
          >
            {chip.label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref  = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ borderTop: '1px solid var(--rule)', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        <motion.div
          className="s-tag"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Stack
        </motion.div>

        <motion.h2
          className="s-h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          The full stack, <em>front to back.</em>
        </motion.h2>

        <motion.p
          className="s-sub"
          style={{ marginBottom: 60 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Five layers I own end-to-end. Every tool here is battle-tested in production.
        </motion.p>

        <div className="layer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {STACK_LAYERS.map((layer, i) => (
            <LayerCard key={layer.name} layer={layer} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #skills { padding: 80px 24px !important; } }
        @media (max-width: 520px) { #skills .layer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
