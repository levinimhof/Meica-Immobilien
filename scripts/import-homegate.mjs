#!/usr/bin/env node
// Lädt Fotos und Eckdaten der Homegate-Inserate herunter und legt die Bilder
// unter public/images/listings/<slug>/ ab.
//
// LOKAL ausführen (auf deinem Rechner — in der Cloud-Sandbox ist homegate.ch
// durch die Netzwerk-Policy gesperrt):
//
//   npm run import:listings
//
// Danach: die ausgegebenen `image`/`gallery`-Pfade in lib/properties.ts
// eintragen (oder die Ausgabe prüfen und übernehmen) und committen.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Slug ↔ Homegate-Inserat (muss zu lib/properties.ts passen)
const LISTINGS = [
  { slug: "wohnung-muehlegasse-balsthal", id: "4003286318" },
  { slug: "wohnung-gallusstrasse-balsthal", id: "4003204506" },
  { slug: "gewerbeflaeche-balsthal", id: "4003202965" },
];

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Accept-Language": "de-CH,de;q=0.9",
  Accept: "text/html,application/xhtml+xml",
};

async function fetchListing(id) {
  const url = `https://www.homegate.ch/mieten/${id}`;
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

function extractImages(html) {
  // Homegate liefert Bild-URLs über den Medien-CDN in eingebettetem JSON.
  const re = /https:\/\/media[0-9]*\.homegate\.ch\/[^"'\\ )]+/g;
  const urls = [...new Set(html.match(re) ?? [])]
    // Nur Objektfotos, keine Icons/Logos
    .filter((u) => /listings|images/.test(u) && !/logo|icon|avatar/i.test(u));
  return urls;
}

function extractMeta(html) {
  const pick = (re) => html.match(re)?.[1]?.trim() ?? null;
  return {
    title: pick(/<meta property="og:title" content="([^"]+)"/),
    description: pick(/<meta (?:property="og:description"|name="description") content="([^"]+)"/),
  };
}

async function download(url, dest) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`Bild ${url} → HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

let failures = 0;

for (const { slug, id } of LISTINGS) {
  console.log(`\n=== ${slug} (Homegate ${id}) ===`);
  try {
    const html = await fetchListing(id);
    const meta = extractMeta(html);
    if (meta.title) console.log(`Titel: ${meta.title}`);
    if (meta.description) console.log(`Beschreibung: ${meta.description.slice(0, 160)}…`);

    const images = extractImages(html);
    if (images.length === 0) {
      console.warn("Keine Bild-URLs gefunden — Seitenstruktur evtl. geändert.");
      failures++;
      continue;
    }

    const dir = join(ROOT, "public", "images", "listings", slug);
    mkdirSync(dir, { recursive: true });

    const saved = [];
    for (const [i, url] of images.slice(0, 12).entries()) {
      const ext = url.match(/\.(jpe?g|png|webp|avif)/i)?.[1]?.toLowerCase() ?? "jpg";
      const file = `${String(i + 1).padStart(2, "0")}.${ext}`;
      const bytes = await download(url, join(dir, file));
      saved.push(file);
      console.log(`  ${file}  (${Math.round(bytes / 1024)} kB)  ← ${url}`);
    }

    console.log(`\nIn lib/properties.ts für "${slug}" eintragen:`);
    console.log(`  image: "/images/listings/${slug}/${saved[0]}",`);
    console.log(
      `  gallery: [${saved.map((f) => `"/images/listings/${slug}/${f}"`).join(", ")}],`,
    );
  } catch (err) {
    failures++;
    console.error(`FEHLER: ${err.message}`);
    console.error(
      "Tipp: Falls HTTP 403 → Seite im Browser öffnen und die Fotos manuell " +
        `nach public/images/listings/${slug}/ speichern (01.jpg, 02.jpg, …).`,
    );
  }
}

process.exit(failures > 0 ? 1 : 0);
