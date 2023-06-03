const http = require("http");

const server = http.createServer((req,res)=>{
    const user = {
        nombre: "Nombre Apellido",
        correo: "Nombre.Apellido@epn.edu.ec",
        edad: 21,
        pais: "Ecuador",
        isAdmin: true
    };
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end()
})

server.listen(3000)
console.log("Servidor corriendo, OK!!");