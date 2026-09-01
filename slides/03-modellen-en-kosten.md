## Modellen &amp; kosten
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<div class="momentum" style="--x:58%; --y:3%; --len:180px"></div>
<div class="momentum" style="--x:-2%; --y:78%; --len:240px"></div>

<p class="eyebrow">Hoofdstuk 03</p>

- Welk model wanneer
- Tokens = usage

Note: Kort en praktisch. Doel: mensen kiezen straks bewust in plaats van
altijd de duurste knop indrukken.

---

<p class="eyebrow">Modellen &amp; kosten</p>

## Welk model wanneer

- **Groot model (Fable/Opus):** architectuur, debuggen, plannen
- **Dagelijks model (Sonnet):** plan uitvoeren, refactors, hernoemen, commit-berichten, vertalen
- **Klein model (Haiku):** repeterende taakjes, samenvattingen
- Sonnet met `/advisor`
- Vuistregel: gebruik Opus voor plannen en onderzoeken, Sonnet voor dagelijks werk

Note: Noem mondeling welke modellen wij nu gebruiken en waar je wisselt.
Het patroon blijft: moeilijk denkwerk groot, mechanisch werk klein.

---

<p class="eyebrow">Modellen &amp; kosten</p>

## Tokens = usage

<div class="momentum" style="--x:82%; --y:6%; --len:150px"></div>

- Je betaalt per token **in** en **uit** met usage
- De **hele context** gaat elke beurt opnieuw mee
  - Gelukkig wordt je context **gecached**
- Context hygiëne is belangrijk
- Claude.ai kent twee limits:
  - 5 uur
  - 7 dagen

Note: Koppel terug naar de tokenizer-slide. Dit is ook het economische
argument onder sessie-hygiëne straks: korte, gerichte sessies zijn
niet alleen slimmer, ze zijn ook goedkoper en sneller.
