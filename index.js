const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Landing page - Grupo # 3")
})

app.get('/integrantes', (req, res) => {
    res.json([
        {
            "nombre": "Roberto",
            "apellido": "Shiao",
            "edad": 21
        },
        {
            "nombre": "Elvis",
            "apellido": "Guanoluisa",
            "edad": 23
        },
        {
            "nombre": "Alexis",
            "apellido": "Chasi",
            "edad": 27
        }, 
        {
            "nombre": "Franklin",
            "apellido": "Patiño",
            "edad": 21
        },

    ])
})

app.get('/products', (req, res) => {
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})



app.listen(PORT, () => {
    console.log(`Servidor ok en el puerto ${PORT}`);
});

