const express = require('express')
const app = express()

app.use(express.json())

app.post('/product',(req,res)=>{
    const {nombre,apellido, edad, ciudad} = req.body
    res.send(`Los datos del usuario son: \n${nombre} ${apellido}\n${edad}\n${ciudad}`)
})

app.listen(3000)
console.log('Servidor ok')