var fetch = require('node-fetch');
var url = `http://${process.env.LOGGER_HOST}:${process.env.LOGGER_PORT}/${process.env.LOGGER_URL}`;

/**
 * POST log file
 */
function postLog(visitorId, ip) {    
    let reqBody = {
        "botId": 'laxmi-bot',
        "visitorId": visitorId,
        "source": "web",
        "ip": ip,
        "context": "livechat"
    }    

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })    
}

module.exports = postLog;