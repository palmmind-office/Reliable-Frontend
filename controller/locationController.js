const fetch = require('node-fetch');
const keys = require('../config/keys');
const https = require('https');


exports.getNearbyLocation = async function (req, res, next) {


    // const page = parseInt(req.query.page) || 1;
    // const limit = parseInt(req.query.limit) || 5;

    // function paginate(model){
    //     let results = {};
    //     const startIndex = (page - 1) * limit;
    //     const endIndex = page * limit;
    //     if(endIndex < model.length){
    //         results.next = {
    //             page: page + 1,
    //             limit: limit
    //         }
    //     }
    //     if(startIndex > 0){
    //         results.previous = {
    //             page: page - 1,
    //             limit: limit
    //         }
    //     }
    //     results.results = model.slice(startIndex, endIndex);
    //     return results;
    // }

    function isLessthen(obj) {
        return obj.distance <= 1.86411
    }

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });
    const data = {
        "latitude": req.sanitize(req.body.latitude),
        "longitude": req.sanitize(req.body.longitude)
    }
    // console.log("lat and long",data)
    // console.log("query", req.query.nearType)
    const headers = {
        'X-SHINE-LOCATION': keys.shine_location_key,
        'Content-Type': 'application/json'
    }
    if (req.query.nearType == "atm") {
        const atmUrl = `${keys.shine_url}/network/atm/nearby`;
        console.log("atmUrl", atmUrl);
        try {
            const response = await fetch(atmUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers,
                agent: httpsAgent
            });
            const json = await response.json();
            if (json.data.length > 0) {
                // const paginated = paginate(json.data);
                // console.log(paginated);
                const filtered = json.data.filter(isLessthen);
                console.log(filtered);
                if (filtered.length > 0) {
                    let outputDTO = {
                        type: 'generalslider',
                        title: `The available ATM near you`,
                        data: filtered.map(elem => {
                            let phone = elem.contact_person.split("/")
                            console.log(phone)
                            phone= phone[0].split(":")[1]
                            console.log("phone", phone);
                            return {
                                'title': `${elem.title} (Location: ${elem.province_title})`,
                                'people': {
                                    'phone':phone
                                },
                                map: {
                                    latitude: elem.latitude,
                                    longitude: elem.longitude
                                }
                            }
                        })
                    }
                    res.status(200).json(outputDTO);
                }
                else {
                    let outputDTO = {
                        type: 'location',
                        for: 'atm',
                        title: 'No ATM within 3km',
                        img: "images/compass.png",
                        subtitle: `No ATM at this location So for results near you, please send us your current location by clicking button below.`,
                        button: {
                            contents: [
                                {
                                    "title": "Type Location",
                                    "type": "type_location"
                                }
                            ]
                        }
                    }
                    res.status(200).json(outputDTO);
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(err.status_code).json({
                message: err.message,
                status_code: err.status_code,
                data: err.data
            });
        }
    }
    if(req.query.nearType.toLowerCase()=="branch"){
        const branchUrl = `${keys.shine_url}/network/branch/nearby`;
        console.log("branchUrl", branchUrl);
        try {
            const response = await fetch(branchUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers,
                agent: httpsAgent
            });
            const json = await response.json();
            if (json.data.length > 0) {
                const filtered = json.data.filter(isLessthen);
                console.log(filtered);
                if (filtered.length > 0) {
                    let outputDTO = {
                        type: 'generalslider',
                        title: `The available branch near you`,
                        data: filtered.map(elem => {
                            const role = elem.manager.split(":")[1]
                            const phone = elem.manager_phone.split("/")[0]
                            return {
                                'title': `${elem.name} (Location: ${elem.province_title})`,
                                'people': {
                                    'role': role,
                                    'phone': phone
                                },
                                map: {
                                    latitude: elem.latitude,
                                    longitude: elem.longitude
                                }
                            }
                        })
                    }
                    res.status(200).json(outputDTO);
                }
                else {
                    let outputDTO = {
                        type: 'location',
                        for: 'branch',
                        title: 'No branch within 3km',
                        img: "images/compass.png",
                        subtitle: `No Branch at this location So for results near you, please send us your current location by clicking button below.`,
                        button: {
                            contents: [
                                {
                                    "title": "Type Location",
                                    "type": "type_location"
                                }
                            ]
                        }
                    }
                    res.status(200).json(outputDTO);
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(err.status_code).json({
                message: err.message,
                status_code: err.status_code,
                data: err.data
            });
        }
    }
}

exports.getDataByLocation = async function (req, res, next) {
    const{latitude, longitude, location, type} = req.query;
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });
    const headers = {
        'X-SHINE-LOCATION': keys.shine_location_key,
        'Content-Type': 'application/json'
    }
    switch (type) {
        case "atm":
            const atmUrl = `${keys.shine_url}/network/atm/search`;
            let body = {
                language: "2",
                term: location,
                latitude: latitude,
                longitude: longitude
            }
            try {
                const response = await fetch(atmUrl, {
                    method: 'POST',
                    headers: headers,
                    agent: httpsAgent,
                    body: JSON.stringify(body)
                })
                const json = await response.json();
                if (json.data.length > 0) {
                    console.log(json.data);
                    let outputDTO = {
                        type: 'generalslider',
                        title: `The available ATM in ${location}`,
                        data: json.data.map(elem => {
                            return {
                                'title': `${elem.title} (Location: ${elem.province_title})`,
                                map: {
                                    latitude: elem.latitude,
                                    longitude: elem.longitude
                                }
                            }
                        })
                    }
                    res.status(200).json(outputDTO);
                }
                else {
                    let outputDTO = {
                        status: 'fail',
                        message: 'No ATM in this location'
                    }
                    res.status(400).json(outputDTO);
                }
            }
            catch (err) {
                console.log(err);
                res.status(err.status_code).json({
                    message: err.message,
                    status_code: err.status_code,
                    data: err.data
                });
            }
            break;
        case "branch":
            const branchUrl = `${keys.shine_url}/network/branch/search`;
            let body2 = {
                language: "2",
                term: location,
                latitude: latitude,
                longitude: longitude
            }
            try {
                const response = await fetch(branchUrl, {
                    method: 'POST',
                    headers: headers,
                    agent: httpsAgent,
                    body: JSON.stringify(body2)
                })
                const json = await response.json();
                if (json.data.length > 0) {
                    console.log(json.data);
                    let outputDTO = {
                        type: 'generalslider',
                        title: `The available branch in ${location}`,
                        data: json.data.map(elem => {
                            const role = elem.manager.split(":")[1]
                            const phone = elem.manager_phone.split("/")[0]
                            return {
                                'title': `${elem.name} (Location: ${elem.province_title})`,
                                'people': {
                                    'role': role,
                                    'phone': phone
                                },
                                map: {
                                    latitude: elem.latitude,
                                    longitude: elem.longitude
                                }
                            }
                        })
                    }
                    res.status(200).json(outputDTO);
                }
                else {
                    let outputDTO = {
                        status: 'fail',
                        message: 'No Branch in this location'
                    }
                    res.status(400).json(outputDTO);
                }
            }
            catch (err) {
                console.log(err);
                res.status(err.status_code).json({
                    message: err.message,
                    status_code: err.status_code,
                    data: err.data
                });
            }
    }
}
