## Workshop 3
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 09 · bonus</p>
### Van ticket naar werkende feature

Note: Bonusronde als er tijd over is. Alles komt hier samen: een skill
schrijven (workshop 2), context sturen (hoofdstuk 05) en valideren
(hoofdstuk 04). Kan ook prima als losse vervolgsessie.

---

<p class="eyebrow">Workshop · Ticket</p>

## Wat we gaan doen

Een skill die een ticket **opzoekt** en **nabouwt**:

1. zoekt in `tickets/` op nummer of omschrijving
2. leest de acceptatiecriteria
3. bouwt precies dat — niet meer
4. schrijft een test per criterium
5. verifieert en rapporteert

Note: De kern van deze workshop is punt 3 en 5. Een agent bouwt graag méér
dan gevraagd, en meldt graag "klaar" zonder iets gedraaid te hebben. De
skill is de plek waar je dat één keer dichttimmert in plaats van elke sessie
opnieuw te vragen.

---

<p class="eyebrow">Workshop · Ticket</p>

## De backlog

```sh
ls workshops/tourplanner/tickets/
```

Vijf tickets. Eén ervan is klaar om te bouwen, de rest niet:
done, backlog, on hold, blocked.

**`TOUR-142` — Reisbudget met waarschuwing**

Note: Bewust een mix. Vraag ze na afloop wat hun skill deed toen ze om
TOUR-155 (on hold) of TOUR-160 (blocked, wacht op 142) vroegen. Bouwt hij
vrolijk door, of zegt hij er iets van? Dat is TODO 2 in het skelet.

TOUR-118 is nog leuker: dat is afgerond met de conclusie dat sorteren
juist níet gebouwd moest worden, omdat de routevolgorde bewust is. Een
agent die alleen de titel leest, bouwt het alsnog.

---

<p class="eyebrow">Workshop · Ticket</p>

## Deel A — de skill

`.claude/skills/ticket-bouwen/SKILL.md` — skelet met zeven TODO's.

```markdown
---
name: ticket-bouwen
description: Zoek een ticket op in tickets/ en bouw het na,
  inclusief tests en verificatie.
---
```

Vul in: zoeken, criteria als checklist, aannames, bouwen, testen,
verifiëren, afrapporteren.

Note: Laat ze vooral nadenken over de randgevallen in TODO 1 en 2: meerdere
matches, geen match, en een ticket dat niet klaar is om op te pakken.

Tip voor de zaal: laat de skill de criteria éérst als checklist teruggeven.
Dan zie je meteen of hij het ticket goed gelezen heeft, vóórdat er code is.

---

<p class="eyebrow">Workshop · Ticket</p>

## Deel B — draaien

```text
/ticket-bouwen 142
```

en daarna, met een schone sessie:

```text
/ticket-bouwen die van het budget
```

Werkt je skill op allebei?

Note: Het tweede pad is waar de meeste skeletten omvallen: zoeken op
omschrijving in plaats van op nummer. Grep op "budget" vindt zowel TOUR-142
als TOUR-160 — wat doet jouw skill dan?

De opdracht is bewust volledig uitgeschreven: zeven criteria, een
buiten-scope-lijst en een definition of done. Dat is de andere helft van de
les — dit ticket is te bouwen zónder verder iets te vragen, en dat komt
doordat iemand het goed heeft opgeschreven.

---

<p class="eyebrow">Workshop · Ticket</p>

## Deel C — nakijken

- Zeven criteria, hoeveel tests heeft hij geschreven?
- Heeft hij `npm test` en `npx tsc -b` echt **gedraaid**?
- Is er iets gebouwd dat **buiten scope** stond?
- Klopt criterium 3 — is *precies* op budget binnen budget?

Note: Ik heb dit ticket zelf nagebouwd om te controleren dat het klopt: het
is te doen in één beurt, en 5 tests (criterium 2 t/m 6) plus de bestaande 7
komen groen door. Referentie: budget geldig als `/^\d+$/` matcht, anders
`null`; melding `Nog € X te besteden` of `€ X over je budget`; rood is
`#e5484d` op de `<strong>` van het totaal.

Criterium 3 is de klassieke afterloop: `total < budget` in plaats van
`<=` maakt "precies op budget" ineens een overschrijding. Wie geen test
per criterium schrijft, mist dat.

---

<p class="eyebrow">Workshop · Ticket</p>

## Wat je meeneemt

- Een goed ticket is **context die je maar één keer schrijft**
- Acceptatiecriteria worden je tests — letterlijk
- "Buiten scope" is het stukje dat scope creep tegenhoudt
- Laat de agent **verifiëren**, niet samenvatten

Note: Draai de conclusie om voor de zaal: dit gaat maar half over de skill.
Het gaat erover dat een ticket dat goed genoeg is voor een agent, ook het
ticket is waar een junior collega mee vooruit kan. Slecht opgeschreven werk
wordt niet beter door er een agent op te zetten.

Bruggetje naar hoofdstuk 10: en tóch blijf jij degene die het nakijkt.
