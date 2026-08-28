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

- De **agent** is de bestuurder, de **harness** is de auto
- Het programma om het model heen. Die bepaalt:
  - welke **tools** bestaan &mdash; files, bash, git, MCP
  - wat **mag** zonder vragen &mdash; permissies, sandbox
  - welke **context** het model ziet &mdash; system prompt, projectinstructies
  - wat er met de **output** gebeurt &mdash; diff, tests, retry
- Zelfde model, andere harness = ander resultaat

<br/>

<p class="fragment"><strong>Winst zit vaker in de harness dan in je prompt.</strong></p>

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

## Sandboxing

- Laat de agent werken in een **afgeschermde** omgeving
- Fouten &amp; foute commando's blijven ingeperkt
- Permissies: wat mag het wel/niet zonder te vragen

Note: Vertrouwen komt van inperking, niet van hoop. Denk aan permission
modes, aparte branches/worktrees, geen prod-toegang. Zo kun je de
agent meer vrijheid geven zonder risico.

---

<p class="eyebrow">Tooling</p>

## Validatie

- Geef het model een **feedbackloop**: tests, linter, types
- Het model controleert zijn eigen werk
- "Groen" is objectiever dan "het ziet er goed uit"

Note: De tegenhanger van zelfverzekerde onzin. Als er tests/typechecks
zijn, kan de agent itereren tot het klopt. Zonder feedbackloop moet
jij alles handmatig nalopen. Investeer daarom in checks.

---

<p class="eyebrow">Tooling</p>

## Skills

- Herbruikbare instructies voor terugkerende taken
- Denk: "zo doen wij een code review / release"
- Model laadt ze wanneer relevant

Note: Skills = jouw werkwijze verpakt zodat de agent het consistent doet.
Voorbeeld: een review-checklist, een deploy-procedure. Later meer
waard naarmate je vaker dezelfde dingen doet.

---

<p class="eyebrow">Tooling</p>

## MCP

- De **stekkerdoos**: toegang tot systemen buiten je repo
- Bijvoorbeeld: Azure DevOps (work items, PR's), Figma, een database
- Zelfde regel als bij tools: alles wat terugkomt gaat je **context** in
- Let op: het is ook een **invoerkanaal** — daarover meer in hoofdstuk 07

Note: Model Context Protocol. Je hoeft het protocol niet te kennen, wel
het idee: één standaard manier om de agent aan je andere systemen te
hangen. Laat er live eentje zien als de setup het toelaat.
