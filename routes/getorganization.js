var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const keys = require('../config/keys');
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;

/* GET users listing. */

router.get('/',function(req,res){
  let url = `${baseUrl}/${keys.BASEPATH}/Organizations/${keys.ORGANIZATION_ID}`;
  console.log("error");
  let responseHeader = {};
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": keys.BOT_TOKEN
    }
  })
    .then(data => {
      // console.log(data, "data while getting organization");
      responseHeader.statusCode = data.status;
      responseHeader.status = data.ok;
      responseHeader.text = data.statusText;
      return data.json();
    })
    .then(data => {
      console.log("GEtting organization data", data);
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        data: data
      });
    })
    .catch(err => {
      // console.log("ERRRORRRR!!!!!!!")
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        error: err
      });
    });
});


module.exports = router;
