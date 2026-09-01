## Workshop 1
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 07</p>

### Twee MCP tools gebruiken

Note: Handen op het toetsenbord. Hoofdstuk 04 ging over wat MCP ís — nu
hangen ze er zelf twee aan.

---

<p class="eyebrow">Workshop · MCP</p>

## Wat we gaan doen

Twee tools, twee soorten kennis die het model **niet heeft**:

- **tourdata** Lokaal, over ons project
- **Context7** Documentatie van libraries

```sh
git clone https://github.com/MattArcady/ai-101
cd ai-101/workshops/tourplanner && npm i && claude
```

Note: Dit is het onderscheid dat blijft hangen: de ene server ontsluit data
die alleen jij hebt, de andere ontsluit kennis die te nieuw of te
versie-specifiek is om in het model te zitten. Beide categorieën kom je in
je eigen werk tegen.

Setup vooraf laten doen. Node 20+ vereist.

---

<p class="eyebrow">Workshop · MCP</p>

## Lokale database

In `tools/tour-mcp/` staat een MCP-server met info over bezetting per maand, prijshistorie en routes.

- Kopieer `.mcp.json.voorbeeld` naar `.mcp.json`
- Herstart Claude Code en keur de nieuwe server goed
- `/mcp` laat alle MCP servers zien


Note: `.mcp.json` is projectconfiguratie: hij staat in de repo en geldt voor
iedereen die hem opent. Claude vraagt éénmalig of je die server vertrouwt —
laat dat zien, en koppel het aan hoofdstuk 07: een MCP-server is code van
iemand anders die jij laat draaien.

De server is ~120 regels Node zonder dependencies. Laat 'm openen; het
ontmythologiseert MCP enorm. Vier tools: zoek_stop, bezetting,
prijshistorie, routes.

---

<p class="eyebrow">Workshop · MCP</p>

## Lokale database

1. Haal alle routes op
2. Welke stops zitten op het vaste land?
3. welke stops zitten in augustus boven 80% bezetting?

Note: Soms combineert de agent data van de mcp met data op internet, zoals informatie over eilanden

---

<p class="eyebrow">Workshop · MCP</p>

## Context7

Vraag Claude om een MCP server toe te voegen: 

*Voeg de context7 mcp server toe aan dit project*

Herstart daarna Claude Code weer

Note: Ook config aanpassingen kunnen door ai worden gedaan

Met vijftien man op één kantoor-IP kun je tegen rate limits aanlopen — laat
ze vooraf een gratis key halen, of deel er één.

---

<p class="eyebrow">Workshop · MCP</p>

## Context7 — versies zijn het punt

Wij gebruiken **TanStack Query v5** (zie `package.json`)

*Je kunt `/advisor` gebruiken*

```text
Vervang de directe import van stops.json door een
TanStack Query-hook die public/tourdata.json ophaalt.

Gebruik context7 voor /tanstack/query, versie 5.
```

<br/>
<br/>
Vraag daarna hetzelfde voor v4

Note: TanStack Query is een goede testcase omdat v4 → v5 flink brak:
positionele argumenten weg (alles in één object), `isLoading` werd
`isPending`, `cacheTime` werd `gcTime`, de `onSuccess`-callbacks zijn
verdwenen.

Context7 kent die versies apart: /tanstack/query/v5.90.3 naast
/tanstack/query/v4_29_19. Laat ze dezelfde vraag aan beide stellen. Dát is
de les: "de nieuwste docs" is niet hetzelfde als "de docs die bij jouw
package.json horen".

Praktisch: zodra de app een query-hook gebruikt, moeten de tests in een
QueryClientProvider gewikkeld worden. Prima moment om de agent dat zelf op
te laten lossen.

---

<p class="eyebrow">Workshop · MCP</p>

## Conclusie

- Een MCP-server gebruiken is **niet moeilijk**
- MCP server calls kosten tokens, maar besparen WebSearch-tokens
- Geversioneerde documentatie

*Welke kansen zie jij binnen je eigen project?*

Note: Bij MCP hoef je niet gelijk te denken aan eigen data voeden of tickets ophalen van Jira/Devops/Github. 
Ook gewoon een simpele documentatie-server helpt enorm
