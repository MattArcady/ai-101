# TOUR-165 — Favorieten en prijsfilter

| | |
| --- | --- |
| **Status** | Done (sprint 2026-07) |
| **Type** | Feature |
| **Aangevraagd door** | Sanne (product) |

## Aanleiding

Gebruikers stellen lange lijstjes samen en willen tussendoor kunnen filteren
op prijs, en hun favoriete stops makkelijk terugvinden.

## Wat we willen

Een ster bij elke stop om 'm te markeren als favoriet, en een veld om op
maximumprijs per nacht te filteren.

## Acceptatiecriteria

1. **Favoriet markeren**
   Bij elke stop staat een ster-knop. Klikken markeert de stop als favoriet
   (gevulde ster); nogmaals klikken maakt het ongedaan.

2. **Favorieten blijven bewaard**
   Favorieten blijven staan na het herladen van de pagina.

3. **Filteren op maximumprijs**
   Boven de lijst staat een veld "Max. prijs per nacht". Alleen stops met een
   prijs per nacht kleiner dan of gelijk aan het ingevulde bedrag zijn
   zichtbaar in de lijst.

4. **Leeg filterveld**
   Zolang het veld leeg is, zijn alle stops zichtbaar.

5. **Filter op 0**
   Vul je "0" in, dan is er geen enkele stop meer zichtbaar (niemand heeft
   een stop van € 0 per nacht).

6. **De teller klopt**
   De tekst "X van Y stops" toont het aantal stops dat na het prijsfilter
   daadwerkelijk in de lijst staat, niet het aantal vóór het filter.

## Definition of done

- Er is een test per acceptatiecriterium.
- `npm test` is groen.
- `npx tsc -b` geeft geen fouten.
- De bestaande tests draaien nog steeds.
