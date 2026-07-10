"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { company, mailtoHref, telHref, whatsappHref } from "@/lib/content";

type FormState = {
  naam: string;
  plaats: string;
  telefoon: string;
  omschrijving: string;
};

const initialState: FormState = { naam: "", plaats: "", telefoon: "", omschrijving: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<FormState> = {};
    if (!form.naam.trim()) nextErrors.naam = "Vul uw naam in.";
    if (!form.telefoon.trim()) nextErrors.telefoon = "Vul een telefoonnummer in.";
    if (!form.omschrijving.trim()) nextErrors.omschrijving = "Omschrijf kort uw tuinplan.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const subject = `Offerteaanvraag van ${form.naam}`;
    const body = [
      `Naam: ${form.naam}`,
      form.plaats ? `Plaats: ${form.plaats}` : null,
      `Telefoon: ${form.telefoon}`,
      "",
      "Wat ik zou willen:",
      form.omschrijving,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = mailtoHref(subject, body);
    setSent(true);
  };

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-moss";

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
              Contact
            </p>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Klaar voor een mooiere tuin?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Een compleet nieuwe tuin, groot onderhoud of &apos;gewoon&apos; een kleine klus?
              Ik kom graag vrijblijvend de mogelijkheden bespreken. Bellen of appen
              kan natuurlijk ook. Daarmee ben ik vaak het snelst bij u.
            </p>

            <div className="mt-8 divide-y divide-line border-y border-line">
              <a
                href={telHref(company.phonePrimary)}
                className="flex items-center justify-between gap-3 py-5 transition-colors hover:text-moss"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{company.phonePrimaryDisplay}</p>
                  <p className="text-xs text-muted">Direct bellen</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>

              <a
                href={whatsappHref("Hallo Corstiaan, ik zou graag een offerte aanvragen voor mijn tuin.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 py-5 transition-colors hover:text-moss"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <p className="text-xs text-muted">Stuur meteen een foto van uw tuin mee</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>

              <a
                href={mailtoHref("Offerteaanvraag", "")}
                className="flex items-center justify-between gap-3 py-5 transition-colors hover:text-moss"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{company.email}</p>
                  <p className="text-xs text-muted">Reactie doorgaans binnen 1-2 werkdagen</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>

            <div className="mt-6 rounded-lg border border-line p-4 text-sm text-muted">
              <p className="font-semibold text-ink">{company.fullName}</p>
              <p className="mt-1">
                {company.city} · Hoeksche Waard &middot; KvK {company.kvk}
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="naam" className="text-sm font-semibold text-ink">Naam *</label>
                  <input
                    id="naam"
                    value={form.naam}
                    onChange={update("naam")}
                    aria-invalid={Boolean(errors.naam)}
                    className={inputClass}
                  />
                  {errors.naam && <p className="mt-1 text-xs text-red-700">{errors.naam}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="plaats" className="text-sm font-semibold text-ink">Plaats</label>
                  <input id="plaats" value={form.plaats} onChange={update("plaats")} className={inputClass} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="telefoon" className="text-sm font-semibold text-ink">Telefoonnummer *</label>
                  <input
                    id="telefoon"
                    value={form.telefoon}
                    onChange={update("telefoon")}
                    aria-invalid={Boolean(errors.telefoon)}
                    className={inputClass}
                  />
                  {errors.telefoon && <p className="mt-1 text-xs text-red-700">{errors.telefoon}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="omschrijving" className="text-sm font-semibold text-ink">
                    Waar kan ik u mee helpen? *
                  </label>
                  <textarea
                    id="omschrijving"
                    rows={4}
                    value={form.omschrijving}
                    onChange={update("omschrijving")}
                    aria-invalid={Boolean(errors.omschrijving)}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.omschrijving && <p className="mt-1 text-xs text-red-700">{errors.omschrijving}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-brand px-6 py-4 text-sm font-semibold tracking-tight text-paper transition-colors duration-300 hover:bg-brand-deep active:scale-[0.98]"
              >
                Verstuur offerteaanvraag
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                We openen uw e-mailprogramma met deze gegevens al ingevuld.
              </p>
              {sent && (
                <p className="mt-3 rounded-lg border border-moss/20 bg-moss-soft px-4 py-2.5 text-center text-sm font-semibold text-moss-deep">
                  Uw e-mailprogramma opent nu. Verstuur het bericht om uw aanvraag af te ronden.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
