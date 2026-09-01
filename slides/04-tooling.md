## Tooling
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 04</p>

- Agent
- Rules
- Validatie
- Skills
- MCP
- Sandboxing

Note: Van chatvenster naar tools die echt in je codebase werken.

---

<p class="eyebrow">Tooling</p>

## Agent (Claude Code)

- Een LLM **praat** alleen; een agent mag ook **doen**
- Een agent geeft tools aan een LLM en bepaalt de context
  - welke **tools** bestaan: 
    - files, bash, git, MCP, subagents
  - wat **mag** zonder vragen: 
    - permissies, auto-mode
  - welke **context** het model ziet: 
    - system prompt, projectinstructies
- Een agent maakt een extra lus om de LLM heen
  - llm &rarr; tool gebruiken &rarr; resultaat teruglezen &rarr; llm &rarr; antwoord
- Elk tool result komt terug in de **context**
- Zelfde model, andere agent = **ander resultaat**
  - Sonnet/Opus in Copilot gedraagt zich anders dan in Claude Code

Note: Draait een extra loop en draait tool calls. Roept LLM's opnieuw aan met context en tool result

---

<p class="eyebrow">Tooling</p>

## Rules

- Geef het model **regels**
- Claude Code hanteert **CLAUDE.md**
  - `CLAUDE.md` kan genest worden in subfolders
- Regels zijn een **verzoek**, geen verplichting
- Code style, tool instructies, documentatie
- Hou hem kort; hoe groter het bestand, hoe eerder het een suggestie wordt
- Agent stuurt ook een eigen system prompt mee

Note: Regels worden altijd door de LLM meegenomen in de context. Het is dus contextafhankelijk
of de regels wel gevolgd worden. 

---

<p class="eyebrow">Tooling</p>

## Validatie

- Geef het model een **feedbackloop**
  - tests, lint, build, playwright/browser
- Het model controleert zijn eigen werk en is pas klaar als het groen is
- Schrijf regels in **CLAUDE.md**

Note: De tegenhanger van zelfverzekerde onzin. Als er tests/builds
zijn, kan de agent itereren tot het klopt. Zonder feedbackloop moet
jij alles handmatig nalopen. Investeer daarom in checks.

---

<p class="eyebrow">Tooling</p>

## Skills

<div class="momentum" style="--x:-2%; --y:16%; --len:220px"></div>

- Herbruikbare instructies voor terugkerende taken
  - /merge-develop
  - /code-review
  - /refine-ticket
- Skills kunnen aangeroepen worden zonder dat je dit expliciet vraagt

Note: Skills = jouw werkwijze verpakt zodat de agent het consistent doet.
Voorbeeld: een review-checklist, een deploy-procedure. Later meer
waard naarmate je vaker dezelfde dingen doet.

---

<p class="eyebrow">Tooling</p>

## MCP

- De **hub**: toegang tot systemen buiten je repo
  - Azure DevOps (work items, PR's), Figma, Context7 (documentatie)
- Zelfde regel als bij tools: alles wat terugkomt gaat je **context** in
- MCP is een **protocol**
- Zelf MCP servers bouwen
- MCP of CLI?

Note: Model Context Protocol. Je hoeft het protocol niet te kennen, wel
het idee: één standaard manier om de agent aan je andere systemen te
hangen. Laat er live eentje zien als de setup het toelaat.

---

<img class="slide-figure" src="assets/sbx.jpeg" alt="Docker SBX">

<p class="eyebrow">Tooling</p>

## Sandboxing

- Laat de agent werken in een **afgeschermde** omgeving
  - Docker sbx &rarr;
- Permissies: wat mag het wel/niet:
  - Filesystem
  - Network
  - Tool calls
  - Scoped Personal Access Tokens voor MCP/azcli

Note: Vertrouwen komt van inperking, niet van hoop. Denk aan permission
modes, aparte branches/worktrees, geen prod-toegang. Zo kun je de
agent meer vrijheid geven zonder risico.
