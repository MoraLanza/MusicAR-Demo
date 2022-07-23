let express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

router.get('/carrito/:id', userController.carrito);
router.get('/contacto/:id', userController.contacto);
router.get('/faq/:id', userController.faq);
router.get('/login/:id', userController.login);
router.get('/registro/:id', userController.registro);

module.exports = userRouter;