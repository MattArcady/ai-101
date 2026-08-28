## Workshop 1
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 06</p>
### Prompt engineering

Note: Handen op het toetsenbord. Klein en concreet beginnen.

---

<p class="eyebrow">Workshop · Prompten</p>

## Principes

- Wees **specifiek**: doel, context, formaat
- Geef voorbeelden van gewenste output
- Itereer — de eerste prompt is zelden de beste

Note: Laat het contrast zien: vage vraag vs. specifieke vraag met context
en gewenst formaat. Benadruk itereren.

---

<p class="eyebrow">Workshop · Prompten</p>

## Opdracht

`workshops/01-prompting` — een React-appje met **twee bugs**

```sh
npm install && npm run dev
npm test          # 4 tests, allemaal groen
```

1. Ronde 1: prompt letterlijk `fix de bug` — kijk wat er gebeurt
2. Wijzigingen weggooien, `/clear`
3. Ronde 2: zelfde bug, maar mét **reproductiepad**

Note: ~20 min. Setup vooraf laten doen (npm install duurt het langst).
Laat ze ronde 1 echt afmaken — het contrast werkt alleen als ze de agent
hebben zien gokken. Loop rond en kijk mee wat de agent verzint.

---

<p class="eyebrow">Workshop · Prompten</p>

## Slecht vs. goed

```text
fix de bug
```

```text
1. Typ "porto" in het zoekveld
2. Klik op het prullenbak-icoon

Verwacht: Porto verdwijnt.
Werkelijk: Porto blijft staan, Amsterdam is weg.
Zonder zoekfilter gaat het wél goed.
```

**Wat je deed · wat je verwachtte · wat er gebeurde · waar het wél goed gaat**

Note: Die laatste regel is de kern. Vier onderdelen, vier regels tekst.
Vooral "waar gaat het wél goed" wordt vergeten, terwijl dat de zoekruimte
het hardst afgrenst — hier wijst het meteen naar het filter.

---

<p class="eyebrow">Workshop · Prompten</p>

## Wat je zag

- Zonder repro-pad **gokt** de agent — en de diff wordt groter dan nodig
- De tests waren de hele tijd groen; ze dekten de bug gewoon niet
- Jij hebt informatie die het model niet heeft: **wat je zag gebeuren**

Note: Nabespreken met 2-3 mensen: hoeveel beurten had je nodig in ronde 1
versus ronde 2? "Klaar, tests groen" is geen bewijs — bruggetje naar
hoofdstuk 05 (plan eerst, kleine stappen) en naar workshop 2.
