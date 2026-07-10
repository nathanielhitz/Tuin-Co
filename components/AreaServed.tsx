import Reveal from "./Reveal";
import { company, serviceAreas } from "@/lib/content";

export default function AreaServed() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
              Werkgebied
            </p>
            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Thuis in de hele Hoeksche Waard
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Vanuit {company.city} werk ik in de dorpen rondom — van &apos;s-Gravendeel
              en Maasdam tot Strijen en Numansdorp. Twijfelt u of uw woonplaats
              erbij hoort? Bel of app gerust even.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <ul className="grid grid-cols-2 gap-x-6">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 border-b border-line py-4 text-lg font-semibold tracking-tight text-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
