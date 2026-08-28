## Modellen &amp; kosten
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<div class="momentum" style="--x:58%; --y:3%; --len:180px"></div>
<div class="momentum" style="--x:-2%; --y:58%; --len:240px"></div>

<p class="eyebrow">Hoofdstuk 03</p>

- Welk model wanneer
- Tokens = geld
- Reasoning-effort

Note: Kort en praktisch. Doel: mensen kiezen straks bewust in plaats van
altijd de duurste knop indrukken.

---

<p class="eyebrow">Modellen &amp; kosten</p>

## Welk model wanneer

- **Groot model (Fable/Opus):** architectuur, debuggen, refactors, plannen
- **Klein model (Sonnet/Haiku):** boilerplate, hernoemen, commit-berichten, vertalen
- Vuistregel: maak subagents voor simpele taken met een vast model (Sonnet)

Note: Noem mondeling welke modellen wij nu gebruiken en waar je wisselt.
Het patroon blijft: moeilijk denkwerk groot, mechanisch werk klein.

---

<p class="eyebrow">Modellen &amp; kosten</p>

## Tokens = geld

<div class="momentum" style="--x:82%; --y:6%; --len:150px"></div>

- Je betaalt per token **in** en **uit**
- De **hele context** gaat elke beurt opnieuw mee
  - Gelukkig wordt je context **gecached**
- Een lange sessie is dan ook duurder

Note: Koppel terug naar de tokenizer-slide. Dit is ook het economische
argument onder sessie-hygiëne straks: korte, gerichte sessies zijn
niet alleen slimmer, ze zijn ook goedkoper en sneller.

---

<p class="eyebrow">Modellen &amp; kosten</p>

## Reasoning-effort

- Meer nadenken = meer tokens = **trager & duurder**
- Loont bij: logica, planning, lastige bugs
- Verspilling bij: hernoemen, formatteren, een simpele vraag

Note: Terugkoppeling naar de reasoning-slide in hoofdstuk 02. Het is een
schuifknop, geen kwaliteitsknop. Standaard laten staan, omhoog als je
merkt dat het model de plank misslaat op een denkopgave.
