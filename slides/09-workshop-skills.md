## Workshop 3
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 09 · bonus</p>

### Een code-review skill bouwen

Note: Bonusronde als er tijd over is; kan ook prima als losse
vervolgsessie. Twee vliegen: ze schrijven opnieuw een skill, en ze zien met
eigen ogen wat subagents met je context doen.

---

<p class="eyebrow">Workshop · Skills</p>

## Wat we gaan doen

Een skill die **twee subagents** op dezelfde diff zet:

- reviewer A — correctheid: bugs, edge cases, foute aannames
- reviewer B — conventies &amp; eenvoud: herhaling, dode code, afwijkingen

Daarna voegt de skill hun bevindingen samen tot één lijst.

Note: Twee lenzen in plaats van één review, omdat één agent die op alles
tegelijk let overal het halve werk doet. En omdat het meteen laat zien
waarom je dit ópsplitst — dat is deel C.

---

<p class="eyebrow">Workshop · Skills</p>

## Deel A — de skill schrijven

In `.claude/skills/code-review/SKILL.md` staat een skelet met vier TODO's.

```markdown
---
name: code-review
description: Review de openstaande wijzigingen op bugs
  en op conventies/eenvoud.
---
```

De `description` bepaalt **wanneer** de skill geladen wordt — schrijf 'm
voor je toekomstige zelf.

Note: Laat ze de TODO's zelf invullen: welke diff, twee subagents in één
bericht (anders lopen ze niet parallel), welk rapportageformaat, en wat er
gebeurt bij dubbele of tegenstrijdige bevindingen.

Frontmatter-valkuil: een vage description betekent dat de skill nooit
vanzelf laadt. "Review code" is te vaag; noem het artefact (diff, PR) en de
aanleiding.

---

<p class="eyebrow">Workshop · Skills</p>

## Deel B — loslaten op echte code

```sh
git apply workshop-3/favorieten-en-prijsfilter.patch
npm test        # 7 groen
```

Een feature van een collega: favorieten + een prijsfilter.
**De tests zijn groen.** Draai nu je skill.

Note: Groene tests, en er zit genoeg mis. Dat is de opzet: als tests het
zouden vangen had je de review niet nodig.

Wat erin zit, voor het geval de zaal het mist: de teller telt de lijst
vóór het prijsfilter; `Number(maxPrijs) || Infinity` betekent dat "0"
alles toont; er wordt tijdens de render naar localStorage geschreven; een
lege `catch {}`; de zoeklogica staat er twee keer; `setFavorieten` wordt
geëxporteerd maar nooit gebruikt; en er is geen enkele test bijgekomen.

Niet vooraf verklappen — laat de subagents het doen.

---

<p class="eyebrow">Workshop · Skills</p>

## Deel C — kijk naar je context

Draai `/context` **vóór** en **ná** de review.

- De subagents lezen tientallen bestanden en greppen zich suf
- Jouw hoofdcontext groeit met **alleen hun eindoordeel**

Doe daarna dezelfde review inline, zonder subagents. Kijk opnieuw.

Note: Dit is het moment waar de workshop om draait, en het werkt omdat ze
een getal zien veranderen in plaats van een principe horen.

Een subagent heeft zijn eigen context: al het zoekwerk, de doodlopende
sporen en de redeneringen blijven daar. Jij krijgt de conclusie. Inline
komt dat allemaal in jouw venster terecht — en de rest van je sessie wordt
er dommer van (attention dilution, hoofdstuk 02).

---

<p class="eyebrow">Workshop · Skills</p>

## Wanneer wel, wanneer niet

**Wel:** breed zoeken · meerdere perspectieven · wegwerpcontext

**Niet:** je hebt de tussenstappen zelf nodig · ze zien elkaars werk niet ·
drie agents op een taak van één regel

Note: Eerlijk blijven over de kosten: subagents draaien parallel en kosten
dus tokens tegelijk. Voor een kleine taak ben je duurder en trager uit.

De vuistregel: delegeer werk waarvan je het resultaat wilt, niet de route.
Moet je zelf meekijken hoe iets tot stand komt, doe het dan inline.

---

<p class="eyebrow">Workshop · Skills</p>

## Wat je meeneemt

- Een skill is een **markdown-bestand** met frontmatter, meer niet
- Zet erin wat jij elke keer opnieuw uitlegt
- Subagents houden je hoofdcontext schoon

**Schrijf er maandag één voor je eigen team.**

Note: Vraag concreet: welke uitleg herhaal jij het vaakst? Dat is je eerste
skill. Release-procedure, PR-beschrijving in jullie format, hoe je een
migratie draait.

Bruggetje naar hoofdstuk 10: dit werkt omdat jíj de review nog leest. De
skill vervangt je oordeel niet, hij verzamelt alleen sneller.
