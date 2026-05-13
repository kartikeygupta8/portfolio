"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

const stats = [
  {
    value: 40,
    suffix: "%",
    label: "Portal Usage Increase",
    detail:
      "Implementing multi-tiered access controls and rebuilding the React interface at Evren drove measurably higher engagement from day one.",
    accent: "#10b981",
  },
  {
    value: 80,
    suffix: "%",
    label: "Testing Time Eliminated",
    detail:
      "A fully automated API testing framework at FIS Global — 100% coverage, zero manual regression cycles before every production release.",
    accent: "#6366f1",
  },
  {
    value: 95,
    suffix: "%",
    label: "ETL Data Accuracy",
    detail:
      "A bidirectional SQL ↔ Salesforce sync engine with built-in conflict resolution — data your business can actually trust.",
    accent: "#f59e0b",
  },
  {
    value: 50,
    suffix: "%",
    label: "Debugging Time Reduced",
    detail:
      "Python-powered log analysis replaced hours of manual triage with instant pattern detection and automated alerts.",
    accent: "#fb7185",
  },
  {
    value: 30,
    suffix: "%",
    label: "Faster API Responses",
    detail:
      "Query-level optimisation and Node.js migration at Evren. Less latency, happier users, lower infrastructure cost.",
    accent: "#22d3ee",
  },
  {
    value: 35,
    suffix: "%",
    label: "Fewer Bug Reports",
    detail:
      "Systematic code reviews, architecture standards, and proactive security patching at Bestpeers compounded over 18 months.",
    accent: "#a78bfa",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, stat.value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = Math.round(v).toString();
      },
    });
    return controls.stop;
  }, [inView, motionVal, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card p-7 flex flex-col gap-5 group relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `${stat.accent}18` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.accent}60, transparent)` }}
      />

      {/* Number */}
      <div>
        <span
          className="stat-number"
          style={{ color: stat.accent }}
        >
          <span ref={numRef}>0</span>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="font-semibold text-[15px] text-[#f5f5f5]">{stat.label}</div>

      {/* Detail */}
      <p className="text-[13px] text-[#a1a1aa] leading-relaxed">{stat.detail}</p>
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="section border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="orb w-[700px] h-[700px] bg-[#10b981] opacity-[0.025] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          Achievements
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.03em] text-[#f5f5f5] mb-3"
        >
          Numbers that
          <br />
          <span
            className="text-[#a1a1aa] font-normal"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            speak for themselves.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-[15px] text-[#a1a1aa] mb-14 max-w-md leading-relaxed"
        >
          Every metric is a direct result of deliberate engineering — not luck,
          not coincidence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
