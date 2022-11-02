const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/apiUserController');

router.get('/users', apiUserController.usersList);
router.get('/users/:id', apiUserController.userDetail);


module.exports = router;