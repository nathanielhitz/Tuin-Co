import Image from "next/image";
import Reveal from "./Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projecten" className="border-t border-line bg-moss-soft/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
              Projecten
            </p>
            <h2 className="mt-5 max-w-[18ch] text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Aangelegde tuinen uit de buurt
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pb-2">
            <p className="max-w-[44ch] text-base leading-relaxed text-muted">
              Een greep uit recent opgeleverde tuinen in de Hoeksche Waard,
              van ontwerp en bestrating tot beplanting en vlonder.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16 md:mt-16 lg:gap-24">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) as 0 | 1 | 2}>
              <article className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                {/* Grote coverfoto */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[3/2]">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-1.5 text-xs font-semibold tracking-tight text-ink backdrop-blur">
                      {project.place}
                    </figcaption>
                  </figure>
                </div>

                {/* Info + detailfoto's */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {project.gallery.map((img) => (
                      <div key={img.src} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 14vw, 30vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-14 md:mt-20">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-paper p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
            <p className="max-w-[48ch] text-base leading-relaxed text-ink">
              Benieuwd wat er in uw tuin mogelijk is? Ik denk vrijblijvend met u mee.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold tracking-tight text-paper transition-colors duration-300 hover:bg-brand-deep active:scale-[0.98]"
            >
              Plan een kennismaking
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M4 12h16M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
