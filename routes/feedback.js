const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');

router.post('/', feedbackController.create);

module.exports = router;