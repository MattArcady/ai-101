# AI Training — reveal.js presentatie

Minimale setup: reveal.js komt via CDN, geen build of `node_modules` nodig.
De slides staan per hoofdstuk in losse markdown-bestanden in `slides/`.

## Bekijken

De hoofdstukken worden met `fetch` geladen, en dat blokkeert de browser op
`file://`. Start daarom een lokale server:

```sh
python3 -m http.server 8000   # daarna http://localhost:8000
```

Speaker view met notes: druk op `S`.

## Bestanden

- `index.html` — het "casco": titel, afsluiting en het inladen van de hoofdstukken
- `slides/*.md` — één markdown-bestand per hoofdstuk:

  | # | Bestand | Onderwerp |
  | --- | --- | --- |
  | 01 | `01-intro.md` | Wie ben ik, doel van de training |
  | 02 | `02-wat-is-ai.md` | LLM, tokenizer, context, reasoning, agents |
  | 03 | `03-modellen-en-kosten.md` | Modelkeuze, tokens = geld, effort |
  | 04 | `04-tooling.md` | Claude Code, sandboxing, validatie, skills, MCP |
  | 05 | `05-werkwijze.md` | Context sturen, `CLAUDE.md`, plan-first, sessie-hygiëne |
  | 06 | `06-veilig-werken.md` | Secrets, prompt injection, dependencies |
  | 07 | `07-workshop-mcp.md` | Workshop 1 — twee MCP's koppelen |
  | 08 | `08-workshop-ticket.md` | Workshop 2 — van ticket naar feature |
  | 09 | `09-workshop-skills.md` | Workshop 3 (bonus) — code-review skill met subagents |
  | 10 | `10-grenzen.md` | Wanneer niet, blijf leren, maandag-acties |

- `workshops/tourplanner/` — de oefen-codebase voor beide workshops: een kleine
  React-app, plus een lokale MCP-server (`tools/tour-mcp/`), een skelet voor de
  code-review skill (`.claude/skills/`) en de reviewpatch voor workshop 3
  (`workshop-3/`). De opdrachten en antwoorden staan in de slides, niet in het
  project — de agent leest daar mee.
- `custom.css` — Arcady-huisstijl bovenop het thema
- `assets/` — logo, mark en de ruimte-achtergrond

## Huisstijl

De styling is overgenomen uit `Arcady PPT klanten Momentum.pptx`:

- Brandgroen `#00A667` op een donkere achtergrond, witte tekst (Helvetica Neue).
- **Links uitgelijnd**, grote bold koppen — geen gecentreerde tekst.
- Kleine groene **eyebrow** (`<p class="eyebrow">`) boven elke titel.
- **Vet** in markdown wordt groen (keyword-accent, zoals op de PPT-cover).
- **Alleen de titelslide** gebruikt de starry-night-achtergrond (`assets/bg-space.jpg`).
- **Hoofdstuk-scheidingsslides en de slotslide** (`class="divider"`) gebruiken de
  ijsbeer-template: donkere achtergrond met de ijsbeer rechtsonder
  (`assets/polar-bear.png`), titel + agenda links.
- Content-slides zijn effen donker.
- Het Arcady-logo staat vast linksboven, de mark rechtsonder (zie `index.html`).

### Momentum-strepen

De groene accentlijnen uit de PPT. Sporadisch inzetten — niet elke slide hoeft er
een. Plaats ze handmatig in een `.md`-slide en tune de positie op de content:

```html
<div class="momentum" style="--x:-2%; --y:6%; --len:340px"></div>
<div class="momentum" style="--x:60%; --y:2%; --len:150px"></div>
```

Variabelen (allemaal optioneel): `--x`/`--y` = positie t.o.v. het contentblok
(`--x` is % van de slidebreedte; negatief laat 'm van de rand af bloeden),
`--len` = lengte, `--thick` = dikte (default 4px = de 4pt-lijn uit de PPT),
`--rot` = hoek (default 0°, horizontaal zoals in de PPT). Zet meerdere `<div
class="momentum">` neer voor meerdere strepen. Voorbeeld staat op de intro-divider
(`slides/01-intro.md`).

### "Wie ben ik" — foto's vervangen

Die slide is een fotocollage (zoals "Even voorstellen" in de PPT) met 4 foto's:
`assets/matt-1..4.jpg`. Vervangen? Overschrijf de bestanden of pas de `src` aan
in `slides/01-intro.md` (jpg/png mag). Posities in de collage: `matt-1` groot
links, `matt-2` en `matt-3` rechtsboven, `matt-4` breed onderaan. De foto's
worden bijgesneden met `object-fit: cover`, dus verhoudingen luisteren niet nauw.
De originelen staan in `assets/matt/`.

## Slides bewerken

Open het juiste bestand in `slides/`. Binnen een bestand:

- `---` op een eigen regel (met lege regels eromheen) = nieuwe **sub-slide**
  (verticale stack; pijl omlaag).
- Een regel die begint met `Note:` = **speakernotes** voor die slide.
- Een bullet één-voor-één laten verschijnen:
  `- tekst <!-- .element: class="fragment" -->`

Elk `.md`-bestand is één verticale stack; navigeren met `→` gaat naar het
volgende hoofdstuk, `↓` gaat door de sub-slides.

## Hoofdstuk toevoegen

1. Maak een nieuw bestand, bijv. `slides/11-afronding.md`.
2. Voeg in `index.html` een `<section data-markdown="slides/11-afronding.md" …>`
   toe (kopieer een bestaande met dezelfde `data-separator`-attributen).

De volgorde in `index.html` bepaalt de volgorde in de presentatie; de nummers
in de bestandsnamen zijn alleen voor het overzicht. Zet een nieuw hoofdstuk
ertussen? Hernoem dan ook de volgende bestanden en pas het `Hoofdstuk NN`-label
in de eyebrow van de divider-slide aan.

## Handige toetsen

| Toets | Actie |
| --- | --- |
| `→` / `←` | volgende / vorige hoofdstuk |
| `↓` / `↑` | binnen een verticale stack |
| `Esc` / `O` | overzicht van alle slides |
| `S` | speaker view met notes |
| `F` | fullscreen |
| `B` | zwart scherm (pauze) |
| `?` | alle shortcuts |

Thema wisselen: pas de `theme/black.css` link in `index.html` aan naar bijv.
`white.css`, `league.css`, `night.css`, `moon.css`, `solarized.css`, `dracula.css`.
