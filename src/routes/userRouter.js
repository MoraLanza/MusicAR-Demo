let express = require('express');
const multer = require('multer');
const { body } = require('express-validator');

const userController = require('../controllers/userController');

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

const validations = [
    body('name').notEmpty().withMessage('Debe ingresar un nombre.')
    .isLength({min: 2}).withMessage('El nombre debe tener un minimo de 2 letras.'),

    body('lastName').notEmpty().withMessage('Debe ingresar un apellido.')
    .isLength({ min: 2 }).withMessage('El apellido debe tener un minimo de 2 letras.'),

    body('email').notEmpty().withMessage('Debe ingresar un e-mail.')
    .isEmail().withMessage('Debe ingresar un email valido.'),

    body('username').notEmpty().withMessage('Debe ingresar un nombre de usuario.')
    .isLength({min: 5, max: 16}).withMessage('El nombre de usuario debe tener mínimo 5 caracteres, máximo 16.'),

    body('password').notEmpty().withMessage('Debe ingresar una contraseña.')
    .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),

];

router.get('/shopping-cart', userController.cart);
router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', upload.single('imageUser'), validations, userController.store);

module.exports = router;