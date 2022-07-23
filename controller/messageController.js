const fetch = require('node-fetch');
const keys = require('../config/keys');
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;

exports.getMessages = function (req, res, next) {
    let url = `${baseUrl}/${keys.BASEPATH}/visitors/${req.query.user_id}/messages?filter={"page":${req.query.start}}&access_token=${req.headers.accesstoken}`;
    let responseHeader = {};
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => {
            responseHeader.statusCode = data.status;
            responseHeader.status = data.ok;
            responseHeader.text = data.statusText;
            return data.json();
        })
        .then((data) => {
            res.status(responseHeader.statusCode).json({
                header: responseHeader,
                data: data
            })
        })
        .catch((err) => {
            res.status(responseHeader.statusCode).json({
                header: responseHeader,
                error: err
            })
        })
}