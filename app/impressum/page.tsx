import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 lg:px-10">
      <h1 className="font-display text-4xl">Impressum</h1>

      <div className="mt-10 space-y-8 text-sm font-light leading-relaxed text-ink-soft">
        <div>
          <h2 className="font-display text-lg text-ink">Verantwortlich für den Inhalt</h2>
          <address className="mt-3 space-y-1 not-italic">
            <p>MEICA Immobilien AG</p>
            <p>Mühlegasse 2</p>
            <p>4710 Balsthal</p>
            <p>Schweiz</p>
            <p className="pt-2">
              E-Mail:{" "}
              <a href="mailto:info@meica-immobilien.ch" className="text-bronze-deep hover:text-ink">
                info@meica-immobilien.ch
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Handelsregister</h2>
          <p className="mt-3">
            Eingetragen im Handelsregister des Kantons Solothurn
            <br />
            UID: CHE-390.767.985
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Haftungsausschluss</h2>
          <p className="mt-3">
            Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt
            erstellt. Die MEICA Immobilien AG übernimmt jedoch keine Gewähr
            für die Richtigkeit, Vollständigkeit und Aktualität der
            bereitgestellten Inhalte. Alle Angebote sind unverbindlich.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Urheberrechte</h2>
          <p className="mt-3">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern und
            Dateien auf dieser Website gehören ausschliesslich der MEICA
            Immobilien AG oder den speziell genannten Rechtsinhabern. Für die
            Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
            der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>
      </div>
    </section>
  );
}
