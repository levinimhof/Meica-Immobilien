"use client";
import { LampContainer } from "@/components/ui/lamp";

// The rise/fade of this content is scroll-driven inside LampContainer.
export default function LampSection() {
  return (
    <LampContainer>
      <p className="text-xs uppercase tracking-[0.4em] text-bronze-light">
        MEICA Immobilien AG
      </p>
      <h2 className="mt-6 bg-gradient-to-br from-ivory to-bronze-light bg-clip-text py-4 text-center font-display text-5xl tracking-tight text-transparent md:text-8xl">
        Raum &amp; Leben
      </h2>
      <p className="mt-4 max-w-md text-center text-sm font-light leading-relaxed text-ivory/60 md:text-base">
        Jede Liegenschaft erzählt eine Geschichte. Wir sorgen dafür, dass sie
        weitergeschrieben wird.
      </p>
    </LampContainer>
  );
}
