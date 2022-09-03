let express = require('express');
const path = require('path');


const userController = require('../controllers/userController');

// Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')


const multerUserMiddleware = require('../middlewares/multerUserMiddleware');
const registerValidationMiddleware = require('../middlewares/registerValidationMiddleware');


const router = express.Router();

    body('password').notEmpty().withMessage('Debe ingresar una contraseña.').bail()
    .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),


router.get('/shopping-cart', userController.cart);


router.get('/login', guestMiddleware, userController.login);

router.post('/login', userController.loginProcess);

router.get('/register', guestMiddleware, userController.register);
router.post('/register', multerUserMiddleware.single('imageUser'), registerValidationMiddleware, userController.store);

module.exports = router;