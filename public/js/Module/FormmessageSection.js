import { generalReplyModule } from './generalReplyModule';
import { LoadingModule } from '../general/loading';
import { ListItemModule } from './ListItemModule';
import { env } from '../../env';
import { cookie } from '../general/cookie';


// for policy purposed
import { detailPolicyDrawer } from '../detailPolicy/detailPolicyDrawer';
import { multipleTitle } from '../general/multipleTitleModule';

export var FormmessageSection = {

    data: {},

    dataAll: [],

    utterances: [],

    submitedData: [],

    i: 0,

    init: function (data) {
        this.data = data;
        this.postURL = this.data.post;
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
        this.$element = $('#contact-profile-module');
        this.$inputMsg = $('#message-input-module');
        this.$hideinput = $('#message-input-module .wrap');
        this.$hideinput_input = $('#message-input-module .wrap input');
        this.$frameContainer = $('#frame');
        this.$message = $('#message-module');
    },

    bindEvents: function () {
        let _this = this;
    },

    render: function () {
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
        this.visibleCaracter("hide");
        this.$hideinput_input.prop("disabled", true);
        this.$menuContainer = $(`<div id="FormMessageSection" class="MessageSection"></div>`);
        this.$messageSec = $(` <div class="message-section"></div>`).appendTo(this.$menuContainer);
        this.ul = $(`<ul style="list-style:none;margin-left: -24px;"></ul>`).appendTo(this.$messageSec);
        this.$menuContainer.appendTo(this.$frameContainer);
        if (this.data) {
            this.data.form.elements.forEach(element => {
                if (element.utterances) {
                    element.utterances.forEach((utterance, index) => {
                        this.utterances.push(utterance);
                    });
                }
                this.dataAll.push(element);
            });
        }
        this.RendertextNode(this.dataAll[this.i]);
    },

    RendertextNode: function (data) {
        if (data.hasOwnProperty('utterances')) {
            this.Renderutterances(data);
            this.scrollBottom();
        }
        if (data.hasOwnProperty('title')) {
            this.Rendertitle(data);
            this.scrollBottom();
        }
    },

    visibleCaracter: function (visible) {
        if (visible === "visible") {
            $('.initialForm').removeAttr("disabled");
            $('.LiveFormBtn').removeAttr("disabled");
            $('#outerDiv #context').css("visibility", "visible");
            $('#outerDiv').removeClass('without-after-element');
            $('.content .colorchooser').css("visibility", "visible");
            $('#autosuggest').html("");
            $('#autosuggest').css("visibility", "visible");
            this.$hideinput.css("visibility", "visible");
            this.$hideinput_input.removeAttr("disabled");
            $('.homehelp').removeAttr("disabled");
            $('.buttoncontainer').remove();
        }
        if (visible === "hide") {
            this.$hideinput.css("visibility", "hidden");
            $('.initialForm').prop("disabled", true);
            $('.LiveFormBtn').prop("disabled", true);
            $('.homehelp').prop("disabled", true);
            $('#autosuggest').html('');
            $('#outerDiv #context').css("visibility", "hidden");;
            $('#outerDiv').addClass('without-after-element');
            $('.content .colorchooser').css("visibility", "hidden");
            this.$hideinput_input.prop("disabled", true);
        }
    },

    multipartLeadsCapture: function (leads) {
        console.log(leads)
        let formdata = new FormData();

        Object.keys(leads).forEach(em => {
            formdata.append(em, leads[em]);
        })

        //let url = `${env.protocol}://${env.server}:${env.port}${this.postURL}`;
        let url=`${this.postURL}`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authentication': `${env.salt_key}`
            },
            body: formdata
        });


    },


    captureLeads: function (leads) {
        console.log(leads, "leads are")
        let id = cookie.getCookie('uniqueID');
        leads['visitorId']=id;
        if (this.data.hasOwnProperty("thirdparty")) {
            leads["thirdparty"] = this.data.thirdparty
        }
        // let url = `${env.protocol}://${env.server}:${env.port}${this.postURL}`;
        let url=`${this.postURL}`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `${env.salt_key}`
            },
            body: JSON.stringify(leads)
        });
    },

    FormSubmisson: function (lastitem) {
        let btnContainer = $(`<div class="buttoncontainer"></div>`).appendTo(this.$inputMsg);
        lastitem.button.forEach(buttons => {
            let button = $(`<input type="button" class="${buttons.type}" value="${buttons.submit}">`).appendTo(btnContainer);
            $(window).on('keydown', function (e) {
                if (e.keyCode === 13) {
                    button.trigger('click');
                }
            });
            button.click(function (event) {
                if (buttons.type == "submit") {
                    button.prop("disabled", true);
                    button.prop("value", "Please wait..");
                    LoadingModule.init('#FormMessageSection');
                    let leadcaptureData = this.submitedData;
                    const convertArrayToObject = (array, key) => {
                        const initialValue = {};
                        return array.reduce((obj, item) => {
                            return {
                                ...obj,
                                [item[key]]: item.data,
                            };
                        }, initialValue);
                    };
                    let formData = convertArrayToObject(leadcaptureData, "value");
                    formData.Mailcatagories = this.data.Mailcatagories;
                    formData.subject = this.data.emailsubject;
                    formData.emailTitle = this.data.emailTitle;

                    if (this.data.multipart === true) {
                        this.multipartLeadsCapture(formData).then(data => data.json()).then(data => {
                            console.log(data, "response data from ")
                            button.removeAttr("disabled");
                            button.attr("value", "Submit")
                            if (data.hasOwnProperty("context") | data.hasOwnProperty("data")) {
                                LoadingModule.init('#message-input-module');
                                generalReplyModule.init(` Dear ${data.data.name}, your request is received and we will get back to you soon ${this.data.hasOwnProperty("lastContactText")?this.data.lastContactText:""}. Thank you.`);
                            }
                            btnContainer.remove();
                            this.hideContainer();
                            LoadingModule.clear();
                            this.visibleCaracter("visible");
                        });
                        console.log("multipart form exist")
                    } else {
                        this.captureLeads(formData)
                            .then((data) => data.json())
                            .then(async (data) => {
                                button.removeAttr("disabled");
                                button.attr("value", "Submit")

                                if (data.status) {
                                    await LoadingModule.init('#message-input-module');
                                    let render = await multipleTitle.init({
                                        "type": "multiple-title",
                                        "title": [
                                            "Wait while we grind wheels to get the calculation right.",
                                            {
                                                "title": [
                                                    `Your Total Premium is: ${data.response_data.total}`
                                                ]
                                            },
                                            "Would you like to insure your vehicle? के तपाई आफ्नो गाडीको बीमा गर्न चाहानुहुन्छ?"
                                        ],
                                        button: {
                                            contents: this.data.form.hasOwnProperty("afterresult_buttons") ? this.data.form.afterresult_buttons : []
                                        }
                                    });
                                    setTimeout(() => {
                                        ListItemModule.clear();
                                        detailPolicyDrawer.init(data)
                                    }, 2000)

                                }

                                if (data.hasOwnProperty("context") || data.hasOwnProperty("attachments")) {
                                    LoadingModule.init('#message-input-module');
                                    generalReplyModule.init(`Dear ${data.context.name}, your request  is received and we will get back to you soon ${this.data.hasOwnProperty("lastContactText")?this.data.lastContactText:""}. Thank you.`);
                                }

                                if (data.status === false) {
                                    throw new Error()
                                }

                                btnContainer.remove();
                                this.hideContainer();
                                LoadingModule.clear();
                                this.visibleCaracter("visible");
                            }).catch((err) => {
                                console.log(err, "error")
                                btnContainer.remove();
                                LoadingModule.init('#message-input-module');
                                generalReplyModule.init(`Server error try again`);
                                this.hideContainer();
                                LoadingModule.clear();
                                this.visibleCaracter("visible");
                            });
                    }


                } else if (buttons.type == "cancel") {
                    LoadingModule.init('#message-input-module');
                    generalReplyModule.init(`${this.data.exitMSG}`);
                    this.visibleCaracter("visible");
                    this.hideContainer();
                    LoadingModule.clear();
                }
                event.preventDefault();
                this.dataAll = [];

            }.bind(this));
        })
    },

    Renderutterances: function (d2) {
        setTimeout(() => {
            d2.utterances.forEach((element, index) => {
                $(`<li class='sent'><img src="${env.Orgimg}" alt="" /><p>${element.message}</p></li>`).appendTo(this.ul)
                this.scrollBottom();
            })
        }, 1000);
    },

    RenderSend: function (d3) {
        $(`<li class='replies'><p>${d3.title}</p></li>`).appendTo(this.ul);
    },
    Rendertitle: function (d1) {
        setTimeout(() => {
            $(`<li class='sent'><img src="${env.Orgimg}" alt="" /><p>${d1.title}</p></li>`).appendTo(this.ul);
            //check if type is textbox or not
            if (d1.type == 'textbox') {
                let inputdiv = $(`<div class="wrap1"></div>`).appendTo(this.$inputMsg);
                let crossbtn = $(`<button id="context12" title="Cancel" data-toggle="tooltip">
                        <img src="images/banner/dynamiccancel.png" alt="cancel">
                    </button>`).appendTo(inputdiv);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    return false;
                })
                let inputtext = $(`<input type="${d1.order}" placeholder="${d1.placeholder}" autocomplete="off">`).appendTo(inputdiv);
                let btn = $(` <button class="submit">
                    <i class="fa fa-paper-plane" aria-hidden="true" style="color: #063684;"></i>
                    </button>`).appendTo(inputdiv);


                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });
                btn.click(function () {
                    let data1 = inputtext.val();
                    let type = d1.validation.type;
                    //for name validation

                    if (type == 'name') {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Field should not be empty`);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });
                        if (!isNaN(data1)) {
                            this.Rendertitle({ title: d1.validation.error });
                            return false;
                        }
                        let lebel = d1.label;
                        let label = {};
                        // label[lebel] = data1;
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }
                    //for mobile validation
                    if (type == 'mobile') {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Mobile Number should not be empty`);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });
                        if (data1.length <= 9 || data1.length > 10 || isNaN(data1)) {
                            this.Rendertitle({ title: d1.validation.error });
                            return false;
                        }
                        let lebel = d1.label;
                        let label = {};
                        label["data"] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }

                    //for agent number validation
                    if (type == 'PolicyNumber') {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Policy Number should not be empty`);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });
                        let regex = /^\d{10}$/;
                        var validagent = regex.test(data1);
                        if (!validagent) {
                            this.Rendertitle({ title: d1.validation.error });
                            return false;
                        }
                        let lebel = d1.label;
                        let label = {};
                        // label[lebel] = data1;
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }



                    //for downline number validation
                    if (type == 'Downline') {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Downline number should not be empty`);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });
                        let lebel = d1.label;
                        let label = {};
                        // label[lebel] = data1;
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }

                    //for agentcode
                    if (type == 'AgentCode') {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Agent Code should not be empty`);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });
                        let regex = /^\d{8}$/;
                        var validagent = regex.test(data1);
                        if (!validagent) {
                            this.Rendertitle({ title: d1.validation.error });
                            return false;
                        }
                        let lebel = d1.label;
                        let label = {};
                        // label[lebel] = data1;
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }

                    //for Email validation
                    if (type == 'email') {
                        inputtext.removeClass('error1');
                        if (data1 === "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', `Email should not be empty`);
                            return false;
                        }
                        let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                        var validEmail = regex.test(data1);
                        if (!validEmail) {
                            this.Rendertitle({ title: d1.validation.error });
                            return false;
                        }


                        let lebel = d1.label;
                        let label = {};
                        // label[lebel] = data1;
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RenderSend({
                            title: data1
                        });
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }

                }.bind(this))
            }


            //check type is submitbutton or not
            else if (d1.type == 'submitbutton') {
                this.FormSubmisson(d1);
            }



            else if (d1.type === "uploadFile") {
                let div = $(`<div class="input-group d-inline-block formDateSupport"></div>`);
                let crossbtn = $(`<button id="context1234" title="Cancel" data-toggle="tooltip">
                <img src="images/banner/dynamiccancel.png" alt="cancel">
                 </button>`).appendTo(div);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    div.remove();
                    return false;
                });
                const multiform = $(`<div class="multipart1"></div>`).appendTo(div);
                multiform.css({ "padding": "10px" });
                //input type only zip
                const input = $(`<input type="file" accept=".zip"/>`);

                d1.multifile.forEach((file, index) => {
                    input.attr("id", file.id)
                    input.css({ "font-size": "11px" })
                    input.appendTo(multiform);
                    input.on("change", function (e) {
                        e.preventDefault();
                        const filesval = input.prop('files')[0]
                        
                    })
                });

                let btn = $(` <button type="button" class="btn btn-outline-secondary">
                <i class="fa fa-paper-plane" aria-hidden="true" style="color: #121cbe;"></i></button>`).appendTo(div);
                div.appendTo(this.$inputMsg);
                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });
                btn.click(function () {
                    let p = input.prop('files').length;
                    if (p === "" || p === null || p < 1) {
                        this.Rendertitle({ title: d1.validation.error });
                        return false;
                    }
                    console.log(input.prop('files'));
                    // zip file validation updated
                    if (input.prop('files')[0].type!="application/x-zip-compressed")
                    {
                         this.Rendertitle({ title: 'Please upload file in Zip format .' });
                        return false;
                    }
                        
                    this.submitedData.push({
                        "data": input.prop('files')[0],
                        "value": "uploadFile"
                    });
                    this.RenderSend({
                        title: "File Selected"
                    });
                    this.RendertextNode(this.dataAll[this.i + 1]);
                    this.i += 1;
                    this.scrollBottom();
                    div.remove();
                }.bind(this));
            }



            //for buttons
            else if (d1.type === 'countnumber') {
                let inputdiv = $(`<div class="wrap1"></div>`).appendTo(this.$inputMsg);
                let crossbtn = $(`<button id="context12" title="Cancel" data-toggle="tooltip">
                        <img src="images/banner/dynamiccancel.png" alt="cancel">
                    </button>`).appendTo(inputdiv);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    return false;
                })
                let inputtext = $(`<input type="${d1.order}" placeholder="${d1.placeholder}" autocomplete="off">`).appendTo(inputdiv);
                let btn = $(` <button class="submit">
                    <i class="fa fa-paper-plane" aria-hidden="true" style="color: #121cbe;"></i>
                    </button>`).appendTo(inputdiv);

                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });


                btn.click(function () {
                    let data1 = inputtext.val();
                    if (d1.hasOwnProperty("validation")) {
                        inputtext.removeClass('error1');
                        if (data1 == "exit") {
                            this.exitcontainer(this.data);
                            this.visibleCaracter("visible");
                            return false;
                        }
                        if (data1 === "") {
                            inputtext.addClass('error1');
                            inputtext.attr('placeholder', '');
                            inputtext.attr('placeholder', d1.validation.error);
                            return false;
                        }
                        this.RenderSend({
                            title: data1
                        });

                        if (d1.validation.validation) {
                            let regex = new RegExp(d1.validation.validrejex);
                            console.log(regex, "rejex expression")
                            var validagent = regex.test(data1);
                            if (!validagent) {
                                this.Rendertitle({ title: d1.validation.error });
                                return false;
                            }
                        }

                        let lebel = d1.label;
                        let label = {};
                        label['data'] = data1;
                        label["value"] = lebel;
                        this.submitedData.push(label);
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        inputdiv.remove();
                        this.scrollBottom();
                    }

                }.bind(this))

            }


            //for buttons
            else if (d1.type === 'button' && d1.hasOwnProperty("button")) {

                //same for all type if u need change this u can make one and call one function
                let div = $(`<div class="input-group d-inline-block formDateSupport"></div>`)
                let crossbtn = $(`<button id="context1234" title="Cancel" data-toggle="tooltip">
            <img src="images/banner/dynamiccancel.png" alt="cancel">
             </button>`).appendTo(div);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    div.remove();
                    return false;
                })
                div.appendTo(this.$inputMsg);

                let buttoncontainer = $(`<div class="buttonconatainer"></div>`);
                buttoncontainer.css({
                    "display": "flex",
                    "justify-content": "center",
                    "margin": "auto",
                    "width": "80%",
                    "row-gap": "8px",
                    "flex-wrap": "wrap"
                })
                d1.button.forEach((btn, index) => {
                    let button = $(`<button type="button" class="btn">${btn.title}</button>`);
                    button.appendTo(buttoncontainer);
                    button.css({
                        "font-size": "13px",
                        "padding": "5px 10px",
                        "background": "rgb(6 54 132)",
                        "border-radius": "15px",
                        "color": "#ffffff"
                    })
                    button.on('click', function (event) {
                        event.preventDefault();
                        this.submitedData.push({
                            "data": btn.payload,
                            "value": d1.label
                        });
                        this.RenderSend({
                            title: btn.title
                        });
                        this.RendertextNode(this.dataAll[this.i + 1]);
                        this.i += 1;
                        this.scrollBottom();
                        buttoncontainer.remove()
                        div.remove();
                    }.bind(this))
                })
                buttoncontainer.appendTo(this.$messageSec);
            }



            //for rating
            else if (d1.type == 'rating') {
                let ratingcontainer = $(`<div class='rating-stars text-center'></div>`);
                let ratingul = $(`<ul id='stars'><ul>`).appendTo(ratingcontainer);
                d1.ratingvalue.forEach(element => {
                    $(`<li class='star' title='${element.msg}' data-value='${element.data_value}'><i class='fa fa-star fa-fw'></i>
                     </li>`).appendTo(ratingul);
                })
                ratingcontainer.appendTo(this.$inputMsg);
                let btn = $(`<button type="button" class="btn btn-info" id="ratinglevelinput" value="Not intrested">value</button>`).appendTo(ratingul);
                $('#stars li').on('mouseover', function () {
                    let onStar = parseInt($(this).data('value'), 10);
                    $(this).parent().children('li.star').each(function (e) {
                        if (e < onStar) {
                            $(this).addClass('hover');
                        }
                        else {
                            $(this).removeClass('hover');
                        }
                    });

                }).on('mouseout', function () {
                    $(this).parent().children('li.star').each(function (e) {
                        $(this).removeClass('hover');
                    });
                });

                $('#stars li').on('click', function () {
                    var onStar = parseInt($(this).data('value'), 10);
                    var stars = $(this).parent().children('li.star');
                    let i;
                    for (i = 0; i < stars.length; i++) {
                        $(stars[i]).removeClass('selected');
                    }
                    for (i = 0; i < onStar; i++) {
                        $(stars[i]).addClass('selected');
                    }
                    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
                    var msg = "";
                    var emoji = ''
                    if (ratingValue == 1) {
                        msg = d1.ratingvalue[0].msg;
                        emoji = d1.ratingvalue[0].emoji;
                    }
                    if (ratingValue == 2) {
                        msg = d1.ratingvalue[1].msg;
                        emoji = d1.ratingvalue[1].emoji;
                    }
                    if (ratingValue == 3) {
                        msg = d1.ratingvalue[2].msg;
                        emoji = d1.ratingvalue[2].emoji;
                    }
                    if (ratingValue == 4) {
                        msg = d1.ratingvalue[3].msg;
                        emoji = d1.ratingvalue[3].emoji;
                    }
                    if (ratingValue == 5) {
                        msg = d1.ratingvalue[4].msg;
                        emoji = d1.ratingvalue[4].emoji;
                    }

                    responseMessage(msg);
                    function responseMessage(msg) {
                        $('#ratinglevelinput').html(`${emoji} ${msg}`);
                        $('#ratinglevelinput').attr('value', msg);
                    }
                });

                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });
                btn.click(function () {
                    let a = btn.attr('value');
                    let lebel = d1.label;
                    let label = {};
                    // label[lebel] = a;
                    label['data'] = a;
                    label["value"] = lebel;
                    this.submitedData.push(label);
                    this.RenderSend({
                        title: a
                    });
                    this.RendertextNode(this.dataAll[this.i + 1]);
                    this.i += 1;
                    this.scrollBottom();
                    ratingcontainer.remove();
                }.bind(this));

            }

            //check type is date or not
            else if (d1.type == 'date' || d1.type == 'FromDate' || d1.type == 'ToDate') {
                // inputtext.removeClass('error1');
                let container = $(`<div class="input-group d-inline-block formDateSupport"></div>`);
                let crossbtn = $(`<button id="context123" title="Cancel" data-toggle="tooltip">
                <img src="images/banner/dynamiccancel.png" alt="cancel">
                 </button>`).appendTo(container);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    container.remove();
                    return false;
                })
                let inputtime = $(`<input type="text" name="formdate2" style="padding: 10px;text-align: center;" class="mobiscroll" placeholder="${d1.placeholder}"></input>`).appendTo(container);
                let btn = $(` <button type="button" class="btn btn-outline-secondary">
                       <i class="fa fa-paper-plane" aria-hidden="true" style="color: #121cbe;"></i></button>`).appendTo(container);
                setTimeout((function () {
                    inputtime.scroller({
                        theme: 'ios',
                        preset: 'date'
                    });
                }), 0);
                container.appendTo(this.$inputMsg);
                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });
                btn.click(function () {
                    let p = inputtime.val();
                    if (p === "") {
                        // inputtext.addClass('error1');
                        inputtime.attr('placeholder', '');
                        inputtime.attr('placeholder', `please choose spesific date`);
                        return false;
                    }
                    this.submitedData.push({
                        "data": p,
                        "value": d1.label
                    });
                    this.RenderSend({
                        title: p
                    });
                    this.RendertextNode(this.dataAll[this.i + 1]);
                    this.i += 1;
                    this.scrollBottom();
                    container.remove();
                }.bind(this));
            }

            else if (d1.type === "select") {
                let div = $(`<div class="input-group d-inline-block formDateSupport"></div>`)
                let crossbtn = $(`<button id="context1234" title="Cancel" data-toggle="tooltip">
                <img src="images/banner/dynamiccancel.png" alt="cancel">
                 </button>`).appendTo(div);
                crossbtn.click(() => {
                    this.exitcontainer(this.data);
                    this.visibleCaracter("visible");
                    div.remove();
                    return false;
                })
                let countryDropdowncontent = $(`<select class="mdb-select md-form"></select>`).appendTo(div);
                $(`<option value="${d1.placeholder}" disabled selected>${d1.placeholder}</option>`).appendTo(countryDropdowncontent);
                d1.selectvalue.forEach((elements) => {
                    $(`<option value="${elements}">${elements}</option>`).appendTo(countryDropdowncontent);
                })
                let btn = $(` <button type="button" class="btn btn-outline-secondary">
                 <i class="fa fa-paper-plane" aria-hidden="true" style="color: #121cbe;"></i></button>`).appendTo(div);
                div.appendTo(this.$inputMsg);
                $(window).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        btn.trigger('click');
                    }
                });
                btn.click(function () {
                    let p = countryDropdowncontent.val();
                    if (p === "" || p === null || p === d1.placeholder) {
                        // inputtext.addClass('error1');
                        countryDropdowncontent.attr('placeholder', '');
                        countryDropdowncontent.attr('placeholder', `please choose spesific one`);
                        return false;
                    }
                    this.submitedData.push({
                        "data": p,
                        "value": "ModeType"
                    });
                    this.RenderSend({
                        title: p
                    });
                    this.RendertextNode(this.dataAll[this.i + 1]);
                    this.i += 1;
                    this.scrollBottom();
                    div.remove();
                }.bind(this));

            }




            this.scrollBottom();
        }, 1700);
    },
    scrollBottom: function () {
        $("#FormMessageSection").animate({
            scrollTop: $('#FormMessageSection .message-section')[0].scrollHeight
        }, "fast");
    },

    exitcontainer: function (data) {
        $('#frame .content .message-input .wrap1').remove();
        this.hideContainer();
        LoadingModule.init('#message-input-module');
        generalReplyModule.init(data.exitMSG);
        LoadingModule.clear();
    },

    hideContainer: function () {
        this.dataAll = [];
        this.i = 0;
        this.data = {};
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
    }
}