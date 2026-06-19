# Autotrasporti Mingardi & Parzani — Sito vetrina

Sito vetrina elegante (stile boutique/hotel di charme) per **Autotrasporti Mingardi & Parzani di Mingardi & Parzani srl**, azienda di logistica e trasporto nazionale fondata nel **1963**, con sedi a **Lumezzane** e **Rodengo Saiano** (Brescia).

Realizzato in **HTML, CSS e JavaScript puro** — nessuna dipendenza, nessun build.

## 🚀 Avvio in locale
Apri `index.html` nel browser, oppure:
```bash
python3 -m http.server 8000
# poi vai su http://localhost:8000/clienti/autotrasporti-mingardi-parzani/
```

## 🖼️ IMPORTANTE — Immagini
Le foto attuali sono **segnaposto** prese da `picsum.photos` (richiedono connessione internet) e servono solo a mostrare l'effetto al cliente.
**Prima della consegna vanno sostituite con foto reali** dei camion, dei magazzini e delle sedi:

1. Metti le foto del cliente nella cartella `assets/` (es. `assets/hero.jpg`, `assets/lumezzane.jpg`...).
2. In `index.html` sostituisci gli URL `https://picsum.photos/...` con i percorsi locali, es. `assets/hero.jpg`.

## 🎨 Personalizzazione
| Cosa | Dove |
|---|---|
| Colori (oro, avorio, antracite) | `css/style.css` → blocco `:root` |
| Testi e contenuti | `index.html` |
| Numero di telefono | cerca `0306119791` in `index.html` |
| Font | tag `<link>` Google Fonts nell'`<head>` |

## 📞 Dati azienda inseriti
- Fondazione: **1963**
- Settore: logistica e trasporto nazionale
- Sedi: **Lumezzane** e **Rodengo Saiano** (provincia di Brescia)
- Magazzini con sorveglianza 24h, telecamere e impianti d'allarme
- Telefono sede operativa: **030 611 9791**

## 📁 Struttura
```
index.html      → contenuti e struttura
css/style.css   → stile e animazioni
js/main.js      → interazioni (loader, scroll, contatori)
assets/         → qui le foto reali del cliente
```

## ✅ Prima di pubblicare (checklist)
- [ ] Sostituire le immagini segnaposto con foto reali
- [ ] Aggiungere indirizzi completi delle due sedi
- [ ] (Opzionale) aggiungere mappa Google, email, P.IVA nel footer
- [ ] Verificare il sito su mobile
- [ ] Pubblicare su Netlify / Vercel / GitHub Pages
