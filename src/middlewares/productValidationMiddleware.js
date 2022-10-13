const { body } = require('express-validator');
const path = require('path');

const productValidationMiddleware = [
    
body('artist').notEmpty().withMessage('Debe ingresar un artista.').bail()
.isLength({min: 5}).withMessage('El artista debe tener un minimo de 5 caracteres.'),

body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpge', '.png'];
    
    if (!file) {
        throw new Error('Debe subir una imagen de perfil.')
    } else {
        let fileExtension = path.extname(file.originalname);
    if (!acceptedExtensions.includes(fileExtension)){
        throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
        }
    } 
    return true;
}),
body('date[]').notEmpty().withMessage('Debe elegir una fecha de función.').bail(),

body('time[]').notEmpty().withMessage('Debe darle un horario para la función').bail(),

body('durationTime[]').notEmpty().withMessage('Debe darle una duración a la función.').bail(),

body('ticketType1[]').notEmpty().withMessage('El ticket debe tener un nombre.').bail()
.isLength({min: 5}),

body('price1[]').notEmpty().withMessage('El ticket debe tener un precio.').bail()
.isNumeric().isLength({min: 1000}),

body('lot1').notEmpty().withMessage('Debe haber una cantidad de tickets.').bail()
.isNumeric().isLength({min: 20}),

body('ticketType2[]').optional({nullable: true}).custom((value, { req }) => {
    let price2 = req.body.price2;
    let lot2 = req.body.lot2;

    if(price2 && lot2 && value){
       return true;
    }
    return false;
})
.withMessage('El ticket debe tener un nombre.'),

body('description').notEmpty().withMessage('El evento debe tener una descripción.').bail()
.isLength({min: 100}),

body.apply('linkYoutube').notEmpty().withMessage('El evento debe tener un video de muestra.')

];

module.exports = productValidationMiddleware;