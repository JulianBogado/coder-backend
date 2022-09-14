
const express = require('express');
const Products = require('../../data/desafio2');

let products = new Products('data/productos.json');

const route = express.Router();

// Traer todos los productos
route.get('/', async (req, res) => {
    const data = await products.getAll();
    res.json(data);
});

// Traer un producto por id
route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.getById(+id);
    res.json(product);
    if (!product) {
        res.status(404).json({ error: `Producto con ${id} no encontrado` });
    }
});

// Crear un producto
route.post('/', async (req, res) => {
    const { title, price, thumbnail } = req.body;
    if (!title || !price || !thumbnail) {
        res.status(400).json({error: 'Faltan datos' });
    }

    const newProduct = await products.save({
        id: products.length + 1,
        title,
        price,
        thumbnail
    });

    res.json({
        status: 'Producto agregado',
        result: `Se agrego el producto ${title} con id ${newProduct}`
    });
    console.log(products);
});


//Modificar producto por id
route.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;
    const product = await products.getById(+id);
    if (!product) {
        res.status(404).json({ error: `Producto con ${id} no encontrado` });
    }
    if (!title || !price || !thumbnail) {
        res.status(400).json({error: 'Faltan datos' });
    }
    const productoActualizado = await products.saveModified({
        id: +id,
        title,
        price,
        thumbnail
    });
    res.json({
        status: 'Producto actualizado',
        result: `Se actualizo el producto ${title} con id ${productoActualizado}`
    });
});

//Eliminar producto por id
route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.deleteById(+id);

    if (product) {
        res.json(`Se elimino el producto con id ${id}`);        
    } else{
        res.status(404).json({ error: `Producto con id ${id} no encontrado` });
    }
})

module.exports = route;