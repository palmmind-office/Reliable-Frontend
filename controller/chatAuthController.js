const fetch = require('node-fetch');
const keys = require('../config/keys');
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;

exports.login = function (req, res, next) {
    let url = `${baseUrl}/rest/v1/Users/login`;
    console.log(url)
    let responseHeader = {};
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ref: 'livechat',
            username: req.sanitize(req.body.identifier),
            password: req.sanitize(req.body.password)
        })
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
                msg: data
            })
        })
        .catch((err) => {
            console.log("fell to post dashbord server");
            // res.status(responseHeader.statusCode).json({
            //     header: responseHeader,
            //     error: err
            // })
        })
}