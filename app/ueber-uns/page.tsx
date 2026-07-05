import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die MEICA Immobilien AG in Balsthal — regionale Marktkenntnis, persönliche Betreuung und ein Anspruch: Ihrer Immobilie gerecht zu werden.",
};

const values = [
  {
    title: "Persönlich",
    text: "Bei uns sprechen Sie nicht mit einem Callcenter, sondern mit Menschen, die Ihre Liegenschaft und die Region kennen. Kurze Wege, klare Antworten.",
  },
  {
    title: "Diskret",
    text: "Der Verkauf einer Immobilie ist Vertrauenssache. Wir vermarkten auf Wunsch diskret und behandeln Ihre Daten mit grösster Sorgfalt.",
  },
  {
    title: "Fundiert",
    text: "Unsere Einschätzungen basieren auf regionaler Markterfahrung und sauberer Analyse — nicht auf Bauchgefühl. Das schafft realistische Erwartungen.",
  },
  {
    title: "Langfristig",
    text: "Wir denken über den Abschluss hinaus: von der Entwicklung über die Renovation bis zur langjährigen Bewirtschaftung Ihrer Liegenschaft.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze-light">
            Über uns
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Immobilien sind für uns mehr als Objekte
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 font-light leading-relaxed text-ink-soft">
            <p>
              Die MEICA Immobilien AG wurde 2020 gegründet und hat ihren Sitz
              an der Mühlegasse 2 in Balsthal — mitten im Thal, am Fuss des
              Juras. Von hier aus betreuen wir Immobilien im Kanton Solothurn
              und in der umliegenden Region.
            </p>
            <p>
              Unser Tätigkeitsfeld umfasst den Erwerb, die Entwicklung,
              Renovation und den Umbau von Liegenschaften ebenso wie deren
              Vermietung, Verwaltung und Veräusserung. Diese Breite ist unsere
              Stärke: Wir betrachten jede Immobilie als Ganzes — von der
              Bausubstanz über die Rendite bis zur Geschichte, die sie erzählt.
            </p>
            <p>
              Ob Sie Ihr Elternhaus verkaufen, eine Wohnung suchen oder Ihre
              Liegenschaft professionell bewirtschaften lassen möchten: Wir
              nehmen uns Zeit für Ihre Situation und begleiten Sie von der
              ersten Einschätzung bis zur Schlüsselübergabe — und darüber
              hinaus.
            </p>
          </div>

          <div className="bg-paper p-10 ring-1 ring-line">
            <h2 className="font-display text-lg">MEICA Immobilien AG</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Sitz", "Mühlegasse 2, 4710 Balsthal"],
                ["Gegründet", "2020"],
                ["Rechtsform", "Aktiengesellschaft"],
                ["UID", "CHE-390.767.985"],
                ["Region", "Kanton Solothurn & Umgebung"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-line pb-3">
                  <dt className="font-light text-stone">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze-deep">
            Unsere Werte
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Wofür wir stehen
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title}>
                <p className="font-display text-4xl text-bronze-light">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-lg">{v.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          Lernen wir uns kennen
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-light leading-relaxed text-stone">
          Erzählen Sie uns von Ihrer Immobilie oder Ihrem Suchwunsch — wir
          melden uns persönlich bei Ihnen.
        </p>
        <Link
          href="/kontakt"
          className="mt-10 inline-block bg-bronze px-10 py-4 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-bronze-deep"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
