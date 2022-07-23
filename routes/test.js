const express = require('express');
const {checkOtp,submitData, verifyOtp, disputeHandling, crnForm, postcrn } = require('../controller/testController');
const router = express.Router();


router.post('/',submitData);
router.post('/otp',verifyOtp)
router.post('/checkotp',checkOtp)
router.post('/dispute',disputeHandling)
router.get('/crn',crnForm)
router.post('/crnrequest',postcrn)


module.exports = router;