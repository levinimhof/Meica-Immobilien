import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/immobilien/${property.slug}`}
      className="group block bg-paper shadow-sm ring-1 ring-line transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[8/5] overflow-hidden">
        <Image
          src={property.image}
          alt={`Visualisierung: ${property.title} in ${property.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-ink/85 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-ivory">
            {property.offer === "kauf" ? "Kauf" : "Miete"}
          </span>
          {property.status && (
            <span className="bg-bronze px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white">
              {property.status}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">
          {property.zip} {property.location} · {property.type}
        </p>
        <h3 className="mt-3 font-display text-lg leading-snug text-ink">
          {property.title}
        </h3>
        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <p className="text-sm font-light text-stone">
            {property.rooms} Zimmer
            {property.livingSpace ? ` · ${property.livingSpace} m²` : ""}
          </p>
          <p className="font-medium tracking-wide text-bronze-deep">
            {formatPrice(property)}
          </p>
        </div>
      </div>
    </Link>
  );
}
