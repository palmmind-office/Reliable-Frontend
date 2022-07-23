import { env } from "../../../../../env";
import { generalReplyModule } from "../../../generalReplyModule";
import { ServiceRequestValidation } from "../serviceRequestValidation";
import { Mobilebanking } from "./MobileBankingForm";
import { mobileBankingServices } from "./mobileBankingServices";


export var Otp_validationService = {
    data: {},
    leads: {},
    token: '',
    res_data:{},
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.getData();
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
        this.renderElem.appendTo(this.$parentElem);

        this.$container = $('<div id="mobile-form"></div>');
        this.$container.addClass('container pb-2 pt-2 shadow-lg col-10 mb-3');
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
        let otpbtn = $(`<button id="mobile_verifyBtn">${this.data.OtpVerify.name}</button>`)

        otpbtn.addClass('btn d-block pl-3 pr-3 rounded-pill text-white shadow-none')
        otpbtn.css({ "background-color": "#0088CE", "fontSize": "12px" })
        otpbtn.appendTo(this.$form_Group)

        otpbtn.click(function (e) {
            console.log("this is otp btn click")
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
                    //  postUrl = `rest/v1/serviceRequest/verifyOtp`
                    postUrl=`rest/v1/test/otp`
                    this.fetchOtpVerifyData(otpData,postUrl);
                }
                if (elements.name === "Resend") {
                    // postUrl=`rest/v1/serviceRequest/submitData`
                    postUrl=`rest/v1/test/`
                    this.fetchPostRequest(postUrl);

                }
            }.bind(this)))
        })

        this.$OTPDiv.appendTo(otpform)
        otpform.appendTo(this.$form_Group)

     
        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$parent)
        this.scrollBottom();

        let otpval = otpbtn.length
    
        $(document).ready(function () {
            $('#otpID').hide()
            $('#formButton').hide();
            $('.submit_button').hide();
        })
    
    },
    bindEvents: function () {
        this.$container.find('#mobile_verifyBtn').on('click', this.btn_click.bind(this));
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
            });
            this.leadsCaptures(formData);
        }
    },
    validateService: function () {
        ServiceRequestValidation.init(this.data);
    
    },
    leadsCaptures: function (leads) {
        this.leads = leads
        let postUrl = ''
        // postUrl=`${env.basePath}serviceRequest/submitData`
        postUrl = `${env.basePath}test/`
        this.fetchPostRequest(postUrl)
    },
    fetchPostRequest: function (postUrl) {
        // console.log("this is post url",postUrl)
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
                return response.json();
            })
            .then((data) => {
                if (data.status === "success") {
                    $('#otpID').show(200)
                    $('#mobile_verifyBtn').remove()
                    this.token = data.token
                } else {
                    throw new Error(data.message)
                }
            })
            .catch((err) => {
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
                return response.json();
            })
            .then((data) => {
                if (data.status === "success") {
                let token_value=data.token
                let account_num=data.data.AccountNumber
                let citizenNo=data.data.CitizenshipNo
                let accountName=data.data.AccountName
                let email=data.data.eMail
                let address=data.data.Address
                let branchcode=data.data.BranchCode
                let mobile=data.data.MobileNo
                let value={token_value,account_num,citizenNo,accountName,email,address,branchcode,mobile}
                this.clear();
                Mobilebanking.init(this.data.data,value);
                } else {
                    throw new Error(data.message)
                }
            })
            .catch((err) => {
                console.log("this is error",err)
                this.clear()
                generalReplyModule.init(err)
                this.scrollBottom();

            })


    },
    getData: async function () {    
        const info = await mobileBankingServices.CRN()
        let branch = []
        if (info.status === 'success') {
            branch = info.data
            Mobilebanking.getData(branch)
            console.log("this is otp data",branch)
        }
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    }
}