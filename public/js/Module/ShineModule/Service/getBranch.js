import { env } from "../../../../env"
import { formSupporModule } from "../../formSupportModule"
import { generalReplyModule } from "../../generalReplyModule"
import { ServiceRequest } from "../ShineServiceModule/ServiceRequestForm"


export var getBranchCode={
    async fetchBranchCode(){
        let url=`${env.basePath}branches/get-all-branches`
        try{
        let response=await fetch(url)
        let data=await response.json()
        return data
    }catch(err){
            console.log(err)
            generalReplyModule.init(err)
        }
    }
}

export var submitServiceRequest={
    async fetchSubmitServiceRequestForm(leads,code,token){
    leads.pinOptions="paper-pin"
    leads.BranchCode=code
    console.log("sssss",leads)
        let url=`${env.basePath}serviceRequest/card/newCard?type=card`
        try{
        let response=await fetch(url,{
            method:'POST',
            headers:{
                'Authorization': token,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            "accountNo":leads['AccountNumber'],
            "firstname":leads['FirstName'],
            "middlename":leads['MiddleName'],
            "lastname":leads['LastName'],
            "gender":leads['Gender'],
            "salutation":leads['Salutation'],
            "city":leads['City'],
            "dob":leads['DateOfBirth'],
            "phoneNo":leads['Phone'],
            "mobileNo":leads['MobileNo'],
            "email":leads['eMail'],
            "collectFromBranch":leads['BranchCode'],
            "address":leads['Address'],
            "citizenshipNo":leads['CitizenshipNo'],
            "pinOptions":leads['pinOptions']
            })
        })
        const value = await response.json()
        console.log("value",value)
        if(value.data.code === 0){
            console.log("Success !!!")
            formSupporModule.clear();
            ServiceRequest.clear();
            generalReplyModule.init(value.data.message)
        
        }
        else{
            console.log("Error !!!")
            formSupporModule.clear();
            ServiceRequest.clear();
            generalReplyModule.init(value.data.message)
        }
    }catch(err){
            console.log(err)
            formSupporModule.clear();
            generalReplyModule.init(err)
        }
    }
 
}