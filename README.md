# MEICA Immobilien AG — Website

Elegante Firmenwebsite mit Immobilienportal für die MEICA Immobilien AG, Balsthal (SO).
Gebaut mit **Next.js 16 (App Router)**, **Tailwind CSS 4** und TypeScript.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run lint
```

## Seiten

| Route | Inhalt |
|---|---|
| `/` | Startseite: Hero, ausgewählte Objekte, Leistungen, Über-uns-Teaser, CTA |
| `/immobilien` | Objektübersicht mit Filter (Kauf/Miete, Objektart) |
| `/immobilien/[slug]` | Exposé: Beschreibung, Eckdaten, Merkmale, Anfrageformular |
| `/ueber-uns` | Firmenporträt und Werte |
| `/kontakt` | Kontaktformular und Adresse |
| `/impressum`, `/datenschutz` | Rechtliches |

## Inhalte pflegen

- **Objekte:** `lib/properties.ts` — aktuell **Beispieldaten**. Echte Objekte dort
  eintragen oder später an eine Datenbank (z. B. Supabase) anbinden; alle Seiten
  lesen ausschliesslich aus diesem Modul.
- **Objektbilder:** `public/images/*.svg` sind generierte Platzhalter-Visuals.
  Echte Fotos unter gleichem Pfad ablegen und die `image`-Felder in
  `lib/properties.ts` anpassen.
- **Logo:** Aktuell Wortmarke (Cinzel). Kundenlogo in `components/navbar.tsx`
  und `components/footer.tsx` einsetzen.
- **Kontaktformular:** Öffnet derzeit das Mailprogramm (`mailto:`), da kein
  E-Mail-Backend konfiguriert ist. Für echten Versand `components/contact-form.tsx`
  an eine Server Action / einen E-Mail-Dienst (z. B. Resend) anbinden.
- **Design-Tokens:** Farben und Schriften in `app/globals.css`
  (Cinzel + Josefin Sans, Ivory/Ink/Bronze-Palette). Referenz:
  `design-system/meica-immobilien/MASTER.md`.
