import { env } from "../../../../env";
import { LoadingModule } from "../../../general/loading";
import { generalReplyModule } from "../../generalReplyModule";
import { DisputeValidation } from "../ShineServiceModule/disputeValidation";


export var serviceRequestData = {
    data: '',
    code: '',
    leads: {},
    token: '',
    acount_num:'',
    citizenNo:'',
    terminalList:{},
    mobile:'',
    init: function (data, token,actnum,citizen,mobile,terminal) {
        this.data = data;
        this.token = token;
        this.acount_num=actnum;
        this.citizenNo=citizen;
        this.mobile=mobile;
        this.terminalList=terminal;
        console.log("0.0.0002.0",this.data,this.token,this.acount_num,this.mobile)
            this.cacheDOM();
            this.render();
            this.bindEvents();
      

    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    bindEvents: function () {
        this.$container.find('#devicetype').on('change', this.onChange.bind(this));
        this.$container.find('#terminaltypeID').on('change', this.onChangeValue.bind(this));

    },
    cacheDOM: function () {
        this.$parent = $('#message-module');

    },
    render: function () {
        this.$container = $('<div id="service-form"></div>');
        this.$container.addClass('container pb-4 pt-2 shadow-lg col-10 mb-3');
        this.$container.css({ 'margin-top': '-6px' })
        let head = $(`<h5 class="heading_wrap p-3 text-center text-white">${this.data.Name}</h5>`)
        head.css({ "background-color": "#0088CE" })
        head.appendTo(this.$container)

        this.$form_Group = $('<form" id="form_contID"></form>')
        //    // here starting of the after otp submitting form
        this.sec_container = $('<div id="Sec_containerform"></div>')
        let value = this.data.disputeCard
        console.log("this is value", value)
        value.map((element) => {
            this.$Div = $('<div class="form-group"></div>').appendTo(this.$form_Group)
            this.$label = $(`<label class="pl-1">${element.label}</label>`)
            this.$label.appendTo(this.$Div)
            this.$input = $(`<input type="text" class="form-control shadow-none" autocomplete="off">`)
            this.$input.attr('id', element.id)
            this.$input.attr('type', element.type)
            this.$input.appendTo(this.$Div)

            // to disabled past date from txn date and request date
            if (element.id === 'txnDate' || element.id === 'reqDate') {
                let dtToday=new Date()
                var month = dtToday.getMonth() + 1;
                var day = dtToday.getDate();
                var year = dtToday.getFullYear();
            
                if(month < 10)
                month = '0' + month.toString();
                if(day < 10)
                day = '0' + day.toString();
        
                var maxDate = year + '-' + month + '-' + day;  
                if(element.id === 'txnDate'){
                this.$input.attr('max', maxDate)
                }
                else{
                this.$input.attr('min', maxDate)
                }
            }

            //  to add required 
            if(element.id!=='mobile'){
                this.$label.addClass('required')
            }

            if(element.id == 'mobile'){
            this.$input.attr('value',this.mobile)
            }
        })
        //  for detail text area
        this.textDiv = $('<div class="form-group"></div>').appendTo(this.$form_Group)
        this.text_label = $(`<label class="pl-1">${this.data.detail.label}</label>`).appendTo(this.textDiv)
        this.$textarea = $('<textarea class="form-control shadow-none" rows="3"></textarea>')
        this.$textarea.attr('id', this.data.detail.id)
        this.$textarea.attr('placeholder', this.data.detail.placeholder)
        this.$textarea.appendTo(this.textDiv)
        // end of the detail text area


        // starting of the device type dropdown
        this.DeviceDiv = $('<div class="form-group"></div>').appendTo(this.$form_Group)
        this.device_label = $('<label class="pl-1 required">Device Type</label>').appendTo(this.DeviceDiv)
        this.device_select = $(`<select class="form-control shadow-none" id="devicetype"></select>`).appendTo(this.DeviceDiv)
        this.data.dropdown.deviceType.map((element) => {
            this.optiion = $(`<option>${element.for}</option>`).appendTo(this.device_select)
        })

        // here is the code for terminal type
        this.TerminalType = $('<div class="form-group"></div>').appendTo(this.$form_Group)
        this.terminal_label = $('<label class="pl-1 required">Terminal Type</label>').appendTo(this.TerminalType)
        this.$terminal_select = $('<select class="form-control shadow-none" id="terminaltypeID"></select>').appendTo(this.TerminalType)
        this.data.dropdown.TerminalTypeATM.map((element) => {
            this.option = $(`<option>${element.for}</option>`).appendTo(this.$terminal_select)
        })
        // here is the code for terminal 
        this.Terminal = $('<div class="form-group"></div>').appendTo(this.$form_Group)
        this.ter_label = $('<label class="pl-1 required">Terminal</label>').appendTo(this.Terminal)
        this.$ter_select = $('<select class="form-control shadow-none" id="terminalId"></select>').appendTo(this.Terminal)
        this.data.dropdown.TerminalATM.OURATM.map((element) => {
            this.ter_option = $(`<option>${element.for}</option>`).appendTo(this.$ter_select)
        })

        // here is the code for dispue type
        this.DisputeType = $('<div class="form-group"></div>').appendTo(this.$form_Group)
        this.dispute_label = $('<label class="pl-1 required">Dispute Type</label>').appendTo(this.DisputeType)
        this.$dispute_select = $('<select class="form-control shadow-none" id="Dispute_select"></select>').appendTo(this.DisputeType)
        this.data.dropdown.disputeType.map((element) => {
            this.dispute_option = $(`<option>${element.for}</option>`).appendTo(this.$dispute_select)
        })
        // here is button submit
        this.$btnDiv = $('<div class="form-group d-flex"></div>').appendTo(this.$form_Group)

        this.data.FormButton.map((element) => {
        this.$btn_submit= $(`<button class="btn shadow-none text-white"></button>`).appendTo(this.$btnDiv)
        this.$btn_submit.attr('id', element.id)
        this.$btn_submit.attr('type', element.type)
        this.$btn_submit. css({"font-size": "12px","background-color": "#0088CE"})
        this.$btn_submit.text(element.name)
            
        // HERE IS THE CODE FOR CLICK EVENT OF SUBMIT AND CANCEL BUTTON 
        this.$btn_submit.on('click', () => {
            // e.preventDefault()
            if (element.id === 'submit') {
                console.log("this is submit")
               let formData={}
                this.data.disputeCard.map((element) => {
                    formData[element.id] = $('#' + element.id).val()

                })
                let mobile=formData['mobile']
                let email=formData['email']
                let txndate=formData['txnDate']
                let txnAmount=formData['txnAmount']
                let reqdate=formData['reqDate']
                let claimAmount=formData['claimAmount']
                let textarea_val=$('#details').val()
                let devicetype=$('#devicetype').val()
                let terminal_val=$('#terminaltypeID').val()
                let terminalName=$('#terminalId').val()
                let dispute_val=$('#Dispute_select').val()

                let select_val={mobile,email,txndate,txnAmount,reqdate,claimAmount,textarea_val,devicetype,terminal_val,terminalName,dispute_val}
                // console.log("form input value ",select_val)
                this.formleads(select_val)
            } 
            else if (element.id === 'cancel') {
                this.clear();
            }
        })

        })

        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$parent)
    },
    onChange: function (e) {
        this.$terminal_select.empty();
        if (e.target.value === "ATM") {
            this.data.dropdown.TerminalTypeATM.map((element) => {
                this.option = $(`<option>${element.for}</option>`).appendTo(this.$terminal_select)
            })
        }
        else if (e.target.value === "POS") {
            this.data.dropdown.TerminalTypePOS.map((element) => {
                this.option = $(`<option>${element.for}</option>`).appendTo(this.$terminal_select)
            })
        }

    },
    onChangeValue: function (e) {
        console.log("this is onchange value", e.target.value)
        this.$ter_select.empty();
        if (e.target.value === 'Our ATM') {
                     this.terminalList.map((element) => {
                this.ter_option = $(`<option value=${element.code}>${element.title}</option>`).appendTo(this.$ter_select)
                console.log("this is terminal", element)
            })
        }
        else if (e.target.value === 'Other ATM') {
            this.$ter_select.empty();
            this.data.dropdown.TerminalATM.OtherATM.map((element) => {
                console.log("this is other atm", element.for)
                this.ter_option = $(`<option>${element.for}</option>`).appendTo(this.$ter_select)

            })
        }
        let termonal= this.data.dropdown.TerminalTypeATM[0].for
        if(e.target.value === termonal){
            console.log("this is our atm",termonal)
            this.ter_option = $(`<option>${termonal}</option>`).appendTo(this.$ter_select)
        }
        // else if(e.target.value === '')
        else if (e.target.value === 'Our POS') {
            this.$ter_select.empty();
            this.Terminal.hide()
            // this.data.dropdown.TerminalPOS.OURPOS.map((element) => {
            //     this.ter_option = $(`<option>${element.for}</option>`).appendTo(this.$ter_select)
            // })
        }
        else if (e.target.value === 'Other POS') {
            this.$ter_select.empty();
            this.Terminal.show()
            this.data.dropdown.TerminalPOS.OtherPOS.map((element) => {
                console.log("this is other pos", element.for)
                this.ter_option = $(`<option>${element.for}</option>`).appendTo(this.$ter_select)
            })
        }
    },
    formleads: function (data, token) {
        // console.log('this is form leads', data)
        this.validation()
        this.scrollBottom();
        let error =DisputeValidation.checkError();
        if(!error){
           this.leadsCaptures(data) 
        }

    },
    validation: function () {
        // console.log("this is value of validation")
        DisputeValidation.init(this.data)
    },
    leadsCaptures: function (leads) {
        this.leads=leads
        let postUrl=''
        postUrl=`${env.basePath}serviceRequest/card/disputeClaim?debitAccountNo=${this.acount_num}&citizenship=${this.citizenNo}&type=card`
        console.log("this is leads capture", leads)
        this.fetchVerifyData(postUrl)
    },
    fetchVerifyData:function(postUrl){
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Authorization':this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobileNumber":this.leads['mobile'],
                "email":this.leads['email'],
                "txnDate":this.leads['txndate'],
                "deviceType":this.leads['devicetype'],
                "terminalType":this.leads['terminal_val'],
                "terminal":this.leads['terminalName'],
                "detail":this.leads['textarea_val'],
                "disputeType":this.leads['dispute_val'],
                "txnAmount":this.leads['txnAmount'],
                "claimAmount":this.leads['claimAmount'],
                "requestedDate":this.leads['reqdate']

            })
        })
        .then((response)=>{
            console.log("response error",response)
                console.log("response status",response.ok)
                return response.json();
        })
        .then((data)=>{
            this.actdata=data
            console.log("this is data",data)

            if(data.data.code === 0){
                this.clear();
                generalReplyModule.init(data.data.message)
            }else{
                console.log("this is dispute",data.data.message)
                throw new Error(data.data.message)
            }
        })
        .catch((err)=>{
            console.log("this is dispute error",err)
            this.clear();
            generalReplyModule.init(err)
            LoadingModule.clear();
        })
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    }

}