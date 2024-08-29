const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//create a new produt
router.post('/products', productController.createProduct);

module.exports = router;