import Reveal from "./Reveal";
import { workSteps } from "@/lib/content";

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
            <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
            Werkwijze
          </p>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Vier stappen, geen verrassingen
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {workSteps.map((step) => (
            <div key={step.step} className="border-t-2 border-moss/25 pt-5">
              <span className="font-serif text-3xl font-semibold text-moss/50">{step.step}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
