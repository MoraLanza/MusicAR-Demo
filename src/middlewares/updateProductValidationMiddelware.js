const { body } = require('express-validator');
const path = require('path');

const productValidationMiddleware = [
    
body('artist').notEmpty().withMessage('Debe ingresar un artista.').bail()
.isLength({min: 2}).withMessage('El artista debe tener un minimo de 2 caracteres.'),

// body('image').custom((value, { req }) => {
//     let file = req.file;
//     let acceptedExtensions = ['.jpg', '.jpge', '.png'];
    
//     if (!file) {
//         throw new Error('Debe subir una imagen de perfil.')
//     } else {
//         let fileExtension = path.extname(file.originalname);
//     if (!acceptedExtensions.includes(fileExtension)){
//         throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
//         }
//     } 
//     return true;
// }),

body('description').notEmpty().withMessage('El evento debe tener una descripción.').bail()
.isLength({min: 100}),

body('linkYoutube').notEmpty().withMessage('El evento debe tener un video de muestra.')

];

module.exports = productValidationMiddleware;