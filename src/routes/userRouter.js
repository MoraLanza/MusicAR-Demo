let express = require('express');
const path = require('path');
const router = express.Router();

const userController = require('../controllers/userController');

// Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')
const multerUserMiddleware = require('../middlewares/multerUserMiddleware');
const registerValidationMiddleware = require('../middlewares/registerValidationMiddleware');


router.get('/shopping-cart', userController.cart);

router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);

router.get('/register', guestMiddleware, userController.register);
router.post('/register', multerUserMiddleware.single('imageUser'), registerValidationMiddleware, userController.store);

router.post('/logout', userController.logout)

module.exports = router;