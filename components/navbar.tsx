"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/immobilien", label: "Immobilien" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Home has a dark hero behind the transparent navbar; all other pages get
  // the solid treatment from the start.
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-transparent text-ivory"
          : "border-b border-line bg-ivory/95 text-ink backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-xl tracking-[0.18em]">MEICA</span>
          <span
            className={`text-[0.7rem] font-light uppercase tracking-[0.3em] ${
              overHero ? "text-ivory/70" : "text-stone"
            }`}
          >
            Immobilien AG
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative pb-1 text-sm uppercase tracking-[0.18em] transition-colors duration-200 ${
                  active
                    ? "text-bronze"
                    : overHero
                      ? "text-ivory/85 hover:text-ivory"
                      : "text-ink-soft hover:text-bronze-deep"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px bg-bronze transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ivory px-6 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm uppercase tracking-[0.18em] ${
                  pathname.startsWith(l.href) ? "text-bronze-deep" : "text-ink-soft"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
