const { body } = require('express-validator');
const path = require('path');

const updateNewPasswordValidationMiddleware = [
    body('newPassword').notEmpty().withMessage('Debe ingresar una contraseña.').bail()
    .isLength({min: 8, max: 16}).withMessage('La contraseña debe tener mínimo 8 caracteres, máximo 16.'),

    body("confirmPassword").notEmpty().withMessage("Este campo no puede estar vacío.").bail()
    .custom((value, { req }) => {
      if (value === req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage("Las contraseñas no coinciden."),
    
]
module.exports = updateNewPasswordValidationMiddleware;