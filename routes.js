var express = require("express");
var path = require("path");
let router = express.Router();

var indexRouter = require("./routes/index");
var locationRouter = require('./routes/location');
var usersRouter = require("./routes/users");
const getOrganization = require("./routes/getorganization");
var chatHistoryRouter = require("./routes/chatHistory");
var leadsRouter = require("./routes/leads");
var pushnotificationrouter = require("./routes/pushnotification.dashboard");
const forexRouter = require("./routes/forex");
const feedbackRouter = require("./routes/feedback");
const complaintRouter = require("./routes/complaints");
const branchRouter = require("./routes/branches");
const serviceRequestRouter = require("./routes/serviceRequest");
const test=require("./routes/test");

router.use("/", indexRouter);
router.use('/rest/v1/location', locationRouter);
router.use('/rest/v1/forex', forexRouter);
router.use("/rest/v1/users", usersRouter);
router.use("/rest/v1/chat", chatHistoryRouter);
router.use("/rest/v1/leads", leadsRouter);
router.use("/rest/v1/Organization", getOrganization);
router.use("/rest/v1/pushnotification",pushnotificationrouter);
router.use("/rest/v1/feedback",feedbackRouter)
router.use("/rest/v1/complaints",complaintRouter)
router.use("/rest/v1/serviceRequest",serviceRequestRouter)
router.use("/rest/v1/branches",branchRouter)
router.use("/rest/v1/test",test)

router.use("/bot", express.static(path.join(__dirname)));
router.use("/chat", express.static(path.join(__dirname, "public", "chatHistory", "loginTemplate")));
router.use("/pushNotification", express.static(path.join(__dirname, "public", "pushNotification", "push")));
router.use("/chat/converse", express.static(path.join(__dirname, "public", "chatHistory", "chatTemplate")));


module.exports = router;