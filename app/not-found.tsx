import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="font-display text-7xl text-bronze-light">404</p>
      <h1 className="mt-6 font-display text-3xl">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-md font-light leading-relaxed text-stone">
        Die gesuchte Seite existiert nicht oder wurde verschoben — vielleicht
        wurde das Objekt bereits vermittelt.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-ink px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory"
      >
        Zur Startseite
      </Link>
    </section>
  );
}
