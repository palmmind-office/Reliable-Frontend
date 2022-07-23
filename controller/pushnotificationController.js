
const fetch = require("node-fetch");
const keys = require('../config/keys');
const url = `http://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}/rest/v1/visitors/registration?userId=${keys.userId}`;

exports.poshNotification = function(req, res, next) {
    console.log('push body',req.body);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: keys.BOT_TOKEN
      },
      body: JSON.stringify({
        registration_id:req.body.ragistration_token
      })
    })
      .then(res => res.json())
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(err => {
        console.log('not posted');
        return false
      });
 
};
