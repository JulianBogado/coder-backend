const express = require('express');
const PORT = process.env.PORT || 8080;
const Contenedor = require('./desafio2')
let contenedor1 = new Contenedor('./productos.txt')

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido !');
});

//Traer todos los productos

app.get('/productos', async (req, res) => {
    const productos = await contenedor1.getAll();
    res.send(productos);
});
//Get random product

app.get('/productosRandom', async (req, res) => {
    const productoRandom = await contenedor1.getRandom();
    res.send(productoRandom);
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

connectedServer.on('error', (err) => {
    console.log(err.message);
    });