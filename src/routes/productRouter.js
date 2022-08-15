let express = require('express');
const multer = require('multer');
const mainController = require('../controllers/mainController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer ({storage});

const productController = require('../controllers/productController');

router.get('/all', productController.allProducts);

router.get('/detail/:id', productController.detail);

router.get('/create', productController.create);
router.post('/create',upload.single('image'), productController.store);

router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);

router.delete('/:id/delete', productController.delete);


module.exports = router;