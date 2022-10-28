const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/productController');

router.get('/api/product', productController.productList);
router.get('/api/product/:id', productController.productDetail);


module.exports = router;