var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const keys = require('../config/keys');
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;

/* GET users listing. */

router.get('/post',function(req,res){
  let url = `${baseUrl}/${keys.BASEPATH}/Users/liveChat`;
  console.log("error");
  let responseHeader = {};
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": req.headers.accesstoken
    }
  })
    .then(data => {
      responseHeader.statusCode = data.status;
      responseHeader.status = data.ok;
      responseHeader.text = data.statusText;
      return data.json();
    })
    .then(data => {
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        data: data
      });
    })
    .catch(err => {
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        error: err
      });
    });
});

router.get('/:id', function(req, res, next) {
  let url = `${baseUrl}/${keys.BASEPATH}/Users/${req.params.id}`;
  let responseHeader = {};
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": req.headers.accesstoken
    }
  })
    .then(data => {
      responseHeader.statusCode = data.status;
      responseHeader.status = data.ok;
      responseHeader.text = data.statusText;
      return data.json();
    })
    .then(data => {
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        data: data
      });
    })
    .catch(err => {
      res.status(responseHeader.statusCode).json({
        header: responseHeader,
        error: err
      });
    });
});


module.exports = router;
