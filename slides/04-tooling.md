## Tooling
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 04</p>

- Harness
- Sandboxing
- Validatie
- Skills
- MCP

Note: Van chatvenster naar tools die echt in je codebase werken.

---

<p class="eyebrow">Tooling</p>

## Harness

- Een harness geeft tools aan een LLM en bepaalt de context
  - welke **tools** bestaan &mdash; files, bash, git, MCP, subagents
  - wat **mag** zonder vragen &mdash; permissies, sandbox
  - welke **context** het model ziet &mdash; system prompt, projectinstructies
  - wat er met de **output** gebeurt &mdash; diff, tests, retry
- Zelfde model, andere harness = ander resultaat
  - Sonnet/Opus in Copilot gedraagt zich anders dan in Claude Code


Note: Terugkoppelen naar hoofdstuk 02: daar was de agent de lus. De harness
is alles eromheen dat die lus draait. Copilot = regelaanvulling terwijl
je typt, geen lus. Claude Code = harness met een agent die meerdere
stappen zelf zet: files openen, wijzigen, commando's draaien, resultaat
teruglezen.
Belangrijkste punt voor de zaal: als het resultaat slecht is, ga dan niet
eindeloos prompten. Kijk naar de harness — ontbreken er tests om tegen te
itereren, staan de projectinstructies er niet, heeft het geen toegang tot
de juiste tool? De volgende vier onderwerpen zijn precies dat.

---

<p class="eyebrow">Tooling</p>

## Rules

- Geef het model **regels**
- Meeste harnassen ondersteunen **AGENTS.MD**
- Regels zijn een verzoek, geen verplichting
- Code style, tool instructies, documentatie

Note: Regels worden altijd door de LLM meegenomen in de context. Het is dus contextafhankelijk
of de regels wel gevolgd worden. 

---

<p class="eyebrow">Tooling</p>

## Validatie

- Geef het model een **feedbackloop**: tests, lint, build, playwright
- Het model controleert zijn eigen werk en is pas klaar als het groen is
- Schrijf regels in **AGENTS.MD**

Note: De tegenhanger van zelfverzekerde onzin. Als er tests/builds
zijn, kan de agent itereren tot het klopt. Zonder feedbackloop moet
jij alles handmatig nalopen. Investeer daarom in checks.

---

<p class="eyebrow">Tooling</p>

## Skills

<div class="momentum" style="--x:-2%; --y:16%; --len:220px"></div>

- Herbruikbare instructies voor terugkerende taken
- Denk: "zo doen wij een code review / release"
- Model laadt ze wanneer relevant

Note: Skills = jouw werkwijze verpakt zodat de agent het consistent doet.
Voorbeeld: een review-checklist, een deploy-procedure. Later meer
waard naarmate je vaker dezelfde dingen doet.

---

<p class="eyebrow">Tooling</p>

## MCP

- De **hub**: toegang tot systemen buiten je repo
- Bijvoorbeeld: Azure DevOps (work items, PR's), Figma, Context7 voor documentatie
- Zelfde regel als bij tools: alles wat terugkomt gaat je **context** in
- MCP is een **protocol**
- Zelf MCP servers bouwen
- MCP versus CLI

Note: Model Context Protocol. Je hoeft het protocol niet te kennen, wel
het idee: één standaard manier om de agent aan je andere systemen te
hangen. Laat er live eentje zien als de setup het toelaat.

---

<img class="slide-figure" src="assets/sbx.jpeg" alt="Docker SBX">

<p class="eyebrow">Tooling</p>

## Sandboxing

- Laat de agent werken in een **afgeschermde** omgeving
- Permissies: wat mag het wel/niet:
  - Filesystem
  - Network
  - Tool calls
  - Scoped Personal Access Tokens voor MCP/azcli

Note: Vertrouwen komt van inperking, niet van hoop. Denk aan permission
modes, aparte branches/worktrees, geen prod-toegang. Zo kun je de
agent meer vrijheid geven zonder risico.
