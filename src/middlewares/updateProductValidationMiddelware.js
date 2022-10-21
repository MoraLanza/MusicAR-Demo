const { body } = require('express-validator');
const path = require('path');

const productValidationMiddleware = [
    
body('artist').notEmpty().withMessage('Debe ingresar un artista.').bail()
.isLength({min: 2}).withMessage('El artista debe tener un minimo de 2 caracteres.'),

body('description').notEmpty().withMessage('El evento debe tener una descripción.').bail()
.isLength({min: 100}),

body('linkYoutube').notEmpty().withMessage('El evento debe tener un video de muestra.').bail()
.matches(/(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/),

];

module.exports = productValidationMiddleware;