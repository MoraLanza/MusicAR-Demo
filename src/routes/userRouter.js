let express = require('express');
const multer = require('multer');
const path = require('path');
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
    body('name').notEmpty().withMessage('Debe ingresar un nombre.').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener un minimo de 2 letras.'),

    body('lastName').notEmpty().withMessage('Debe ingresar un apellido.').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener un minimo de 2 letras.'),

    body('email').notEmpty().withMessage('Debe ingresar un e-mail.').bail()
    .isEmail().withMessage('Debe ingresar un email valido.'),

    body('username').notEmpty().withMessage('Debe ingresar un nombre de usuario.').bail()
    .isLength({min: 5, max: 16}).withMessage('El nombre de usuario debe tener mínimo 5 caracteres, máximo 16.'),

    body('password').notEmpty().withMessage('Debe ingresar una contraseña.').bail()
    .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),

    body('imageUser').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if (!file) {
            throw new Error('Debe subir una imagen de perfil.')
        } else {
            let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)){
            throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
            }
        }  

        return true;
    })

];

router.get('/shopping-cart', userController.cart);


router.get('/login', userController.login);

router.post('/login', userController.loginProcess);


router.get('/register', userController.register);

router.post('/register', upload.single('imageUser'), validations, userController.store);

module.exports = router;