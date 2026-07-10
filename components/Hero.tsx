import Image from "next/image";
import { company, heroImage, telHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hoofdinhoud"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed foto die meteen het vak toont */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 pt-28 md:px-8 md:pb-24 lg:pb-28">
        {/* Badge/wordmark over de foto — de "ontworpen" indruk */}
        <div className="inline-flex items-center gap-3 rounded-full border border-paper/25 bg-ink/25 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/90">
            Hovenier · {company.city} & de {company.region}
          </span>
        </div>

        <h1 className="mt-6 max-w-[20ch] text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-[4.5rem]">
          Een tuin die bij u past,{" "}
          <span className="font-light italic text-paper/95">van eerste schets tot laatste plant.</span>
        </h1>

        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-paper/85 sm:text-lg">
          Tuin&nbsp;&amp;&nbsp;Co legt complete tuinen aan in de Hoeksche Waard.
          U werkt van ontwerp tot oplevering met één vaste vakman — klimaatbewust
          aangelegd, tegen een eerlijke prijs.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-sm font-semibold tracking-tight text-paper transition-all duration-300 hover:bg-brand-deep active:scale-[0.98]"
          >
            Offerte aanvragen
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M4 12h16M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#projecten"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/40 bg-paper/5 px-7 py-4 text-sm font-semibold tracking-tight text-paper backdrop-blur-sm transition-colors duration-300 hover:bg-paper/15"
          >
            Bekijk projecten
          </a>
          <a
            href={telHref(company.phonePrimary)}
            className="inline-flex items-center justify-center gap-2 px-2 py-2 text-sm font-medium text-paper/90 underline decoration-paper/40 underline-offset-8 transition-colors hover:decoration-paper sm:ml-2"
          >
            of bel {company.phonePrimaryDisplay}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/20 pt-6 text-[12px] font-medium tracking-wide text-paper/75">
          <span>Zelfstandig hovenier sinds {company.foundedYear}</span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-paper/30 sm:block" />
          <span>Eén vast aanspreekpunt</span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-paper/30 sm:block" />
          <span>KvK {company.kvk}</span>
        </div>
      </div>
    </section>
  );
}
