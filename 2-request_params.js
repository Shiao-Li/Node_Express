const express = require('express');
const app = express();

app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;

  if (isNaN(userId) || !Number.isInteger(Number(userId))) {
    res.status(400).send('El ID de usuario debe ser un número entero');
    return;
  }

  res.send(`ID de usuario: ${userId}`);
});

app.get('/nombre/:nombre/edad/:edad',(req,res)=>{
    res.send(`El nombre del usuario es: ${req.params.nombre} y su edad es: ${req.params.edad}`)
})

app.listen(3000, () => {
  console.log('Servidor ok');
});
