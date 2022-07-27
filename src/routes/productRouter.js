let express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/product-detail', productController.productDetail);


module.exports = router;