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

const validator = [
    body('name').notEmpty()
    .isLength({min: 2}).withMessage('Debe ingresar un nombre'),

    body('lastName').notEmpty()
    .isLength({ min: 2 }).withMessage('Debe seleccionar un apellido'),

    body('email').notEmpty()
    .isEmail().withMessage('Debe ingresar un email valido.'),

    body('username').notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({min: 5, max: 16}).withMessage('El nombre de usuario debe tener mínimo 5 caracteres, máximo 16.'),

    body('password').notEmpty().withMessage('Debe ingresar una contraseña')
    .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),

    body
];

router.get('/shopping-cart', userController.cart);
router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', upload.single('imageUser'), userController.store);

module.exports = router;