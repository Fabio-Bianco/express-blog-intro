const express = require('express');
const app = express();
const port = 3000;


// Avvio server
app.listen(port, () => {
  console.log(`Blog server avviato su http://localhost:${port}`);
});
