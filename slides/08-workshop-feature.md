## Workshop 2
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 08</p>
### Een feature programmeren

Note: Alles samen: prompten + tooling + validatie in een echte codebase.

---

<p class="eyebrow">Workshop · Bouwen</p>

## Aanpak

1. Beschrijf de feature &amp; acceptatiecriteria
2. Laat de agent een plan maken — check het
3. Laat 'm bouwen in kleine stappen
4. Valideren: tests draaien, diff reviewen

Note: Benadruk: jij blijft de reviewer. Plan eerst, dan pas code. Kleine
stappen = makkelijker bijsturen. Gebruik de feedbackloop.

---

<p class="eyebrow">Workshop · Bouwen</p>

## Voorbeeld-prompt

```text
Bouw een endpoint /health dat 200 + {"status":"ok"} teruggeeft.

- Voeg een test toe die de statuscode en body checkt.
- Draai de tests en laat de output zien.
- Houd de diff klein; leg keuzes kort uit.
```

Note: Merk op: doel, expliciete validatiestap, en een grens op de scope.
Precies de principes uit workshop 1, nu toegepast op code.

---

<p class="eyebrow">Workshop · Bouwen</p>

## De diff reviewen

- Lees de **diff**, niet de samenvatting van de agent
- Vraag jezelf af: zou ik dit zelf zo schrijven? Snap ik elke regel?
- Let op: extra bestanden, nieuwe dependencies, weggehaalde checks
- Commit **klein** — dan is terugdraaien goedkoop

Note: De agent vat zijn eigen werk optimistisch samen. "Klaar en tests
groen" is geen review. Vooral kijken naar wat er stilletjes bij kwam
of juist verdween — dat haalt de samenvatting zelden.

---

<p class="eyebrow">Workshop · Bouwen</p>

## Valkuilen

- Te grote opdracht in één keer
- Blind vertrouwen — niet reviewen
- Geen tests/feedbackloop aanwezig

Note: De klassieke fouten. Koppel terug naar "zelfverzekerde onzin" en
"validatie". Klein + reviewen + checks = betrouwbaar.
