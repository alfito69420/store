const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find().populate('category')
        res.send(products)
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;