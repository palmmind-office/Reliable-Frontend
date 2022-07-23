const express = require('express');
const router = express.Router();
const pushController = require('../controller/pushnotificationController');

router.post('/suscribe', pushController.poshNotification);

module.exports = router;