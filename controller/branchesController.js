const fetch = require('node-fetch');
const https = require('https');
const keys = require('../config/keys');

exports.getAllBranches = async (req,res,next) => {
    const url = `${keys.shine_url}/network/branch`;
    try{
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-SHINE-LOCATION': keys.shine_location_key,
            },
            agent: httpsAgent,
        })
        const json = await response.json();
        const data = json.data.map(branch => {
            return {
                name: branch.name,
                code: branch.code,
            }
        })
        res.status(200).json({
            status: 'success',
            message: "Branch Lists",
            data: data,
        })
    }
    catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
    
}