import Image from "next/image";
import Link from "next/link";
import LampSection from "@/components/lamp-section";
import Parallax from "@/components/parallax";
import PropertyCard from "@/components/property-card";
import Tilt from "@/components/tilt";
import { getFeaturedProperties } from "@/lib/properties";

const services = [
  {
    title: "Verkauf",
    text: "Diskrete Vermarktung, fundierte Bewertung und Begleitung bis zur Beurkundung — für den bestmöglichen Verkauf Ihrer Immobilie.",
    icon: (
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Vermietung",
    text: "Sorgfältige Mieterauswahl, marktgerechte Mietzinse und reibungslose Übergaben — damit Ihre Liegenschaft nachhaltig rentiert.",
    icon: (
      <path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 10v5m0 0-2.5 2.5M12 15l2.5 2.5M4 21c0-3 3.5-5 8-5s8 2 8 5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Verwaltung",
    text: "Umfassende Bewirtschaftung Ihrer Liegenschaft: von der Nebenkostenabrechnung bis zum Unterhalt — zuverlässig und transparent.",
    icon: (
      <path d="M9 12h6m-6 4h6M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2-1v4m6-4v4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Entwicklung & Renovation",
    text: "Wir erkennen Potenzial: Entwicklung, Renovation und Umbau von Liegenschaften — von der Idee bis zur schlüsselfertigen Umsetzung.",
    icon: (
      <path d="M11.5 6.5 17 12m-9.5 5.5L4 21l1-4.5L15.5 6a2.1 2.1 0 0 1 3 3L8 19.5 4 21m13-11 2.5-2.5a2.1 2.1 0 0 0-3-3L14 7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Home() {
  const featured = getFeaturedProperties(3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-dvh items-center overflow-hidden bg-ink text-ivory">
        <Parallax amount={160} className="absolute inset-0">
          <Image
            src="/images/hero.svg"
            alt=""
            fill
            priority
            className="scale-110 object-cover opacity-90"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <p className="animate-rise text-xs uppercase tracking-[0.35em] text-bronze-light">
            Balsthal · Kanton Solothurn
          </p>
          <h1
            className="animate-rise mt-6 max-w-4xl font-display leading-[1.08]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", animationDelay: "0.1s" }}
          >
            Immobilien mit Charakter.
          </h1>
          <p
            className="animate-rise mt-8 max-w-xl text-lg font-light leading-relaxed text-ivory/80"
            style={{ animationDelay: "0.2s" }}
          >
            Verkauf, Vermietung, Verwaltung und Entwicklung — persönlich,
            diskret und mit einem Anspruch: Ihrer Immobilie gerecht zu werden.
          </p>
          <div
            className="animate-rise mt-12 flex flex-wrap gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/immobilien"
              className="bg-bronze px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-bronze-deep"
            >
              Objekte entdecken
            </Link>
            <Link
              href="/kontakt"
              className="border border-ivory/40 px-8 py-4 text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-200 hover:border-ivory hover:bg-ivory/10"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bronze-deep">
              Aktuelle Angebote
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Ausgewählte Objekte
            </h2>
          </div>
          <Link
            href="/immobilien"
            className="border-b border-bronze pb-1 text-xs uppercase tracking-[0.22em] text-bronze-deep transition-colors duration-200 hover:text-ink"
          >
            Alle Objekte ansehen
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p) => (
            <Tilt key={p.slug}>
              <PropertyCard property={p} />
            </Tilt>
          ))}
        </div>
      </section>

      {/* Slogan — lamp scroll reveal */}
      <LampSection />

      {/* Services */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze-light">
            Unsere Leistungen
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Alles rund um Ihre Immobilie — aus einer Hand
          </h2>
          <div className="mt-16 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="bg-ink p-8 lg:p-10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--bronze-light)"
                  strokeWidth="1.3"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
                <h3 className="mt-6 font-display text-lg">{s.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-ivory/65">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bronze-deep">
              Über uns
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Verwurzelt im Thal, zuhause im Kanton Solothurn
            </h2>
            <p className="mt-8 max-w-xl font-light leading-relaxed text-stone">
              Die MEICA Immobilien AG mit Sitz in Balsthal begleitet
              Eigentümerinnen, Käufer und Mieter mit regionaler Marktkenntnis
              und persönlichem Engagement. Ob Verkauf des Elternhauses,
              Erstvermietung eines Neubaus oder langfristige Bewirtschaftung —
              wir behandeln jede Liegenschaft, als wäre es unsere eigene.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-10 inline-block border border-ink px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory"
            >
              Mehr erfahren
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-line ring-1 ring-line">
            {[
              ["2020", "gegründet in Balsthal"],
              ["4", "Leistungsbereiche"],
              ["SO", "regionale Verankerung"],
              ["100%", "persönliche Betreuung"],
            ].map(([value, label]) => (
              <div key={label} className="bg-paper p-8 lg:p-10">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-4xl text-bronze-deep">{value}</dd>
                <dd className="mt-3 text-xs uppercase tracking-[0.18em] text-stone">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Sie möchten Ihre Immobilie verkaufen oder vermieten?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-light leading-relaxed text-stone">
            Wir beraten Sie unverbindlich und schätzen den Wert Ihrer
            Liegenschaft fundiert ein — diskret und kostenlos.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-block bg-bronze px-10 py-4 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-bronze-deep"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
