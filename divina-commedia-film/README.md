# Divina Commedia — Il Film (progetto AI)

Adattamento video parola-per-parola della *Divina Commedia* di Dante Alighieri,
generato con strumenti di intelligenza artificiale. L'opera è di pubblico
dominio: nessun problema di diritti sul testo originale.

## Il metodo

Ogni canto viene scomposto in **microsezioni** di pochi versi. Ogni
microsezione produce una clip video di 5–10 secondi, poi estesa e montata in
sequenza. La narrazione audio è il testo originale di Dante, letto sopra le
immagini: è questo che garantisce la fedeltà assoluta al libro.

Pipeline per ogni microsezione:

1. **Versi originali** → sono la voce narrante della clip (TTS o voce umana).
2. **Prompt video** (in inglese, i modelli rendono meglio) → da incollare in
   Veo / Sora / Runway / Kling.
3. **Blocco personaggi** → ogni prompt che contiene un personaggio include la
   sua scheda da `personaggi.md`, sempre identica, per mantenere la coerenza
   visiva tra le clip.
4. Generazione → estensione della clip → montaggio → narrazione + musica.

## Coerenza visiva: le due regole d'oro

1. **Genera prima le immagini di riferimento dei personaggi** con i prompt in
   `personaggi.md`, scegli la versione migliore di ciascuno e usala come
   *image reference* in ogni generazione video che lo include (quasi tutti i
   tool lo supportano: "ingredients" su Veo, reference su Kling/Runway).
2. **Non riscrivere mai le descrizioni**: copia-incolla sempre lo stesso
   blocco STYLE e lo stesso blocco personaggio, parola per parola.

## File

| File | Contenuto |
|---|---|
| `personaggi.md` | Schede-prompt dei personaggi (Dante, Virgilio, le tre fiere) e blocco stile globale |
| `inferno-canto-01.md` | Canto I scomposto in microsezioni con versi + prompt video |

## Stato

- [x] Canto I — Inferno (la selva oscura, le tre fiere, Virgilio)
- [ ] Canto II — Inferno
- [ ] ...
