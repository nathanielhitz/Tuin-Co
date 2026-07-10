import Image from "next/image";
import Reveal from "./Reveal";
import { jimg } from "@/lib/content";

const points = [
  {
    title: "Minstens de helft groen",
    text: "Ik streef naar maximaal 50% bestrating. De rest een mix van hoge en lage beplanting, beter tegen hitte en droogte, en fijner om in te vertoeven.",
  },
  {
    title: "Regenwater slim opgevangen",
    text: "Wateroverlast of juist droogte? Met doordachte oplossingen houdt uw tuin water beter vast waar het hoort.",
  },
  {
    title: "Vaak met subsidie",
    text: "Voor sommige verduurzamingen is subsidie beschikbaar. Ik vertel u graag welke mogelijkheden er voor uw tuin zijn.",
  },
];

export default function DuurzameTuin() {
  return (
    <section id="duurzaam" className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={jimg("ie15a93507eed70b5", "1640951206", 1100)}
                alt="Klimaatbestendige beplanting in een door Tuin & Co aangelegde tuin"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-paper/95 px-5 py-4 backdrop-blur">
                <p className="font-serif text-4xl font-semibold leading-none text-moss">50%</p>
                <p className="mt-1 text-xs font-medium text-muted">of meer van de tuin blijft groen</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
              Klimaatbewust
            </p>
            <h2 className="mt-5 max-w-[18ch] text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Een tuin die tegen het weer van morgen kan
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">
              Door de veranderingen in het klimaat hebben we steeds vaker te maken
              met wateroverlast of extreme droogte. Daarom leg ik tuinen aan met
              oog voor groen én water, mooi om te zien en klaar voor de toekomst.
            </p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              {points.map((p) => (
                <li key={p.title} className="py-5">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-1.5 max-w-[56ch] text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
