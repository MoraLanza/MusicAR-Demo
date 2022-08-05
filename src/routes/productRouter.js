let express = require('express');
const multer = require('multer');
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

router.get('/', productController.index)

router.get('/detail', productController.detail);

router.get('/create', productController.create);
router.post('/create',upload.single('image'), productController.store);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit', productController.update);

router.delete('/:id/delete', productController.delete);


module.exports = router;