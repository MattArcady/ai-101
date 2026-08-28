## Workshop 1
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 07</p>

### Twee MCP's koppelen

Note: Handen op het toetsenbord. Hoofdstuk 04 ging over wat MCP ís — nu
hangen ze er zelf twee aan.

---

<p class="eyebrow">Workshop · MCP</p>

## Wat we gaan doen

Twee servers, twee soorten kennis die het model **niet heeft**:

- **tourdata** — lokaal, over jóuw project
- **Context7** — geversioneerde documentatie van libraries

```sh
cd workshops/tourplanner && npm install
```

Note: Dit is het onderscheid dat blijft hangen: de ene server ontsluit data
die alleen jij hebt, de andere ontsluit kennis die te nieuw of te
versie-specifiek is om in het model te zitten. Beide categorieën kom je in
je eigen werk tegen.

Setup vooraf laten doen. Node 20+ vereist.

---

<p class="eyebrow">Workshop · MCP</p>

## Deel A — je eigen server

In `tools/tour-mcp/` staat een MCP-server over `public/tourdata.json`:
bezetting per maand, prijshistorie, routes.

```sh
cp .mcp.json.voorbeeld .mcp.json
```

Herstart Claude Code, keur de server goed, en check met `/mcp`.

Note: `.mcp.json` is projectconfiguratie: hij staat in de repo en geldt voor
iedereen die hem opent. Claude vraagt éénmalig of je die server vertrouwt —
laat dat zien, en koppel het aan hoofdstuk 07: een MCP-server is code van
iemand anders die jij laat draaien.

De server is ~120 regels Node zonder dependencies. Laat 'm openen; het
ontmythologiseert MCP enorm. Vier tools: zoek_stop, bezetting,
prijshistorie, routes.

---

<p class="eyebrow">Workshop · MCP</p>

## Deel A — proberen

1. Vraag eerst **zonder** de server: *"welke stops zitten in juli boven
   90% bezetting?"*
2. Zet de server aan en stel dezelfde vraag
3. Nu de echte stap — laat het in **code** landen:

```text
Zet achter elke stop de bezetting van juli.
Haal die op via de tourdata MCP-server.
```

Note: Stap 1 is belangrijk: laat ze het model eerst zien gokken of eerlijk
"dat kan ik niet weten" zien zeggen. Zonder dat contrast is stap 2 magie
zonder betekenis.

Stap 3 is waar het kwartje valt: MCP is niet alleen een vraagbaak naast je
werk, het is een bron die de agent tijdens het bouwen gebruikt.

Let op de kosten: elk toolresultaat gaat je context in. Laat `/context`
zien na een paar brede vragen.

---

<p class="eyebrow">Workshop · MCP</p>

## Deel B — Context7

Een remote server, dus een ander soort configuratie:

```sh
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

Werkt zonder account. Een gratis key op context7.com verhoogt je limiet.

Note: Bewust een andere manier dan deel A: daar een projectbestand, hier de
CLI. Beide moeten ze een keer gedaan hebben. `claude mcp list` om te checken.

Met vijftien man op één kantoor-IP kun je tegen rate limits aanlopen — laat
ze vooraf een gratis key halen, of deel er één.

---

<p class="eyebrow">Workshop · MCP</p>

## Deel B — versies zijn het punt

Wij gebruiken **TanStack Query v5** (zie `package.json`)

```text
Vervang de directe import van stops.json door een
TanStack Query-hook die public/tourdata.json ophaalt.

Gebruik context7 voor /tanstack/query, versie 5.
```

Vraag daarna hetzelfde voor **v4** — en vergelijk

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

## Wat je meeneemt

- Een MCP-server aanzetten is **twee regels config**, geen project
- Eigen data → eigen server; die van ons is 120 regels
- Documentatie mét versie slaat een hele klasse fouten weg
- Alles wat terugkomt kost **context** — zet niet alles aan

Note: Afsluiten met de vraag: welke server zou jij maandag aanzetten? Bij de
meesten is dat Azure DevOps of een database. Laat de Azure DevOps-server
zien als de tijd het toelaat.

En het tegenwicht: tien servers aan betekent honderd tools in je context
voordat je iets gevraagd hebt. Aanzetten wat je die dag nodig hebt.
