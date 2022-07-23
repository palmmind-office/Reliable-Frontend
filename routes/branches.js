const express = require('express');
const router = express.Router();
const branchesController = require('../controller/branchesController');

router.get('/get-all-branches', branchesController.getAllBranches);

module.exports = router;