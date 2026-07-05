"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function LampSection() {
  return (
    <LampContainer>
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="text-xs uppercase tracking-[0.4em] text-bronze-light"
      >
        MEICA Immobilien AG
      </motion.p>
      <motion.h2
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-6 bg-gradient-to-br from-ivory to-bronze-light bg-clip-text py-4 text-center font-display text-5xl tracking-tight text-transparent md:text-8xl"
      >
        Raum &amp; Leben
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="mt-4 max-w-md text-center text-sm font-light leading-relaxed text-ivory/60 md:text-base"
      >
        Jede Liegenschaft erzählt eine Geschichte. Wir sorgen dafür, dass sie
        weitergeschrieben wird.
      </motion.p>
    </LampContainer>
  );
}
