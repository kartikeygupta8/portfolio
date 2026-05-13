"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CursorGlow() {
  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);

  // Smooth spring-based tracking
  const x = useSpring(rawX, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  // Primary emerald glow
  const primaryBg = useTransform([x, y] as const, ([cx, cy]) =>
    `radial-gradient(700px circle at ${cx}px ${cy}px, rgba(16,185,129,0.055), transparent 50%)`
  );

  // Tighter accent highlight
  const accentBg = useTransform([x, y] as const, ([cx, cy]) =>
    `radial-gradient(300px circle at ${cx}px ${cy}px, rgba(16,185,129,0.04), transparent 60%)`
  );

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 hidden md:block"
        style={{ background: primaryBg }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 hidden md:block"
        style={{ background: accentBg }}
        aria-hidden
      />
    </>
  );
}
