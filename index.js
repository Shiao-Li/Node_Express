const express = require('express');
const app = express();

const miMiddleware = (req, res, next) => {
  console.log('Middleware ejecutado');
  next();
};

app.use(miMiddleware);

app.get('/', (req, res) => {
  res.send('Hola a todos');
});

app.listen(3000, () => {
  console.log('Servidor Ok');
});
