import Reveal from "./Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-moss-soft/40">
      <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
            <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
            Veelgestelde vragen
          </p>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Goed om te weten
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-10 md:mt-14">
          <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-moss transition-transform duration-300 group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
