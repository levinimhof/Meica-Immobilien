"use client";
import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// Scroll-driven "lamp" effect (adapted from Aceternity UI's Lamp component):
// the section is tall and pins its content; while the user scrolls through,
// the light cone widens and the slogan rises into it — tied directly to the
// scroll position (scrubbing), not a one-shot trigger.
// Colors are mapped to the brand palette (ink background, bronze light).
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // With a 200vh outer section, the pinned phase spans roughly 0.33–0.66.
  const beamWidth = useTransform(scrollYProgress, [0.15, 0.5], ["12rem", "30rem"]);
  const beamOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0.4, 1]);
  const glowWidth = useTransform(scrollYProgress, [0.15, 0.5], ["7rem", "16rem"]);
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ["12rem", "30rem"]);
  const textY = useTransform(scrollYProgress, [0.3, 0.55], [-140, -300]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Reduced motion: skip the scrub, show the fully lit state.
  const s = reduced
    ? {
        beam: { width: "30rem", opacity: 1 },
        glow: { width: "16rem" },
        line: { width: "30rem" },
        text: { y: -300, opacity: 1 },
      }
    : {
        beam: { width: beamWidth, opacity: beamOpacity },
        glow: { width: glowWidth },
        line: { width: lineWidth },
        text: { y: textY, opacity: textOpacity },
      };

  return (
    <div ref={ref} className={cn("relative h-[200vh] bg-ink", className)}>
      <div className="sticky top-0 z-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink">
        <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
          <motion.div
            style={{
              ...s.beam,
              backgroundImage: `conic-gradient(from 70deg at center top, var(--bronze-light), transparent, transparent)`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible"
          >
            <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-ink [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-ink [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            style={{
              ...s.beam,
              backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, var(--bronze-light))`,
            }}
            className="absolute inset-auto left-1/2 h-56"
          >
            <div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-ink [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-ink [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-ink blur-2xl" />
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-bronze opacity-40 blur-3xl" />
          <motion.div
            style={s.glow}
            className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full bg-bronze-light opacity-60 blur-2xl"
          />
          <motion.div
            style={s.line}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-bronze-light"
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-ink" />
        </div>

        <motion.div
          style={s.text}
          className="relative z-50 flex flex-col items-center px-5"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
