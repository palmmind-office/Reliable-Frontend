const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationController');

router.post('/type/', locationController.getNearbyLocation);
router.get('/search/', locationController.getDataByLocation);


module.exports = router;