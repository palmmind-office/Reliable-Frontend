const fetch = require("node-fetch");
const leadsController = require("../controller/leadsController");
const express = require("express");
const router = express.Router();

router.post("/", leadsController.postLeads);

module.exports = router;