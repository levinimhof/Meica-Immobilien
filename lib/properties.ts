// Objektdaten für das Immobilienportal — aktuelle Miet-Inserate der
// MEICA Immobilien AG (Quelle: Homegate/ImmoScout24, siehe sourceUrl).
//
// BILDER: Echte Objektfotos mit `npm run import:listings` von Homegate
// herunterladen (lokal ausführen, siehe scripts/import-homegate.mjs) oder
// manuell unter public/images/listings/<slug>/ ablegen und unten in
// `image`/`gallery` eintragen. Bis dahin dienen die SVG-Visuals als Cover.

export type Offer = "kauf" | "miete";

export type Property = {
  slug: string;
  title: string;
  type: string;
  offer: Offer;
  location: string;
  zip: string;
  address?: string;
  price: number; // CHF; bei Miete pro Monat
  rooms: number;
  livingSpace?: number; // m²
  plotSize?: number; // m²
  floor?: string;
  yearBuilt?: number;
  renovated?: number;
  available: string;
  status?: "Neu" | "Reserviert";
  image: string;
  gallery?: string[];
  sourceUrl?: string;
  excerpt: string;
  description: string[];
  features: string[];
};

export const properties: Property[] = [
  {
    // Homegate-Inserat 4003286318 — Angaben bitte gegen das Inserat prüfen.
    slug: "wohnung-muehlegasse-balsthal",
    title: "Charmante 4.5-Zimmer-Wohnung im Zentrum",
    type: "Wohnung",
    offer: "miete",
    location: "Balsthal",
    zip: "4710",
    address: "Mühlegasse 1",
    price: 1_860,
    rooms: 4.5,
    livingSpace: 128,
    renovated: 2020,
    available: "Nach Vereinbarung",
    status: "Neu",
    image: "/images/wohnung-balsthal.svg",
    sourceUrl: "https://www.homegate.ch/mieten/4003286318",
    excerpt:
      "Grosszügige, 2020 renovierte Wohnung mit 128 m² Wohnfläche an der Mühlegasse — mitten im Zentrum von Balsthal.",
    description: [
      "Im Herzen von Balsthal, nur wenige Schritte vom Dorfzentrum entfernt, vermieten wir diese charmante 4.5-Zimmer-Wohnung an der Mühlegasse 1.",
      "Die Wohnung wurde 2020 umfassend renoviert und verbindet den Charakter des Hauses mit modernem Wohnkomfort: helle Räume, eine zeitgemässe Küche und gepflegte Nasszellen.",
      "Mit rund 128 m² Wohnfläche bietet sie viel Platz für Familien oder Paare, die grosszügig wohnen möchten. Einkaufsmöglichkeiten, Schulen und der öffentliche Verkehr sind in Gehdistanz.",
    ],
    features: [
      "2020 umfassend renoviert",
      "Rund 128 m² Wohnfläche",
      "Zentrale Lage im Dorfkern",
      "Helle, grosszügige Räume",
      "Moderne Küche",
      "Schulen und ÖV in Gehdistanz",
    ],
  },
  {
    // Homegate-Inserat 4003204506 — Angaben bitte gegen das Inserat prüfen.
    slug: "wohnung-gallusstrasse-balsthal",
    title: "Grosszügige 6.5-Zimmer-Wohnung mit Parkplatz",
    type: "Wohnung",
    offer: "miete",
    location: "Balsthal",
    zip: "4710",
    address: "Gallusstrasse 15",
    price: 1_370,
    rooms: 6.5,
    available: "Nach Vereinbarung",
    image: "/images/haus-balsthal.svg",
    sourceUrl: "https://www.homegate.ch/mieten/4003204506",
    excerpt:
      "Viel Raum zum fairen Preis: grosszügige Wohnung an der Gallusstrasse 15 — Parkplatz in der Miete inbegriffen.",
    description: [
      "An der Gallusstrasse 15 in Balsthal vermieten wir diese grosszügige 6.5-Zimmer-Wohnung — ideal für alle, die viel Platz suchen, sei es als Familie, Wohngemeinschaft oder für Wohnen und Arbeiten unter einem Dach.",
      "Die Wohnung besticht durch ihr ausgesprochen faires Preis-Leistungs-Verhältnis: Ein Parkplatz ist in der Miete bereits inbegriffen.",
      "Das Quartier ist ruhig und familienfreundlich gelegen; das Zentrum von Balsthal mit Einkaufsmöglichkeiten und ÖV-Anschluss erreichen Sie in wenigen Gehminuten.",
    ],
    features: [
      "6.5 Zimmer — viel Raum zum fairen Preis",
      "Parkplatz in der Miete inbegriffen",
      "Auch als WG geeignet",
      "Ruhiges, familienfreundliches Quartier",
      "Zentrum in Gehdistanz",
      "Balkon-/Gartensitzplatz-Zugang",
    ],
  },
  {
    // Homegate-Inserat 4003202965 — Angaben bitte gegen das Inserat prüfen.
    slug: "gewerbeflaeche-balsthal",
    title: "Helle und moderne Gewerbefläche",
    type: "Gewerbe",
    offer: "miete",
    location: "Balsthal",
    zip: "4710",
    address: "Gallusstrasse 2",
    price: 2_650,
    rooms: 4.5,
    floor: "Zentrum",
    available: "Nach Vereinbarung",
    image: "/images/gewerbe-balsthal.svg",
    sourceUrl: "https://www.homegate.ch/mieten/4003202965",
    excerpt:
      "Moderne, helle Gewerbefläche im Zentrum von Balsthal — ideal für Büro, Praxis, Atelier oder Dienstleistung.",
    description: [
      "Im Zentrum von Balsthal vermieten wir diese helle und moderne Gewerbefläche — eine seltene Gelegenheit für Unternehmen, die Wert auf eine repräsentative Adresse mit guter Erreichbarkeit legen.",
      "Die Räume sind hell und flexibel nutzbar: als Büro, Praxis, Atelier oder für Dienstleistungen mit Kundenverkehr. Die moderne Ausstattung erlaubt einen raschen Bezug ohne grossen Umbauaufwand.",
      "Parkiermöglichkeiten und der öffentliche Verkehr befinden sich in unmittelbarer Nähe.",
    ],
    features: [
      "Helle, moderne Räume",
      "Flexibel nutzbar (Büro, Praxis, Atelier)",
      "Repräsentative Zentrumslage",
      "Rascher Bezug möglich",
      "Parkiermöglichkeiten in der Nähe",
      "Guter ÖV-Anschluss",
    ],
  },
];

export function getProperties(): Property[] {
  return properties;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(count = 3): Property[] {
  return properties.slice(0, count);
}

export function formatPrice(p: Property): string {
  const chf = String(p.price).replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  return p.offer === "miete" ? `CHF ${chf}.–/Mt.` : `CHF ${chf}.–`;
}
