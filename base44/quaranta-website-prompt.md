# Base44 Build-Prompt — Website-Upgrade quaranta.ch (QUARANTA Group)

> **So verwendest du diese Datei:** Alles zwischen den Markierungen `=== PROMPT 1 START ===`
> und `=== PROMPT 1 ENDE ===` als **einen** Text in Base44 einfügen. Danach die
> Folge-Prompts (2–6) einzeln nachschieben. Alles, was in `[[ ]]` steht, vorher
> mit echten Angaben ersetzen oder ersatzlos streichen — Base44 erfindet sonst Inhalte.

---

=== PROMPT 1 START ===

Du baust die neue Unternehmens-Website der **QUARANTA Group** (Treuhand Quaranta GmbH,
Arisdorf BL, Schweiz). Es handelt sich um ein Redesign/Upgrade einer bestehenden Seite
(quaranta.ch). Baue eine vollständige, mehrseitige Web-App auf Deutsch (Schweizer
Rechtschreibung: immer «ss» statt «ß», Preise als «CHF 1'250.–», Datum als «14.03.2026»).

## 1. Auftrag in einem Satz

Eine ruhige, hochwertige, sehr schnelle Firmenwebsite, die vier Geschäftsbereiche klar
trennt (Treuhand, Immobilien, Baumanagement, Versicherungen), Vertrauen aufbaut und
qualifizierte Anfragen erzeugt — mit einem gepflegten Immobilien-Portal inkl. Filter,
Detailseiten und Anfrage-Workflow.

## 2. Firmenangaben (verbindlich, nicht erfinden)

- Firma: Treuhand Quaranta GmbH — Auftritt als «QUARANTA Group»
- Adresse: Hauptstrasse 133, 4422 Arisdorf, Schweiz
- UID: CHE-257.366.646, eingetragen im Handelsregister des Kantons Basel-Landschaft
- Geschäftsführer / Inhaber: Davide Quaranta
- Schwestergesellschaft: Baumanagement Quaranta GmbH
- Telefon: [[Telefonnummer]]
- E-Mail: [[info@quaranta.ch]]
- Öffnungszeiten: [[Mo–Fr 08:00–12:00 / 13:30–17:00]]

Wenn eine Angabe fehlt, lasse das Feld leer und markiere es im Admin-Bereich als
«zu ergänzen» — erfinde keine Telefonnummern, Zahlen, Referenzen oder Zertifikate.

## 3. Seitenstruktur (Routen)

| Route | Inhalt |
|---|---|
| `/` | Startseite: Hero, 4 Bereiche, Objekt-Highlights, Ablauf, Über uns, Referenzen, CTA |
| `/treuhand` | Buchführung, Lohnwesen, Steuern, Firmengründung, Abschlüsse, Beratung |
| `/immobilien` | Bereichsseite: Vermittlung, Verkauf, Bewirtschaftung, Bewertung + Objektportal |
| `/immobilien/objekte` | Objektübersicht mit Filter und Sortierung |
| `/immobilien/objekte/[slug]` | Exposé mit Galerie, Eckdaten, Karte, Anfrageformular, Downloads |
| `/baumanagement` | Neubau, Umbau, Renovation, Bauherrenvertretung, Kostenkontrolle |
| `/versicherungen` | Vorsorge, Sach-/Personenversicherung, Vergleich und Betreuung |
| `/ueber-uns` | Firma, Werte, Team, Geschichte, Netzwerk |
| `/referenzen` | Projekte und Kundenstimmen, filterbar nach Bereich |
| `/kontakt` | Formular, Adresse, Karte, Anfahrt, Öffnungszeiten, Rückrufwunsch |
| `/impressum`, `/datenschutz`, `/agb` | Rechtliches |
| `/admin` | Interner Bereich (nur für angemeldete Admins), siehe Abschnitt 9 |

Die bestehenden URLs `/treuhand`, `/immobilien`, `/baumanagement` müssen erhalten
bleiben. Für geänderte alte Pfade Weiterleitungen (301) vorsehen.

## 4. Design-System (verbindlich)

**Haltung:** Schweizer Präzision — viel Weissraum, strenges Raster, ruhige Typografie,
keine Effekthascherei. Wirkung: seriös, wohlhabend, unaufgeregt. Kein Stock-Foto-Kitsch,
keine Verlaufs-Buttons, keine Emoji, keine bunten Illustrationen.

**Farben (CSS-Variablen anlegen und ausschliesslich diese verwenden):**

```css
:root {
  --ink:        #12161C;  /* Text, dunkle Flächen */
  --ink-soft:   #2A313A;
  --slate:      #5A6472;  /* Sekundärtext */
  --sand:       #F6F3ED;  /* Seitenhintergrund */
  --paper:      #FFFFFF;  /* Karten */
  --brass:      #B08A4F;  /* Akzent: Linien, Labels, Hover */
  --brass-deep: #8A6A38;  /* Akzent-Text auf hell */
  --line:       #E4DFD5;  /* Rahmen 1px */
  --success:    #2F6B4F;
  --error:      #A33A2E;
}
```

Dunkle Sektionen: `--ink` als Hintergrund, `--sand` als Text, `--brass` als Akzent.

**Typografie (Google Fonts):**
- Überschriften: **Inter Tight**, 600, `letter-spacing: -0.02em`
- Fliesstext: **Inter**, 400, `line-height: 1.65`
- Labels/Kicker: Inter 500, `11px`, `uppercase`, `letter-spacing: 0.22em`, Farbe `--brass-deep`
- Skala: h1 clamp(2.5rem, 5vw, 4rem) · h2 clamp(1.75rem, 3vw, 2.5rem) · h3 1.25rem · body 1rem (mobil 1.0625rem)

**Layout & Komponenten:**
- Container max. 1240px, Seitenpadding 24px (mobil) / 40px (Desktop)
- Sektionsabstand: 96px mobil, 140px Desktop
- Radien: 4px (Buttons, Inputs), 8px (Karten, Bilder) — nichts Rundes, keine Pillen
- Schatten sparsam: `0 1px 2px rgba(18,22,28,.06)`, Hover `0 12px 28px rgba(18,22,28,.10)`
- Karten: `--paper` mit `1px solid var(--line)`, Hover: Rahmen wird `--brass`, Bild zoomt 1.03 in 400 ms
- Buttons: Primär = `--ink` Fläche / weisser Text; Sekundär = transparent mit 1px `--ink`;
  Tertiär = Textlink mit 1px Unterstrich in `--brass`
- Bewegung: nur `opacity` + `translateY(16px)` beim Scroll-Reveal, 500 ms, `cubic-bezier(.22,1,.36,1)`;
  `prefers-reduced-motion: reduce` respektieren (alle Animationen aus)
- Navigation: schlanke Sticky-Leiste, transparent über dem Hero, ab 80px Scroll `--paper`
  mit 1px Trennlinie; Dropdown für «Leistungen» (4 Bereiche); mobil Vollbild-Menü
- Footer: dunkel (`--ink`), 4 Spalten (Bereiche, Unternehmen, Kontakt, Rechtliches),
  darunter Zeile mit UID und Copyright

## 5. Inhalte je Seite (Copy verwenden, nur wo nötig anpassen)

### Startseite
1. **Hero** — Kicker «QUARANTA Group · Arisdorf», H1 «Zahlen, Immobilien und Bauten
   in guten Händen», Lead: «Als inhabergeführte Gruppe begleiten wir Privatpersonen,
   KMU und Eigentümer in Treuhand, Immobilien, Baumanagement und Versicherungen —
   persönlich, verbindlich und aus einer Hand.» Zwei Buttons: «Beratung anfragen»
   und «Objekte ansehen». Rechts/darunter ein ruhiges Bild [[Bild: Gebäude oder Region Baselland]].
2. **Vier Bereiche** — Raster aus 4 Karten (Treuhand, Immobilien, Baumanagement,
   Versicherungen) mit je 1 Satz Nutzenversprechen und Link auf die Bereichsseite.
3. **Objekt-Highlights** — 3 aktuelle Objekte aus der Entity `Property` (`featured = true`),
   Karten mit Bild, Ort, Zimmern, Fläche, Preis, Status-Badge.
4. **Warum QUARANTA** — 3–4 Punkte: «Eine Ansprechperson für alle vier Bereiche»,
   «Inhabergeführt seit [[Jahr]]», «Verankert in der Region Baselland», «Klare Honorare».
5. **Ablauf** — 4 Schritte: Erstgespräch (kostenlos) → Analyse & Offerte → Umsetzung →
   Laufende Betreuung.
6. **Kundenstimmen** — 2–3 Zitate aus der Entity `Testimonial` [[nur echte verwenden]].
7. **Abschluss-CTA** — dunkle Sektion: «Sprechen wir über Ihr Anliegen.» + Formular-Kurzform
   (Name, E-Mail, Anliegen) und Telefonnummer.

### Bereichsseiten (gleiches Muster für alle vier)
Hero mit Kicker und einem Satz · Leistungsliste als 2-spaltiges Raster (Titel + 2 Zeilen)
· «Für wen» (Privatpersonen / KMU / Eigentümer) · Ablauf · Preis-/Honorarhinweis
(«Pauschalen und Stundenansätze auf Anfrage — Sie erhalten vor jedem Auftrag eine
schriftliche Offerte.») · FAQ (4–6 Fragen aus Entity `Faq`) · CTA.

Leistungen je Bereich:
- **Treuhand:** Buchführung, Lohnadministration & Sozialversicherungen, Mehrwertsteuer,
  Jahresabschluss, Steuererklärungen (natürliche und juristische Personen),
  Firmengründung und Umstrukturierung, betriebswirtschaftliche Beratung.
- **Immobilien:** Vermarktung von Kauf- und Mietobjekten, Verkaufsbegleitung,
  Bewirtschaftung von Stockwerkeigentum und Mietliegenschaften, Bewertung/Schätzung,
  Übergaben und Abnahmen, Nebenkostenabrechnung.
- **Baumanagement:** Bauherrenvertretung, Projektleitung Neubau/Umbau, Renovation und
  Sanierung, Kosten- und Terminkontrolle, Ausschreibung und Vergabe, Bauabnahme.
- **Versicherungen:** Analyse bestehender Policen, Sach- und Haftpflichtversicherungen,
  Personen- und Vorsorgeversicherungen, Offertvergleich, Schadenbegleitung.

### Immobilien-Objektportal
- Übersicht `/immobilien/objekte`: Filterleiste (Kaufen/Mieten, Objektart, Ort, Zimmer ab,
  Preis bis), Sortierung (neu, Preis auf-/absteigend, Fläche), Umschalter Raster/Liste,
  Trefferzahl, Leerzustand mit Hinweis «Aktuell keine passenden Objekte — gerne nehmen
  wir Sie in den Suchauftrag auf» inkl. Suchauftrag-Formular.
- Detailseite `/immobilien/objekte/[slug]`: Bildergalerie mit Lightbox und Tastatur-
  bedienung, Eckdaten-Tabelle, Beschreibungstext, Merkmalsliste, Karte (statisch/eingebettet),
  Dokumente zum Download (Exposé-PDF, Grundriss), klebriges Anfrage-Panel auf Desktop,
  «Ähnliche Objekte», Zurück-Link zur gefilterten Übersicht.
- Status-Badges: «Neu», «Reserviert», «Verkauft», «Vermietet» — verkaufte/vermietete
  Objekte bleiben erreichbar, werden aber in der Übersicht ans Ende sortiert und ausgegraut.

### Kontakt
Formular (siehe 7.), Adresse, Karte, Anfahrt mit ÖV und Auto, Öffnungszeiten,
direkte Ansprechpersonen je Bereich aus Entity `TeamMember`.

## 6. Datenmodell (Base44-Entities)

**Property** — `title`, `slug` (eindeutig), `offer` (kauf|miete), `type`
(Wohnung|Haus|Gewerbe|Grundstück|Parkplatz), `status` (neu|aktiv|reserviert|verkauft|vermietet),
`price` (Zahl, CHF), `priceNote` (z. B. «zzgl. NK CHF 250.–»), `rooms`, `livingSpace`,
`plotSize`, `floor`, `yearBuilt`, `renovated`, `availableFrom`, `street`, `zip`, `city`,
`canton`, `lat`, `lng`, `excerpt`, `description` (Rich Text), `features` (Liste),
`images` (Liste Dateien), `documents` (Liste Dateien), `featured` (bool),
`externalUrl` (Homegate/ImmoScout), `contactPerson` (Referenz TeamMember).

**Service** — `division` (treuhand|immobilien|baumanagement|versicherungen), `title`,
`summary`, `bullets` (Liste), `order`.

**TeamMember** — `name`, `role`, `divisions` (Liste), `email`, `phone`, `photo`, `bio`, `order`.

**Reference** — `title`, `division`, `year`, `location`, `summary`, `images`, `outcome`.

**Testimonial** — `quote`, `author`, `role`, `division`.

**Faq** — `question`, `answer`, `division`, `order`.

**Inquiry** — `kind` (objekt|kontakt|rueckruf|suchauftrag), `property` (Referenz),
`name`, `email`, `phone`, `subject`, `message`, `preferredContact` (mail|telefon),
`consent` (bool), `status` (neu|in_bearbeitung|erledigt), `source` (Seiten-URL),
`createdAt`. Nur Admins dürfen Inquiries lesen.

Lege zum Start 3 Beispiel-Objekte, 4 Services je Bereich und 5 FAQ-Einträge als
klar erkennbare Demodaten an (Titel-Präfix «BEISPIEL — »), damit sie vor dem Livegang
gefunden und gelöscht werden können.

## 7. Formulare und Workflows

- Alle Formulare schreiben in `Inquiry` **und** versenden eine Benachrichtigung an
  `[[info@quaranta.ch]]` (Base44-E-Mail-Integration) sowie eine Bestätigungsmail an die
  absendende Person.
- Pflichtfelder: Name, E-Mail, Nachricht, Einwilligung Datenschutz (Checkbox mit Link).
  Telefon optional. Honeypot-Feld plus Zeitprüfung gegen Bots, kein Captcha.
- Validierung inline, Fehlermeldungen auf Deutsch, Erfolgszustand ersetzt das Formular
  durch eine Bestätigung mit Antwortzeit-Versprechen («Wir melden uns innert 1 Arbeitstag»).
- Objektanfrage übernimmt Objekttitel und -nummer automatisch.
- Formularzustand bleibt bei Fehlern erhalten; Absenden-Button zeigt Ladezustand und ist
  gegen Doppelklick gesperrt.

## 8. Qualitätsanforderungen

- **Responsive** ab 320px, echte Tablet-Zwischenstufe, keine horizontalen Scrollbalken.
- **Barrierefreiheit:** Kontrast ≥ 4.5:1, sichtbarer Fokusring in `--brass`, alle
  interaktiven Elemente per Tastatur bedienbar, Bilder mit `alt`, Formularfelder mit
  `<label>`, Lightbox mit Fokusfalle und ESC.
- **Performance:** Bilder lazy und in modernem Format, Hero-Bild bevorzugt geladen,
  keine Layout-Sprünge (feste Seitenverhältnisse), Ziel LCP < 2.5 s.
- **SEO:** je Seite eigener Title und Description, sprechende URLs, `h1` genau einmal,
  Sitemap, `robots.txt`, Open-Graph-Bilder. Strukturierte Daten: `RealEstateAgent`
  (mit Adresse, Öffnungszeiten, Geo) auf `/`, `Offer`/`Residence` auf Objektseiten,
  `FAQPage` auf Bereichsseiten, `BreadcrumbList` überall.
- **Recht (Schweiz, revDSG):** Datenschutzerklärung mit Zweck, Rechtsgrundlage,
  Bearbeitung, Aufbewahrung und Kontakt; Impressum mit UID; keine Tracking-Skripte
  ohne Einwilligung; falls Analytics gewünscht, nur cookiefrei — sonst kein Banner.
- **Sprache:** Sie-Form, kurze Sätze, keine Superlative ohne Beleg, keine Floskeln wie
  «Wir sind Ihr kompetenter Partner».

## 9. Adminbereich `/admin`

Nur für angemeldete Benutzer mit Rolle Admin. Enthält: Liste der Anfragen mit Status-
wechsel und Notiz, Objektverwaltung (anlegen, bearbeiten, Bilder hochladen und ordnen,
Status setzen, als «featured» markieren), Team, Referenzen, FAQ. Keine öffentlichen Links
darauf; unangemeldete Zugriffe werden auf die Startseite geleitet.

## 10. Abnahmekriterien

Fertig ist die Seite, wenn: alle Routen aus Abschnitt 3 existieren und untereinander
verlinkt sind · das Objektportal mit Filter, Sortierung, Detailseite und Anfrage
funktioniert · jedes Formular eine Inquiry erzeugt und eine Mail auslöst · das Design-System
aus Abschnitt 4 durchgängig verwendet wird (keine Fremdfarben, keine Fremdschriften) ·
die Seite auf 320px und 1440px sauber aussieht · Impressum, Datenschutz und AGB vorhanden
sind · keine erfundenen Firmenangaben, Zahlen oder Referenzen auf der Seite stehen.

Baue jetzt Schritt für Schritt: zuerst Design-System und Layout (Navigation, Footer),
dann Startseite, dann Immobilienportal, dann die übrigen Seiten, dann Admin.

=== PROMPT 1 ENDE ===

---

## Folge-Prompts (einzeln nachschieben)

**Prompt 2 — Immobilien-Portal schärfen**
> Verfeinere `/immobilien/objekte`: Filter als URL-Parameter abbilden (teilbare Links,
> Zurück-Navigation funktioniert), aktive Filter als entfernbare Chips anzeigen,
> Trefferzahl live aktualisieren, Skeleton-Ladezustand statt Spinner, Sortierung
> «Neuste zuerst» als Standard. Auf der Detailseite: Galerie mit Wischgesten auf Mobile,
> Bildzähler, Vollbild-Lightbox mit ESC und Pfeiltasten, klebriges Anfrage-Panel ab 1024px,
> Abschnitt «Ähnliche Objekte» (gleiche Gemeinde oder gleicher Typ, max. 3).

**Prompt 3 — Vertrauens-Bausteine**
> Ergänze auf allen Bereichsseiten einen Abschnitt «Ihre Ansprechperson» mit Foto, Rolle,
> Direktwahl und Mail aus `TeamMember`, sowie einen Honorar-Abschnitt mit dem Hinweis auf
> schriftliche Offerten. Auf `/referenzen`: Filter nach Bereich, Projektkarten mit Jahr,
> Ort und Ergebnis in einer Zeile.

**Prompt 4 — Performance- und A11y-Durchgang**
> Gehe die ganze Seite durch: Bilder in moderne Formate und mit festen Seitenverhältnissen,
> Hero-Bild priorisiert, alle übrigen lazy. Prüfe jeden Text auf Kontrast ≥ 4.5:1, ergänze
> fehlende `alt`-Texte und `<label>`, mache Lightbox und Mobilmenü tastaturbedienbar
> (Fokusfalle, ESC), respektiere `prefers-reduced-motion`. Entferne ungenutztes CSS und
> nicht verwendete Schriftschnitte.

**Prompt 5 — SEO und lokale Sichtbarkeit**
> Ergänze pro Seite Title (max. 60 Zeichen) und Description (max. 155 Zeichen) mit Bezug
> auf Arisdorf und die Region Baselland, strukturierte Daten laut Abschnitt 8, Sitemap,
> robots.txt und Open-Graph-Bilder. Erstelle 301-Weiterleitungen von allen alten Pfaden
> auf die neuen.

**Prompt 6 — Mehrsprachigkeit (optional)**
> Ergänze eine Sprachumschaltung DE/EN mit Präfix-Routen (`/en/...`), Deutsch bleibt
> Standard. Übersetze Navigation, Bereichsseiten und Formulare; Objekttexte bleiben
> zweisprachig pflegbar (Felder `title_en`, `excerpt_en`, `description_en`).

---

## Vor dem Livegang selbst ausfüllen

- [ ] Telefonnummer, E-Mail-Adresse, Öffnungszeiten
- [ ] Gründungsjahr, Team (Namen, Rollen, Fotos)
- [ ] Echte Objektdaten und Objektfotos (Demodaten mit Präfix «BEISPIEL — » löschen)
- [ ] Echte Referenzen und Kundenstimmen (nur mit Einverständnis)
- [ ] AGB und Datenschutzerklärung juristisch prüfen lassen
- [ ] Weiterleitungen der alten quaranta.ch-URLs testen
