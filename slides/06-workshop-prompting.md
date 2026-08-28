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

`workshops/01-prompting` — Tourplanner, **twee bugs**

```sh
npm install && npm run dev
npm test          # 7 tests, allemaal groen
```

1. Ronde 1: prompt letterlijk `fix de bug` — kijk wat er gebeurt
2. Wijzigingen weggooien (`git checkout -- .`), `/clear`
3. Ronde 2: zelfde bug, maar mét **reproductiepad**

Note: ~20 min. Laat npm install vóór de sessie doen.

De code is schoon — de bugs zitten in de **data** (`src/data/stops.json`,
42 stops). Dat is bewust: een slim model leest anders gewoon de code en vindt
ze zonder jouw hulp. Nu bestaat de informatie alleen op het scherm.

Bug 1 laat je ze zelf vinden: typ **"ber"** in het zoekveld → Berlijn verschijnt.
Typ er een **"l"** achteraan → "Geen stops gevonden", terwijl Berlijn zonder
filter gewoon in de lijst staat.

Bonus (bug 2): zoek op **"wenen"** → twee rijen. Verwijder er één → er blijft
een Wenen staan.

Laat ronde 1 echt afmaken; het contrast werkt alleen als ze de agent hebben
zien gokken.

---

<p class="eyebrow">Workshop · Prompten</p>

## Slecht vs. goed

```text
fix de bug
```

```text
1. Typ "ber" in het zoekveld → Berlijn staat er
2. Typ er "l" achteraan → "Geen stops gevonden"

Verwacht: Berlijn blijft staan bij "berl".
Werkelijk: nul resultaten. Zonder filter staat Berlijn
er wél gewoon tussen.

Andere steden filteren prima.
```

**Wat je deed · wat je verwachtte · wat er gebeurde · waar het wél goed gaat**

Note: Pas tonen ná ronde 1. Vier onderdelen, vier regels tekst — meer is het
niet.

"Waar gaat het wél goed" grenst de zoekruimte af: andere steden werken, dus
het filter zelf is niet stuk. Precies die zin duwt de agent van de code naar
de data.

Voor bug 2 hetzelfde patroon: "zoek op wenen → 2 rijen; klik de prullenbak
bij de eerste → er blijft er één staan; andere steden verwijderen wél goed."

---

<p class="eyebrow">Workshop · Prompten</p>

## Wat er echt aan de hand was

- **Bug 1** — in `stops.json` staat `"Ber​lijn"` met een **zero-width space**
  ertussen: onzichtbaar op het scherm, breekt elke zoekterm
- **Bug 2** — Wenen staat **twee keer** in de data, met twee verschillende
  id's (`vie` en `wien`)

Note: Antwoordsleutel — alleen bij de nabespreking.

Bug 1 is met geen mogelijkheid uit de broncode te halen: het teken is
onzichtbaar in de editor, `grep "Berlijn"` vindt de regel niet eens. Zelfs de
slimste agent kan dit alleen vinden als jij vertelt wát je zag gebeuren.

Wat je bij ronde 1 typisch ziet: de agent leest de app, vindt geen falende
test (7 groen) en gaat de code "verbeteren" die niet stuk is — trim,
normalize, debounce op het zoekveld, een useMemo. Let op de symptoomfixes:
`.trim()` haalt een zero-width space er niet uit, en dedupliceren op naam
verbergt bug 2 in plaats van 'm op te lossen.

---

<p class="eyebrow">Workshop · Prompten</p>

## Wat je zag

- Zonder repro-pad **gokt** de agent — en de diff wordt groter dan nodig
- 7 groene tests, en de app was de hele tijd kapot
- Jij hebt informatie die het model **niet** heeft: wat je zag gebeuren
- Vertel niet wát je denkt dat er stuk is, maar **wat je deed**

Note: Nabespreken met 2-3 mensen: hoeveel beurten in ronde 1 versus ronde 2?
Kern: een agent leest code, geen schermen. De duurste bugs zitten in data,
config en omgeving — daar helpt intelligentie niet, alleen jouw waarneming.

Bruggetje naar hoofdstuk 05 (plan eerst, kleine stappen) en workshop 2.
