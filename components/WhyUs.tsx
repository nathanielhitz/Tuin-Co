import Reveal from "./Reveal";
import { coreValues, company, whatsappHref } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="waarom" className="border-t border-line bg-moss-soft/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
            <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
            Waarom Tuin &amp; Co
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Persoonlijk, betrokken en eerlijk geprijsd
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={1} className="lg:col-span-7">
            <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {coreValues.map((value) => (
                <li key={value.title} className="border-t-2 border-moss/25 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Highlight: gratis verlichtingsdemo — unieke haak */}
          <Reveal delay={2} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-8 text-paper">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper/10 text-paper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                  </svg>
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-paper">
                  Gratis verlichtingsdemo bij u thuis
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/80">
                  Zien wat tuinverlichting met uw tuin doet? Met mijn demokoffer
                  vol {company.lightingBrand}-lampen laat ik het effect &apos;s avonds
                  in uw eigen tuin zien — vrijblijvend en zonder kosten.
                </p>
              </div>
              <a
                href={whatsappHref("Hallo Corstiaan, ik zou graag een gratis verlichtingsdemo willen inplannen.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold tracking-tight text-paper transition-colors duration-300 hover:bg-brand-deep active:scale-[0.98]"
              >
                Vraag een demo aan
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h16M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
