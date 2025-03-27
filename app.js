const express = require('express');
const app = express();
const port = 3000;


// Array di post
const posts = [
  {
    titolo: "Ciambellone soffice",
    contenuto: "Un dolce semplice da colazione, morbido e profumato.",
    immagine: "/images/ciambellone.jpeg",
    tags: ["dolce", "colazione", "tradizione"]
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto: "Snack sfizioso, colorato e ricco di semi. Perfetto con formaggi freschi.",
    immagine: "/images/cracker_barbabietola.jpeg",
    tags: ["salato", "vegetariano", "barbabietola"]
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Ricetta anti-spreco golosa, perfetta da servire con zucchero e cannella.",
    immagine: "/images/pane_fritto_dolce.jpeg",
    tags: ["dolce", "frittura", "riciclo"]
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto: "Un primo piatto colorato, cremoso e originale.",
    immagine: "/images/pasta_barbabietola.jpeg",
    tags: ["primo", "barbabietola", "vegetariano"]
  },
  {
    titolo: "Torta paesana",
    contenuto: "Dolce della tradizione lombarda, ricco di pane raffermo, cacao e frutta secca.",
    immagine: "/images/torta_paesana.jpeg",
    tags: ["dolce", "tradizione", "pane"]
  }
];

// Rotta blog
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Rotta /bacheca
app.get('/bacheca', (req, res) => {
  res.json({ posts });
});


// Avvio server
app.listen(port, () => {
  console.log(`Blog server avviato su http://127.:${port}`);
});
