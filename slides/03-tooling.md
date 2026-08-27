## Tooling
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 03</p>

- Harness
- Sandboxing
- Validatie
- Skills

Note: Van chatvenster naar tools die echt in je codebase werken.

---

<p class="eyebrow">Tooling</p>

## Claude Code / Copilot

- **Copilot:** autocomplete in je editor
- **Claude Code:** agent die leest, schrijft, tests draait
- Verschil: suggestie vs. zelfstandig taken uitvoeren

Note: Copilot = regelaanvulling terwijl je typt. Claude Code = een agent
die meerdere stappen zelf zet: files openen, wijzigen, commando's
draaien, resultaat teruglezen. Dat is de sprong die we vandaag maken.

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
