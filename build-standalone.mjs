import { readFileSync, writeFileSync } from 'fs';

const base = 'clienti/autotrasporti-mingardi-parzani/';
let html = readFileSync(base + 'index.html', 'utf8');
const css = readFileSync(base + 'css/style.css', 'utf8');
const js = readFileSync(base + 'js/main.js', 'utf8');

// Inline le immagini SVG come data URI
const imgs = ['hero', 'magazzino', 'lumezzane', 'rodengo'];
for (const name of imgs) {
  const svg = readFileSync(base + 'assets/' + name + '.svg', 'utf8');
  const dataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  html = html.replaceAll('assets/' + name + '.svg', dataUri);
}

// Inline CSS
html = html.replace('<link rel="stylesheet" href="css/style.css" />', '<style>\n' + css + '\n</style>');
// Inline JS
html = html.replace('<script src="js/main.js"></script>', '<script>\n' + js + '\n</script>');

writeFileSync('Autotrasporti-Mingardi-Parzani.html', html);
console.log('Creato file standalone:', (html.length / 1024).toFixed(1) + ' KB');
