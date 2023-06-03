const express = require('express')
const {engine} = require("express-handlebars")  // Trae el motor de plantillas
const path = require('path')

const app = express()
app.engine('.hbs', engine({
    extname: '.hbs' // Extension a usar
}))
// Rutas
app.set('view engine', '.hbs');
app.set('views', /*'./views'*/ path.join(__dirname, 'views'));

app.get('/',(request,response)=>{
    response.render('home')
})
app.get('/login', (request, response) =>{
    response.render('login')
})
app.get('/personal', (request, response) =>{
    response.render('personal')
})


app.listen(3000)
console.log('Servidor OK');

