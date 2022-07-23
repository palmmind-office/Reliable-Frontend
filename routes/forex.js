const express = require('express');
const router = express.Router();
const forexController = require('../controller/forexController');

router.get('/:country', forexController.getForex);

module.exports = router;