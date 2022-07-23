const express = require('express');
const router = express.Router();
const authController = require('../controller/chatAuthController');
const visitorController = require('../controller/visitorController');
const messageController = require('../controller/messageController');

router.post('/login', authController.login);
router.get('/visitors', visitorController.getVisitors);
router.get('/messages', messageController.getMessages);
router.get('/visitors/count', visitorController.getVisitorCount)

module.exports = router;