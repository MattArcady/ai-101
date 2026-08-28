## Praktische tips
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<div class="momentum" style="--x:66%; --y:2%; --len:120px"></div>

<p class="eyebrow">Hoofdstuk 05</p>

- Context engineering
- Projectinstructies
- Plan eerst, dan code
- Kleine stappen
- Sessie-hygiëne

Note: Het hoofdstuk waar de meeste winst zit. Niet "welke tool", maar
"hoe werk je ermee". Dit is wat mensen maandag echt gaan gebruiken.

---

<p class="eyebrow">Praktische tips</p>

## Context engineering

- Geef mee: **welk doel**, welke bestanden, welke randvoorwaarden
- Schrijf één duidelijke prompt:
  - Wat moet het doen?
  - Wat moet het niet doen?
  - Hoe valideren?
- Ruis is vaak duurder dan te weinig: dump geen hele logs "voor de zekerheid"
- Vraag gerust om een .md dump, daarna `/clear`
- `/compact` met instructies over wat te bewaren

Note: Terugkoppeling naar de context-slide in hoofdstuk 02. Te weinig
context = gokwerk. Te veel = het model raakt de kern kwijt. De kunst
is selecteren, niet stapelen.

---

<p class="eyebrow">Praktische tips</p>

## Projectinstructies

- Afspraken die in **elke** sessie gelden, in één bestand: `CLAUDE.md`
- Voorkomt dat je jezelf elke keer moet herhalen
- Documenteer projectstructuur, code style, design en architectuur patterns
- Een goede CLAUDE.md scheelt zoekwerk, tijd en tokens
- Kort houden, het gaat elke beurt mee in de context
- `CLAUDE.md` is een levend document, pas het gerust aan wanneer een agent toch iets onverwachts doet

```text
# Project
- Run: npm start (poort 4200)
- Tests: npm test — run them always before you end a task
- Don't use React Router anymore, we switched to TanStack
- Don't edit: /generated

Adhere to the SOLID principles.

We have a UI kit available at @sparkly/ui and docs at https://sparkly.design.
```

Note: claude.md is de bron van alle specifieke know-how van het project

---

<p class="eyebrow">Praktische tips</p>

## Plan eerst, dan code

- Laat de agent eerst een **plan** schrijven
- Kost minder **tokens** dan code
- Een plan **reviewen** kost minder tijd dan een code diff
- Plannen plek is teamafspraak
- `/clear` je context voordat je een plan laat uitvoeren
  - Tegenstrijdige argumenten of twijfelend taalgebruik verdwijnt hiermee uit de context

Note: Dit is de goedkoopste kwaliteitsmaatregel die er is. Sluit direct
aan op stap 2 van workshop 2. Lees het plan echt — dat is het moment
waarop je nog goedkoop kunt bijsturen.

---

<p class="eyebrow">Praktische tips</p>

## Kleine stappen

- Eén logische wijziging per beurt, dan **valideren** en **reviewen**
- Knip je plannen op in taakjes
- Grote opdracht = grote diff = lastiger te reviewen
- Loop je vast? Opnieuw beginnen met een betere prompt is bijna
  altijd beter dan doormodderen

Note: De verleiding is om alles in één prompt te gieten. Dat voelt
efficiënt en kost je meestal meer tijd. Klein + valideren geeft je
na elke stap een werkend punt om op terug te vallen.

---

<p class="eyebrow">Praktische tips</p>

## Sessie-hygiëne

- Nieuwe taak = **nieuwe sessie** (`/clear`)
- Lang bezig binnen dezelfde taak? .md dump en `/clear`
- Tijd om te clearen als het model:
  - zichzelf herhaalt
  - eerdere afspraken vergeet
  - dingen "repareert" die al eerder gefixed zijn

Note: Oude context maakt het model dommer — attention dilution uit
hoofdstuk 02, nu heel concreet. Mensen laten hun sessie veel te lang
doorlopen. Wennen aan /clear is een van de snelste verbeteringen.
