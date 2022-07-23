const fetch = require("node-fetch");
const keys = require('../config/keys');
const url = `http://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}/rest/v1/Organizations/${keys.ORGANIZATION_ID}/leads`;

exports.postLeads = async function(req, res, next) {
  // console.log(req.body)
  try{
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${keys.BOT_TOKEN}`
      },
      body: JSON.stringify(req.body)
    })
    const data = await response.json();
    res.status(200).json(data);
  }
  catch(err){
    // console.log(err)
    res.status(500).json(err);
  }
};
