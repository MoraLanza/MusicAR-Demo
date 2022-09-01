let express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware')

const productController = require('../controllers/productController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/image/products'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});


const upload = multer ({storage});



router.get('/all', authMiddleware, productController.allProducts);

router.get('/detail/:id', productController.detail);

router.get('/create', authMiddleware, productController.create);
router.post('/create',upload.single('image'), productController.store);

router.get('/edit/:id', authMiddleware, productController.edit);
router.put('/update/:id',upload.single('image'), productController.update);        

router.delete('/delete/:id', authMiddleware, productController.delete);


module.exports = router;