let express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/productController');

router.get('/productDetail/:id', productController.productDetail);

module.exports = productRouter;