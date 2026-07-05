import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/contact-form";
import {
  formatPrice,
  getProperties,
  getPropertyBySlug,
} from "@/lib/properties";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProperties().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: property.title,
    description: property.excerpt,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const facts: [string, string][] = [
    ["Objektart", property.type],
    ["Angebot", property.offer === "kauf" ? "Kauf" : "Miete"],
    [
      "Ort",
      property.address
        ? `${property.address}, ${property.zip} ${property.location}`
        : `${property.zip} ${property.location}`,
    ],
    ["Zimmer", String(property.rooms)],
    ...(property.livingSpace
      ? ([["Wohnfläche", `${property.livingSpace} m²`]] as [string, string][])
      : []),
    ...(property.plotSize
      ? ([["Grundstück", `${property.plotSize} m²`]] as [string, string][])
      : []),
    ...(property.floor
      ? ([["Etage", property.floor]] as [string, string][])
      : []),
    ...(property.yearBuilt
      ? ([["Baujahr", String(property.yearBuilt)]] as [string, string][])
      : []),
    ...(property.renovated
      ? ([["Renoviert", String(property.renovated)]] as [string, string][])
      : []),
    ["Verfügbar", property.available],
  ];

  return (
    <>
      {/* Header image */}
      <section className="relative h-[55vh] min-h-[400px] bg-ink">
        <Image
          src={property.image}
          alt={`Visualisierung: ${property.title} in ${property.location}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
            <Link
              href="/immobilien"
              className="text-xs uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-ivory"
            >
              ← Zurück zur Übersicht
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="bg-ivory/15 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-ivory backdrop-blur">
                {property.offer === "kauf" ? "Kauf" : "Miete"}
              </span>
              {property.status && (
                <span className="bg-bronze px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white">
                  {property.status}
                </span>
              )}
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-ivory md:text-5xl">
              {property.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
          {/* Description */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">
              {property.zip} {property.location} · {property.type}
            </p>
            <p className="mt-4 font-display text-3xl text-bronze-deep">
              {formatPrice(property)}
            </p>

            <div className="mt-10 space-y-6 font-light leading-relaxed text-ink-soft">
              {property.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {property.gallery && property.gallery.length > 0 && (
              <>
                <h2 className="mt-14 font-display text-xl">Impressionen</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {property.gallery.map((src, i) => (
                    <div
                      key={src}
                      className={`relative overflow-hidden ring-1 ring-line ${
                        i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${property.title} — Bild ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="mt-14 font-display text-xl">Das zeichnet dieses Objekt aus</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {property.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light leading-relaxed text-ink-soft">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--bronze)"
                    strokeWidth="2"
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Facts + inquiry */}
          <aside className="space-y-8">
            <div className="bg-paper p-8 ring-1 ring-line">
              <h2 className="font-display text-lg">Eckdaten</h2>
              <dl className="mt-6 divide-y divide-line">
                {facts.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 py-3 text-sm">
                    <dt className="font-light text-stone">{label}</dt>
                    <dd className="text-right text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              {property.sourceUrl && (
                <a
                  href={property.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block border-b border-bronze pb-1 text-xs uppercase tracking-[0.22em] text-bronze-deep transition-colors hover:text-ink"
                >
                  Inserat auf Homegate ansehen
                </a>
              )}
            </div>

            <div className="bg-ink p-8 text-ivory">
              <h2 className="font-display text-lg">Interessiert?</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-ivory/70">
                Vereinbaren Sie eine unverbindliche Besichtigung — wir freuen
                uns auf Ihre Anfrage.
              </p>
              <div className="mt-6 [&_input]:border-ivory/20 [&_input]:bg-ivory/5 [&_input]:text-ivory [&_label]:text-ivory/60 [&_textarea]:border-ivory/20 [&_textarea]:bg-ivory/5 [&_textarea]:text-ivory [&_button]:bg-bronze [&_button:hover]:bg-bronze-deep">
                <ContactForm subject={`Anfrage: ${property.title} (${property.location})`} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
