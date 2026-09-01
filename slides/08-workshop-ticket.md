## Workshop 2
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 08</p>

### Van ticket naar werkende feature

Note: Hier komt alles samen: een skill schrijven, context sturen
(hoofdstuk 05) en valideren (hoofdstuk 04). Hun eerste eigen skill, dus
neem de tijd voor het skelet.

---

<p class="eyebrow">Workshop · Ticket</p>

## Wat we gaan doen

- Een skill maken die een ticket **opzoekt** en **nabouwt**
- Een ticket oppakken met de skill


Note: De kern van deze workshop is punt 3 en 5. Een agent bouwt graag méér
dan gevraagd, en meldt graag "klaar" zonder iets gedraaid te hebben. De
skill is de plek waar je dat één keer dichttimmert in plaats van elke sessie
opnieuw te vragen.

---

<p class="eyebrow">Workshop · Ticket</p>

## De backlog

In `workshops/tourplanner/tickets/` staan vijf tickets. Eén ervan is klaar om te bouwen, de rest niet.

**`TOUR-142` — Reisbudget met waarschuwing**

Note: Bewust een mix. Vraag ze na afloop wat hun skill deed toen ze om
TOUR-155 (on hold) of TOUR-160 (blocked, wacht op 142) vroegen. Bouwt hij
vrolijk door, of zegt hij er iets van? Dat is TODO 2 in het skelet.

TOUR-118 is nog leuker: dat is afgerond met de conclusie dat sorteren
juist níet gebouwd moest worden, omdat de routevolgorde bewust is. Een
agent die alleen de titel leest, bouwt het alsnog.

---

<p class="eyebrow">Workshop · Ticket</p>

## De skill

`.claude/skills/implement-ticket/SKILL.md` is een lege skill. Vul de skill in (of laat dit doen) met de volgende stappen:

1. zoekt in `tickets/` op nummer of omschrijving
2. controleer de status
3. leest de acceptatiecriteria
4. geef een plan aan de gebruiker en wacht op akkoord
5. bouwt precies dat en niet meer
6. schrijft een test per criterium
7. verifieert en rapporteert

Note: Laat ze vooral nadenken over de randgevallen in TODO 1 en 2: meerdere
matches, geen match, en een ticket dat niet klaar is om op te pakken.

Tip voor de zaal: laat de skill de criteria éérst als checklist teruggeven.
Dan zie je meteen of hij het ticket goed gelezen heeft, vóórdat er code is.

---

<p class="eyebrow">Workshop · Ticket</p>

## Implementeren

```text
/implement-ticket die over budget
```

en daarna, na `/clear` en schone git

```text
/implement-ticket 142
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

Bruggetje naar hoofdstuk 09: en tóch blijf jij degene die het nakijkt —
daarom zetten we in de volgende workshop een skill op je eigen werk.
