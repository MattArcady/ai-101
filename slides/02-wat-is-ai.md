## Wat is AI
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 02</p>

- LLM
- Tokenizer
- Context
- Reasoning
- Agents

Note: De bouwstenen.

---

<img class="slide-figure" src="assets/tokenselectie.jpeg" alt="Token-selectie proces">

<p class="eyebrow">Wat is AI</p>

## LLM

Large Language Model

- Getraind op enorme hoeveelheden tekst
- Voorspelt telkens het **volgende token**
- **Loopt door** tot het een eind-token voorspelt
- Ziet verbanden tussen tokens ongeacht de volgorde: **Transformer**

<div class="tokengen">
<p class="fragment">De koning is dood.</p>
<p class="fragment">De koning is dood. <strong>Leve</strong></p>
<p class="fragment">De koning is dood. Leve <strong>de</strong></p>
<p class="fragment">De koning is dood. Leve de <strong>koning</strong></p>
<p class="fragment">De koning is dood. Leve de koning <strong>.</strong></p>
<p class="fragment">De koning is dood. Leve de koning. <strong>[end]</strong></p>
</div>


Note: Kern-analogie: superieure autocomplete. Het "weet" niks op, het
genereert het meest waarschijnlijke vervolg. Dat verklaart later
veel gedrag (o.a. hallucinaties).

---

<p class="eyebrow">Wat is AI</p>

## Tokenizer

- Tekst wordt geknipt in **tokens**
- ~4 karakters per token (ruwweg)
- Engels is vaak 1 woord = 1 token
- Model rekent met tokens (cijfers), niet met letters of woorden
  - Daarom kan het **geen** letters of woorden tellen

<br/>

```text
"onwaarschijnlijk" -> ["on", "waar", "schijn", "lijk"]
```

Note: Waarom relevant: kosten en limieten zijn in tokens. Ook waarom een
model soms slecht is in letters tellen of rijmen — het ziet stukjes,
geen losse tekens.

---

<img class="slide-figure" src="assets/context.jpeg" alt="Context">

<p class="eyebrow">Wat is AI</p>

## Context

- De **wereld** van een LLM
- Alles: system prompt + tools + complete gesprek
- Als context vol begint te raken, wordt het model **dommer**
  - Attention dilution
  - Lost in the middle
  - Tegenstrijdigheden
- Te weinig context = **onjuist** antwoord
- Te veel context = **onverwacht** antwoord

Note: Belangrijk mentaal model: het model heeft geen geheugen tussen
chats. Alles wat het "weet" over deze taak staat in de context.
Relevante info erin = betere antwoorden.

---

<p class="eyebrow">Wat is AI</p>

## Reasoning

- Model denkt eerst "hardop"
- Context vergroten
- Langer nadenken is niet altijd beter
  - Zet effort niet standaard op xhigh/max

Note: Denk aan een kladblaadje voordat het antwoordt. Goed voor wiskunde,
logica, planning. Voor simpele taken overkill.

---

<p class="eyebrow">Wat is AI</p>

## Wat is een agent?

- Een LLM **praat** alleen — een agent mag ook **doen**
- Een agent maakt een extra lus om de LLM heen
  - denken &rarr; tool gebruiken &rarr; resultaat teruglezen &rarr; denken
- Tools: bestanden lezen en schrijven, commando's draaien, zoeken, en meer
- Elke stap komt terug in de **context**

Note: Dit is de sprong van "chatvenster" naar "collega die je repo openzet".
Het model bedenkt zelf welke stap nodig is en ziet het resultaat weer
terug. Verklaart ook waarom een lange agent-sessie je context volloopt:
elk bestand en elke commando-output blijft erin staan.
