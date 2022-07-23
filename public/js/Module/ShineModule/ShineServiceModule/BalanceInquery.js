
import { env } from "../../../../env";
import { LoadingModule } from "../../../general/loading";
import { multipleTitle } from "../../../general/multipleTitleModule";
import { BalanceValidation } from "./BalanceValidation";


export var BalanceInquiry = {
    data: {},
    actdata:{},
    verify:false,
    leads:{},
    token:'',
    details:'',
    init: function (data) {
        this.data = data;

        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    cacheDOM: function () {
        this.$parent = $('#message-module');

    },
    render: function () {
        this.$parentElem = this.$parent.find('.message-section').find('ul')
        this.renderElem = $('<li class="sent"><img src=' + env.Orgimg + ' alt="" /><p>' + this.data.title + '</p></li>');
        // console.log("this is value ", this.data.title)
        this.renderElem.appendTo(this.$parentElem);

        this.$container = $('<div></div>');
        this.$container.addClass('container pb-4 pt-2 mb-4 shadow-lg col-10');
        this.$container.css({ 'margin-top': '-6px' })
        let head = $(`<h5 class="heading_wrap p-3 text-center text-white">${this.data.Name}</h5>`)
        head.css({ "background-color": "#0088CE" })
        head.appendTo(this.$container)

        this.$form_Group = $('<form" id="balnceform_contID"></form>')

        let dataelement = this.data.data;
        dataelement.map(element => {
            // console.log("this is placehiolder", element.placeholder)
            this.$inputdiv = $('<div></div>')
            this.$inputdiv.addClass('form-group')
            this.$label = $(`<label>${element.label}</label>`)

            if (element.id != 'Email') {
                this.$label.addClass('required')
            }
            this.$label.appendTo(this.$inputdiv)
            this.$inputfield = $(`<input class="form-control input_wrap shadow-none" autocomplete="off"></input`)
            this.$inputfield.attr('id', element.id)
            this.$inputfield.attr('placeholder', element.placeholder)
            this.$inputfield.appendTo(this.$inputdiv);
            this.$inputdiv.appendTo(this.$form_Group)

        })

        // for OTP verification button
        let otpbtn = $(`<button id="bal_verifyBtn">${this.data.OtpVerify.name}</button>`)
        otpbtn.addClass('btn d-block pl-3 pr-3 rounded-pill text-white shadow-none')
        otpbtn.css({ "background-color": "#0088CE", "fontSize": "12px" })
        otpbtn.appendTo(this.$form_Group)

        otpbtn.click(function (e) {
            e.preventDefault();

        })

        // for OTP verification 
        let otpform = $('<div id="bal_otpform"></div>')
        this.$OTPDiv = $('<div id="bal_otpID"></div>')
        this.$OTPDiv.addClass('p-3 shadow-lg col-9')
        this.$Otp_label = $(`<label>Enter OTP and click on verify</label>`)
        this.$Otp_label.addClass('d-flex justify-content-center')
        this.$Otp_label.css({ 'fontSize': '12px' })
        this.$Otp_input = $('<input type="text" id="Otp_id" autocomplete="off"/>')
        this.$Otp_input.addClass('form-control shadow-none')


        this.$Otp_label.appendTo(this.$OTPDiv)
        this.$Otp_input.appendTo(this.$OTPDiv)

        // mapping for otp form button
        let data = this.data.button
        let buttonDiv = $('<div></div>')
        buttonDiv.addClass('d-flex justify-content-around')
        data.map(elements => {
            this.btn_container = $('<div></div>')
            this.btn_container.css({ 'margin-top': '10px' })
            this.$btn = $(`<button>${elements.name}</button>`)
            this.$btn.addClass('btn rounded-pill shadow-none text-white')
            this.$btn.css({ "background-color": "#0088CE", "fontSize": "12px" })
            this.$btn.appendTo(this.btn_container)
            this.btn_container.appendTo(buttonDiv)
            buttonDiv.appendTo(this.$OTPDiv)
            this.$btn.on('click',(function (e) {
                e.preventDefault();
                let postUrl=''
                if (elements.name === "Check") {
                    console.log("check button clicked")
                    let otpinput=$('#Otp_id').val() 
                    otpbtn.remove();
                    otpform.remove(); 
                     
                    console.log("thius is otp",otpinput)              
                    this.fetchCheckOtpData(otpinput);
                           
                }
                if (elements.name === "Resend") {
                    $('#bal_otpID').show(200)                  
                    console.log("Resend button clicked")
                    // postUrl='rest/v1/test/ '
                    postUrl='rest/v1/serviceRequest/submitData'
                    this.fetchVerifyData(postUrl);
                }
                
            }.bind(this)))
        })

        this.$OTPDiv.appendTo(otpform)
        otpform.appendTo(this.$form_Group)
        // here is get data button
        let getdata=this.data.Databtn
        this.getdataDiv=$('<div id="get_submit"></div>').appendTo(this.$form_Group)
        this.getData=$(`<button>${getdata.name}</button>`).addClass('btn d-block pl-3 mt-2 pr-3 rounded-pill text-white shadow-none')
        this.getData.css({ "background-color": "#0088CE", "fontSize": "12px" })
        this.getData.click(function(){
        if(getdata.id==='getData'){
                console.log('this is alert mmessage')
                this.fetchresponseData()
        }
    }.bind(this))

        this.getData.appendTo(this.getdataDiv)
        

        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$parent)

        let otpval = otpbtn.length
        // console.log("value of otp", otpval)

        $(document).ready(function () {
            $('#bal_otpID').hide()
            $('#get_submit').hide()
        })

    },
    bindEvents: function () {
        this.$container.find('#bal_verifyBtn').on('click', this.btnClick.bind(this));
    },
    btnClick: function () {
        let selectedval = $('.input_wrap').val()
        this.formleads(selectedval)
    },
    formleads: function () {
        this.validateBalanceForm()
        this.scrollBottom();
        let error = BalanceValidation.checkError();
        // console.log("not error", error)
        if (!error) {
            let formData = {};
            this.data.data.forEach(element => {
                formData[element.id] = $('#' + element.id).val();
                console.log("formData = ", formData);
            });
            this.leadsCaptures(formData)
        }
    },
    validateBalanceForm: function () {
        BalanceValidation.init(this.data)
    },
    leadsCaptures: function (leads) {
        this.leads=leads
        // console.log("this is leads captures",leads)
                let postUrl = ''
                    // console.log("this is  verify",this.data.OtpVerify.id)
                    postUrl='rest/v1/serviceRequest/submitData'
                    // postUrl='rest/v1/test'
                this.fetchVerifyData(postUrl);
    },
    fetchVerifyData:function(postUrl){
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "actNum":this.leads['actNum'],
                "actName":this.leads['actName'],
                "mobile":this.leads['mobile'],
            })
        })
        .then((response)=>{
            console.log("response error",response)
                console.log("response status",response.ok)
                return response.json();
        })
        .then((data)=>{
            this.actdata=data
            console.log("this is data",data.status)

            if(data.status==="success"){
            $('#bal_verifyBtn').remove()
            $('#bal_otpID').show(200)
            this.token =data.token
             console.log("data is here",this.token)   
            }else{
                throw new Error(data.error)
            }

            
        })
        .catch((err)=>{
            this.clear();
            let differentCountry = {
            type: "multiple-title",
            title: [
            `${err}`
            ]    
            }
            multipleTitle.clear();
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
        })
    },
    fetchCheckOtpData:function(otp){
        let postUrl='rest/v1/serviceRequest/verifyOtp'
    //    let postUrl='rest/v1/test/otp'
        console.log('this is token passed from submit data',this.token)
        console.log('this is otp number',otp)
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "actNum":this.leads['actNum'],
                "actName":this.leads['actName'],
                "mobile":this.leads['mobile'],
                "otp":otp
            })
        })
        .then((response)=>{
                console.log("response status",response.ok)
                return response.json();
        })
        .then((data)=>{
            if(data.status==="success"){
            $('#get_submit').show()
                this.actdata=data
                this.details=data.token
                console.log("this is token generated by verifyotp")

                console.log("this is data",data)
                    // this.verifyData();
                    // console.log("check verifyt data")
            }else{
                throw new Error(data.error);
            }
        })
        .catch((err)=>{
            console.log("this is catch error",err)
            this.clear();
            let differentCountry = {
            type: "multiple-title",
            title: [
            `${err}`
            ]
            }
            multipleTitle.clear();
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
        })
    },
    fetchresponseData:function(){
        let postUrl=`rest/v1/serviceRequest/getAcntDetail?actNum=${this.leads['actNum']}&mobile=${this.leads['mobile']}`
    //   let  postUrl=`rest/v1/test/checkotp?actNum=${this.leads['actNum']}&mobile=${this.leads['mobile']}`
      console.log("response url",postUrl)
        console.log('this is token passed from verify otp data',this.details)
        fetch(postUrl, {
            method: 'GET',
            headers: {
                'Authorization': this.details
            }
        })
        .then((response)=>{
                console.log("response status",response.ok)
                return response.json();
        })
        .then((data)=>{
            if(data.status==="success"){
                this.actdata=data
                console.log("this is data",data)
                this.verifyData();
                console.log("check verifyt data")
            }else{
                throw new Error(data.error);
            }
        })
        .catch((err)=>{
            // console.log("this is catch error",err)
            this.clear();
            let differentCountry = {
            type: "multiple-title",
            title: [
            `${err}`
            ]
            }
            multipleTitle.clear();
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
        })
    },
    verifyData:function(){
        // console.log("verify data",)
            LoadingModule.init('#message-input-module');
            let differentCountry = {
            type: "multiple-title",
            title: [
            `Dear ${this.actdata.details.AccountName}, your Balance is RS ${this.actdata.details.Balance},Thank you.`
            ]
            }
            this.clear();
            multipleTitle.clear();
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    }
}