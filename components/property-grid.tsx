"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/property-card";
import type { Offer, Property } from "@/lib/properties";

type OfferFilter = Offer | "alle";

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  const [offer, setOffer] = useState<OfferFilter>("alle");
  const [type, setType] = useState("alle");

  const types = useMemo(
    () => [...new Set(properties.map((p) => p.type))].sort(),
    [properties],
  );

  const filtered = properties.filter(
    (p) =>
      (offer === "alle" || p.offer === offer) &&
      (type === "alle" || p.type === type),
  );

  const offerTabs: { value: OfferFilter; label: string }[] = [
    { value: "alle", label: "Alle" },
    { value: "kauf", label: "Kaufen" },
    { value: "miete", label: "Mieten" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Angebot filtern" className="flex gap-2">
          {offerTabs.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setOffer(t.value)}
              aria-pressed={offer === t.value}
              className={`cursor-pointer px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
                offer === t.value
                  ? "bg-ink text-ivory"
                  : "bg-paper text-ink-soft ring-1 ring-line hover:ring-bronze"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-stone">
          Objektart
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="cursor-pointer border border-line bg-paper px-4 py-2.5 text-sm normal-case tracking-normal text-ink focus:border-bronze focus:outline-none"
          >
            <option value="alle">Alle Objektarten</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm font-light text-stone" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "Objekt" : "Objekte"} gefunden
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-line bg-paper px-8 py-16 text-center">
          <p className="font-display text-lg text-ink">Keine passenden Objekte</p>
          <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed text-stone">
            Aktuell haben wir kein Objekt in dieser Kategorie. Kontaktieren Sie
            uns — gerne merken wir Ihr Suchprofil für neue Angebote vor.
          </p>
          <button
            type="button"
            onClick={() => {
              setOffer("alle");
              setType("alle");
            }}
            className="mt-6 cursor-pointer border border-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
