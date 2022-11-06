const express = require('express');
const router = express.Router();
const apiCategoryController = require('../../controllers/api/apiCategoryController');

router.get('/categories', apiCategoryController.categoriesList);
// router.get('/categories/:id', apiCategoryController.categoryDetail);


module.exports = router;