import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 lg:px-10">
      <h1 className="font-display text-4xl">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-sm font-light leading-relaxed text-ink-soft">
        <p>
          Der Schutz Ihrer Personendaten ist uns ein wichtiges Anliegen. Wir
          bearbeiten Personendaten im Einklang mit dem schweizerischen
          Datenschutzgesetz (DSG).
        </p>

        <div>
          <h2 className="font-display text-lg text-ink">Verantwortliche Stelle</h2>
          <p className="mt-3">
            MEICA Immobilien AG, Mühlegasse 2, 4710 Balsthal
            <br />
            E-Mail:{" "}
            <a href="mailto:info@meica-immobilien.ch" className="text-bronze-deep hover:text-ink">
              info@meica-immobilien.ch
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Bearbeitung von Personendaten</h2>
          <p className="mt-3">
            Wenn Sie uns über das Kontaktformular oder per E-Mail
            kontaktieren, bearbeiten wir die von Ihnen angegebenen Daten
            (Name, Kontaktangaben, Inhalt Ihrer Nachricht) ausschliesslich zur
            Beantwortung Ihrer Anfrage und zur Abwicklung des angefragten
            Geschäfts. Eine Weitergabe an Dritte erfolgt nur, soweit dies zur
            Erfüllung des Zwecks erforderlich ist oder eine gesetzliche
            Pflicht besteht.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Hosting und Logdaten</h2>
          <p className="mt-3">
            Beim Besuch dieser Website können durch den Hosting-Anbieter
            technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des
            Zugriffs, aufgerufene Seiten) protokolliert werden. Diese Daten
            dienen der Sicherstellung eines störungsfreien Betriebs und der
            Verbesserung unseres Angebots und lassen ohne weitere Datenquellen
            keine Rückschlüsse auf Ihre Person zu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft über die von uns bearbeiteten
            Personendaten sowie auf deren Berichtigung oder Löschung. Wenden
            Sie sich dazu an die oben genannte Kontaktadresse.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-ink">Änderungen</h2>
          <p className="mt-3">
            Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt
            die jeweils auf dieser Website publizierte Fassung.
          </p>
        </div>
      </div>
    </section>
  );
}
