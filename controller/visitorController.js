const fetch = require("node-fetch");
const keys = require("../config/keys");
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;

exports.getVisitors = function(req, res, next) {
  let url = `${baseUrl}/${keys.BASEPATH}/visitors/source?organizationId=${keys.ORGANIZATION_ID}&source=${req.query.source}&duration=${req.query.duration}&filter={"page":${req.query.start}}&access_token=${req.query.accessToken}`;
  let responseHeader = {};
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      responseHeader.statusCode = data.status;
      responseHeader.status = data.ok;
      responseHeader.text = data.statusText;
      return data.json();
    })
    .then(data => {
      console.log("response data", data);
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
};

exports.getVisitorCount = function(req, res, next) {
  let url = `${baseUrl}/visitors/count?`;
  if (req.query.hasOwnProperty("start-date")) {
    url += `&lastactivity_gte=${req.query["start-date"]}`;
  }
  if (req.query.hasOwnProperty("end-date")) {
    url += `&lastactivity_lte=${req.query["end-date"]}`;
  }

  let responseHeader = {};
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.headers.bearer}`
    }
  })
    .then(data => {
      responseHeader.statusCode = data.status;
      responseHeader.status = data.ok;
      responseHeader.text = data.statusText;
      return data.json();
    })
    .then(data => {
      return res.status(responseHeader.statusCode).json({
        header: responseHeader,
        data: data
      });
    })
    .catch(err => {
      return res.status(responseHeader.statusCode).json({
        header: responseHeader,
        error: err
      });
    });
};
