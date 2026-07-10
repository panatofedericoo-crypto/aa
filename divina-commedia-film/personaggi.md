# Personaggi — schede prompt

Queste schede servono a due cose:

1. **Generare le immagini di riferimento** di ogni personaggio (usa il prompt
   "ritratto" con Midjourney / Imagen / DALL·E, genera più varianti, scegli la
   migliore e salvala: sarà la reference ufficiale del personaggio).
2. **Essere incollate dentro i prompt video**: ogni microsezione in
   `inferno-canto-01.md` richiama i blocchi qui sotto con la sigla
   `[DANTE]`, `[VIRGILIO]`, ecc. Quando componi il prompt finale, sostituisci
   la sigla con il testo del blocco, **sempre identico, mai riscritto**.

---

## Blocco stile globale — `[STYLE]`

Da accodare a OGNI prompt video del progetto. È quello che dà al film un look
unico e riconoscibile (ispirazione: le incisioni di Gustave Doré portate in
live-action).

```
STYLE: live-action epic fantasy film, inspired by Gustave Doré's engravings of
the Divine Comedy. Muted desaturated color palette with deep blacks, pale
silver-grey light, occasional warm golden highlights. Volumetric god rays,
heavy atmospheric fog, chiaroscuro lighting like a Caravaggio painting.
Anamorphic 35mm film look, subtle film grain, shallow depth of field.
Medieval 14th century Italy, year 1300. Slow, solemn, dreamlike pacing.
No modern objects, no text, no subtitles.
```

---

## `[DANTE]` — Dante Alighieri, il protagonista

Uomo di 35 anni, il poeta smarrito. È il personaggio che appare in quasi ogni
scena: la sua coerenza visiva è la priorità assoluta del progetto.

```
DANTE: a 35-year-old Italian man with a long thin face, prominent aquiline
nose, strong jaw, dark brown eyes, clean-shaven. He wears a long crimson-red
medieval robe (lucco) reaching his ankles, with a white linen coif covering
his hair and ears, and a soft crimson cap with side flaps over it. Leather
medieval shoes. His expression is weary, frightened but dignified. Slender
build, upright posture.
```

**Prompt ritratto (per l'immagine di riferimento):**

```
Cinematic character portrait, medium shot. A 35-year-old Italian man with a
long thin face, prominent aquiline nose, strong jaw, dark brown eyes,
clean-shaven. He wears a long crimson-red medieval robe (lucco), a white
linen coif covering his hair and ears, and a soft crimson cap with side flaps.
Weary, frightened but dignified expression. Standing in a dark misty forest,
pale silver moonlight, volumetric fog. + [STYLE]
```

---

## `[VIRGILIO]` — Virgilio, la guida

Il poeta romano, morto da tredici secoli: un'ombra autorevole e serena.

```
VIRGIL: a dignified 70-year-old Roman man, short curly grey-white hair and a
short grey beard, deep-set calm eyes, weathered noble face. He wears a
flowing white-ivory Roman toga with a pale blue mantle draped over one
shoulder, and a laurel wreath crown on his head. His skin has a faint pale,
slightly ethereal ghost-like glow, as of a shade from the afterlife. Calm,
wise, fatherly expression. Tall and stately.
```

**Prompt ritratto:**

```
Cinematic character portrait, medium shot. A dignified 70-year-old Roman man,
short curly grey-white hair, short grey beard, deep-set calm eyes. Flowing
white-ivory Roman toga with a pale blue mantle over one shoulder, laurel
wreath crown. His skin faintly glows, pale and ethereal, like a ghost of the
afterlife. Calm fatherly expression. Emerging from darkness in a misty
wasteland, single shaft of pale light. + [STYLE]
```

---

## `[LONZA]` — La lonza (la prima fiera)

Simbolo della lussuria: agile, elegante, quasi ipnotica.

```
THE LEOPARD: a sleek supernatural leopard-like beast with a spotted golden
coat, unnaturally vivid rosette markings, long lithe body, glowing amber
eyes. It moves with light, dancing, restless agility, blocking the path,
circling. Beautiful and menacing at once, slightly larger than a real
leopard.
```

---

## `[LEONE]` — Il leone (la seconda fiera)

Simbolo della superbia: pura forza frontale.

```
THE LION: a massive supernatural lion with a huge dark mane, muscles rippling
under a tawny coat, head held high in terrifying pride. It advances head-on,
slowly, with rabid hunger, its roar makes the very air tremble. Twice the
size of a real lion, eyes burning pale gold.
```

---

## `[LUPA]` — La lupa (la terza fiera)

Simbolo dell'avarizia: magra, insaziabile, la più terribile delle tre.

```
THE SHE-WOLF: a gaunt, emaciated supernatural she-wolf, grey matted fur over
protruding ribs, sunken flanks, yet burning with insatiable hunger. Bared
yellow teeth, dripping jaws, eyes like embers. She is laden with cravings,
skeletal but terrifying, radiating dread. Larger than a real wolf.
```

---

## Nota sulla voce narrante

La narrazione è SEMPRE l'endecasillabo originale di Dante, in italiano.
Consiglio: una voce maschile profonda e calma (ElevenLabs o simili), ritmo
lento, leggero riverbero. La stessa voce per tutto il film = coerenza sonora,
che conta quanto quella visiva.
