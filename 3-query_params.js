const express = require('express');
const app = express();

app.get('/productos', (req, res) => {
  const categoria = req.query.categoria;
  const cantidad = req.query.cantidad;

  res.send('Catergoria consultada: ' + categoria + ' -- Cantidad disponible: ' + cantidad);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ok');
});
