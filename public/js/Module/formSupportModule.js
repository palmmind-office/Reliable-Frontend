import { validation1Module } from './validationRequetService.js';
const randomBytes = require('crypto').randomBytes;
import { env } from '../../env';
import { submitServiceRequest } from './ShineModule/Service/getBranch.js';
export var formSupporModule = {
    data: {},
    formContainerId: '',
    token:'',
    init: function (data,token) {
        this.data = data;
        console.log("this is form data ",this.data);        
        this.token=token;
        this.formContainerId = randomBytes(8).toString('hex');

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
        this.clear();
        this.disableToggle(true);
        this.$formContainer = $(`<div></div>`);
        //this is for title
        let renderTextNode = Array.isArray(this.data.subtype) ? (this.data.subtype.length > 0) : this.data.subtype;
        if (renderTextNode) {
            let parentElem = this.$parent.find('.message-section').find('ul');
            let text = Array.isArray(this.data.subtype) ? this.data.subtype.join('<br>') : this.data.subtype;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p><li></li></li>`);
            node.appendTo(parentElem);
        }

        this.$formContainer.attr('id', this.formContainerId);
        this.$formContainer.css({
            "width": "90%", "padding": "17px", "background": "#D8F7FE", "position": "absolute",
            "width": "100%", "top": "60px", "z-index": "10000", "bottom": "0", "overflow": "scroll",
        });

        let $title = $('<h3></h3>');
        $title.attr('class', 'title');
        $title.css({
            "font-size": "20px",
            "font-weight": "bold",
            "text-align": "center",
            "margin": "-12px 0px 10px 0px"
        });
        $title.text(this.data.title);
        $title.appendTo(this.$formContainer);

        this.data.data.forEach(element => {
            let $formGroup = $('<div></div>');
            $formGroup.addClass('form-group');
            
            let $label = $('<label></label>');
            $label.attr('for', element.id);

            if (element.validation.required) {
                $label.addClass('required');
            }

            $label.text(element.label);
            $label.appendTo($formGroup);

            if (element.type === 'textarea') {
                let $input = $('<input>');
                $input = $('<textarea />');
                $input.attr('rows', 3);
                $input.attr('maxlength', 500);
                $input.css({ 'max-height': '150px', 'min-height': '100px' });
                $input.attr('type', element.type);
                $input.addClass('form-control');
                $input.attr('placeholder', element.placeholder);
                $input.attr('id', element.id);
               
                $input.appendTo($formGroup);
            }
            else if (element.type === 'dropdown') {
                let selected =element.BranchCode
                console.log("this is selected ",selected);
                let countryDropdowncontent = $(`<select class="mdb-select md-form" id=${element.id}></select>`).appendTo($formGroup);
                // $(`<option value=${element.value} disabled>${element.placeholder}</option>`).appendTo(countryDropdowncontent);
                element.data.forEach((elements) => {
                    var branchselect=''
                    if(selected === elements.code){
                        branchselect='selected'
                    }
                    $(`<option value="${elements.code}" + ${branchselect}>${elements.name}</option>`).appendTo(countryDropdowncontent);
                })
            }
            else {
                let disable= element.disabled ? true : false;
                let $input = $('<input>');
                $input.attr('type', element.type);
                $input.attr("disabled", disable);
                $input.addClass('form-control');
                $input.attr('placeholder', element.placeholder);
                $input.attr('value', element.value);
                $input.attr('id', element.id);
                $input.attr('autocomplete', "off");
                $input.appendTo($formGroup);
            }
            $formGroup.appendTo(this.$formContainer);
        });

        this.$btnContainer = $('<div id="btn-container"></div>');
        this.$btnContainer.css({ 'display': 'flex', "margin-top": "-14px", 'justify-content': 'space-between', 'position': 'relative' });

        this.data.buttons.data.forEach((button, index) => {
            let $button = $('<button></button><br>');
            $button.css({ 'cursor': 'pointer', "border-radius": "10px", "margin": "10px" ,"background-color":"#0088CE"});
            $button.addClass(`btn-${index}`);
            (index % 2 === 0) ? $button.addClass('btn') : $button.addClass('btn');
            $button.text(button.text);
            $button.click(() => {
                this.btnClick(button.type, this.data)
            });
            $button.appendTo(this.$btnContainer);
        });
        this.$btnContainer.appendTo(this.$formContainer);
        this.$formContainer.appendTo(this.$parent);
        $('.mdb-select').materialSelect;
    },
    bindEvents: function () {
        this.$btnContainer.find('button').on('click', this.btnClick.bind(this));
    },
    btnClick: function (type, data) {
        if (type === 'submit') {
          let formData = {};
            this.data.data.forEach(element => {
                formData[element.id] = $('#' + element.id).val();
            });
            let selected_value = $(`.mdb-select`).val();
            this.formleads(formData,selected_value,this.token)
        }
        if (type === 'cancel') {
            this.clear();
        }
    },

    formleads: function (data,code,token) {
        console.log("here data is hitting")
        this.validateForm()
        this.scrollBottom();
        let error = validation1Module.checkError();
        if (!error) {
            console.log("here is hiot data")
            submitServiceRequest.fetchSubmitServiceRequestForm(data,code,token)
            };
        
    },
    validateForm: function () {
        console.log("this is input data",this.data)
        validation1Module.init(this.data);
    },
    clear: function () {
        if (this.$formContainer) {
            this.$formContainer.remove();
        }
        this.disableToggle(false);
    },
    disableToggle: function (bool) {
        let $contactProfile = $('#contact-profile-module');
        let $button = $contactProfile.find('button');
        $button.attr('disabled', bool);
    }
}



