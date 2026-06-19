# Nova — Template landing page (stile Awwwards)

Template di landing page per **prodotti / startup**, scritto in **HTML, CSS e JavaScript puro** (zero dipendenze, zero build). Pensato per essere personalizzato velocemente e rivenduto a clienti diversi.

## ✨ Caratteristiche
- Design moderno scuro con accenti gradient (stile Awwwards)
- Animazioni allo scroll, cursore personalizzato, loader iniziale
- Navbar che si nasconde/mostra, menu mobile
- Sezioni pronte: Hero, Marquee, Funzioni, Statistiche animate, Prezzi, Contatti
- Completamente responsive + rispetta `prefers-reduced-motion`

## 🚀 Come avviarlo in locale
Basta aprire `index.html` nel browser. Oppure, per un server locale:

```bash
python3 -m http.server 8000
# poi vai su http://localhost:8000
```

## 🎨 Come personalizzarlo per un cliente
Tutto si cambia in pochi minuti:

| Cosa cambiare | Dove |
|---|---|
| **Colori** | `css/style.css` → blocco `:root` (`--accent`, `--accent-2`, `--bg`) |
| **Nome / logo** | `index.html` → cerca `NOVA` |
| **Testi e contenuti** | direttamente in `index.html` |
| **Prezzi / piani** | sezione `.pricing` in `index.html` |
| **Font** | tag `<link>` di Google Fonts nell'`<head>` |

## 📁 Struttura
```
index.html      → contenuti e struttura
css/style.css   → stile e animazioni (personalizza i colori in :root)
js/main.js      → interazioni (cursore, scroll, contatori, form)
assets/         → immagini/loghi del cliente
```

## 💼 Note per la vendita
- Il form contatti è una **demo**: non invia email davvero. Per renderlo reale collega un servizio come [Formspree](https://formspree.io) o [Getform](https://getform.io) (basta cambiare l'`action` del form).
- Per pubblicare il sito di un cliente puoi usare hosting gratuito/economico: **Netlify**, **Vercel** o **GitHub Pages**.

---
Realizzato come base riutilizzabile per progetti di vendita siti web.
