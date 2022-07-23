const fetch = require('node-fetch');
const Email = require('../controller/email');
const keys = require('../config/keys');
const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}`;
// console.log(baseUrl)
exports.create = async function (req, res, next) {
    let url = baseUrl + '/rest/v1/Feedbacks';
    console.log("body",req.body)
    const info = {
        "full_name": req.body.full_name,
        "email_address": req.body.email_address,
        "mobile_number": req.body.mobile_number,
        "account_number": req.body.account_number,
        "suggestion": req.body.suggestion,
        "visitorId": req.body.visitorId,
        "organizationId": keys.ORGANIZATION_ID
    }
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${keys.BOT_TOKEN}`
            },
            body: JSON.stringify(info)
        })
        const data = await response.json();
        console.log(data, 'data')
        if(data.error){
            res.status(500).json({
                message: 'Internal server error',
                error: data.error
            })
        }
        res.status(200).json(data)
        if(!data.error){
            try{
                await new Email(info).sendFeedback();
            }
            catch(err){
                console.log(err)
            }
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Internal server error',
            error: err.message
        })
    }
}