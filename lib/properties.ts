// Objektdaten für das Immobilienportal.
// HINWEIS: Dies sind Beispieldaten. Echte Objekte hier eintragen oder später
// an eine Datenbank (z. B. Supabase) anbinden — die Seiten lesen nur aus
// diesem Modul (getProperties / getPropertyBySlug).

export type Offer = "kauf" | "miete";

export type Property = {
  slug: string;
  title: string;
  type: string;
  offer: Offer;
  location: string;
  zip: string;
  price: number; // CHF; bei Miete pro Monat
  rooms: number;
  livingSpace: number; // m²
  plotSize?: number; // m²
  floor?: string;
  yearBuilt?: number;
  available: string;
  status?: "Neu" | "Reserviert";
  image: string;
  excerpt: string;
  description: string[];
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "einfamilienhaus-balsthal",
    title: "Charmantes 5.5-Zimmer-Einfamilienhaus mit Garten",
    type: "Einfamilienhaus",
    offer: "kauf",
    location: "Balsthal",
    zip: "4710",
    price: 895_000,
    rooms: 5.5,
    livingSpace: 168,
    plotSize: 520,
    yearBuilt: 1998,
    available: "Nach Vereinbarung",
    status: "Neu",
    image: "/images/haus-balsthal.svg",
    excerpt:
      "Grosszügiges Familienhaus an ruhiger Lage mit gepflegtem Garten, Doppelgarage und Blick ins Grüne.",
    description: [
      "An bevorzugter, ruhiger Wohnlage in Balsthal steht dieses gepflegte Einfamilienhaus mit 5.5 Zimmern. Der durchdachte Grundriss verbindet einen offenen Wohn- und Essbereich mit direktem Gartenzugang.",
      "Im Obergeschoss befinden sich drei Schlafzimmer sowie ein modernes Badezimmer mit Badewanne und separater Dusche. Das ausgebaute Dachgeschoss bietet Raum für ein Home-Office oder ein zusätzliches Gästezimmer.",
      "Der gepflegte Garten mit Sitzplatz ist nach Südwesten ausgerichtet. Eine Doppelgarage und zwei Aussenparkplätze runden das Angebot ab.",
    ],
    features: [
      "Ruhige, familienfreundliche Lage",
      "Offener Wohn-/Essbereich mit Gartenzugang",
      "Ausgebautes Dachgeschoss",
      "Doppelgarage + 2 Aussenparkplätze",
      "Südwest-Garten mit Sitzplatz",
      "Cheminée im Wohnzimmer",
    ],
  },
  {
    slug: "wohnung-balsthal",
    title: "Helle 3.5-Zimmer-Wohnung mit grossem Balkon",
    type: "Wohnung",
    offer: "miete",
    location: "Balsthal",
    zip: "4710",
    price: 1_590,
    rooms: 3.5,
    livingSpace: 82,
    floor: "2. Obergeschoss",
    yearBuilt: 2015,
    available: "01.10.2026",
    image: "/images/wohnung-balsthal.svg",
    excerpt:
      "Moderne Wohnung im 2. OG mit offener Küche, grossem Balkon und Lift — zentral und dennoch ruhig gelegen.",
    description: [
      "Diese helle 3.5-Zimmer-Wohnung liegt im 2. Obergeschoss eines gepflegten Mehrfamilienhauses mit Lift, wenige Gehminuten vom Zentrum von Balsthal entfernt.",
      "Die offene Küche ist mit Glaskeramikherd, Geschirrspüler und viel Stauraum ausgestattet. Vom Wohnzimmer gelangen Sie auf den grossen, gedeckten Balkon mit Abendsonne.",
      "Ein Kellerabteil gehört zur Wohnung; ein Einstellhallenplatz kann für CHF 120.– pro Monat dazugemietet werden.",
    ],
    features: [
      "Grosser gedeckter Balkon (Westausrichtung)",
      "Offene, moderne Küche",
      "Lift im Haus",
      "Eigener Waschturm in der Wohnung",
      "Kellerabteil inklusive",
      "Einstellhallenplatz zumietbar",
    ],
  },
  {
    slug: "maisonette-oensingen",
    title: "Stilvolle 4.5-Zimmer-Maisonette-Wohnung",
    type: "Maisonette",
    offer: "kauf",
    location: "Oensingen",
    zip: "4702",
    price: 745_000,
    rooms: 4.5,
    livingSpace: 128,
    floor: "2./3. Obergeschoss",
    yearBuilt: 2009,
    available: "Nach Vereinbarung",
    image: "/images/maisonette-oensingen.svg",
    excerpt:
      "Wohnen auf zwei Etagen: grosszügige Maisonette mit Galerie, zwei Nasszellen und Blick Richtung Jura.",
    description: [
      "Diese stilvolle Maisonette-Wohnung überzeugt durch ihre grosszügige Raumaufteilung über zwei Etagen und den unverbaubaren Blick Richtung Jurakette.",
      "Im unteren Geschoss befinden sich der offene Wohn- und Essbereich mit moderner Küche sowie ein Zimmer und eine Dusche/WC. Über die elegante Treppe erreichen Sie die Galerie und zwei weitere Schlafzimmer mit Bad/WC.",
      "Oensingen bietet mit direktem Autobahnanschluss und SBB-Station eine ausgezeichnete Verkehrsanbindung — ideal für Pendlerinnen und Pendler.",
    ],
    features: [
      "Wohnen auf zwei Etagen mit Galerie",
      "Zwei Nasszellen",
      "Unverbaubarer Jurablick",
      "Ausgezeichnete Verkehrsanbindung (A1/SBB)",
      "Réduit und Kellerabteil",
      "Einstellhallenplatz inklusive",
    ],
  },
  {
    slug: "attika-solothurn",
    title: "Exklusive 2.5-Zimmer-Attikawohnung mit Terrasse",
    type: "Attikawohnung",
    offer: "miete",
    location: "Solothurn",
    zip: "4500",
    price: 1_980,
    rooms: 2.5,
    livingSpace: 71,
    floor: "Attika (4. OG)",
    yearBuilt: 2019,
    available: "01.09.2026",
    status: "Reserviert",
    image: "/images/attika-solothurn.svg",
    excerpt:
      "Über den Dächern von Solothurn: lichtdurchflutete Attikawohnung mit 30 m² Dachterrasse und Weitblick.",
    description: [
      "Wohnen über den Dächern der schönsten Barockstadt der Schweiz: Diese lichtdurchflutete Attikawohnung besticht durch raumhohe Fensterfronten und eine grosszügige Dachterrasse von rund 30 m².",
      "Der offene Wohnraum mit hochwertiger Küche geht nahtlos in den Aussenbereich über. Das Schlafzimmer verfügt über einen Einbauschrank; das Badezimmer ist mit Dusche und Badewanne ausgestattet.",
      "Altstadt, Aare und Hauptbahnhof sind in wenigen Gehminuten erreichbar.",
    ],
    features: [
      "Ca. 30 m² Dachterrasse mit Weitblick",
      "Raumhohe Fensterfronten",
      "Hochwertiger Innenausbau",
      "Zentrale Lage nahe Altstadt",
      "Lift direkt in die Wohnung",
      "Einstellhallenplatz zumietbar",
    ],
  },
  {
    slug: "landhaus-muemliswil",
    title: "Grosszügiges 6.5-Zimmer-Landhaus mit Umschwung",
    type: "Einfamilienhaus",
    offer: "kauf",
    location: "Mümliswil",
    zip: "4717",
    price: 1_150_000,
    rooms: 6.5,
    livingSpace: 210,
    plotSize: 1_240,
    yearBuilt: 1986,
    available: "Nach Vereinbarung",
    image: "/images/landhaus-muemliswil.svg",
    excerpt:
      "Idyllisches Landhaus im Naturpark Thal mit über 1'200 m² Umschwung, Doppelgarage und Panoramablick.",
    description: [
      "Eingebettet in die sanfte Hügellandschaft des Naturparks Thal liegt dieses grosszügige Landhaus mit über 1'200 m² Umschwung und freiem Blick auf die Jurahöhen.",
      "Das Haus wurde laufend unterhalten und bietet auf 210 m² Wohnfläche viel Raum für die ganze Familie: sechs Zimmer, zwei Nasszellen, eine grosse Wohnküche sowie ein separates Studio mit eigenem Eingang.",
      "Der parkähnliche Garten mit altem Baumbestand, die Pergola und der Gartensitzplatz machen das Anwesen zu einem privaten Rückzugsort.",
    ],
    features: [
      "Über 1'200 m² Umschwung",
      "Separates Studio mit eigenem Eingang",
      "Panoramablick auf die Jurahöhen",
      "Doppelgarage und Werkstatt",
      "Parkähnlicher Garten mit Pergola",
      "Lage im Naturpark Thal",
    ],
  },
  {
    slug: "gewerbe-balsthal",
    title: "Repräsentative Büro-/Gewerbefläche im Zentrum",
    type: "Gewerbe",
    offer: "miete",
    location: "Balsthal",
    zip: "4710",
    price: 2_400,
    rooms: 4,
    livingSpace: 145,
    floor: "1. Obergeschoss",
    available: "Sofort",
    image: "/images/gewerbe-balsthal.svg",
    excerpt:
      "Flexible Gewerbefläche mit 145 m² an zentraler Lage — ideal für Büro, Praxis oder Atelier.",
    description: [
      "Im Zentrum von Balsthal vermieten wir diese repräsentative Gewerbefläche im 1. Obergeschoss eines gepflegten Geschäftshauses.",
      "Die rund 145 m² lassen sich flexibel aufteilen und eignen sich für Büro-, Praxis- oder Ateliernutzung. Teeküche und zwei WC-Anlagen sind vorhanden; die Fläche wird auf Wunsch nach Mieterwunsch ausgebaut.",
      "Kundenparkplätze befinden sich direkt vor dem Haus, die Bushaltestelle in unmittelbarer Nähe.",
    ],
    features: [
      "Flexibel aufteilbare Fläche",
      "Ausbau nach Mieterwunsch möglich",
      "Teeküche und zwei WC-Anlagen",
      "Kundenparkplätze vor dem Haus",
      "Zentrale Lage mit ÖV-Anschluss",
      "Sofort verfügbar",
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
