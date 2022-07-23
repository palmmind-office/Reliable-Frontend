import { env } from "../../../../../env";
import { socketModule } from "../../../../core/socket";
import { crnService, mobileBankingServices } from "./mobileBankingServices";
import { mobileBankingValidation } from "./mobileBankingValidation";

export var Mobilebanking = {
    data: '',
    description: '',
    charge: '',
    value: {},
    dropdownData:'',
    init:function (data, value) {
        this.data = data;
        this.value = value;
        console.log("this is value", this.value)
        this.cacheDOM()
        this.render()

    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    cacheDOM: function () {
        this.$message = $('#message-module')
    },
    render: function () {
        this.$container = $('<div class="container col-10 pb-2 mb-3 shadow-lg" id="mobile_container"></div>');
        this.$sub_container = $('<div class=""></div>');
        this.$sub_container.css({ "background-color": "#0088CE", "margin-left": "-15px", "margin-right": "-16px" })
        this.$heading = $('<h5 class="text-white p-3 text-center">' + this.data.title + '</h5>');
        this.$heading.appendTo(this.$sub_container);


        this.$form_Group = $('<form></form>');

        this.data.CRN.map(element => {
            this.$body = $('<div class="form-group"></div>');
            this.$label = $('<label class="pl-2 font_size">' + element.label + '</label>');
            this.$label.appendTo(this.$body);
            this.inputfield = $('<input class="form-control shadow-none" autocomplete="off"></input>');
            this.inputfield.attr('id', element.id);
            this.inputfield.attr('type', element.type);

            if (element.id === 'account_name') {
                this.$label.addClass('required')
                this.inputfield.attr('value', this.value.accountName)
            }
            if (element.id === 'mob_email') {
                this.$label.addClass('required')
                this.inputfield.attr('value', this.value.email)
            }
            if (element.id === 'address') {
                this.inputfield.attr('value', this.value.address)
            }
            this.inputfield.appendTo(this.$body);
            this.$body.appendTo(this.$form_Group);
        })

        this.$body_e_type = $('<div class="form-group"></div>');
        this.$label_e_type = $('<label class="pl-2 font_size required ">' + this.data.e_type.label + '</label>');
        this.$label_e_type.appendTo(this.$body_e_type);
        // here startring of the slect option
        this.e_type_select = $('<select class="form-control shadow-none" id="' + this.data.e_type.id + '"></select>');
        // here starting of the response of the select option
        this.dropdownData.e_type.map(element => {
            this.description = element.description
            this.charge = element.tarif
            this.options = $('<option value="' + element.id + '">' + element.title + '</option>');
            this.options.appendTo(this.e_type_select);
        })
        this.e_type_select.appendTo(this.$body_e_type);
        this.$body_e_type.appendTo(this.$form_Group);

        // here starting of the type
        this.$body_type = $('<div class="form-group"></div>');
        this.$label_type = $('<label class="pl-2 font_size required">' + this.data.CRN_type.label + '</label>');
        this.$label_type.appendTo(this.$body_type);
        // here startring of the slect option
        this.type_select = $('<select class="form-control shadow-none" id="' + this.data.CRN_type.id + '"></select>');
        // here starting of the response of the select option
        this.dropdownData.type.map(el => {
            this.type_options = $('<option>' + el + '</option>');
            this.type_options.appendTo(this.type_select);

        })
        this.type_select.appendTo(this.$body_type);
        this.$body_type.appendTo(this.$form_Group);

        // here starting of the branch
        this.$branch = $('<div class="form-group"></div>');
        this.$label_branch = $('<label class="pl-2 font_size required">' + this.data.Branch.label + '</label>');
        this.$label_branch.appendTo(this.$branch);
        // here startring of the slect option
        this.branch_select = $('<select class="form-control shadow-none" id="' + this.data.Branch.id + '"></select>');
        // here starting of the response of the select option
        this.dropdownData.branch.map(elem => {
            var branchSelected = '';
            if (elem.code == this.value.branchcode) {
                branchSelected = 'selected';
            }
            this.branch_options = $('<option value="' + elem.code + '" ' + branchSelected + '>' + elem.title + '</option>');
            this.branch_options.appendTo(this.branch_select);
        })
        this.branch_select.appendTo(this.$branch);
        this.$branch.appendTo(this.$form_Group);

        // here starrting of the DPID
        this.data.subData.map(elem => {
            this.$DPID = $('<div class="form-group"></div>');
            this.$label_DPID = $('<label class="pl-2 font_size required">' + elem.label + '</label>');
            this.$label_DPID.appendTo(this.$DPID);
            if (elem.type === 'text') {
                this.$input = $('<input class="form-control shadow-none" type="' + elem.type + '" id="' + elem.id + '" autocomplete="off"></input>');
                this.$input.appendTo(this.$DPID);
            }
            if (elem.type === 'textarea') {
                this.$label_DPID.removeClass('required')
                this.$input_textarea = $('<textarea class="form-control shadow-none" type="' + elem.type + '" id="' + elem.id + '"></textarea>');
                this.$input_textarea.text(`${this.description}`)
                this.$input_textarea.attr('rows', '1');
                this.$input_textarea.appendTo(this.$DPID);
            }
            if (elem.id === 'charge_fee') {
                this.$input.attr('value', this.charge)
            }
            if (elem.type === 'file') {
                this.$input_file = $('<input class="form-control shadow-none" accept="image/*" id="' + elem.id + '" type="' + elem.type + '" autocomplete="off">');
                this.$input_file.appendTo(this.$DPID);
            }
            this.$DPID.appendTo(this.$form_Group);

        })

        // here starting of the submit button
        this.$submit = $('<div class="d-flex"></div>');
        this.data.button.map(el => {
            this.$form_button = $('<button class="btn font_size bg_color shadow-none" type="' + el.type + '">' + el.name + '</button>');
            this.$form_button.appendTo(this.$submit);

            //  for button subbmit data
            this.$form_button.on('click', (e) => {
                e.preventDefault();
                if (el.type === 'submit') {
                    this.leadCaptures();
                }
                if (el.type === 'cancel') {
                    let payload = el.payload
                    socketModule.messageSend(payload)
                }
            })
        })
        this.$submit.appendTo(this.$form_Group);



        this.$sub_container.appendTo(this.$container);
        this.$form_Group.appendTo(this.$container);
        this.$container.appendTo(this.$message);

    },
    getData:function (datas) {
        this.dropdownData = datas
        console.log("this.dropdownData", this.dropdownData)
    },
    leadCaptures: function () {
        this.validation()
        this.values = []
        this.info = []
        this.input_file =''
        let fdata= new FormData()
        let input_file = document.querySelector('input[type="file"]');
        fdata.append('attachment',input_file.files[0])
        console.log("this is selected file ",fdata)
        let error = mobileBankingValidation.checkError()
        if (!error) {
            this.data.CRN.map(element => {
                this.values[element.id] = $('#' + element.id).val()
            })
            let val = $('#' + this.data.e_type.id).val()
            let type = $('#' + this.data.CRN_type.id ).val()
            let branch = $('#' + this.data.Branch.id).val()
            
            this.data.subData.map(elem => {
                this.info[elem.id] = $('#' + elem.id).val()
            })
            // create a form data object to send data to server
            fdata.append('account_name',this.values['account_name'])
            fdata.append('account_number',this.value['account_num'])
            fdata.append('mobile',this.value['mobile'])
            fdata.append('branch_code',branch)
            fdata.append('etype',val)
            fdata.append('type',type)
            fdata.append('fee',this.info['charge_fee'])
            fdata.append('e_email',this.values['mob_email'])
            fdata.append('dpid',this.info['dpid'])
        this.crnRequest(fdata)
        }
    },
    validation: function () {
        mobileBankingValidation.init(this.data)
    },
    crnRequest: function (data) {
        console.log("this is form data ",data)
        crnService.CRNService(data)
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    }

}