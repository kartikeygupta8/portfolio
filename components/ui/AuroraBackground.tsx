"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    color: "rgba(16,185,129,0.12)",
    size: 700,
    x: "10%",
    y: "15%",
    duration: 18,
    delay: 0,
  },
  {
    color: "rgba(99,102,241,0.08)",
    size: 600,
    x: "75%",
    y: "70%",
    duration: 22,
    delay: 3,
  },
  {
    color: "rgba(245,158,11,0.06)",
    size: 500,
    x: "55%",
    y: "10%",
    duration: 26,
    delay: 6,
  },
  {
    color: "rgba(16,185,129,0.06)",
    size: 400,
    x: "85%",
    y: "30%",
    duration: 20,
    delay: 1.5,
  },
];

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Animated aurora orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            translateX: "-50%",
            translateY: "-50%",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 60, -40, 30, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.15, 0.9, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(8,8,8,0.7) 100%)",
        }}
      />
    </div>
  );
}
