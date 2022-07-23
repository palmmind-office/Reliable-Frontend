const OTP = require("../models/otpModel");
const otpGenerator = require("otp-generator");
const moment = require("moment");
fuzz = require("fuzzball");
const fetch = require("node-fetch");
const { encode, decode } = require("./crypt");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { load, decrypt } = require("./ccms_load");
const keys = require("../config/keys");
const Email = require('../controller/email');
const baseUrl = `${keys.ccms_host}://${keys.ccms_base_url}:${keys.ccms_port}`;
const FormData = require('form-data');
const https = require('https');


const { now } = require("moment");
var sql = require("mssql");

//add minutes to date
function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}

//send otp
const sendOtp = async (statusCode, req, res, next) => {
    const actNum = req.body.actNum;
    const mobile = req.body.mobile;
    const otp = otpGenerator.generate(6, {
        upperCase: false,
        specialChars: false,
    });
    console.log(otp, "otp");
    const expTime = AddMinutesToDate(new Date(), keys.otp_expiry);
    const otpInstance = await OTP.create({
        otp: otp,
        expTime: expTime,
    });
    if (otpInstance) {
        var details = {
            timestamp: now,
            check: mobile,
            account: actNum,
            success: true,
            message: "OTP sent successfully",
            otp_id: otpInstance._id,
        };
        console.log(otpInstance)
        const encoded = await encode(JSON.stringify(details));
        console.log(encoded, "encoded");
        console.log(mobile, actNum)
        const message = `Your OTP is ${otp}`;
        const url = `${keys.sms_api}&mobileNumber=9849361707&message=${message}`; //${mobile} for prod
        try {
            // sms api call
            const response = await fetch(url);
            console.log(response)
            const data = await response.text();
            console.log(data, "data");
            res.status(statusCode).json({
                status: "success",
                token: encoded,
                otp: otp, //for testing
            })
        } catch (err) {
            console.log(err);
            return next(new AppError("Internal server error", 500));
        }
    }
};


//otp verify route
exports.verifyOtp = async (req, res, next) => {
    // Function to Compares dates (expiration time and current time in our case)
    var dates = {
        convert: function (d) {
            return d.constructor === Date
                ? d
                : d.constructor === Array
                    ? new Date(d[0], d[1], d[2])
                    : d.constructor === Number
                        ? new Date(d)
                        : d.constructor === String
                            ? new Date(d)
                            : typeof d === "object"
                                ? new Date(d.year, d.month, d.date)
                                : NaN;
        },
        compare: function (a, b) {
            return isFinite((a = this.convert(a).valueOf())) &&
                isFinite((b = this.convert(b).valueOf()))
                ? (a > b) - (a < b)
                : NaN;
        },
        inRange: function (d, start, end) {
            return isFinite((d = this.convert(d).valueOf())) &&
                isFinite((start = this.convert(start).valueOf())) &&
                isFinite((end = this.convert(end).valueOf()))
                ? start <= d && d <= end
                : NaN;
        },
    };
    try {
        var currentDate = new Date();
        console.log(req.headers)
        const verification_key = req.headers.authorization;
        const { otp, mobile } = req.body;
        if (!verification_key || !otp || !mobile) {
            return next(new AppError("Invalid request", 400));
        }
        let decoded;
        try {
            decoded = await decode(verification_key);
        } catch (err) {
            return next(new AppError("Invalid request", 400));
        }
        var obj = JSON.parse(decoded);
        console.log(obj, "obj");
        const check_obj = obj.check;
        if (check_obj != mobile) {
            return next(new AppError("Invalid request", 400));
        }

        const otpInstance = await OTP.findById({
            _id: obj.otp_id,
        });
        if (otpInstance) {
            if (otpInstance.verified != true) {
                if (dates.compare(otpInstance.expTime, currentDate) == 1) {
                    if (otp === otpInstance.otp) {
                        otpInstance.verified = true;
                        otpInstance.save();
                        const details = {
                            timestamp: now,
                            success: true,
                            message: "OTP verified successfully",
                            otp_id: otpInstance._id,
                        }
                        const encoded = await encode(JSON.stringify(details));
                        const data = await getSqlData(obj.account, mobile);
                        data[0].DateOfBirth = moment(data[0].DateOfBirth).format("YYYY-MM-DD");
                        res.status(200).json({
                            status: "success",
                            token: encoded,
                            data: data[0],
                        });
                    } else {
                        return next(new AppError("Invalid OTP", 400));
                    }
                } else {
                    return next(new AppError("OTP expired", 400));
                }
            } else {
                return next(new AppError("OTP already verified", 400));
            }
        } else {
            return next(new AppError("Bad request", 400));
        }
    } catch (err) {
        console.log(err);
        return next(new AppError("Internal server error", 500));
    }
};

//get data from sql server
async function getSqlData(actNum, mobile) {
    console.log("this function is called")
    var config = {
        user: keys.username,
        password: keys.password,
        server: keys.server,
        database: keys.database,
        options: {
            trustedConnection: true,
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,
        },
    };
    const clientView = keys.clientview;
    const mainView = keys.mainview;
    try {
        const connection = await sql.connect(config);
        try {
            console.log(keys.mainview, keys.clientview, actNum, mobile)
            const result = await sql.query`SELECT M.MainCode AS AccountNumber,M.BranchCode,M.AcType AS AccountType, M.Name AS AccountName, M.ClientCode AS CustomerID, M.Balance as Balance, C.FirstName AS FirstName, C.MiddleName AS MiddleName, C.LastName AS LastName ,C.Address1 AS Address, C.City, C.Phone, CAST(C.DateOfBirth AS DATE) AS DateOfBirth, C.FathersName, C.GFathersName, C.MaritalStatus, C.Salutation, C.CitizenshipNo, C.CitizenDistrict, C.Designation AS Occupation, C.MobileNo, C.eMail,C.Gender  FROM v_thirdparty_online M  JOIN ClientTable C ON (M.ClientCode = C.ClientCode)  WHERE M.MainCode =${actNum} AND M.MobileNo=${mobile}`;
            const data = result.recordset;
            console.log("this is hit")
            console.log(data, "data");
            return data;
        }
        catch (err) {
            console.log(err)
            return err.message
        }

        // select * from v_thirdparty_online WHERE MainCode=${actNum} and MobileNo=${mobile} order by 1
        // SELECT M.MainCode AS AccountNumber,M.BranchCode,M.AcType AS AccountType, M.Name AS AccountName, M.ClientCode AS CustomerID, C.FirstName AS FirstName, C.MiddleName AS MiddleName, C.LastName AS LastName ,C.Address1 AS Address, C.City, C.Phone, CAST(C.DateOfBirth AS DATE) AS DateOfBirth, C.FathersName, C.GFathersName, C.MaritalStatus, C.Salutation, C.CitizenshipNo, C.CitizenDistrict, C.Designation AS Occupation, C.MobileNo, C.eMail,C.Gender  FROM v_thirdparty_online M  JOIN ClientTable C ON (M.ClientCode = C.ClientCode)  WHERE M.MainCode ='00110800210103000001' AND M.MobileNo='9802608807' 
        // SELECT M.MainCode AS AccountNumber,M.BranchCode,M.AcType AS AccountType, M.CyCode, M.Name AS AccountName, M.ClientCode AS CustomerID, C.Name AS CustomerName, C.Address1 AS Address, C.City, C.Phone, CAST(C.DateOfBirth AS DATE) AS DateOfBirth, C.FathersName, C.GFathersName, C.MaritalStatus, c.Salutation, C.CitizenshipNo, C.CitizenDistrict, C.Designation AS Occupation, 'XXXX' AS cardNumber, NULL AS PurposeOfAccount, NULL AS BOID, C.MobileNo, C.eMail,Gender FROM v_Master M JOIN ClientTable C ON (M.ClientCode = C.ClientCode) WHERE M.MainCode ='00110800210103000001'

    } catch (err) {
        return err;
    }
}

//signed encrypted payload
function signedEncryptedPayload(plainpayload) {
    let pki = eval(load)
    const signedEncryptedPayload = pki(JSON.stringify(plainpayload))
    return signedEncryptedPayload;
}

//submit data and send otp controller
exports.submitDataAndSendOtp = catchAsync(async (req, res, next) => {
    const { actNum, mobile, actName } = req.body;
    if (!actNum) {
        return res.status(400).json({
            message: "Failure",
            error: "Account number not provided",
        });
    }
    if (!mobile) {
        return res.status(400).json({
            message: "Failure",
            error: "Mobile number not provided",
        });
    }
    if (!actName) {
        return res.status(400).json({
            message: "Failure",
            error: "Account name not provided",
        });
    }
    try {
        const data = await getSqlData(actNum, mobile);
        console.log(data, "data");
        console.log(data.length, "data length");
        if (data.length === 0 || data === undefined) {
            console.log("No data found");
            return next(new AppError("Account not found", 400));
        }
        console.log("Account details fetched");
        const ratio = fuzz.ratio(actName.toLowerCase(), data[0].AccountName.toLowerCase());
        if (ratio < 95) return next(new AppError("Account name does not match", 400));
        sendOtp(200, req, res, next);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
});

//protect middleware
exports.protect = catchAsync(async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return next(new AppError("You are not authorized", 401));
    const decoded = await decode(token);
    const obj = JSON.parse(decoded);
    console.log(obj)
    const otpInstance = await OTP.findById({
        _id: obj.otp_id,
    });
    if (!otpInstance) return next(new AppError("Invalid request", 400));
    if (otpInstance.verified != true) return next(new AppError("OTP not verified", 400));
    if (otpInstance.verifiedSecond == true) return next(new AppError("Token already used", 400));
    otpInstance.verifiedSecond = true;
    otpInstance.save();
    next();
})

//Balance Enquiry controller
exports.getAccountDetail = catchAsync(async (req, res, next) => {

    const actNum = req.query.actNum;
    const mobile = req.query.mobile;

    if (!actNum) {
        next(new AppError("Account number not provided", 404));
    }
    if (!mobile) {
        next(new AppError("Mobile number not provided", 404));
    }
    try {
        const data = await getSqlData(actNum, mobile);
        if (data.length === 0) return next(new AppError("Account details not found", 404));
        return res.status(200).json({
            status: "success",
            details: data[0],
        });

    }
    catch (err) {
        console.log(err);
        next(new AppError("Internal server error", 500));
    }
});


//online service request controller
exports.onlineServiceRequest = catchAsync(async (req, res, next) => {

    switch (req.query.type) {
        case "card":
            const url = `${baseUrl}/v2/new-card/entry`
            console.log("this is executed")
            // const token = req.headers.authorization;
            // if (!token) return next(new AppError("Invalid request", 400));
            // const decoded = await decode(token);
            // const obj = JSON.parse(decoded);
            // console.log(obj)
            // const otpInstance = await OTP.findById({
            //     _id: obj.otp_id,
            // });
            // if (!otpInstance) return next(new AppError("Invalid request", 400));
            // if(otpInstance.verified != true) return next(new AppError("OTP not verified", 400));
            // if(otpInstance.verifiedSecond == true) return next(new AppError("Token already used", 400));

            // const result = await getSqlData(actNum, mobile);
            // if (result.length === 0) return next(new AppError("Account details not found", 404));
            const address = req.body.address.replace(/[^A-Za-z, ]+/g, "");
            const salutation = req.body.salutation.replace(".", "");
            console.log(address, salutation)
            const plainpayload = {
                type: "debit",
                data: {
                    accountNo: req.body.accountNo,
                    firstname: req.body.firstname,
                    middlename: req.body.middlename === "" ? null : req.body.middlename,
                    lastname: req.body.lastname,
                    gender: req.body.gender,
                    salutation: salutation.toUpperCase(),
                    city: req.body.city === "" ? null : req.body.city,
                    country: req.body.country || 'Nepal',
                    dob: moment(req.body.dob).format("YYYY-MM-DD"),
                    phoneNo: req.body.phoneNo === "" ? null : req.body.phoneNo,
                    mobileNo: `977${req.body.mobileNo}`,
                    email: req.body.email,
                    collectFromBranch: req.body.collectFromBranch,
                    address: address,
                    citizenshipNo: req.body.citizenshipNo,
                    productType: keys.product_type,
                    cardType: keys.cardType,
                    pinOptions: req.body.pinOptions || 'paper-pin',
                    chargeProfile: keys.charge_profile
                }
            }
            console.log("plain payload", plainpayload)
            const payload = signedEncryptedPayload(plainpayload)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: payload
            })
            console.log(response, "response");
            const data = await response.json();
            const actualData = JSON.parse(decrypt(data));
            res.status(response.status).json({
                data: actualData,
            })
            if (actualData.code === 0) {
                console.log("Not error")
                console.log("sending email")
                try {
                    await new Email(plainpayload.data).sendCardRequest();
                }
                catch (err) {
                    console.log(err)
                }
            }
            break;
    }
});

//not in use for now
exports.disputeClaim = catchAsync(async (req, res, next) => {
    switch (req.query.type) {
        case "card":
            console.log(req.body)
            const today = moment();
            console.log(typeof today, "type");
            let str = today.format().toString();
            str = str.replace(/[-:+]/g, '');
            console.log(str, "string")

            const cbsDescription2 = req.query.debitAccountNo + str;
            console.log(cbsDescription2)
            const cbsDescription3 = req.query.citizenship + str
            console.log(cbsDescription3)
            const url = `${baseUrl}/v2/dispute/entry`;
            const config = {
                mobileNumber: `977${req.body.mobileNumber}`,
                email: req.body.email,
                txnDate: req.body.txnDate,
                deviceType: req.body.deviceType,
                terminalType: req.body.terminalType,
                terminal: req.body.terminal,
                detail: req.body.detail,
                disputeType: req.body.disputeType,
                txnAmount: req.body.txnAmount,
                claimAmount: req.body.claimAmount,
                requestedDate: req.body.requestedDate,
                cbsDescription2: cbsDescription2,
                cbsDescription3: cbsDescription3,
            }
            let plainpayload = {
                type: "debit",
                object: "debitAccountNo",
                identifier: req.query.debitAccountNo,
                data: config
            }
            console.log(plainpayload)
            const payload = signedEncryptedPayload(plainpayload)
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: payload
            })
            console.log(response, "response");
            const data = await response.json();
            const actualData = JSON.parse(decrypt(data));
            res.status(response.status).json({
                data: actualData,
            })
            if (actualData.code === 0) {
                console.log("Not error")
                console.log("sending email")
                try {
                    await new Email(plainpayload.data).sendCardDisputeClaim();
                }
                catch (err) {
                    console.log(err)
                }
            }
            break;
    }
})

//card repin entry controller
exports.cardRepinEntry = catchAsync(async (req, res, next) => {
    const url = `${baseUrl}/v2/repin/entry`;
    const config = {
        collectFromBranch: req.body.collectBranch,
        mobileNo: `977${req.body.mobile}`,
        pinOptions: req.body.pinOptions || 'paper-pin',
        chargeProfile: keys.charge_profile
    }
    const plainpayload = {
        type: "debit",
        object: "accountNo",
        identifier: req.body.actNum,
        data: config
    }
    console.log("this is repin body data", req.body)
    console.log("this is repin plainpayload", plainpayload)
    const payload = signedEncryptedPayload(plainpayload)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: payload
    })
    console.log(response, "response");
    const data = await response.json();
    const actualData = JSON.parse(decrypt(data));
    res.status(response.status).json({
        data: actualData,
    })
    if (actualData.code === 0) {
        console.log("Not error")
        console.log("sending email")
        try {
            await new Email(plainpayload.data).sendCardRepinEntry();
        }
        catch (err) {
            console.log(err)
        }
    }
})

//block card controller
exports.blockCard = catchAsync(async (req, res, next) => {
    const url = `${baseUrl}/v2/block/entry`;
    console.log(req.body)
    const config = {
        blockType: req.body.blockType,
        blockReason: req.body.blockReason,
    }
    const plainpayload = {
        type: "debit",
        object: "accountNo",
        identifier: req.body.actNum,
        data: config
    }
    console.log(plainpayload, "plainpayload")
    const payload = signedEncryptedPayload(plainpayload)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: payload
    })
    console.log(response, "response");
    const data = await response.json();
    const actualData = JSON.parse(decrypt(data));
    res.status(response.status).json({
        data: actualData,
    })
    if (actualData.code === 0) {
        console.log("Not error")
        console.log("sending email")
        try {
            const content = {
                accountNo: req.body.actNum,
                blockType: req.body.blockType,
                blockReason: req.body.blockReason,
            }
            await new Email(content).sendCardBlock();
        }
        catch (err) {
            console.log(err)
        }
    }
})

//test ccms
exports.testCcms = catchAsync(async (req, res, next) => {
    const url = `${baseUrl}/v2/test`
    console.log(url, "url")

    let plainpayload = {

    }
    const payload = signedEncryptedPayload(plainpayload)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: payload
    })
    console.log(response, "response");
    const data = await response.json();
    const actualData = JSON.parse(decrypt(data));
    res.status(response.status).json({
        data: actualData,
    })
})

//terminal list
exports.getTerminal = catchAsync(async (req, res, next) => {
    
    const url = `${keys.shine_url}/network/atm`;
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });
    const headers = {
        'X-SHINE-LOCATION': keys.shine_location_key,
        'Content-Type': 'application/json'
    }

    const response = await fetch(url, {
        method: "GET",
        headers: headers,
        agent: httpsAgent
    })
    const data = await response.json();
    if(data.status === "success"){
        const info = data.data.map(item => {
            return {
                id: item.id,
                title: item.title,
                code: item.terminal_code,
            }
        })
        res.status(data.status_code).json({
            status: data.status,
            data: info,

        })
    }
})

/*   Services controllers */
exports.getServiceData = catchAsync(async (req, res, next) => {
    const url = `${keys.shine_url}/service/${req.params.type}`;
    const headers = {
        'X-SHINE-LOCATION': keys.shine_location_key,
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, {
        method: "GET",
        headers: headers
    })
    const data = await response.json();
    
    if(data){
        res.status(data.status_code).json({
            status: data.status,
            message: data.message,
            data: data.data
        })
    }
})


exports.postServiceData = catchAsync(async (req, res, next) => {

    const headers = {
        'X-SHINE-LOCATION': keys.shine_location_key
    }

    const formData = new FormData();
    
    const url = `${keys.shine_url}/service/${req.params.type}`;
   
    for(let key in req.body){
        formData.append(key, req.body[key])
    }
    console.log(req.files, "files")
    
    if(req.files){
        formData.append('attachment', req.files.attachment[0].buffer, {
            filename: req.files.attachment[0].originalname,
            contentType: req.files.attachment[0].mimetype
        });
        if(req.files.pan_copy){
            formData.append('pan_copy', req.files.pan_copy[0].buffer, {
                filename: req.files.pan_copy[0].originalname,
                contentType: req.files.pan_copy[0].mimetype
            });
        }
    }
    
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: formData
    })
    const data = await response.json();
    console.log(data, "data")
    if(data){
        res.status(data.status_code).json({
            status: data.status,
            message: data.message,
            data: data.data
        })
    }
})