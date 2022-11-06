const { body } = require('express-validator');
const path = require('path');

const updateUserValidationMiddleware = [
    body('name').notEmpty().withMessage('Debe ingresar un nombre.').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener un minimo de 2 letras.'),

    body('lastName').notEmpty().withMessage('Debe ingresar un apellido.').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener un minimo de 2 letras.'),

    body('email').notEmpty().withMessage('Debe ingresar un e-mail.').bail()
    .isEmail().withMessage('Debe ingresar un email valido.'),

    // body('newPassword').notEmpty().withMessage('Debe ingresar una contraseña.').bail()
    // .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),

    // body("confirmPassword").notEmpty().withMessage("Este campo no puede estar vacío.").bail()
    // .custom((value, { req }) => {
    //   if (value === req.body.password) {
    //     return true;
    //   }
    //   return false;
    // })
    // .withMessage("Las contraseñas no coinciden."),

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

module.exports = updateUserValidationMiddleware;