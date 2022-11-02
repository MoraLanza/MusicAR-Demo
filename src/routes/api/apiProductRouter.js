const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/apiProductController');

router.get('/products', apiProductController.eventsList);
router.get('/products/:id', apiProductController.eventDetail);


module.exports = router;