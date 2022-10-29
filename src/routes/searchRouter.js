let express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/events', searchController.searchBar);
module.exports = router;