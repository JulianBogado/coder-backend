const express = require('express');
const productRoutes = require('./products/products.routes');

const router = express.Router();

router.use('/', productRoutes);

module.exports = router;