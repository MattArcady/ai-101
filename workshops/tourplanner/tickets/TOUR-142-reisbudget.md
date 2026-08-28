# TOUR-142 — Reisbudget met waarschuwing

| | |
| --- | --- |
| **Status** | Ready for development |
| **Type** | Feature |
| **Prioriteit** | Hoog |
| **Aangevraagd door** | Sanne (product) |
| **Sprint** | 2026-09 |

## Aanleiding

Klanten stellen hun route samen en komen er pas bij het afrekenen achter dat
ze ver over hun budget zitten. Support krijgt hier wekelijks vragen over:
*"kan ik ergens zien hoeveel ik nog te besteden heb?"*

We willen dat mensen tijdens het samenstellen zien hoe ze ervoor staan.

## Wat we willen

Een budgetveld boven het totaal. De gebruiker vult een bedrag in; daaronder
laten we zien hoeveel er nog over is, of hoeveel het eroverheen gaat.

## Acceptatiecriteria

1. **Budget invullen**
   Boven het totaal staat een invoerveld met label "Budget" waarin een bedrag
   in hele euro's kan worden ingevuld.

2. **Binnen budget**
   Gegeven een budget van € 500 en een totaal van € 320,
   toont de app: `Nog € 180 te besteden`.

3. **Precies op budget**
   Gegeven een budget van € 500 en een totaal van € 500,
   toont de app: `Nog € 0 te besteden` — dit telt als binnen budget.

4. **Over budget**
   Gegeven een budget van € 500 en een totaal van € 640,
   toont de app: `€ 140 over je budget` en het totaalbedrag wordt rood
   (`#e5484d`).

5. **Geen budget ingevuld**
   Zolang het veld leeg is, tonen we geen van beide meldingen en blijft het
   totaal in de huidige kleur staan.

6. **Ongeldige invoer**
   Bij invoer die geen geldig bedrag is (letters, negatieve getallen) gedraagt
   de app zich alsof er geen budget is ingevuld. Geen foutmelding, geen crash.

7. **Het budget blijft staan** wanneer de gebruiker stops toevoegt,
   verwijdert of het aantal nachten aanpast.

## Buiten scope

- Het budget bewaren tussen sessies (localStorage) — dat is TOUR-160.
- Valuta's anders dan euro.
- Waarschuwen tijdens het typen van het aantal nachten (geen debounce nodig).

## Definition of done

- Er is een test per acceptatiecriterium 2 t/m 6.
- `npm test` is groen.
- `npx tsc -b` geeft geen fouten.
- De bestaande zeven tests draaien nog steeds.
