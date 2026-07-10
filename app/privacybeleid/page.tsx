import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacybeleid · Tuin & Co",
  description: "Hoe Hoveniersbedrijf Tuin & Co omgaat met uw gegevens.",
};

export default function PrivacybeleidPage() {
  return (
    <>
      <Navbar />
      <main id="hoofdinhoud" className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-moss">
          <span aria-hidden="true" className="h-px w-8 bg-moss/40" />
          Privacy
        </p>
        <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl">
          Privacybeleid
        </h1>

        <div className="mt-8 space-y-7 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Wie zijn wij</h2>
            <p className="mt-2">
              {company.fullName}, gevestigd in {company.city} (KvK{" "}
              {company.kvk}), is verantwoordelijk voor de verwerking van
              persoonsgegevens zoals beschreven op deze pagina.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Welke gegevens verwerken wij</h2>
            <p className="mt-2">
              Wanneer u het offerteformulier op deze website invult, verwerken
              we de gegevens die u zelf invult: naam, plaats, telefoonnummer
              en uw omschrijving van de gewenste werkzaamheden. Het formulier
              opent uw eigen e-mailprogramma; de gegevens worden pas
              verzonden op het moment dat u zelf de e-mail verstuurt naar{" "}
              {company.email}. Wij ontvangen deze gegevens dus alleen als u
              de e-mail daadwerkelijk verzendt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Waarvoor gebruiken wij uw gegevens</h2>
            <p className="mt-2">
              Uitsluitend om contact met u op te nemen over uw aanvraag, een
              offerte op te stellen en, na akkoord, de overeengekomen
              werkzaamheden uit te voeren en af te handelen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Bewaartermijn</h2>
            <p className="mt-2">
              Wij bewaren uw gegevens niet langer dan noodzakelijk is voor het
              doel waarvoor ze zijn verstrekt, of zolang de wet dit voor
              administratieve of fiscale doeleinden vereist.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Delen met derden</h2>
            <p className="mt-2">
              Wij verkopen of verhuren uw gegevens niet aan derden. Gegevens
              worden alleen gedeeld met derden (zoals een boekhouder) voor
              zover dat noodzakelijk is voor de uitvoering van onze
              dienstverlening of om te voldoen aan een wettelijke
              verplichting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Uw rechten</h2>
            <p className="mt-2">
              U heeft het recht om uw gegevens in te zien, te laten corrigeren
              of te laten verwijderen. Neem hiervoor contact met ons op via{" "}
              {company.email} of {company.phonePrimaryDisplay}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-tight text-ink">Vragen</h2>
            <p className="mt-2">
              Heeft u vragen over dit privacybeleid? Neem gerust contact met
              ons op.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
