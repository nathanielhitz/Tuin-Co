"use client";

import { useEffect, useState } from "react";
import { company, telHref } from "@/lib/content";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#projecten", label: "Projecten" },
  { href: "#duurzaam", label: "Duurzaam" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#faq", label: "Vragen" },
  { href: "#contact", label: "Contact" },
];

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-serif text-[1.6rem] font-semibold tracking-tight ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        Tuin&nbsp;&amp;&nbsp;Co
      </span>
      <span
        className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] ${
          onDark ? "text-paper/70" : "text-muted"
        }`}
      >
        Hovenier · Hoeksche Waard
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a href="#hoofdinhoud" className="group">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-tight text-ink/70 transition-colors duration-200 hover:text-moss"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={telHref(company.phonePrimary)}
            className="text-[13px] font-medium tracking-tight text-ink/80 transition-colors hover:text-moss"
          >
            {company.phonePrimaryDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold tracking-tight text-paper transition-colors duration-300 hover:bg-brand-deep active:scale-[0.98]"
          >
            Offerte aanvragen
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong text-ink transition-colors duration-200 hover:border-moss hover:text-moss lg:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-3/4 bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium tracking-tight text-ink/75 transition-colors hover:bg-moss-soft/70 hover:text-moss"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold tracking-tight text-paper transition-colors duration-300 hover:bg-brand-deep"
          >
            Offerte aanvragen
          </a>
        </div>
      )}
    </header>
  );
}
