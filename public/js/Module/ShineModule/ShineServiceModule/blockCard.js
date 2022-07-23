
import { env } from "../../../../env";
import { BalanceValidation } from "./BalanceValidation";
import { LoadingModule } from "../../../general/loading";
import { multipleTitle } from "../../../general/multipleTitleModule";
import { BlockCardValidation, BlockValidation } from "./BlockValidation";
import { getBranchCode } from "../Service/getBranch";
// import { BalanceValidation } from "./BalanceValidation";


export var BlockCardModule = {
    data: {},
    actdata:{},
    verify:false,
    leads:{},
    token:'',
    actNum:'',
    details:'',
    branch:'',
    mobile:'',
    blockReason:'',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.collectBranch();
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

        this.$container = $('<div id="container_div"></div>');
        this.$container.addClass('container pb-4 pt-2 mb-4 shadow-lg col-10');
        this.$container.css({ 'margin-top': '-6px' })
        let head = $(`<h5 class="heading_wrap p-3 text-center text-white">${this.data.Name}</h5>`)
        head.css({ "background-color": "#0088CE" })
        head.appendTo(this.$container)

        this.$form_Group = $('<form" id=""></form>')

        let dataelement = this.data.data;
        console.log("this is data element", dataelement)
        dataelement.map(element => {
            // console.log("this is placehiolder", element.placeholder)
            this.$inputdiv = $('<div></div>')
            this.$inputdiv.addClass('form-group')
            this.$label = $(`<label class="pl-1">${element.label}</label>`)

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
        this.$Otp_input = $('<input type="text" id="Otp_id" autocomplete="off" />')
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

        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$parent)

        let otpval = otpbtn.length
        // console.log("value of otp", otpval)

        $(document).ready(function () {
            $('#bal_otpID').hide()
            // $('#get_submit').hide()
        })

    },
    blockCard_form:function(num,data){
        this.$containers = $('<div id="block_requestForm"></div>');
        this.$containers.addClass('container pb-4 pt-2 mb-4 shadow-lg col-10');
        data.card.map(element => {
            this.actNumDiv = $('<div class="form-group"></div>').appendTo(this.$containers);
            this.$label=$(`<label class="pl-1">${element.label}</label>`);
            this.$label.css({'font-size':'12px'})
            this.$input=$(`<input class="form-control shadow-none" autocomplete="off" id="${element.id}"/>`);
            this.$input.attr('type',element.type)
            if(data.title==="Block Card"){
               if(element.id==='account_number'){
                this.$input.attr('value',num)
               }
            }else{
                this.$input.attr('value',num)
            }
            this.$input.attr('placeholder',this.data.placeholder);
            this.$label.appendTo(this.actNumDiv);
            this.$input.appendTo(this.actNumDiv);
        })
        this.actNumDiv.appendTo(this.$containers);

        // for repin entry dropdown
        this.$dropdown=$(`<div id="dropdown" class="form-group"></div>`)
        this.dropdown_label=$(`<label class="pl-1">${this.data.dropdown.title}</label>`).appendTo(this.$dropdown)
        this.dropdown_label.css({'font-size':'12px'})

        if(this.data.title==="Repin Entry"){
        this.$select=$(`<select id="d_select" class="form-control shadow-none"></select>`)
        this.$select.appendTo(this.$dropdown)
        this.branch.map((elements)=>{
        this.option=$(`<option value="${elements.code}">${elements.name}</option>`)
        this.option.appendTo(this.$select)
        this.$select.appendTo(this.$dropdown)   
        })
        }else{
            this.$select=$(`<select id="d_select" class="form-control shadow-none"></select>`)
            this.$select.appendTo(this.$dropdown)
            this.data.dropdown.data.map((elements)=>{
            this.option=$(`<option>${elements.for}</option>`)
            this.option.appendTo(this.$select)
            this.$select.appendTo(this.$dropdown)   
            })
        }
        this.$dropdown.appendTo(this.$containers)

        //here submit button start here
        this.$formButotn = $('<div  id="formButton"></div>')
        this.$formButotn.addClass('d-flex justify-content-between shadow-none')
        this.data.formbutton.map(el=>{
            this.button = $(`<button>${el.name}</button>`)
            this.button.attr('type',el.type)
            this.button.attr('id',el.id)
            this.button.addClass('btn cancel_button text-white')
            this.button.css({ "background-color": "#0088CE", "fontSize": "12px" })
            this.button.appendTo(this.$formButotn)
                    
        this.button.on('click', () => {
            if(el.type==='submit'){      
                let type=this.data
                // console.log("this.data.title",this.data.title)
                if(type.title==="Block Card"){
                    let blockreason={}
                    console.log("here is this.data",this.data.card)
                    this.data.card.map(element => {
                        console.log("here is element",element)
                         blockreason[element.id]=  $('#'+ element.id).val()
                    })
                // console.log("block reason",blockreason)
                let reason=blockreason.b_reason
                // console.log("block reason",reason)
                let actNUm=blockreason.account_number
                // console.log("actNUm",actNUm)
                    // this.blockReason=blockreason
                   let cardtype=  this.$select.val()
                   let vale={reason,actNUm,cardtype}
                this.responsevalidate(vale)

                }else{
                    let actnum= this.$input.val()
                    let collectBranch= this.$select.val()
                    // console.log("collectBranch",collectBranch)
                    let vale={actnum,collectBranch}
                    this.fetchresponseData(vale)
                }  
   
            }
            else{
                this.clear();
                this.$containers.remove();
                LoadingModule.clear();
            }
   
        })
        })


        this.$formButotn.appendTo(this.$containers)
        this.$containers.appendTo(this.$parent);
        this.scrollBottom();


    },
    collectBranch:async function(){
    //  const arr=Object.keys(data.data);
     const branch=await getBranchCode.fetchBranchCode();
     let branches=[]
    if(branch.status==="success"){
          branches=branch.data;  
          this.branch=branches;
    }

    },
    bindEvents: function () {
        this.$container.find('#bal_verifyBtn').on('click', this.btnClick.bind(this));
    },
    btnClick: function () {
        let selectedval = $('.input_wrap').val()
        this.formleads(selectedval)
    },
    formleads: function () {
        this.validateBlockForm()
        this.scrollBottom();
        let error = BlockValidation.checkError();
        // console.log("not error", error)
        if (!error) {
            let formData = {};
            this.data.data.forEach(element => {
                formData[element.id] = $('#' + element.id).val();
                console.log("formData = ", formData);
                if(element.id==='actNum'){
                    let actNum= formData['actNum'];
                    this.actNum=actNum;
                }
            });
            this.leadsCaptures(formData)
        }
    },
    validateBlockForm: function () {
        BlockValidation.init(this.data)
    },
    validateBlockCard:function(){
        BlockCardValidation.init(this.data)
    },
    leadsCaptures: function (leads) {
        this.leads=leads
        console.log("this is leads captures",leads)
                let postUrl = ''
                    // postUrl='rest/v1/serviceRequest/submitData'
                    // postUrl='rest/v1/test'
                    postUrl=this.data.action3
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
                throw new Error(data.message)
            }

            
        })
        .catch((err)=>{
            console.log("error",err)
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
        // let postUrl='rest/v1/serviceRequest/verifyOtp'
    //    let postUrl='rest/v1/test/otp'
    let postUrl=this.data.action2
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
                $('#container_div').remove()
                this.blockCard_form(this.actNum,this.data);
                console.log("hello sanjay",this.actNum,this.data)
                // $('#get_submit').show()
                this.actdata=data
                this.details=data.token
                this.mobile=data.data['MobileNo']
                // console.log("this is token generated by verifyotp",this.details)

                console.log("this is data",data)
                    // this.verifyData();
                    // console.log("check verifyt data")
            }else{
                throw new Error(data.message);
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
    responsevalidate:function(val){
        this.validateBlockCard()
        let error=BlockCardValidation.checkError()
        if(!error){
            this.fetchresponseData(val)
        }
        },
    fetchresponseData:function(val){
        val.mobile=this.mobile
        // val.account_number=this.actNum
        // val.b_reason=this.blockReason

        if(this.data.title==='Block Card'){
       
            // console.log("this is val",val)
            // let postUrl=`rest/v1/serviceRequest/getAcntDetail?actNum=${this.leads['actNum']}&mobile=${this.leads['mobile']}`
            // let postUrl='rest/v1/test/block'
          let  postUrl=this.data.action1
          console.log("response url",postUrl)
            const obj = {
                blockReason: val['reason'],
                actNum: val['actNUm'],
                blockType: val['cardtype']
            }
            console.log("body data",obj)
            fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Authorization': this.details,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(obj)
            })
            .then((response)=>{
                return response.json();
        })
        .then((data)=>{
            console.log("this is data",data)
            if(data.data.code === 0){
                console.log("not error")
            this.actdata=data.data
            console.log("this is data",data)
            this.verifyData();
                // $('#container_div').show(200)
         
            }else{
                console.log("this is error message of response",data.data.message)
                throw new Error(data.data.message);
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
            $('#block_requestForm').remove()
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
        })
        }else{
            console.log("this is val",val)
            // let postUrl=`rest/v1/serviceRequest/getAcntDetail?actNum=${this.leads['actNum']}&mobile=${this.leads['mobile']}`
            // let postUrl='rest/v1/test/block'
          let  postUrl=this.data.action1
          console.log("response url",postUrl)
            // console.log('this is token passed from verify otp data',this.details)
            fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Authorization': this.details,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "actNum":val['actnum'],
                    "collectBranch":val['collectBranch'],
                    "mobile":val['mobile'],
                    "pinOptions":"paper-pin",
                })
            })
            .then((response)=>{
                return response.json();
        })
        .then((data)=>{
            if(data.code===0){
                this.validateBlockCard()
                let error=BlockCardValidation.checkError()
                if(!error){
                    this.actdata=data
                    console.log("this is data",data)
                    this.verifyData();
                }
         
            }else{
                throw new Error(data.data.message);
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
        }
    },
    verifyData:function(){
        // console.log("verify data",)
            LoadingModule.init('#message-input-module');
            let differentCountry = {
                
            type: "multiple-title",
            title: [
            `${this.actdata.message}`
            ]
            }
            // this.clear();
            $('#block_requestForm').remove()
            multipleTitle.clear();
            multipleTitle.init(differentCountry);
            LoadingModule.clear();
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
        if(this.$containers){
            this.$containers.remove();
        }
    }
}