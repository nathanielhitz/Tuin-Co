import Image from "next/image";
import Reveal from "./Reveal";
import { company, ownerImage } from "@/lib/content";

export default function OverCorstiaan() {
  return (
    <section id="over" className="border-t border-line bg-moss text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl">
              <Image
                src={ownerImage.src}
                alt={ownerImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70">
              <span aria-hidden="true" className="h-px w-8 bg-paper/40" />
              Over Tuin &amp; Co
            </p>
            <h2 className="mt-5 max-w-[20ch] text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              U werkt met één vaste vakman
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-paper/85">
              <p>
                &ldquo;Na tien jaar als autoverkoper volgde ik mijn hart: buiten werken,
                creëren en resultaat zien. In {company.foundedYear} startte ik
                Tuin&nbsp;&amp;&nbsp;Co. Sindsdien groeide het bedrijf vooral doordat
                tevreden klanten mij aanraden.&rdquo;
              </p>
              <p>
                &ldquo;Bij mij werkt u niet met wisselende ploegen, maar met één vast
                aanspreekpunt, van het eerste idee tot de laatste plant. We overleggen
                onderweg, zodat de tuin precies wordt zoals u voor ogen heeft.&rdquo;
              </p>
            </div>

            <p className="mt-8 font-serif text-2xl italic text-paper">Corstiaan Dekkers</p>
            <p className="text-sm text-paper/70">Hovenier &amp; eigenaar · {company.city}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
