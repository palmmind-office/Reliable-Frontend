
exports.submitData = async function (req, res, next) {
    console.log("test")
    let { actName, mobile, actNum } = req.body
    console.log(req.body)
    if (actNum === '400') {
        if (mobile === '1111111111') {
            return res.status(200).json({
                "status": "success",
                "token": "skjfdskjfkdsjfkdsjfkdsjfksdjfds",
                "otp": "420"
            })
        } else {
            return res.status(404).json({ "error": "mobile num doesnt match" })
        }

    } else {
        return res.status(404).json({ "error": "account num doesnt match" })
    }

    // return res.status(404).json({"error":"something went wrong"})

}
exports.verifyOtp = async function (req, res, next) {
    console.log("test")
    let otp = req.body.otp
    let token = req.headers.authorization
    if (otp === "420") {
        if (token === "skjfdskjfkdsjfkdsjfkdsjfksdjfds") {
            return res.status(200).json({
                "status": "success",
                "token": "8lyocdC86lW+a7i1Aeu5rcLFp08eIXG/bghHmWAacbz8yyxG4zoyQaahT140zSJ4O+XvIfUUpYvUpQbeOD5oKzgW6q3FWv5/Noewv19yYqvowyt3WgrPU4jylX/WjR/s",
                "data": {
                    "AccountNumber": "22222222222222222222",
                    "BranchCode": "028",
                    "AccountType": "1H",
                    "AccountName": "PRITESH SINGH",
                    "CustomerID": "00210103",
                    "FirstName": "PRITESH",
                    "MiddleName": null,
                    "LastName": "SINGH",
                    "Address": "TULSIPUR-05,DANG",
                    "City": null,
                    "Phone": "",
                    "DateOfBirth": "1989-10-27T00:00:00.000Z",
                    "FathersName": "PURAN KUMAR SINGH",
                    "GFathersName": "PASHUPATINATH SINGH",
                    "MaritalStatus": "S",
                    "Salutation": "Mr.",
                    "CitizenshipNo": "1447/3529",
                    "CitizenDistrict": "053",
                    "Occupation": "ASSISTANT",
                    "MobileNo": "9802608807",
                    "eMail": null,
                    "Gender": "F"
                }
            })
        } else {
            return res.status(404).json({ "message": "token num doesnt match" })
        }

    } else {
        return res.status(404).json({ "message": "otp num doesnt match" })
    }


}


exports.checkOtp = async function (req, res, next) {
    console.log("test")
    let token = req.headers.authorization
    // console.log("this is token", token)

    if (token === '8lyocdC86lW+a7i1Aeu5rcLFp08eIXG/bghHmWAacbz8yyxG4zoyQaahT140zSJ4O+XvIfUUpYvUpQbeOD5oKzgW6q3FWv5/Noewv19yYqvowyt3WgrPU4jylX/WjR/s') {
        return res.status(200).json({
            "status": "success",
            "message": "Your form is sumbit successfully"
        })
    } else {
        return res.status(404).json({ "error": "token num doesnt match" })
    }
}
exports.crnForm = async function (req, res, next) {
    let token=req.headers.authorization
    
        res.status(200).json({
            "status": "success",
            "message": "CRN Default Datas",
            data:{
                "branch":[
                    {
                        "id": 5,
                        "email": "corporatebranch@srdb.com.np",
                        "code": "998",
                        "title": "1. Corporate Branch"
                    },
                    {
                        "id": 6,
                        "email": "butwalbranch@srdb.com.np",
                        "code": "001",
                        "title": "2. Butwal Branch"
                    },
                    {
                        "id": 7,
                        "email": "sandhikharkabranch@srdb.com.np",
                        "code": "002",
                        "title": "3.Sandhikharka Branch"
                    },
                    {
                        "id": 8,
                        "email": "yogikutibranch@srdb.com.np",
                        "code": "003",
                        "title": "4.Yogikuti Branch"
                    },
                    {
                        "id": 9,
                        "email": "manglapurbranch@srdb.com.np",
                        "code": "004",
                        "title": "5. Mangalapur Branch"
                    },
                    {
                        "id": 10,
                        "email": "rudrapurbranch@srdb.com.np",
                        "code": "005",
                        "title": "6. Rudrapur Branch"
                    },
                    {
                        "id": 11,
                        "email": "bhumahibranch@srdb.com.np",
                        "code": "006",
                        "title": "7. Bhumahi Branch"
                    },
                    {
                        "id": 12,
                        "email": "amaraibranch@srdb.com.np",
                        "code": "007",
                        "title": "8. Amarai Branch"
                    },
                    {
                        "id": 13,
                        "email": "tamghasbranch@srdb.com.np",
                        "code": "008",
                        "title": "9. Tamghas Branch"
                    },
                    {
                        "id": 14,
                        "email": "wamibranch@srdb.com.np",
                        "code": "009",
                        "title": "10. Wamitaksar Branch"
                    },
                    {
                        "id": 15,
                        "email": "shantipurbranch@srdb.com.np",
                        "code": "010",
                        "title": "11. Shantipur Branch"
                    },
                    {
                        "id": 16,
                        "email": "khairenibranch@srdb.com.np",
                        "code": "011",
                        "title": "12. Khaireni Branch"
                    },
                    {
                        "id": 17,
                        "email": "baletaksarbranch@srdb.com.np",
                        "code": "012",
                        "title": "13. Baletaksar Branch"
                    },
                    {
                        "id": 18,
                        "email": "majuwabranch@srdb.com.np",
                        "code": "013",
                        "title": "14. Majuwa Branch"
                    },
                    {
                        "id": 19,
                        "email": "simaltaribranch@srdb.com.np",
                        "code": "014",
                        "title": "15. Simaltari Branch"
                    },
                    {
                        "id": 20,
                        "email": "siddharthanagar@srdb.com.np",
                        "code": "015",
                        "title": "16. Siddharthanagar Branch"
                    },
                    {
                        "id": 21,
                        "email": "jeetpurbranch@srdb.com.np",
                        "code": "016",
                        "title": "17. Jitpur Branch"
                    },
                    {
                        "id": 22,
                        "email": "burtibangbranch@srdb.com.np",
                        "code": "017",
                        "title": "18. Burtibang Branch"
                    },
                    {
                        "id": 23,
                        "email": "tansenbranch@srdb.com.np",
                        "code": "018",
                        "title": "19. Tansen Branch"
                    },
                    {
                        "id": 24,
                        "email": "khanadahabranch@srdb.com.np",
                        "code": "020",
                        "title": "20. Khanadaha Branch"
                    },
                    {
                        "id": 25,
                        "email": "bijuwarbranch@srdb.com.np",
                        "code": "021",
                        "title": "21. Bijuwar Branch"
                    },
                    {
                        "id": 26,
                        "email": "bhingribranch@srdb.com.np",
                        "code": "022",
                        "title": "22. Bhingri Branch"
                    },
                    {
                        "id": 27,
                        "email": "khalangabranch@srdb.com.np",
                        "code": "028",
                        "title": "23. Khalanga Branch"
                    }
                ],
                "type": [
                    "New",
                    "Renew"
                ],
                "set": [
                    "Individual",
                    "Corporate"
                ],
                "e_type": [
                    {
                        "id": 10,
                        "title": "Internet Service",
                        "description": " this is demo of descrip0tion.",
                        "tarif": 150
                    }
                ]
            }
        })
    
}
exports.postcrn=async function(req,res){
    let token=req.headers.authorization
    console.log("this is token",token)
    try{
        if(token==='8lyocdC86lW+a7i1Aeu5rcLFp08eIXG/bghHmWAacbz8yyxG4zoyQaahT140zSJ4O+XvIfUUpYvUpQbeOD5oKzgW6q3FWv5/Noewv19yYqvowyt3WgrPU4jylX/WjR/s'){
            res.status(200).json({
                "status": "success",
                "message": "CRN Request Submitted",
        })
    }
    }
    catch(err){
        res.status(500).json({
            "status": "error",
            "message": "Validation error",
        })
    }
}
exports.disputeHandling = async function (req, res, next) {
    let token = req.headers.authorization
    console.log("this is token", token)
    if (token === '8lyocdC86lW+a7i1Aeu5rcLFp08eIXG/bghHmWAacbz8yyxG4zoyQaahT140zSJ4O+XvIfUUpYvUpQbeOD5oKzgW6q3FWv5/Noewv19yYqvowyt3WgrPU4jylX/WjR/s') {
        res.status(200).json({
            data: {
                "code": 0,
                "message": "Dispute card has been requested successfully.",
            }
        })
    }
    else{
        res.status(400).json({
            data:{
                "code": 0,
                "message": "Dispute card has not been requested.",
            }
        })
    }
}

exports.blockcard=async function(req,res,next){
    console.log("BLOCK CARD")
    return res.status(200).json({
       data:{   
        "code": 0,
        "message": "Card has been requested for block successfully."
    }
    })
}

// exports.getbranch=async function(req,res){
//     console.log("get branch")
//     return res.status(200).json({
//         "status": "success",
//         "message": "Branch Lists",
//         "data": [
//             {
//                 "name": "2. Butwal Branch",
//                 "code": "001"
//             },
//             {
//                 "name": "45. Amarpath Branch",
//                 "code": "046"
//             },
//             {
//                 "name": "1. Corporate Branch",
//                 "code": "998"
//             },
//             {
//                 "name": "4.Yogikuti Branch",
//                 "code": "003"
//             },
//             {
//                 "name": "33. Belbas Branch",
//                 "code": "034"
//             },
//             {
//                 "name": "38. Shankarnagar Branch",
//                 "code": "039"
//             },
//             {
//                 "name": "44. Drivertole Branch",
//                 "code": "045"
//             },
//             {
//                 "name": "30. Manigram Branch",
//                 "code": "031"
//             },
//             {
//                 "name": "28. Jyotinagar Branch",
//                 "code": "028"
//             },
//             {
//                 "name": "5. Mangalapur Branch",
//                 "code": "004"
//             },
//             {
//                 "name": "36. Pharsatikar Branch",
//                 "code": "037"
//             },
//             {
//                 "name": "42. Bhalwari Branch",
//                 "code": "043"
//             },
//             {
//                 "name": "32. Bankatti Branch",
//                 "code": "033"
//             },
//             {
//                 "name": "40. Dumre Branch",
//                 "code": "041"
//             },
//             {
//                 "name": "31. Murgiya Branch",
//                 "code": "032"
//             },
//             {
//                 "name": "35. Devdaha Branch",
//                 "code": "036"
//             },
//             {
//                 "name": "39. Kotihawa Branch",
//                 "code": "040"
//             },
//             {
//                 "name": "51. Chapiya Branch",
//                 "code": "053"
//             },
//             {
//                 "name": "46. Suryapura Branch",
//                 "code": "047"
//             },
//             {
//                 "name": "37. Sunawal Branch",
//                 "code": "038"
//             },
//             {
//                 "name": "19. Tansen Branch",
//                 "code": "018"
//             },
//             {
//                 "name": "70. Saljhandi Branch",
//                 "code": "072"
//             },
//             {
//                 "name": "16. Siddharthanagar Branch",
//                 "code": "015"
//             },
//             {
//                 "name": "41. Bhairahawa Branch",
//                 "code": "042"
//             },
//             {
//                 "name": "47. Dhakdhai Branch",
//                 "code": "048"
//             },
//             {
//                 "name": "6. Rudrapur Branch",
//                 "code": "005"
//             },
//             {
//                 "name": "50. Badera Branch",
//                 "code": "052"
//             },
//             {
//                 "name": "7. Bhumahi Branch",
//                 "code": "006"
//             },
//             {
//                 "name": "43. Parasi Branch",
//                 "code": "044"
//             },
//             {
//                 "name": "17. Jitpur Branch",
//                 "code": "016"
//             },
//             {
//                 "name": "49. Parsa Branch",
//                 "code": "051"
//             },
//             {
//                 "name": "13. Baletaksar Branch",
//                 "code": "012"
//             },
//             {
//                 "name": "27. Kharjyang Branch",
//                 "code": "027"
//             },
//             {
//                 "name": "12. Khaireni Branch",
//                 "code": "011"
//             },
//             {
//                 "name": "52. Jimirebhar Branch",
//                 "code": "054"
//             },
//             {
//                 "name": "8. Amarai Branch",
//                 "code": "007"
//             },
//             {
//                 "name": "14. Majuwa Branch",
//                 "code": "013"
//             },
//             {
//                 "name": "71. Gorusinge Branch",
//                 "code": "073"
//             },
//             {
//                 "name": "3.Sandhikharka Branch",
//                 "code": "002"
//             },
//             {
//                 "name": "29. Chutrabesi Branch",
//                 "code": "030"
//             },
//             {
//                 "name": "11. Shantipur Branch",
//                 "code": "010"
//             },
//             {
//                 "name": "9. Tamghas Branch",
//                 "code": "008"
//             },
//             {
//                 "name": "20. Khanadaha Branch",
//                 "code": "020"
//             },
//             {
//                 "name": "80. Dharapani Branch",
//                 "code": "082"
//             },
//             {
//                 "name": "10. Wamitaksar Branch",
//                 "code": "009"
//             },
//             {
//                 "name": "34. Chandrauta Branch",
//                 "code": "035"
//             },
//             {
//                 "name": "25. Baraula Branch",
//                 "code": "025"
//             },
//             {
//                 "name": "15. Simaltari Branch",
//                 "code": "014"
//             },
//             {
//                 "name": "23. Khalanga Branch",
//                 "code": "023"
//             },
//             {
//                 "name": "62. Lalmatiya Branch",
//                 "code": "064"
//             },
//             {
//                 "name": "26. Bagdula Branch",
//                 "code": "026"
//             },
//             {
//                 "name": "21. Bijuwar Branch",
//                 "code": "021"
//             },
//             {
//                 "name": "18. Burtibang Branch",
//                 "code": "017"
//             },
//             {
//                 "name": "75. New Road Pokhara Branch",
//                 "code": "077"
//             },
//             {
//                 "name": "24. Bahane Branch",
//                 "code": "024"
//             },
//             {
//                 "name": "22. Bhingri Branch",
//                 "code": "022"
//             },
//             {
//                 "name": "48. Narayanghat Branch",
//                 "code": "049"
//             },
//             {
//                 "name": "64. Lamahi Branch",
//                 "code": "066"
//             },
//             {
//                 "name": "59. Dang Branch",
//                 "code": "061"
//             },
//             {
//                 "name": "66. Rajpur Branch",
//                 "code": "068"
//             },
//             {
//                 "name": "54. Narayanpur Branch",
//                 "code": "056"
//             },
//             {
//                 "name": "55. Tulsipur Branch",
//                 "code": "057"
//             },
//             {
//                 "name": "61. Hapure Branch",
//                 "code": "063"
//             },
//             {
//                 "name": "68. Agaiya Branch",
//                 "code": "070"
//             },
//             {
//                 "name": "73. Kalanki Branch",
//                 "code": "075"
//             },
//             {
//                 "name": "74. New Road Branch",
//                 "code": "076"
//             },
//             {
//                 "name": "78. Gongabu Branch",
//                 "code": "080"
//             },
//             {
//                 "name": "58. Kohalpur Branch",
//                 "code": "060"
//             },
//             {
//                 "name": "83. Taulihawa Branch",
//                 "code": "085"
//             },
//             {
//                 "name": "77. Maharajganj Branch",
//                 "code": "079"
//             },
//             {
//                 "name": "72. New Baneshwor Branch",
//                 "code": "074"
//             },
//             {
//                 "name": "53. Nepalgunj Branch",
//                 "code": "055"
//             },
//             {
//                 "name": "56. Bansgadhi Branch",
//                 "code": "058"
//             },
//             {
//                 "name": "67. Mainapokhar Branch",
//                 "code": "069"
//             },
//             {
//                 "name": "81. Birendranagar Branch",
//                 "code": "083"
//             },
//             {
//                 "name": "69. Katarniya Branch",
//                 "code": "071"
//             },
//             {
//                 "name": "57. Mangragadhi Branch",
//                 "code": "059"
//             },
//             {
//                 "name": "65. Gulariya Branch",
//                 "code": "067"
//             },
//             {
//                 "name": "60. Bhurigaun Branch",
//                 "code": "062"
//             },
//             {
//                 "name": "63. Patabhar Branch",
//                 "code": "065"
//             },
//             {
//                 "name": "79. Dhangadhi Branch",
//                 "code": "081"
//             },
//             {
//                 "name": "82. Attariya Branch",
//                 "code": "084"
//             },
//             {
//                 "name": "76. Mahendranagar Branch",
//                 "code": "078"
//             }
//         ]
//     })
// }