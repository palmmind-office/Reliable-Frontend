import { env } from "../../../../env";
import { ServiceRequestValidation } from "./serviceRequestValidation";
import { generalReplyModule } from "../../generalReplyModule";
import { serviceRequestData } from "../Service/serviceRequest";

export var DisputeHandling = {
    data: {},
    leads: {},
    token: '',
    res_data:{},
    terminalList:{},
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.getTerminalList()
        this.render();
        this.bindEvents();
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    cacheDOM: function () {
        this.$parent = $('#message-module')
    },
    render: function () {
        this.$parentElem = this.$parent.find('.message-section').find('ul')
        this.renderElem = $('<li class="sent"><img src=' + env.Orgimg + ' alt="" /><p>' + this.data.title + '</p></li>');
        // console.log("this is value ", this.data.title)
        this.renderElem.appendTo(this.$parentElem);

        this.$container = $('<div id="dispute-form"></div>');
        this.$container.addClass('container pb-4 pt-2 shadow-lg col-10');
        this.$container.css({ 'margin-top': '-6px' })
        let head = $(`<h5 class="heading_wrap p-3 text-center text-white">${this.data.Name}</h5>`)
        head.css({ "background-color": "#0088CE" })
        head.appendTo(this.$container)

        this.$form_Group = $('<form" id="form_contID"></form>')
        this.$frst_container=$('<div id="frst_container"></div>')

        let dataelement = this.data.verifyData;
        dataelement.map(element => {
            // console.log("this is placehiolder", element.placeholder)
            this.$inputdiv = $('<div></div>')
            this.$inputdiv.addClass('form-group')
            this.$label = $(`<label class="pl-2">${element.label}</label>`)

            if (element.id != 'mname' && element.id != 'phone') {
                this.$label.addClass('required')
            }

            this.$label.appendTo(this.$inputdiv)
            this.$inputfield = $(`<input class="form-control val_select shadow-none" autocomplete="off"></input`)
            this.$inputfield.attr('placeholder', element.placeholder)
            this.$inputfield.attr('id', element.id)
            this.$inputfield.attr('type', element.type)
            this.$inputfield.appendTo(this.$inputdiv);
            this.$inputdiv.appendTo(this.$frst_container);
            this.$frst_container.appendTo(this.$form_Group)
        })

        // for OTP verification button
        let otpbtn = $(`<button id="dispute_verifyBtn">${this.data.OtpVerify.name}</button>`)

        otpbtn.addClass('btn d-block pl-3 pr-3 rounded-pill text-white shadow-none')
        otpbtn.css({ "background-color": "#0088CE", "fontSize": "12px" })
        otpbtn.appendTo(this.$form_Group)

        otpbtn.click(function (e) {
            e.preventDefault();
        })

        // for OTP verification 
        let otpform = $('<div id="otpform"></div>').addClass('mb-2')
        this.$OTPDiv = $('<div id="otpID"></div>')
        this.$OTPDiv.addClass('p-3 shadow-lg col-9')
        this.$Otp_label = $(`<label>Enter OTP and click on verify</label>`)
        this.$Otp_label.addClass('d-flex justify-content-center')
        this.$Otp_label.css({ 'fontSize': '12px' })
        this.$Otp_input = $('<input type="text" id="service_otpInput" autocomplete="off"/>')
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
                    // $('#Sec_containerform').show()
                    let otpData=$('#service_otpInput').val();
                    otpbtn.remove();
                    otpform.remove();
                    $('#formButton').show()
                    postUrl = `${env.basePath}serviceRequest/verifyOtp`
                    // postUrl=`rest/v1/test/otp`
                    
                    this.fetchOtpVerifyData(otpData,postUrl);

                }
                if (elements.name === "Resend") {
                    console.log("Resend button clicked")
                    // postUrl=`${env.basePath}test/`
                    postUrl=`${env.basePath}serviceRequest/submitData`
                    this.fetchPostRequest(postUrl);

                }
            }.bind(this)))
        })

        this.$OTPDiv.appendTo(otpform)
        otpform.appendTo(this.$form_Group)

     
        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$parent)

        let otpval = otpbtn.length
    


        $(document).ready(function () {
            $('#otpID').hide()
            $('#formButton').hide();
            $('.submit_button').hide();
        })
    
    },
    bindEvents: function () {
        this.$container.find('#dispute_verifyBtn').on('click', this.btn_click.bind(this));
    },
    btn_click: function () {
        // let selective_val = $('.val_select').val();
        this.formleads()
    },
    formleads: function () {
        this.validateService();
        this.scrollBottom();
        let error = ServiceRequestValidation.checkError()
        if (!error) {
            let formData = {};
            this.data.verifyData.forEach(element => {
                formData[element.id] = $('#' + element.id).val();
                console.log("formData = ", formData);
            });
            this.leadsCaptures(formData);
        }
    },
    validateService: function () {
        ServiceRequestValidation.init(this.data);
    },
    getTerminalList:async function(){
        let postUrl=`${env.basePath}serviceRequest/card/terminal`
        // console.log("this is api for getting terminal",postUrl)
            try{
            let response=await fetch(postUrl)
            let data= await response.json()
            console.log("this is data",data)
            if(data.status === 'success'){
                this.terminalList=data.data;
                console.log("this is terminal list",this.terminalList)
            }
        }catch(err){
                console.log(err)
                generalReplyModule.init(err)
            }
    },
    leadsCaptures: function (leads) {
        this.leads = leads
        console.log("this is leads captures", leads)
        let postUrl = ''
        console.log("this is  verify", this.data.OtpVerify.id)
        postUrl=`${env.basePath}serviceRequest/submitData`
        // postUrl = `${env.basePath}test/`
        this.fetchPostRequest(postUrl)
    },
    fetchPostRequest: function (postUrl) {
        console.log("this is post url",postUrl)
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "actNum": this.leads['actNum'],
                "actName": this.leads['actName'],
                "mobile": this.leads['mobile'],
            })
        })
            .then((response) => {
                console.log("response error", response)
                console.log("response status", response.ok)
                return response.json();
            })
            .then((data) => {
                console.log("this is data", data.status)
                if (data.status === "success") {
                    $('#otpID').show(200)
                    this.scrollBottom();
                    $('#dispute_verifyBtn').remove()
                    this.token = data.token
                } else {
                    throw new Error(data.message)
                }
            })
            .catch((err) => {
                console.log("this is catch error", err)
                this.clear()
                generalReplyModule.init(err)

            })
    },
    fetchOtpVerifyData: function (otp,postUrl) {
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobile":this.leads['mobile'],
                "otp": otp,
            })
        })
            .then((response) => {
                console.log("response error", response)
                console.log("response status", response.ok)
                return response.json();
            })
            .then(async(data) => {
                if (data.status === "success") {
                let token_value=data.token
                let account_num=data.data.AccountNumber
                let citizenNo=data.data.CitizenshipNo
                let terminallist=this.terminalList
                let mobile=data.data.MobileNo
                this.clear();
                serviceRequestData.init(this.data,token_value,account_num,citizenNo,mobile,terminallist);
                } else {
                    throw new Error(data.message)
                }
            })
            .catch((err) => {
                console.log("this is catch error", err)
                this.clear()
                generalReplyModule.init(err)

            })


    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    }
}