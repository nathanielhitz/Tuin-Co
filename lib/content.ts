// Centrale, feitelijke bedrijfsgegevens — uit de crawl van tuinenco.nl.
// Geen bedachte cijfers, beoordelingen of prijzen: alleen wat bevestigd is.
// Open punten (reviews, exact werkgebied, WhatsApp-bevestiging) staan in README.md.

export const company = {
  name: "Tuin & Co",
  fullName: "Hoveniersbedrijf Tuin & Co",
  owner: "Corstiaan Dekkers",
  foundedYear: 2017,
  phonePrimary: "0626364862",
  phonePrimaryDisplay: "06 - 26 36 48 62",
  email: "info@tuinenco.nl",
  city: "Puttershoek",
  region: "Hoeksche Waard",
  kvk: "70151938",
  // Werkt met 12V-tuinverlichting van In-lite (uit de crawl).
  lightingBrand: "In-lite",
};

export const whatsappHref = (message: string) =>
  `https://wa.me/31${company.phonePrimary.slice(1)}?text=${encodeURIComponent(message)}`;

export const telHref = (phone: string) => `tel:${phone}`;

export const mailtoHref = (subject: string, body: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ── Beeld: bestaande foto's van de huidige site, hergebruikt via next/image
// (niet gedownload of nabewerkt). Helper bouwt de gewenste weergavegrootte. ──
const CDN = "https://image.jimcdn.com/app/cms/image/transf";
const BASE = "path/s045c63acdc366864/image";
export const jimg = (id: string, version: string, dim = 1600) =>
  `${CDN}/dimension=${dim}x10000:format=jpg/${BASE}/${id}/version/${version}/image.jpg`;

export const heroImage = {
  src: jimg("i4f69f5d5755d8ff7", "1639598027", 2000),
  alt: "Door Tuin & Co aangelegde tuin met beplanting en bestrating",
};

export const ownerImage = {
  src: jimg("i17968abefdede199", "1511859222", 900),
  alt: "Corstiaan Dekkers, hovenier en eigenaar van Tuin & Co uit Puttershoek",
};

// Werkgebied: bevestigd zijn Puttershoek, Strijen en Numansdorp (portfolio).
// De overige plaatsen liggen in de Hoeksche Waard rondom Puttershoek.
export const serviceAreas = [
  "Puttershoek",
  "'s-Gravendeel",
  "Maasdam",
  "Strijen",
  "Numansdorp",
  "Heinenoord",
  "Mijnsheerenland",
  "Oud-Beijerland",
];

export type Service = {
  id: string;
  icon: "ontwerp" | "bestrating" | "beplanting" | "verlichting" | "onderhoud" | "duurzaam";
  title: string;
  description: string;
  detail: string;
};

// Bron: pagina "Mogelijkheden" + homepage + meta-descriptions van de crawl.
export const services: Service[] = [
  {
    id: "ontwerp-aanleg",
    icon: "ontwerp",
    title: "Tuinontwerp & aanleg",
    description: "Van eerste schets tot complete aanleg",
    detail:
      "Wilt u een compleet nieuwe tuin maar heeft u geen inspiratie? Ik kom uw wensen bespreken en vertaal ze naar een ontwerp — en leg de tuin vervolgens compleet voor u aan. Alles in één hand.",
  },
  {
    id: "bestrating",
    icon: "bestrating",
    title: "Bestrating & terrassen",
    description: "Terrassen, paden en opritten",
    detail:
      "Strak en duurzaam bestraten met oog voor waterafvoer. Bij mijn tuinen streef ik naar maximaal 50% bestrating, zodat er ruimte blijft voor groen.",
  },
  {
    id: "beplanting",
    icon: "beplanting",
    title: "Beplanting & borders",
    description: "Klimaatbestendige, groene tuinen",
    detail:
      "Minstens de helft van de tuin een mix van hoge en lage beplanting. Zo wordt de tuin klimaatbestendig en helpen we de natuur — en geniet u het hele jaar van groen.",
  },
  {
    id: "verlichting",
    icon: "verlichting",
    title: "Tuinverlichting",
    description: "Geniet ook 's avonds van uw tuin",
    detail:
      "Een mooi uitgelichte boom of een fraai verlicht pad maakt uw tuin ook 's avonds aantrekkelijk. Ik werk met 12V-verlichting van In-lite en geef graag een gratis demonstratie bij u in de tuin.",
  },
  {
    id: "onderhoud",
    icon: "onderhoud",
    title: "Tuinonderhoud",
    description: "Maandelijks of eenmalig groot onderhoud",
    detail:
      "Maandelijks onderhoud of eenmalig groot onderhoud, het is allemaal mogelijk. Ook het rooien van bomen verzorg ik vakkundig en veilig voor u.",
  },
  {
    id: "duurzaam",
    icon: "duurzaam",
    title: "Duurzaam & regenwater",
    description: "Slimme oplossingen tegen wateroverlast",
    detail:
      "Door klimaatverandering krijgen we vaker te maken met wateroverlast of juist droogte. Met slimme oplossingen verduurzaam ik uw tuin — voor sommige is zelfs subsidie beschikbaar.",
  },
];

export type CoreValue = {
  title: string;
  description: string;
};

// Bron: pagina "Over Tuin & Co" (Innovatief / Betrokken en flexibel / gunstig tarief).
export const coreValues: CoreValue[] = [
  {
    title: "Eén vast aanspreekpunt",
    description:
      "U werkt van eerste idee tot de laatste plant met mij, Corstiaan, zelf. Geen wisselende ploegen, korte lijnen.",
  },
  {
    title: "Betrokken & flexibel",
    description:
      "Uw wensen staan centraal. We overleggen regelmatig over de voortgang en aanpassingen tijdens het proces zijn mogelijk.",
  },
  {
    title: "Eerlijke prijs",
    description:
      "Door de compacte omvang van mijn bedrijf blijven de kosten laag. Ik maak geen onnodige kosten, zodat u een mooie tuin krijgt voor een eerlijke prijs.",
  },
  {
    title: "Frisse, innovatieve blik",
    description:
      "Geen vastgeroeste werkwijzen. Ik kijk met een frisse blik naar uw wensen en zoek net zo lang door tot we een oplossing hebben gevonden.",
  },
];

export type WorkStep = {
  step: string;
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    step: "01",
    title: "Kennismaking",
    description:
      "U belt, appt of vult het formulier in. Ik kom vrijblijvend langs om uw tuin en uw wensen te bekijken.",
  },
  {
    step: "02",
    title: "Ontwerp & offerte",
    description:
      "Ik vertaal uw wensen naar een plan en een heldere offerte — zonder verrassingen achteraf.",
  },
  {
    step: "03",
    title: "Aanleg",
    description:
      "Ik voer het werk netjes en vakkundig uit. We blijven in overleg, zodat aanpassingen onderweg mogelijk blijven.",
  },
  {
    step: "04",
    title: "Oplevering & onderhoud",
    description:
      "We lopen het resultaat samen na. Daarna kunt u de tuin ook door mij laten onderhouden.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "In welke omgeving werkt Tuin & Co?",
    answer:
      "Vanuit Puttershoek werk ik in de hele Hoeksche Waard. Eerder aangelegde tuinen staan onder meer in Puttershoek, Strijen en Numansdorp.",
  },
  {
    question: "Wat kost een nieuwe tuin of onderhoud?",
    answer:
      "Dat hangt af van de grootte en uw wensen. Na een vrijblijvend bezoek stel ik een duidelijke offerte op met een heldere prijs vooraf. Door de compacte opzet van mijn bedrijf houd ik de kosten laag.",
  },
  {
    question: "Doen jullie ook kleine klussen?",
    answer:
      "Zeker. Een compleet nieuwe tuin, groot onderhoud of 'gewoon' een kleine klus in de tuin — ik kom graag de mogelijkheden bespreken.",
  },
  {
    question: "Wat bedoelen jullie met een klimaatbestendige tuin?",
    answer:
      "Ik streef ernaar om maximaal de helft van de tuin te bestraten en minstens de helft groen te houden met een mix van beplanting. Dat vangt regenwater beter op en is beter voor de natuur. Voor sommige verduurzamingen is subsidie beschikbaar.",
  },
  {
    question: "Kan ik de tuinverlichting eerst zien?",
    answer:
      "Ja. Ik werk met 12V-verlichting van In-lite en kom met mijn demokoffer graag een gratis demonstratie geven, in uw eigen tuin, zodat u het effect meteen ziet.",
  },
  {
    question: "Hoe snel kan ik een offerte krijgen?",
    answer:
      "Bel of app me en we plannen op korte termijn een afspraak in. Aanvragen via het formulier behandel ik zo snel mogelijk.",
  },
];

export type Project = {
  id: string;
  title: string;
  place: string;
  category: string;
  description: string;
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

// Bestaande projectfoto's van de huidige website — hergebruikt, niet gedownload.
export const projects: Project[] = [
  {
    id: "achtertuin-numansdorp",
    title: "Achtertuin in Numansdorp",
    place: "Numansdorp",
    category: "Complete aanleg",
    description:
      "Een compleet opnieuw aangelegde achtertuin met nieuwe beplanting, een houten vlonder en strakke bestrating.",
    cover: {
      src: jimg("idd68939edc4f3444", "1640951202", 1600),
      alt: "Aangelegde achtertuin in Numansdorp door Tuin & Co",
    },
    gallery: [
      { src: jimg("ie15a93507eed70b5", "1640951206", 900), alt: "Nieuwe beplanting in de achtertuin in Numansdorp" },
      { src: jimg("i29264c2d71ec16b5", "1640951208", 900), alt: "Houten vlonder in de achtertuin in Numansdorp" },
      { src: jimg("i48248b26e600787c", "1640951212", 900), alt: "Bestrating in de achtertuin in Numansdorp" },
    ],
  },
  {
    id: "achtertuin-strijen",
    title: "Achtertuin in Strijen",
    place: "Strijen",
    category: "Tuinaanleg",
    description:
      "Een verzorgde achtertuin met een fijne balans tussen bestrating en groen, aangelegd om jarenlang van te genieten.",
    cover: {
      src: jimg("ie103c95a6e429c28", "1639597513", 1600),
      alt: "Aangelegde achtertuin in Strijen door Tuin & Co",
    },
    gallery: [
      { src: jimg("i328407fc503bad08", "1639597552", 900), alt: "Detail van de achtertuin in Strijen" },
      { src: jimg("ied5f962e84ea92a0", "1639597564", 900), alt: "Beplanting in de achtertuin in Strijen" },
      { src: jimg("i66aa7908d18a9d58", "1639597675", 900), alt: "Bestrating in de achtertuin in Strijen" },
    ],
  },
  {
    id: "voortuin-puttershoek",
    title: "Voortuin in Puttershoek",
    place: "Puttershoek",
    category: "Tuinaanleg",
    description:
      "Een frisse, onderhoudsvriendelijke voortuin die de woning meteen een verzorgde uitstraling geeft.",
    cover: {
      src: jimg("ia15c89f5832b7323", "1639597728", 1600),
      alt: "Aangelegde voortuin in Puttershoek door Tuin & Co",
    },
    gallery: [
      { src: jimg("i5cf5c4e6beb268d3", "1639597756", 900), alt: "Detail van de voortuin in Puttershoek" },
      { src: jimg("i70931a61452960c6", "1639597763", 900), alt: "Beplanting in de voortuin in Puttershoek" },
      { src: jimg("ib8297453b7c57a44", "1639597771", 900), alt: "Bestrating in de voortuin in Puttershoek" },
    ],
  },
];
