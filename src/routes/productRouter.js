let express = require('express');
const path = require('path');

const router = express.Router();


const productController = require('../controllers/productController');

const multerProductMiddleware = require('../middlewares/multerProductMiddleware')



router.get('/all', productController.allProducts);

router.get('/detail/:id', productController.detail);

router.get('/create', productController.create);
router.post('/create',multerProductMiddleware.single('image'), productController.store);

router.get('/edit/:id', productController.edit);
router.put('/update/:id',multerProductMiddleware.single('image'), productController.update);        

router.delete('/delete/:id', productController.delete);


module.exports = router;