## Zo werk je met een agent
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 05</p>

- Context sturen
- Projectinstructies
- Plan eerst
- Kleine stappen
- Sessie-hygiëne

Note: Het hoofdstuk waar de meeste winst zit. Niet "welke tool", maar
"hoe werk je ermee". Dit is wat mensen maandag echt gaan gebruiken.

---

<p class="eyebrow">Werkwijze</p>

## Context sturen

- Je belangrijkste knop — jij bepaalt wat het model ziet
- Geef mee: **welk doel**, welke bestanden, welke randvoorwaarden
- Laat het eerst zélf lezen en zoeken vóór het schrijft
- Ruis is duurder dan te weinig: dump geen hele mappen "voor de zekerheid"

Note: Terugkoppeling naar de context-slide in hoofdstuk 02. Te weinig
context = gokwerk. Te veel = het model raakt de kern kwijt. De kunst
is selecteren, niet stapelen.

---

<p class="eyebrow">Werkwijze</p>

## Projectinstructies

- Afspraken die in **elke** sessie gelden, in één bestand: `CLAUDE.md`
- Voorkomt dat je jezelf elke keer herhaalt
- Kort houden — het gaat elke beurt mee in de context

```text
# Project
- Draaien: npm start (poort 4200)
- Tests: npm test — altijd draaien voor je klaar meldt
- Angular standalone components, geen NgModules
- Niet aankomen: /generated
```

Note: Laat live zien hoe je er een aanmaakt. Benadruk: dit is een levend
bestand. Elke keer dat je iets voor de derde keer uitlegt, hoort het
hierin. Niet volstoppen — alles kost context.

---

<p class="eyebrow">Werkwijze</p>

## Plan eerst, dan code

- Laat de agent eerst een **plan** schrijven; jij keurt goed
- Een fout in een plan corrigeer je in 10 seconden
- Diezelfde fout in een diff kost 10 minuten

Note: Dit is de goedkoopste kwaliteitsmaatregel die er is. Sluit direct
aan op stap 2 van workshop 2. Lees het plan echt — dat is het moment
waarop je nog goedkoop kunt bijsturen.

---

<p class="eyebrow">Werkwijze</p>

## Kleine stappen

- Eén logische wijziging per beurt, dan **valideren**
- Grote opdracht = grote diff = niet meer te reviewen
- Loopt het vast? Opnieuw beginnen met een betere prompt wint bijna
  altijd van doormodderen

Note: De verleiding is om alles in één prompt te gieten. Dat voelt
efficiënt en kost je meestal meer tijd. Klein + valideren geeft je
na elke stap een werkend punt om op terug te vallen.

---

<p class="eyebrow">Werkwijze</p>

## Sessie-hygiëne

- Nieuwe taak = **nieuwe sessie** (`/clear`)
- Lang bezig binnen dezelfde taak? `/compact`
- Tijd om te resetten als het model:
  - zichzelf herhaalt
  - eerdere afspraken vergeet
  - dingen "repareert" die al goed waren

Note: Oude context maakt het model dommer — attention dilution uit
hoofdstuk 02, nu heel concreet. Mensen laten hun sessie veel te lang
doorlopen. Wennen aan /clear is een van de snelste verbeteringen.
