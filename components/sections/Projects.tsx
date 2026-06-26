'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const ACCENT_MAP = {
  blue:   { border: 'var(--blue)',   dim: 'var(--blue-d)',   bright: 'var(--blue-b)' },
  cyan:   { border: 'var(--cyan)',   dim: 'var(--cyan-d)',   bright: 'var(--cyan-b)' },
  green:  { border: 'var(--green)',  dim: 'var(--green-d)',  bright: 'var(--green-b)' },
  amber:  { border: 'var(--amber)',  dim: 'var(--amber-d)',  bright: 'var(--amber-b)' },
  violet: { border: 'var(--violet)', dim: 'var(--violet-d)', bright: 'var(--violet-b)' },
}

const CHIP_COLOR_MAP: Record<string, string> = {
  b: 'chip chip-b', c: 'chip chip-c', g: 'chip chip-g',
  a: 'chip chip-a', v: 'chip chip-v', '': 'chip',
}

const BROWSER_URL: Record<string, string> = {
  'ai-support-platform':      'support.evren.app / dashboard',
  'mcp-workflow-engine':       'agents.evren.internal / workflow-engine',
  'cross-platform-ecosystem':  'bestpeers.io / web · mobile · smartwatch',
  'etl-sync-pipeline':         'internal.worldpay.com / etl-monitor',
  'automation-framework':      'fis.internal / test-runner',
}

/* ── Per-project main browser SVG ── */
function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'ai-support-platform') return (
    <svg width="100%" viewBox="0 0 520 244" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="116" height="64" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="14" y="19" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">RESOLVED TODAY</text>
      <text x="14" y="46" fontFamily="monospace" fontSize="24" fontWeight="700" fill="#F2F1F9">347</text>
      <rect x="0" y="4" width="2" height="56" rx="1" fill="#4B8BF5"/>

      <rect x="128" y="0" width="116" height="64" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="142" y="19" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">AI HANDLED</text>
      <text x="142" y="46" fontFamily="monospace" fontSize="24" fontWeight="700" fill="#2DD68A">78%</text>
      <rect x="128" y="4" width="2" height="56" rx="1" fill="#2DD68A"/>

      <rect x="256" y="0" width="116" height="64" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="270" y="19" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">AVG RESPONSE</text>
      <text x="270" y="46" fontFamily="monospace" fontSize="24" fontWeight="700" fill="#4B8BF5">1.4s</text>
      <rect x="256" y="4" width="2" height="56" rx="1" fill="#4B8BF5"/>

      <rect x="384" y="0" width="136" height="64" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="398" y="19" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">QUEUE</text>
      <text x="398" y="46" fontFamily="monospace" fontSize="24" fontWeight="700" fill="#F0A429">12</text>
      <rect x="384" y="4" width="2" height="56" rx="1" fill="#F0A429"/>

      <rect x="0" y="76" width="342" height="162" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="14" y="95" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">RECENT TICKETS</text>
      <rect x="14" y="103" width="314" height="26" rx="3" fill="rgba(75,139,245,0.07)" stroke="rgba(75,139,245,0.15)" strokeWidth="1"/>
      <circle cx="27" cy="116" r="4" fill="#2DD68A"/>
      <text x="39" y="120" fontFamily="monospace" fontSize="10" fill="#8A8AA8">Login error on mobile app</text>
      <text x="290" y="120" fontFamily="monospace" fontSize="9" fill="#2DD68A">AI</text>
      <rect x="14" y="135" width="314" height="26" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="27" cy="148" r="4" fill="#4B8BF5"/>
      <text x="39" y="152" fontFamily="monospace" fontSize="10" fill="#8A8AA8">Payment declined — card valid</text>
      <text x="274" y="152" fontFamily="monospace" fontSize="9" fill="#8A8AA8">Human</text>
      <rect x="14" y="167" width="314" height="26" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="27" cy="180" r="4" fill="#2DD68A"/>
      <text x="39" y="184" fontFamily="monospace" fontSize="10" fill="#8A8AA8">Bulk export timeout</text>
      <text x="290" y="184" fontFamily="monospace" fontSize="9" fill="#2DD68A">AI</text>
      <rect x="14" y="199" width="314" height="26" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="27" cy="212" r="4" fill="#F0A429"/>
      <text x="39" y="216" fontFamily="monospace" fontSize="10" fill="#8A8AA8">Account merge request</text>
      <text x="274" y="216" fontFamily="monospace" fontSize="9" fill="#F0A429">Pending</text>

      <rect x="358" y="76" width="162" height="162" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="370" y="95" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">LLM ACTIVITY</text>
      <text x="370" y="116" fontFamily="monospace" fontSize="10" fill="#2DD68A">● Classify intent</text>
      <text x="370" y="136" fontFamily="monospace" fontSize="10" fill="#4B8BF5">● Draft response</text>
      <text x="370" y="156" fontFamily="monospace" fontSize="10" fill="#8A8AA8">● Escalation check</text>
      <text x="370" y="176" fontFamily="monospace" fontSize="10" fill="#2DD68A">● Send &amp; log</text>
      <text x="370" y="196" fontFamily="monospace" fontSize="10" fill="#8A8AA8">● Waiting…</text>
      <circle cx="460" cy="226" r="6" fill="rgba(45,214,138,0.18)" stroke="#2DD68A" strokeWidth="1">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="460" cy="226" r="3" fill="#2DD68A"/>
      <text x="436" y="230" fontFamily="monospace" fontSize="9" fill="#2DD68A">LIVE</text>
    </svg>
  )

  if (slug === 'mcp-workflow-engine') return (
    <svg width="100%" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="520" height="260" fill="#0C0C14"/>
      <defs>
        <pattern id="wgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="520" height="260" fill="url(#wgrid)"/>
      <rect x="20" y="110" width="90" height="40" rx="6" fill="rgba(79,142,247,0.12)" stroke="#4F8EF7" strokeWidth="1"/>
      <text x="65" y="127" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#4F8EF7">TRIGGER</text>
      <text x="65" y="141" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">Schedule / API</text>
      <rect x="150" y="60" width="90" height="40" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="195" y="77" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8B5CF6">FETCH</text>
      <text x="195" y="91" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">DB Query</text>
      <rect x="150" y="160" width="90" height="40" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="195" y="177" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8B5CF6">PLAN</text>
      <text x="195" y="191" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">LLM Reasoning</text>
      <rect x="280" y="110" width="90" height="40" rx="6" fill="rgba(34,211,238,0.12)" stroke="#22D3EE" strokeWidth="1"/>
      <text x="325" y="127" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#22D3EE">EXECUTE</text>
      <text x="325" y="141" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">MCP Tools</text>
      <rect x="410" y="60" width="90" height="40" rx="6" fill="rgba(52,211,153,0.10)" stroke="#34D399" strokeWidth="1"/>
      <text x="455" y="77" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#34D399">NOTIFY</text>
      <text x="455" y="91" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">Slack / Email</text>
      <rect x="410" y="160" width="90" height="40" rx="6" fill="rgba(52,211,153,0.10)" stroke="#34D399" strokeWidth="1"/>
      <text x="455" y="177" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#34D399">LOG</text>
      <text x="455" y="191" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8988A6">Audit Trail</text>
      <line x1="110" y1="130" x2="150" y2="80" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
      <line x1="110" y1="130" x2="150" y2="180" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
      <line x1="240" y1="80" x2="280" y2="120" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5"/>
      <line x1="240" y1="180" x2="280" y2="140" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5"/>
      <line x1="370" y1="120" x2="410" y2="80" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5"/>
      <line x1="370" y1="140" x2="410" y2="180" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5"/>
      <circle r="3.5" fill="#22D3EE">
        <animateMotion dur="4s" repeatCount="indefinite"
          path="M 110,130 L 150,80 L 195,80 L 240,80 L 280,120 L 325,130 L 370,130 L 410,80 L 455,80"/>
      </circle>
      <rect x="0" y="238" width="520" height="22" fill="rgba(0,0,0,0.4)"/>
      <circle cx="14" cy="249" r="4" fill="#34D399">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="24" y="253" fontFamily="monospace" fontSize="9" fill="#34D399">WORKFLOW RUNNING</text>
      <text x="380" y="253" fontFamily="monospace" fontSize="9" fill="#4A4966">run_id: wf_7f2a91c · 0.8s</text>
    </svg>
  )

  if (slug === 'cross-platform-ecosystem') return (
    <svg width="100%" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
      <text x="14" y="18" fontFamily="monospace" fontSize="8" fill="#4E4E68" letterSpacing="1">UNIFIED PLATFORM — 3 SURFACES, 1 BACKEND</text>

      {/* Web App */}
      <rect x="14" y="26" width="148" height="186" rx="6" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="88" y="48" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4E4E68">WEB APP</text>
      <rect x="26" y="56" width="124" height="7" rx="2" fill="rgba(75,139,245,0.30)"/>
      <rect x="26" y="70" width="88" height="7" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="26" y="86" width="124" height="56" rx="4" fill="rgba(75,139,245,0.07)" stroke="rgba(75,139,245,0.20)" strokeWidth="1"/>
      <text x="88" y="120" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#4B8BF5">+25%</text>
      <rect x="26" y="150" width="124" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="26" y="162" width="90" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="26" y="174" width="60" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="26" y="186" width="124" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>

      {/* Mobile */}
      <rect x="180" y="26" width="92" height="186" rx="14" fill="#14141F" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="226" y="48" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4E4E68">MOBILE</text>
      <rect x="196" y="58" width="60" height="7" rx="2" fill="rgba(45,214,138,0.30)"/>
      <rect x="196" y="72" width="44" height="7" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="196" y="88" width="60" height="56" rx="4" fill="rgba(45,214,138,0.07)" stroke="rgba(45,214,138,0.20)" strokeWidth="1"/>
      <text x="226" y="122" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#2DD68A">✓</text>
      <rect x="196" y="152" width="60" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="196" y="164" width="44" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>

      {/* Watch */}
      <rect x="292" y="60" width="66" height="84" rx="16" fill="#14141F" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
      <text x="325" y="88" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4E4E68">WATCH</text>
      <text x="325" y="114" textAnchor="middle" fontFamily="monospace" fontSize="20" fontWeight="700" fill="#1FD0D0">98</text>
      <text x="325" y="128" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4E4E68">bpm</text>

      {/* Shared Backend */}
      <rect x="378" y="26" width="130" height="186" rx="6" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="443" y="48" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4E4E68">SHARED BACKEND</text>
      <text x="392" y="72" fontFamily="monospace" fontSize="9" fill="#957CF4">Node.js API</text>
      <text x="392" y="92" fontFamily="monospace" fontSize="9" fill="#4B8BF5">Python</text>
      <text x="392" y="112" fontFamily="monospace" fontSize="9" fill="#1FD0D0">MySQL DB</text>
      <text x="392" y="132" fontFamily="monospace" fontSize="9" fill="#2DD68A">Shared State</text>
      <rect x="392" y="146" width="100" height="1" fill="rgba(255,255,255,0.06)"/>
      <text x="392" y="164" fontFamily="monospace" fontSize="8" fill="#4E4E68">−35% bug rate</text>
      <text x="392" y="180" fontFamily="monospace" fontSize="8" fill="#4E4E68">+25% performance</text>
    </svg>
  )

  if (slug === 'etl-sync-pipeline') return (
    <svg width="100%" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
      <text x="14" y="22" fontFamily="monospace" fontSize="9" fill="#4A4966" letterSpacing="1">ETL PIPELINE · LIVE STATUS</text>

      {/* Pipeline stages */}
      <rect x="0" y="34" width="88" height="56" rx="5" fill="rgba(79,142,247,0.08)" stroke="rgba(79,142,247,0.25)" strokeWidth="1"/>
      <text x="44" y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#4F8EF7">EXTRACT</text>
      <text x="44" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#8988A6">SQL Server</text>
      <text x="44" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#34D399">● Active</text>

      <rect x="110" y="34" width="88" height="56" rx="5" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.25)" strokeWidth="1"/>
      <text x="154" y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8B5CF6">VALIDATE</text>
      <text x="154" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#8988A6">Schema check</text>
      <text x="154" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#34D399">● Active</text>

      <rect x="220" y="34" width="88" height="56" rx="5" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.22)" strokeWidth="1"/>
      <text x="264" y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#FBBF24">TRANSFORM</text>
      <text x="264" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#8988A6">Field mapping</text>
      <text x="264" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#34D399">● Active</text>

      <rect x="330" y="34" width="88" height="56" rx="5" fill="rgba(34,211,238,0.07)" stroke="rgba(34,211,238,0.22)" strokeWidth="1"/>
      <text x="374" y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#22D3EE">LOAD</text>
      <text x="374" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#8988A6">Salesforce CRM</text>
      <text x="374" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#34D399">● Active</text>

      <rect x="440" y="34" width="80" height="56" rx="5" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="1"/>
      <text x="480" y="56" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#34D399">VERIFY</text>
      <text x="480" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#8988A6">95% accuracy</text>
      <text x="480" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#34D399">● Done</text>

      {/* Connector lines */}
      <line x1="88" y1="62" x2="110" y2="62" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="198" y1="62" x2="220" y2="62" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="308" y1="62" x2="330" y2="62" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="418" y1="62" x2="440" y2="62" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>

      {/* Animated data packet */}
      <circle r="4" fill="#4F8EF7" opacity="0.9">
        <animateMotion dur="5s" repeatCount="indefinite"
          path="M 88,62 L 110,62 L 198,62 L 220,62 L 308,62 L 330,62 L 418,62 L 440,62 L 520,62"/>
      </circle>

      {/* Stats row */}
      <rect x="0" y="108" width="120" height="48" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="14" y="126" fontFamily="monospace" fontSize="9" fill="#4A4966">RECORDS TODAY</text>
      <text x="14" y="146" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#EEEDF5">84,291</text>

      <rect x="132" y="108" width="120" height="48" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="146" y="126" fontFamily="monospace" fontSize="9" fill="#4A4966">ACCURACY</text>
      <text x="146" y="146" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#34D399">95.0%</text>

      <rect x="264" y="108" width="120" height="48" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="278" y="126" fontFamily="monospace" fontSize="9" fill="#4A4966">ERRORS</text>
      <text x="278" y="146" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#EEEDF5">0</text>

      <rect x="396" y="108" width="124" height="48" rx="5" fill="#14141F" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="410" y="126" fontFamily="monospace" fontSize="9" fill="#4A4966">LAST SYNC</text>
      <text x="410" y="146" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#EEEDF5">14s</text>

      {/* Log tail */}
      <rect x="0" y="172" width="520" height="88" rx="5" fill="#0C0C14" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <text x="14" y="192" fontFamily="monospace" fontSize="9" fill="#34D399">[09:41:02] SYNC COMPLETE · 1,204 records pushed to Salesforce</text>
      <text x="14" y="210" fontFamily="monospace" fontSize="9" fill="#8988A6">[09:41:01] Transform: null fields defaulted · 3 rows patched</text>
      <text x="14" y="228" fontFamily="monospace" fontSize="9" fill="#8988A6">[09:40:58] Validation passed · schema v2.4</text>
      <text x="14" y="246" fontFamily="monospace" fontSize="9" fill="#4A4966">[09:40:55] Extract: 1,204 rows from orders_delta</text>
    </svg>
  )

  /* automation-framework fallback */
  return (
    <svg width="100%" viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="80" width="90" height="40" rx="5" fill="rgba(240,164,41,0.08)" stroke="rgba(240,164,41,0.35)" strokeWidth="1.5"/>
      <text x="45" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#F0A429">TEST SUITE</text>
      <text x="45" y="110" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(240,164,41,0.5)">90%+ coverage</text>
      <rect x="130" y="40" width="90" height="36" rx="4" fill="rgba(75,139,245,0.08)" stroke="rgba(75,139,245,0.3)" strokeWidth="1"/>
      <text x="175" y="62" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#4B8BF5">SELENIUM</text>
      <text x="175" y="71" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(75,139,245,0.45)">Chrome / Firefox</text>
      <rect x="130" y="124" width="90" height="36" rx="4" fill="rgba(149,124,244,0.08)" stroke="rgba(149,124,244,0.3)" strokeWidth="1"/>
      <text x="175" y="145" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#957CF4">API RUNNER</text>
      <text x="175" y="154" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(149,124,244,0.45)">REST assertions</text>
      <rect x="270" y="80" width="90" height="40" rx="4" fill="rgba(45,214,138,0.08)" stroke="rgba(45,214,138,0.3)" strokeWidth="1"/>
      <text x="315" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#2DD68A">COLLECT</text>
      <text x="315" y="110" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(45,214,138,0.45)">Results + logs</text>
      <rect x="410" y="80" width="100" height="40" rx="4" fill="rgba(31,208,208,0.08)" stroke="rgba(31,208,208,0.3)" strokeWidth="1"/>
      <text x="460" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#1FD0D0">CI REPORT</text>
      <text x="460" y="110" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(31,208,208,0.45)">Pass / fail / coverage</text>
      <line x1="90" y1="100" x2="130" y2="58" stroke="rgba(75,139,245,0.3)" strokeWidth="1.5"/>
      <line x1="90" y1="100" x2="130" y2="142" stroke="rgba(149,124,244,0.3)" strokeWidth="1.5"/>
      <line x1="220" y1="58" x2="270" y2="90" stroke="rgba(45,214,138,0.3)" strokeWidth="1.5"/>
      <line x1="220" y1="142" x2="270" y2="110" stroke="rgba(45,214,138,0.3)" strokeWidth="1.5"/>
      <line x1="360" y1="100" x2="410" y2="100" stroke="rgba(31,208,208,0.3)" strokeWidth="1.5"/>
      <circle r="3.5" fill="#F0A429" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 45,100 L 130,58 L 175,58 L 220,58 L 270,90 L 315,100 L 360,100 L 410,100 L 460,100"/>
      </circle>
    </svg>
  )
}

/* ── Cross-Platform arch diagram (below browser) ── */
function CrossPlatformArch() {
  return (
    <div style={{
      marginTop: 12,
      border: '1px solid var(--rule)',
      borderRadius: 6,
      background: 'var(--bg3)',
      padding: '14px 18px',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--t2)', marginBottom: 10, textAlign: 'center',
      }}>
        Cross-Platform Sync Architecture
      </div>
      <svg width="100%" viewBox="0 0 460 88" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="26" width="60" height="28" rx="4" fill="rgba(75,139,245,0.10)" stroke="rgba(75,139,245,0.35)" strokeWidth="1"/>
        <text x="34" y="41" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4B8BF5">REACT</text>
        <text x="34" y="51" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4B8BF5">WEB</text>

        <rect x="4" y="62" width="60" height="20" rx="4" fill="rgba(45,214,138,0.10)" stroke="rgba(45,214,138,0.30)" strokeWidth="1"/>
        <text x="34" y="76" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#2DD68A">RN MOBILE</text>

        <rect x="100" y="28" width="80" height="36" rx="4" fill="rgba(149,124,244,0.10)" stroke="rgba(149,124,244,0.35)" strokeWidth="1"/>
        <text x="140" y="43" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#957CF4">NODE.JS</text>
        <text x="140" y="55" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#957CF4">GATEWAY</text>

        <rect x="216" y="10" width="78" height="28" rx="4" fill="rgba(31,208,208,0.10)" stroke="rgba(31,208,208,0.35)" strokeWidth="1"/>
        <text x="255" y="28" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#1FD0D0">Python</text>

        <rect x="216" y="52" width="78" height="28" rx="4" fill="rgba(240,164,41,0.10)" stroke="rgba(240,164,41,0.30)" strokeWidth="1"/>
        <text x="255" y="70" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#F0A429">MYSQL DB</text>

        <rect x="330" y="26" width="68" height="36" rx="4" fill="rgba(45,214,138,0.10)" stroke="rgba(45,214,138,0.30)" strokeWidth="1"/>
        <text x="364" y="41" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#2DD68A">WATCH</text>
        <text x="364" y="53" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#2DD68A">BRIDGE</text>

        <line x1="64" y1="40" x2="100" y2="44" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="64" y1="72" x2="100" y2="54" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="180" y1="36" x2="216" y2="24" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="180" y1="56" x2="216" y2="66" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="294" y1="28" x2="330" y2="38" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3,3"/>

        <circle r="2.5" fill="#1FD0D0">
          <animateMotion dur="3.5s" repeatCount="indefinite"
            path="M 64,40 L 140,46 L 255,24 L 364,44"/>
        </circle>
      </svg>
    </div>
  )
}

export function Projects() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const router = useRouter()

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--bg)', padding: '120px 0 0' }}>
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        style={{ padding: '0 48px 80px' }}
      >
        <div className="s-tag">Selected Work</div>
        <h2 className="s-h2">Systems <em>Built</em></h2>
        <p className="s-sub" style={{ marginTop: 12 }}>
          Five production systems — each with a distinct constraint, a deliberate architecture, and a measurable outcome.
        </p>
      </motion.div>

      {/* Project cards */}
      {PROJECTS.map((proj, idx) => {
        const isEven = idx % 2 === 1
        const accent = ACCENT_MAP[proj.accent]
        return (
          <motion.article
            key={proj.slug}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.1 * idx }}
            onClick={() => router.push(`/projects/${proj.slug}`)}
            style={{
              padding: '80px 48px',
              borderTop: '1px solid var(--rule)',
              background: isEven ? 'var(--bg1)' : 'var(--bg)',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 72,
                alignItems: 'start',
                maxWidth: 1300,
                margin: '0 auto',
                direction: isEven ? 'rtl' : 'ltr',
              }}
            >
              {/* Visual */}
              <div style={{ direction: 'ltr' }}>
                <div
                  className="browser-card"
                  style={{ transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1), border-color 0.32s' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.borderColor = accent.bright
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(0)'
                    el.style.borderColor = 'var(--rule2)'
                  }}
                >
                  <div className="browser-bar">
                    <div className="bd bd-r"/><div className="bd bd-y"/><div className="bd bd-g"/>
                    <div className="browser-url">{BROWSER_URL[proj.slug] ?? proj.slug}</div>
                  </div>
                  <div className="browser-body">
                    <ProjectVisual slug={proj.slug} />
                  </div>
                </div>

                {/* Arch diagram — only for cross-platform */}
                {proj.slug === 'cross-platform-ecosystem' && <CrossPlatformArch />}
              </div>

              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: 'var(--t3)', letterSpacing: '0.08em' }}>
                    {proj.index} / {String(PROJECTS.length).padStart(2,'0')}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace', fontSize: 10,
                    letterSpacing: '0.08em', padding: '3px 9px', borderRadius: 3,
                    border: '1px solid',
                    color: proj.badgeColor === 'green' ? 'var(--green)' : 'var(--blue)',
                    borderColor: proj.badgeColor === 'green' ? 'rgba(45,214,138,0.30)' : 'rgba(75,139,245,0.30)',
                    background: proj.badgeColor === 'green' ? 'var(--green-d)' : 'var(--blue-d)',
                  }}>
                    {proj.badge}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace', fontSize: 11,
                    color: 'var(--t0)', letterSpacing: '0.06em',
                    marginLeft: 'auto', padding: '4px 12px',
                    border: '1px solid var(--rule2)', borderRadius: 4, background: 'var(--bg3)',
                  }}>
                    {proj.company}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif), Georgia, serif',
                    fontSize: 'clamp(22px, 2.6vw, 34px)',
                    fontWeight: 400, letterSpacing: '-0.4px',
                    lineHeight: 1.15, marginBottom: 18,
                  }}
                >
                  {proj.title.split(proj.titleEm)[0]}
                  <em style={{ fontStyle: 'italic', color: accent.border }}>{proj.titleEm}</em>
                  {proj.title.split(proj.titleEm)[1]}
                </h3>

                <p style={{ fontSize: 15, lineHeight: 1.78, color: 'var(--t1)', marginBottom: 20 }}>
                  {proj.summary}
                </p>

                {/* Metrics */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {proj.metrics.map(m => (
                    <span key={m} style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, padding: '4px 10px', borderRadius: 4, border: '1px solid', color: accent.border, borderColor: accent.bright, background: accent.dim }}>
                      {m}
                    </span>
                  ))}
                </div>

                {/* Stack chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {proj.stack.map((s, i) => (
                    <span key={s} className={CHIP_COLOR_MAP[proj.chipColors[i] ?? ''] ?? 'chip'}>{s}</span>
                  ))}
                </div>

                <Link
                  href={`/projects/${proj.slug}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: accent.border, textDecoration: 'none',
                    padding: '11px 22px',
                    background: accent.dim,
                    border: `1px solid ${accent.bright}`,
                    borderRadius: 'var(--r)',
                    transition: 'gap 0.22s, opacity 0.22s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.gap = '14px'
                    el.style.opacity = '0.80'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.gap = '9px'
                    el.style.opacity = '1'
                  }}
                >
                  Read Case Study <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>
        )
      })}

      <style>{`
        @media (max-width: 960px) {
          #projects article > div { grid-template-columns: 1fr !important; gap: 40px !important; direction: ltr !important; }
          #projects article { padding: 60px 24px !important; }
          #projects > div:first-child { padding: 0 24px 60px !important; }
        }
      `}</style>
    </section>
  )
}
