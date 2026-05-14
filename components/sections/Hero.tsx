'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PROOF } from '@/lib/constants'

/* ── WebGL2 shaders (blue cosmic nebula, enhanced blue palette) ── */
const VERT2 = `#version 300 es
in vec4 position;
void main(){gl_Position=position;}`

const FRAG2 = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
uniform vec2 move;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);
}
float fbm(vec2 p){
  float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);
  for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
  return t;
}
float clouds(vec2 p){
  float d=1.,t=.0;
  for(float i=.0;i<3.;i++){
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);d=a;p*=2./(i+1.);
  }
  return t;
}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.0018/d*(cos(sin(i)*vec3(0.35,0.75,3.6))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.0028*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.02,bg*.06,bg*.52),d);
  }
  O=vec4(col,1);
}`

/* ── WebGL1 fallback (same logic, enhanced blue) ── */
const VERT1 = `attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}`

const FRAG1 = `precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
uniform vec2 move;
#define FC gl_FragCoord.xy
#define R  resolution
#define T  time
#define MN min(R.x,R.y)

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);
  return mix(
    mix(hash(i),hash(i+vec2(1,0)),u.x),
    mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),
    u.y
  );
}
float clouds(vec2 uv){
  float v=0.0,a=0.5;
  for(int i=0;i<6;i++){v+=a*noise(uv);uv*=2.0;a*=0.5;}
  return v;
}
void main(void){
  vec2 uv=(FC-0.5*R)/MN,st=uv*vec2(2.0,1.0);
  vec3 col=vec3(0.0);
  float bg=clouds(vec2(st.x+T*0.5,-st.y));
  uv*=1.0-0.3*(sin(T*0.2)*0.5+0.5);
  for(float i=1.0;i<12.0;i++){
    uv+=0.1*cos(i*vec2(0.1+0.01*i,0.8)+i*i+T*0.5+0.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=0.0018/d*(cos(sin(i)*vec3(0.35,0.75,3.6))+1.0);
    float b=noise(i+p+bg*1.731);
    col+=0.0028*b/length(max(p,vec2(b*p.x*0.02,p.y)));
    col=mix(col,vec3(bg*0.02,bg*0.06,bg*0.52),d);
  }
  gl_FragColor=vec4(col,1.0);
}`

function makeShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as any, delay },
})

export function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const rafRef     = useRef<number>(0)
  const { scrollY } = useScroll()
  const curtainY = useTransform(scrollY, v => {
    const h = typeof window !== 'undefined' ? window.innerHeight : 900
    return `${-(Math.min(v, h) / h) * 100}%`
  })
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl2 = canvas.getContext('webgl2')
    const gl   = (gl2 ?? canvas.getContext('webgl')) as WebGLRenderingContext | null
    if (!gl) return

    const isGL2  = !!gl2
    const vertSrc = isGL2 ? VERT2 : VERT1
    const fragSrc = isGL2 ? FRAG2 : FRAG1

    const prog = gl.createProgram()!
    gl.attachShader(prog, makeShader(gl, gl.VERTEX_SHADER,   vertSrc))
    gl.attachShader(prog, makeShader(gl, gl.FRAGMENT_SHADER, fragSrc))
    gl.linkProgram(prog)

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return

    const buf = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW)

    const posLoc = gl.getAttribLocation(prog, 'position')
    const uRes   = gl.getUniformLocation(prog, 'resolution')
    const uTime  = gl.getUniformLocation(prog, 'time')
    const uTouch = gl.getUniformLocation(prog, 'touch')
    const uMove  = gl.getUniformLocation(prog, 'move')

    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    let mx = 0, my = 0, dmx = 0, dmy = 0
    const onMove = (e: PointerEvent) => { dmx += e.movementX; dmy += e.movementY; mx = e.clientX; my = e.clientY }
    canvas.addEventListener('pointermove', onMove)

    const resize = () => {
      const dpr = Math.max(1, 0.5 * devicePixelRatio)
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = (now: number) => {
      gl.useProgram(prog)
      gl.uniform2f(uRes,   canvas.width, canvas.height)
      gl.uniform1f(uTime,  now * 1e-3)
      gl.uniform2f(uTouch, mx, canvas.height - my)
      gl.uniform2f(uMove,  dmx, dmy)
      dmx *= 0.9; dmy *= 0.9
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      canvas.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <motion.section
      id="hero"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 10,
        y: curtainY,
      }}
    >
      {/* WebGL background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          touchAction: 'pan-y',
          background: 'var(--bg)',
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: `
            radial-gradient(ellipse 90% 70% at 50% 50%, transparent 22%, rgba(7,7,9,0.52) 100%),
            linear-gradient(to bottom, rgba(7,7,9,0.42) 0%, transparent 18%, transparent 72%, rgba(7,7,9,0.94) 100%)
          `,
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', padding: '120px 24px 220px',
          width: '100%', maxWidth: 1060,
        }}
      >
        {/* Badge */}
        <motion.div {...rise(0.10)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '7px 20px',
            background: 'rgba(75,139,245,0.07)',
            border: '1px solid rgba(75,139,245,0.22)',
            borderRadius: 100,
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--t1)',
            marginBottom: 44,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--blue)',
              animation: 'blink 2.2s ease-in-out infinite',
            }}
          />
          Full-Stack · AI Systems · Architecture
        </motion.div>

        {/* Name — Syne display font */}
        <motion.h1
          {...rise(0.28)}
          style={{
            fontFamily: 'var(--font-display), "Syne", system-ui, sans-serif',
            fontSize: 'clamp(48px, 7.5vw, 108px)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-2px',
            marginBottom: 36,
          }}
        >
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(120deg, #F2F1F9 40%, rgba(75,139,245,0.92) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Kartikey
          </span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(120deg, rgba(149,124,244,0.95) 0%, #F2F1F9 65%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Gupta
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...rise(0.44)}
          style={{
            fontSize: 18, lineHeight: 1.78,
            color: 'rgba(242,241,249,0.62)',
            maxWidth: 560, marginBottom: 48, fontWeight: 300,
          }}
        >
          <strong style={{ color: 'var(--t0)', fontWeight: 500 }}>
            6 years building production infrastructure
          </strong>{' '}
          — from distributed backends and microservices to AI agents and LLM pipelines that ship at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.58)}
          style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--bg)', background: 'var(--t0)',
              textDecoration: 'none', padding: '13px 26px',
              borderRadius: 'var(--r)', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--t1)', textDecoration: 'none',
              padding: '13px 26px',
              border: '1px solid var(--rule2)',
              borderRadius: 'var(--r)', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--t0)'
              e.currentTarget.style.borderColor = 'var(--blue-b)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--t1)'
              e.currentTarget.style.borderColor = 'var(--rule2)'
            }}
          >
            Get in Touch
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download="Kartikey_Gupta_Resume.pdf"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--blue)', textDecoration: 'none',
              padding: '13px 26px',
              border: '1px solid rgba(75,139,245,0.32)',
              borderRadius: 'var(--r)', transition: 'all 0.2s',
              background: 'rgba(75,139,245,0.07)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(75,139,245,0.14)'
              e.currentTarget.style.borderColor = 'rgba(75,139,245,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(75,139,245,0.07)'
              e.currentTarget.style.borderColor = 'rgba(75,139,245,0.32)'
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 16l-4-4h3V4h2v8h3l-4 4z"/>
              <path d="M20 18H4v2h16v-2z"/>
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      {/* Proof bar */}
      <motion.div
        {...rise(0.74)}
        className="proof-bar"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'flex', flexWrap: 'wrap',
          borderTop: '1px solid var(--rule)',
          zIndex: 3,
          background: 'rgba(7,7,9,0.72)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        {PROOF.map((p, i) => (
          <div
            key={p.label}
            style={{
              flex: 1, padding: '22px 32px',
              borderRight: i < PROOF.length - 1 ? '1px solid var(--rule)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: 26, fontWeight: 500,
                color: 'var(--t0)', letterSpacing: '-1px',
                lineHeight: 1, marginBottom: 4,
              }}
            >
              {p.num}<sup style={{ fontSize: 13, color: 'var(--blue)' }}>{p.sup}</sup>
            </div>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--t2)' }}>
              {p.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Smoky curtain edge — organic fog hiding content below */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, zIndex: 2, pointerEvents: 'none' }}>
        <svg width="100%" height="220" preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <filter id="hero-smoke" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.018 0.006" numOctaves="4" seed="7" result="noise">
                <animate attributeName="baseFrequency" values="0.018 0.006;0.024 0.009;0.018 0.006" dur="16s" repeatCount="indefinite"/>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="44" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <linearGradient id="smoke-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="transparent" stopOpacity="0"/>
              <stop offset="38%"  stopColor="#080808"     stopOpacity="0.28"/>
              <stop offset="66%"  stopColor="#080808"     stopOpacity="0.80"/>
              <stop offset="100%" stopColor="#080808"     stopOpacity="1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="220" fill="url(#smoke-fill)" filter="url(#hero-smoke)"/>
        </svg>
      </div>

      {/* Pull-up scroll hint — bare icon, no button */}
      <motion.div
        style={{
          position: 'absolute', bottom: 38, left: '50%', x: '-50%',
          zIndex: 6, opacity: arrowOpacity,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          pointerEvents: 'none',
        }}
      >
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none"
          style={{ animation: 'nudge-up 2.2s ease-in-out infinite 0.18s' }}>
          <path d="M1 7L6.5 1L12 7" stroke="rgba(242,241,249,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none"
          style={{ animation: 'nudge-up 2.2s ease-in-out infinite' }}>
          <path d="M1 7L6.5 1L12 7" stroke="rgba(242,241,249,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <style>{`
        @keyframes nudge-up {
          0%, 100% { transform: translateY(0);    opacity: 1; }
          50%       { transform: translateY(-7px); opacity: 0.5; }
        }
        @media (max-width: 960px) {
          #hero h1 { letter-spacing: -1px !important; }
        }
        @media (max-width: 640px) {
          #hero .hero-content { padding: 80px 20px 200px !important; }
          #hero .proof-bar > div { flex: 0 0 50% !important; border-bottom: 1px solid var(--rule); }
        }
        @media (max-width: 420px) {
          #hero .hero-content { padding: 60px 16px 200px !important; }
        }
      `}</style>
    </motion.section>
  )
}
