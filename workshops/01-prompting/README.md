# Tourplanner — oefenproject workshop 1 (prompt engineering)

Een piepklein React-appje: een lijst reisstops, een zoekfilter, een aantal
nachten per stop en een totaalprijs.

Er zitten **twee bugs** in. Je gaat ze niet zelf oplossen — je laat de agent ze
oplossen, twee keer, met twee heel verschillende prompts.

## Setup (2 minuten)

```sh
cd workshops/01-prompting
npm install
npm run dev     # open de URL die hij toont
npm test        # 4 tests, allemaal groen
```

Let op dat laatste: **de tests zijn groen terwijl de app kapot is.** Daar komen
we bij de nabespreking op terug.

## Ronde 1 — de luie prompt (5 min)

Start een nieuwe agentsessie in deze map en plak letterlijk dit:

```text
fix de bug
```

Kijk twee minuten wat er gebeurt. Noteer voor jezelf:

- Hoeveel bestanden gaat hij lezen voordat hij iets doet?
- Wát repareert hij eigenlijk — en had je daar last van?
- Hoe groot is de diff?

Gooi daarna alles weg: `git checkout -- .` (of verwerp de wijzigingen in je
IDE) en `/clear` in de agent.

## Ronde 2 — mét reproductiepad (10 min)

Zoek de bug eerst zelf op in de browser. Schrijf dan een prompt met vier
onderdelen:

1. **wat je deed** — stap voor stap, zodat de agent het kan naspelen
2. **wat je verwachtte**
3. **wat er werkelijk gebeurde**
4. **waar het wél goed gaat** — dat grenst het probleem af

Voorbeeld van de vorm (schrijf 'm zelf, dit is geen kopieerwerk):

```text
Er zit een bug in het verwijderen van stops.

Reproductie:
1. npm run dev, open de app
2. Typ "porto" in het zoekveld — alleen de rij "Porto" blijft over
3. Klik op het prullenbak-icoon bij die rij
4. Maak het zoekveld leeg

Verwacht: Porto is weg, de rest staat er nog.
Werkelijk: Porto staat er nog en Amsterdam is verdwenen — een stop
die op dat moment niet eens zichtbaar was.

Zonder zoekfilter verwijdert hij wél de juiste stop.

Vind de oorzaak, houd de fix klein, en voeg een test toe die dit pad
afdekt. Draai daarna npm test.
```

Vergelijk met ronde 1: hoeveel beurten had je nodig, hoe groot was de diff, en
was het in één keer goed?

## Bonus — bug 2 (als je tijd over hebt)

Het totaal onderaan klopt niet. Zoek uit wanneer precies, schrijf opnieuw een
prompt met een reproductiepad, en laat de agent 'm oplossen.

Vage variant om te vermijden: *"het totaal klopt niet, fix dat"*. Probeer het
gerust eerst zo — je ziet de agent dan de prijsberekening herschrijven, die
prima in orde is.

## Terugzetten

```sh
git checkout -- workshops/01-prompting
```
