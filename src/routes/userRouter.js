let express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/carrito', userController.carrito);
router.get('/login', userController.login);
router.get('/registro', userController.registro);

module.exports = router;