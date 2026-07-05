import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die MEICA Immobilien AG in Balsthal — wir freuen uns auf Ihre Anfrage.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-40 text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze-light">
            Kontakt
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Wir freuen uns auf Sie
          </h1>
          <p className="mt-6 max-w-xl font-light leading-relaxed text-ivory/70">
            Ob Kauf, Verkauf, Miete oder Verwaltung — schildern Sie uns Ihr
            Anliegen. Wir melden uns persönlich und zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="font-display text-2xl">Ihre Nachricht</h2>
            <div className="mt-8 max-w-2xl">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-paper p-8 ring-1 ring-line">
              <h2 className="font-display text-lg">Adresse</h2>
              <address className="mt-5 space-y-1 text-sm font-light not-italic leading-relaxed text-ink-soft">
                <p>MEICA Immobilien AG</p>
                <p>Mühlegasse 2</p>
                <p>4710 Balsthal</p>
                <p>Schweiz</p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=M%C3%BChlegasse+2%2C+4710+Balsthal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border-b border-bronze pb-1 text-xs uppercase tracking-[0.22em] text-bronze-deep transition-colors hover:text-ink"
              >
                Route planen
              </a>
            </div>

            <div className="bg-paper p-8 ring-1 ring-line">
              <h2 className="font-display text-lg">Direkt erreichen</h2>
              <p className="mt-5 text-sm font-light leading-relaxed text-stone">
                E-Mail
              </p>
              <a
                href="mailto:info@meica-immobilien.ch"
                className="text-sm text-bronze-deep transition-colors hover:text-ink"
              >
                info@meica-immobilien.ch
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-stone">
                Sie finden unsere aktuellen Inserate auch auf Homegate und
                ImmoScout24.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
