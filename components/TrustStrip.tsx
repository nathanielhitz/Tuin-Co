import { company } from "@/lib/content";

const items = [
  { label: `Hovenier sinds ${company.foundedYear}`, note: "Opgericht door Corstiaan Dekkers" },
  { label: "Eén vast aanspreekpunt", note: "Van ontwerp tot de laatste plant" },
  { label: "Klimaatbewust aangelegd", note: "Minstens de helft van de tuin groen" },
  { label: `${company.city} & de ${company.region}`, note: "Lokaal, korte lijnen" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Kerngegevens" className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`border-line px-5 py-6 md:px-8 lg:py-10 ${i % 2 === 1 ? "border-l" : ""} ${
              i >= 2 ? "border-t" : ""
            } lg:border-t-0 lg:[&:not(:first-child)]:border-l`}
          >
            <p className="font-serif text-lg font-semibold tracking-tight text-ink md:text-xl">
              {item.label}
            </p>
            <p className="mt-2 max-w-[26ch] text-[13px] leading-snug text-muted">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
