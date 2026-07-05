import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.18em]">MEICA</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-ivory/60">
              Immobilien AG
            </p>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-ivory/70">
              Ihr Partner für Verkauf, Vermietung, Verwaltung und Entwicklung
              von Immobilien im Kanton Solothurn und Umgebung.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-bronze-light">
              Kontakt
            </p>
            <address className="mt-5 space-y-1.5 text-sm font-light not-italic leading-relaxed text-ivory/80">
              <p>MEICA Immobilien AG</p>
              <p>Mühlegasse 2</p>
              <p>4710 Balsthal</p>
              <p className="pt-3">
                <a href="mailto:info@meica-immobilien.ch" className="transition-colors hover:text-bronze-light">
                  info@meica-immobilien.ch
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-bronze-light">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5 text-sm font-light text-ivory/80">
              <li><Link href="/immobilien" className="transition-colors hover:text-bronze-light">Immobilien</Link></li>
              <li><Link href="/ueber-uns" className="transition-colors hover:text-bronze-light">Über uns</Link></li>
              <li><Link href="/kontakt" className="transition-colors hover:text-bronze-light">Kontakt</Link></li>
              <li><Link href="/impressum" className="transition-colors hover:text-bronze-light">Impressum</Link></li>
              <li><Link href="/datenschutz" className="transition-colors hover:text-bronze-light">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-8 text-xs font-light text-ivory/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} MEICA Immobilien AG, Balsthal</p>
          <p>CHE-390.767.985</p>
        </div>
      </div>
    </footer>
  );
}
