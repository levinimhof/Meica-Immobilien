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

- **Objekte:** `lib/properties.ts` — enthält die aktuellen Miet-Inserate der
  MEICA Immobilien AG (mit `sourceUrl` zum Homegate-Inserat). Angaben bei
  Änderungen dort nachführen; alle Seiten lesen ausschliesslich aus diesem Modul.
- **Objektfotos:** `npm run import:listings` **lokal** ausführen — das Skript
  lädt die Fotos der Homegate-Inserate nach `public/images/listings/<slug>/`
  und gibt die passenden `image`/`gallery`-Einträge aus. (In der Cloud-Sandbox
  ist homegate.ch netzwerkseitig gesperrt, darum lokal.) Alternativ Fotos
  manuell dort ablegen. Bis dahin dienen die SVG-Visuals als Cover.
- **Logo:** Aktuell Wortmarke (Cinzel). Kundenlogo in `components/navbar.tsx`
  und `components/footer.tsx` einsetzen.
- **Kontaktformular:** Öffnet derzeit das Mailprogramm (`mailto:`), da kein
  E-Mail-Backend konfiguriert ist. Für echten Versand `components/contact-form.tsx`
  an eine Server Action / einen E-Mail-Dienst (z. B. Resend) anbinden.
- **Design-Tokens:** Farben und Schriften in `app/globals.css`
  (Cinzel + Josefin Sans, Ivory/Ink/Bronze-Palette). Referenz:
  `design-system/meica-immobilien/MASTER.md`.
