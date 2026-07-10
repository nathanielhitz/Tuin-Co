import Link from "next/link";
import { company, telHref } from "@/lib/content";

const nav = [
  { href: "#diensten", label: "Diensten" },
  { href: "#projecten", label: "Projecten" },
  { href: "#duurzaam", label: "Duurzaam" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#faq", label: "Vragen" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-24 text-paper md:pb-0">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl font-semibold tracking-tight text-paper">
              Tuin&nbsp;&amp;&nbsp;Co
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-paper/60">
              Hovenier · Hoeksche Waard
            </p>
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-paper/70">
              Complete tuinen van ontwerp tot onderhoud, klimaatbewust aangelegd
              door één vaste vakman uit {company.city}.
            </p>
          </div>

          <nav aria-label="Secties" className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">Menu</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/75 transition-colors hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Contact" className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">Contact</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a href={telHref(company.phonePrimary)} className="text-paper/75 transition-colors hover:text-paper">
                  {company.phonePrimaryDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="text-paper/75 transition-colors hover:text-paper">
                  {company.email}
                </a>
              </li>
              <li className="text-paper/75">{company.city}, Hoeksche Waard</li>
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">Bedrijf</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-paper/75">
              <li>KvK {company.kvk}</li>
              <li>
                <Link href="/privacybeleid" className="transition-colors hover:text-paper">
                  Privacybeleid
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-8 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <p>&copy; {new Date().getFullYear()} {company.fullName}. Alle rechten voorbehouden.</p>
          <p>Zelfstandig hovenier sinds {company.foundedYear}</p>
        </div>
      </div>
    </footer>
  );
}
