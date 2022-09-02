let express = require('express');
const path = require('path');


const userController = require('../controllers/userController');

const multerUserMiddleware = require('../middlewares/multerUserMiddleware');
const registerValidationMiddleware = require('../middlewares/registerValidationMiddleware');


const router = express.Router();



router.get('/shopping-cart', userController.cart);

router.get('/login', userController.login);
router.post('/login', userController.loginProcess);

router.get('/register', userController.register);
router.post('/register', multerUserMiddleware.single('imageUser'), registerValidationMiddleware, userController.store);

module.exports = router;