import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.send('Holaa')
})

app.listen(8080, ()=>{
    console.log("Servidor escuchando en puerto 8080")
})