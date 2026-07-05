import type { Metadata } from "next";
import PropertyGrid from "@/components/property-grid";
import { getProperties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Immobilien",
  description:
    "Aktuelle Kauf- und Mietobjekte der MEICA Immobilien AG im Kanton Solothurn und Umgebung.",
};

export default function ImmobilienPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze-light">
            Portfolio
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Unsere Immobilien
          </h1>
          <p className="mt-6 max-w-xl font-light leading-relaxed text-ivory/70">
            Sorgfältig ausgewählte Kauf- und Mietobjekte im Kanton Solothurn
            und Umgebung. Nicht das Passende dabei? Wir merken Ihr Suchprofil
            gerne vor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <PropertyGrid properties={getProperties()} />
      </section>
    </>
  );
}
