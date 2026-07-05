"use client";

import { useState } from "react";

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 focus:border-bronze focus:outline-none focus:ring-1 focus:ring-bronze";

export default function ContactForm({ subject }: { subject?: string }) {
  const [sent, setSent] = useState(false);

  // Ohne Backend/E-Mail-Dienst öffnet das Formular das Mailprogramm mit
  // vorbefüllter Nachricht. Später durch Server Action + E-Mail-Versand ersetzen.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const mailSubject = subject ?? "Kontaktanfrage über die Website";
    const body = `${message}\n\n—\n${name}${phone ? `\nTelefon: ${phone}` : ""}`;
    window.location.href = `mailto:info@meica-immobilien.ch?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-bronze/40 bg-bronze/5 px-8 py-10 text-center" role="status">
        <p className="font-display text-lg text-ink">Vielen Dank</p>
        <p className="mt-3 text-sm font-light leading-relaxed text-stone">
          Ihr E-Mail-Programm wurde mit Ihrer Nachricht geöffnet. Bitte senden
          Sie die E-Mail ab — wir melden uns umgehend bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">
            Name <span aria-hidden="true" className="text-bronze">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">
            Telefon
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-stone">
          Nachricht <span aria-hidden="true" className="text-bronze">*</span>
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={inputClasses} />
      </div>

      <button
        type="submit"
        className="cursor-pointer bg-ink px-8 py-4 text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-200 hover:bg-bronze-deep"
      >
        Nachricht senden
      </button>
    </form>
  );
}
