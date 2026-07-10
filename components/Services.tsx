import Reveal from "./Reveal";
import { services, type Service } from "@/lib/content";

function ServiceIcon({ name }: { name: Service["icon"] }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "ontwerp": // pen / ontwerp
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "bestrating": // tegels
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7.5" height="7.5" rx="1" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" />
        </svg>
      );
    case "beplanting": // blad
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      );
    case "verlichting": // lamp
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      );
    case "onderhoud": // schaar / snoei
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
        </svg>
      );
    case "duurzaam": // druppel
      return (
        <svg {...common}>
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="diensten" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
      <Reveal className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
        <div className="md:col-span-6">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
            <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
            Wat ik voor u doe
          </p>
          <h2 className="mt-5 max-w-[16ch] text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Alles voor uw tuin, in één hand
          </h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="max-w-[52ch] text-base leading-relaxed text-muted">
            Van een compleet nieuwe tuin tot maandelijks onderhoud, en de kleine
            klussen daartussenin. U hoeft maar met één vakman te schakelen.
          </p>
        </div>
      </Reveal>

      <Reveal delay={1} className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            className="group flex flex-col rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:border-moss/40 hover:shadow-[0_18px_40px_-24px_rgba(30,36,29,0.45)] md:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss-soft text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-paper">
              <ServiceIcon name={service.icon} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">{service.title}</h3>
            <p className="mt-1 text-sm font-semibold text-moss">{service.description}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{service.detail}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
