const http = require("http");

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    const htmlContent = `
    <html>
      <head>
        <title>Ejemplo de servidor web</title>
      </head>
      <body>
        <h1>Hola, estudiantes de desarrollo web!</h1>
        <p>Este es un ejemplo de servidor web HTTP.</p>
      </body>
    </html>
  `;

  // Enviar respuesta al cliente
  res.end(htmlContent);
});


server.listen(3000)
console.log("Servidor corriendo, OK!!");