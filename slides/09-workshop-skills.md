## Workshop 3
<!-- .slide: data-background-color="#161616" data-background-image="assets/polar-bear.png" data-background-size="52%" data-background-position="right 3% bottom" data-background-repeat="no-repeat" class="divider" -->

<p class="eyebrow">Hoofdstuk 09 · bonus</p>

### Playwright opzetten en een verstopte bug vinden

Note: Bonusronde als er tijd over is; kan ook prima als losse
vervolgsessie. Twee vliegen: de agent zet zelf tooling op, en ze zien dat
"Done" en "klopt" niet hetzelfde zijn.

---

<p class="eyebrow">Workshop · e2e</p>

## Wat we gaan doen

- Laat de agent **Playwright opzetten** in dit project
- Schrijf e2e-tests op basis van **acceptatiecriteria** van een ticket
- Kijk wat er breekt

Note: Het gaat niet om Playwright leren, maar om zien dat toolinstallatie
door een agent net zo goed werk is dat je controleert — en dat "Done" een
claim is, geen garantie.

---

<p class="eyebrow">Workshop · e2e</p>

## Playwright

Geen kant-en-klare config. Vraag de agent:

```text
Zet Playwright op in dit project voor e2e-tests tegen de
lopende dev server. Voeg een npm-script test:e2e toe.
```

Note: Laat de agent zelf kiezen: `@playwright/test` installeren,
`npx playwright install`, een `playwright.config.ts` met de juiste
`baseURL`, en een script in `package.json`. Dit is bewust geen
kant-en-klaar recept — controleer of hij de dev server (`npm run dev`)
daadwerkelijk aan de praat krijgt vóór de tests draaien, en of hij een
poort kiest die niet al bezet is.

---

<p class="eyebrow">Workshop · e2e</p>

## Testen schrijven

`tickets/TOUR-165-favorieten-prijsfilter.md` gaat over favorieten en een
prijsfilter, geleverd vorige sprint. Zeven groene unit tests, status
**Done**.

```text
Schrijf e2e-tests voor TOUR-165 op basis van de
acceptatiecriteria, en draai ze.
```

Note: De crux: laat de agent de tests baseren op de acceptatiecriteria,
niet op de code. Criterium 5 (filter op "0" toont niets) en criterium 6
(de teller klopt na het filter) zijn de twee die breken.

Referentie: `Number(maxPrijs) || Infinity` behandelt "0" als "geen
filter", dus alles blijft zichtbaar. De teller telt `gefilterd.length`
(vóór het prijsfilter) in plaats van wat er echt in de lijst staat.

---

<p class="eyebrow">Workshop · e2e</p>

## Conclusie

- **Done** is een claim van de vorige sprint, geen garantie voor de toekomst
- e2e opzetten met een agent is eenvoudig
- Testen schrijven is **goedkoop geworden**

Note: Bruggetje naar hoofdstuk 10: ook hier geldt — jij blijft degene die
beoordeelt of het écht klopt. Een agent die zelf Playwright optuigt is
indrukwekkend, maar "het draait" is nog geen "het is goed opgezet".
