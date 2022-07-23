import { env } from '../../../env';
import { socketModule } from '../../core/socket';
import { cookie } from '../../general/cookie';
import { LoadingModule } from '../../general/loading';
import { multipleTitle } from '../../general/multipleTitleModule';
import { validationModule } from '../validationModule';
const randomBytes = require('crypto').randomBytes

export var FormModule = {
    data: {},
    form_Module: '',
    init: function (data) {
        this.data = data;
        this.form_Module = randomBytes(8).toString('hex');
        // console.log("this is unique form id", this.form_Module)
        this.postURL = function () {
            let url = this.data.action;
            if (url.startsWith('http:') || url.startsWith('https:')) {
                // alert("start with https");
                let action = url;
                return action
            }
            else {
                let action1 = `${env.protocol}://${env.server}:${env.port}${url}`
                // alert("not contained");
                return action1
            }
        }
        this.cacheDOM();
        this.render();
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

        //this is for title
        let parentElem = this.$parent.find('.message-section').find('ul');
        this.renderElem = $('<li class="sent"><img src=' + env.Orgimg + ' alt="" /><p>' + this.data.subtype + '</p></li>');
        // console.log("this is value ", this.data.subtype)
        this.renderElem.appendTo(parentElem);

        this.$form_Module = $('<div  id="form_Module" class="mb-5"></div>');
        this.formDisplay = $('<div class="d-flex justify-content-center"></div>')
        this.$formBackground = $('<div class="col-11 shadow-lg font_size form_background"></div>')

        this.$textCenter = $('<div class="text-center background_color p-2 mt-3"></div>');
        this.headingText = $(`<h5 class="text-white font-weight-bold">${this.data.Name}</h5>`)

        this.headingText.appendTo(this.$textCenter);
        this.$textCenter.appendTo(this.$formBackground)


        // here is the starting of the form container
        this.$formContainer = $('<div class=" p-2"></div>')

        this.data.data.forEach(element => {
            let $formGroup = $(' <div class="form-group rounded-left"></div>');
            let $labels = $(`<label for=${element.id} class="ps-2">${element.label}</label>`);

            if (element.validation.required) {
                $labels.addClass('required');
            }
            $labels.appendTo($formGroup);

            if (element.type === 'dropdown') {
                let countryDropdowncontent = $(`<select class="mdb-select md-form"></select>`).appendTo($formGroup);
                $(`<option value="" disabled selected>${element.placeholder}</option>`).appendTo(countryDropdowncontent);
                element.data.forEach((elements) => {
                    $(`<option value="${elements.for}">${elements.for}</option>`).appendTo(countryDropdowncontent);
                })
            }
                // for date input type 

            //    else if(element.type==='Date'){
            //     let $input = $(`<input type=${element.type} id=${element.id} class="form-control shadow-none font_size" min='2022-03-08' max='2022-03-10'/>`);
            //     $input.attr('placeholder', element.placeholder);
            //     $input.appendTo($formGroup);
            //     }
            else {
                let $input = $(`<input type=${element.type} id=${element.id} class="form-control shadow-none font_size" autocomplete="off"/>`);
                $input.attr('placeholder', element.placeholder);
                $input.attr('autocomplete','off');
                if(element.type === 'number'){
                //    this is used to remove e / E - + sign from the input field where type number 
                    $input.attr('onkeydown','return event.keyCode !== 69 && event.keyCode !== 107 && event.keyCode !== 109 && event.keyCode !== 101')
                }
                $input.appendTo($formGroup);
            }
            $formGroup.appendTo(this.$formContainer);
        });
        let drop= this.data.Name
        console.log("this is dropdown",drop)
        if(drop === 'Complain'){
            console.log("this is dropdown")
            if (this.data.hasOwnProperty("dropdown")) {
                console.log("this is dropdown property")
                let countryDropdowncontent = $(`<select class="mdb-select md-form mt-2"></select>`).appendTo(this.$formContainer);
                $(`<option value="" disabled selected>${this.data.dropdown.placeholder}</option>`).appendTo(countryDropdowncontent);
                this.data.dropdown.data.forEach((element) => {
                    $(`<option value="${element.for}">${element.for}</option>`).appendTo(countryDropdowncontent)
                })
                countryDropdowncontent.addClass('margin_bottom')
            }
         }
        else{
            $('select').remove();
        } 

        if (this.data.hasOwnProperty("problem")) {
            this.data.problem.map(elementss => {
                this.$problem_parent=$('<div class="form-group"></div>')
                // console.log("hello", elementss.label)
                let $label = $(`<label for=${elementss.id} id="text_area" class="ps-2 font_size">${elementss.label}</label>`)
                // console.log("log label", $label)
                if (elementss.validation.required) {
                    $label.addClass('required')
                }
                $label.appendTo(this.$problem_parent)

                let $input = $(`<textarea type=${elementss.type} class="form-control shadow-none font_size" maxlength="500"/>`)
                $input.attr('rows', 3);
                $input.attr('id',elementss.id)
                $input.attr('placeholder', elementss.placeholder);
                $input.css({ 'max-height': '100px', 'min-height': '50px' });
                $input.appendTo(this.$problem_parent);
            })
            this.$problem_parent.appendTo(this.$formContainer)
        }
        this.$btnContainer = $('<div id="btn-container"></div>');
        this.$btnContainer.css({ 'display': 'flex', "margin-top": "20px", 'justify-content': 'space-between','position': 'relative' });

        this.data.buttons.data.forEach((button, index) => {
            let $button = $('<button class="btn button_color  rounded-pill  pl-3 pr-3 font_size shadow-none"></button>');
            $button.css({ 'cursor': 'pointer', "border-radius": "10px", "margin-top": "10px" });
            $button.addClass(`btn-${index}`);
            // console.log('this is button index',index)
            (index % 2 === 0) ? $button.addClass('btn button_color') : $button.addClass('btn btn-secondary');
            $button.text(button.text);
            $button.click(() => {
                this.btnClick(button.type, this.data)
                // console.log("this is button data",button.type)
            });
            $button.appendTo(this.$btnContainer);
        });
        this.$btnContainer.appendTo(this.$formContainer);
        this.$formContainer.appendTo(this.$formBackground)
        this.$formBackground.appendTo(this.formDisplay)
        this.formDisplay.appendTo(this.$form_Module)
        this.$form_Module.appendTo(this.$parent)
        $('.mdb-select').materialSelect();
    },
    bindEvents: function () {
        this.$btnContainer.find('button').on('click', this.btnClick.bind(this));
    },
    btnClick: function (type, data) {
        // alert('before submit',data)
        if (type === 'submit') {
            let selected_value = $(`.mdb-select`).val();
            this.formleads(selected_value, data.subtype);
        }
        if (type === 'cancel') {
            let selectf_id=this.data.f_id
            console.log("this is selectf_id",selectf_id)
            this.clear();
            if(selectf_id === undefined){
              let  cancel_payload={title:this.data.cancel_payload.title,payload:this.data.cancel_payload.payload}
                socketModule.messageSend(cancel_payload)
            }
            else if(selectf_id === 'nepali'){
              let  payload1={title:this.data.nepali_payload.title,payload:this.data.nepali_payload.payload}
              console.log("this is nepali payload",payload1)
                socketModule.messageSend(payload1)
            }
            // console.log("cancel button clicked", this)
        }
    },
    formleads: function (selected_catagories) {
        this.validateForm();
        this.scrollBottom();
        let error = validationModule.checkError();
        // console.log("not error", error)
        if (!error) {
            LoadingModule.init('#btn-container');
            let formData = {};
            this.data.data.forEach(element => {
                formData[element.id] = $('#' + element.id).val();
                // console.log("formData = ", formData);
            });
            this.data.problem.map(element1 =>{
                formData[element1.id] = $('#' + element1.id).val();
                console.log("formData = ", formData);
            });
            this.leadsCaptures(formData,selected_catagories)
            .then((response) => {
                if(response.ok){
                    console.log("response status",response.ok)
                    return response.json();
                }else{
                    throw new Error();
                }
            })
            // for response using fetch
            .then((response)=>{
                  if(response){
                        LoadingModule.init('#message-input-module');
                        let differentCountry = {
                        type: "multiple-title",
                        title: [
                        `Dear ${response.full_name}, your request  is received and we will get back to you soon ${this.data.hasOwnProperty("lastContactText") ? this.data.lastContactText : ""} ${this.data.email},Thank you.`
                        ]
                        }
                        this.clear();
                        multipleTitle.clear();
                        multipleTitle.init(differentCountry);
                        LoadingModule.clear();
                }
                else{
                    throw new Error();
                }
            })
            .catch((err)=>{
                console.log("this is catch error",err)
                this.clear();
                let differentCountry = {
                type: "multiple-title",
                title: [
                "Dear " + formData.fullName + " , Due to technical problem we can't get your info. "
                ]
                }
                multipleTitle.clear();
                multipleTitle.init(differentCountry);
                LoadingModule.clear();
            })

        }
    },
    validateForm: function () {
        validationModule.init(this.data);
        // console.log('this is validation module',this.data)
    },
    leadsCaptures: function (leads, selected_catagories) {
        let id = cookie.getCookie('uniqueID');
        // alert("id", id);
        // console.log('data', leads['emailAddress']);
        console.log("postURL", this.postURL());
        let url = `${this.postURL()}`;
        return fetch(url + `?category=${selected_catagories}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'auth': env.salt_key || ""
            },
            body: JSON.stringify({
                "full_name": leads['fullName'] || leads['fullname'],
                "mobile_number": leads['mobileNumber'],
                "email_address": leads['emailAddress'],
                "account_number": leads['accountNumber'],
                "atm_number": leads['atmNumber'],
                "title": leads['title'],
                "problem": leads['problem'],
                "category": selected_catagories,
                "suggestion":leads['suggestion'],
                "visitorId": id,
            })
        })
    },
    clear: function () {
        if (this.$form_Module) {
            this.$form_Module.remove();
        }
    },
}

