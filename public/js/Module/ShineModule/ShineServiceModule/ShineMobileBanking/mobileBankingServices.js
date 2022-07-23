import { env } from "../../../../../env"
import { generalReplyModule } from "../../../generalReplyModule"

export var mobileBankingServices = {
    async CRN() {
        let postUrl = `${env.basePath}test/crn`
        try {
            const response = await fetch(postUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const info = await response.json()
            const data = info
            return data
        }
        catch (err) {
            generalReplyModule.init(err)
        }

    }
}
// for post crn request form
export var crnService = {
    async CRNService(data){
        let postData=data
        // let token =data['token']
        console.log("this is data from crn service",postData)
        // let postUrl = `${env.basePath}test/crnrequest?type=crn`
        let postUrl = `${env.basePath}serviceRequest/service/crn`
        console.log("this is post url", postUrl)
 
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                // headers: {
                    // 'Content-Type':'multi-part/form-data',
                //     // 'authorization': token,
                // },
                body: postData
            })
            const info = await response.json()
            const data = info
            console.log(data)
            if(data.status=='success'){
                console.log("this is data",data)
                $('#mobile_container').remove();
                generalReplyModule.init(data)
            }
        }
        catch (err) {
            console.log("this is catch error", err)
            $('#mobile_container').remove();
            generalReplyModule.init(err)
        }
    }
}