let express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/image/users'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});


const upload = multer ({storage});

const userController = require('../controllers/userController');

router.get('/shopping-cart', userController.cart);
router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', upload.single('image-user'), userController.store);

module.exports = router;