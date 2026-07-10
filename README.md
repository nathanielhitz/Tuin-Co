# Tuin & Co — redesign

Next.js 16 + Tailwind v4 redesign van www.tuinenco.nl (Hoveniersbedrijf
Tuin & Co, Puttershoek), gebaseerd op de crawl in `../tuinenco.nl/` en de
redesign-strategie (audit → positionering → sectie-indeling → copy →
visual direction).

## Starten

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design (anti-kloon, hovenier)

- Palet: dennengroen + warm linnen + terracotta-accent (CTA's).
- Typografie: Fraunces (koppen) + Manrope (body).
- Zachte hoeken, kaarten-grid, full-bleed hero met overlay + badge,
  grote projectengalerij als centraal onderdeel.

## Inhoud

- Alle bedrijfsgegevens, diensten, kernwaarden, projecten en FAQ in
  `lib/content.ts` — overgenomen uit de bestaande site, niets verzonnen.
- Projectfoto's zijn de bestaande afbeelding-URL's van de huidige site
  (Jimdo-CDN, hergebruikt via `next/image`, niet gedownload).
- Geen backend: het offerteformulier opent de e-mailclient van de bezoeker
  met de ingevulde gegevens (`mailto:`). Bellen en WhatsApp linken direct
  naar 06-26364862.
- LocalBusiness (LandscapingBusiness) JSON-LD schema in `app/layout.tsx`.

## Nog aanleveren / bevestigen door de klant

- **Reviews / Google-rating** — nu geen reviewsectie opgenomen (niets verzonnen).
- **WhatsApp** — de WhatsApp-knoppen gebruiken 06-26364862; bevestigen dat dit
  nummer WhatsApp heeft.
- **Werkgebied** — bevestigd zijn Puttershoek, Strijen en Numansdorp; de
  overige Hoeksche Waard-plaatsen in `serviceAreas` zijn aannames.
- **Keurmerk** (bijv. Groenkeur/VHG), **garantie**, **adres/openingstijden** —
  ontbreken in de crawl; toevoegen zodra bekend.
- **Betere/grotere projectfoto's** (evt. voor/na) versterken de galerij verder.
