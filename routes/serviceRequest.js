const express = require('express');
const router = express.Router();
const serviceRequest = require('../controller/serviceRequestController');
const upload = require('../middleware/upload');

// router.post('/postData', serviceRequest.postData);
router.post('/verifyOtp', serviceRequest.verifyOtp);
router.post('/submitData', serviceRequest.submitDataAndSendOtp);
router.get('/getAcntDetail', serviceRequest.protect, serviceRequest.getAccountDetail);
router.post('/card/newCard', serviceRequest.onlineServiceRequest);
router.post('/card/block',serviceRequest.blockCard);
router.post('/card/repin',serviceRequest.cardRepinEntry);
router.post('/card/disputeClaim', serviceRequest.disputeClaim);
router.post('/card/test', serviceRequest.testCcms);
router.get('/card/terminal', serviceRequest.getTerminal);

//services
router.get('/service/:type', serviceRequest.getServiceData);
router.post('/service/:type',upload, serviceRequest.postServiceData);

module.exports = router;