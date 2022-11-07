const { body } = require('express-validator');
const path = require('path');

const updateUserValidationMiddleware = [
    body('name').notEmpty().withMessage('Debe ingresar un nombre.').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener un minimo de 2 letras.'),

    body('lastName').notEmpty().withMessage('Debe ingresar un apellido.').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener un minimo de 2 letras.'),

    body('email').notEmpty().withMessage('Debe ingresar un e-mail.').bail()
    .isEmail().withMessage('Debe ingresar un email valido.')


   
    
];

module.exports = updateUserValidationMiddleware;